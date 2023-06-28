import { CartContext, IProduct } from "@/src/contexts/CartContext";
import { stripe } from "@/src/lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/src/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import Stripe from "stripe";

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  const { addItemToCart, checkIfItemExistsInCart } = useContext(CartContext);

  function handleAddItemToCart() {
    addItemToCart(product);
  }

  const itemAlreadyExistsInCart = checkIfItemExistsInCart(product.id);

  return (
    <>
      <Head>
        {" "}
        <title> {product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            disabled={itemAlreadyExistsInCart}
            onClick={handleAddItemToCart}>
            {itemAlreadyExistsInCart
              ? "Produto já está na sacola"
              : "Colocar na sacola"}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_Nmvrsn2IQxPJth" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  console.log(params);
  if (!params) throw new Error("No Params");
  const productId = params?.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });
  const loadingMessage = "Carregando informações ";
  const price = product.default_price as Stripe.Price;
  const unitAmount = price.unit_amount;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price:
          typeof unitAmount === "number"
            ? new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(unitAmount / 100)
            : unitAmount,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1,
  };
};
