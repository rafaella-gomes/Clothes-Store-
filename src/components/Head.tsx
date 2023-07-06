import Image from "next/image";
import CartShop from "./cartshop";
import Link from "next/link";
import { Header } from "../styles/pages/head";
import { useRouter } from "next/router";

export function Head() {
  const { pathname } = useRouter();

  const showCartButton = pathname !== "/success";
  return (
    <Header>
      <Link href={`/`}>
        <Image src="/assets/Logo.svg" width="130" height="52" alt="" />
      </Link>
      {showCartButton && <CartShop />}
    </Header>
  );
}
