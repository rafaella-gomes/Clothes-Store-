import {
  CartClose,
  CartContainer,
  CartContent,
  CartProduct,
  CartQuantity,
  CartProductImage,
  CartProductDetails,
} from "../styles/pages/cartshop";
import { CartButton } from "./CartButton";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useContext, useState } from "react";
import axios from "axios";
import { CartContext, IProduct } from "../contexts/CartContext";
import { X } from "phosphor-react";

export default function CartShop() {
  const { cartItems, removeItemFromCart, totalCartPrice } =
    useContext(CartContext);

  const cartItemsQuantity = cartItems.length;

  const totalCartPriceCorrected = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalCartPrice);

  const [isCreatingCheckoutsession, setIsCreatingCheckoutsession] =
    useState(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutsession(true);
      const response = await axios.post("/api/checkout", {
        products: cartItems,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutsession(false);
      alert("Falha ao redirecionar ao checkout");
    }
  }

  function handleRemoveItemFromCart(productId: string) {
    removeItemFromCart(productId);
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>
      <Dialog.Portal>
        <CartContainer>
          <CartContent>
            <CartClose>
              <X size={24} weight="bold" />
            </CartClose>
            <strong>Sacola de Compras</strong>
            <section>
              <CartProduct>
                {cartItemsQuantity <= 0 && (
                  <p>Parece que seu carrinho está vazio</p>
                )}
                {cartItems.map((item) => (
                  <>
                    <CartProductImage key={item.id}>
                      <Image
                        src={item.imageUrl}
                        width={100}
                        height={93}
                        alt=""
                      />
                    </CartProductImage>
                    <CartProductDetails>
                      <span>{item.name}</span>
                      <strong>{item.price}</strong>
                      <button onClick={() => handleRemoveItemFromCart(item.id)}>
                        Remover
                      </button>
                    </CartProductDetails>
                  </>
                ))}
              </CartProduct>
            </section>
            <CartQuantity>
              <div>
                <span>Quantidade</span>
                <span>
                  {cartItemsQuantity}{" "}
                  {cartItemsQuantity === 1 ? "item" : "itens"}{" "}
                </span>
              </div>
              <div>
                <strong>Valor total</strong>
                <strong>{totalCartPriceCorrected}</strong>
              </div>
              <button
                disabled={isCreatingCheckoutsession || cartItemsQuantity <= 0}
                onClick={handleBuyProduct}>
                Finalizar Compra
              </button>
            </CartQuantity>
          </CartContent>
        </CartContainer>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
