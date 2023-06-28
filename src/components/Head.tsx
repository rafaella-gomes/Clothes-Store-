import Image from "next/image";
import CartShop from "./cartshop";
import Link from "next/link";
import { Header } from "../styles/pages/head";

export function Head() {
  return (
    <Header>
      <Link href={`/`}>
        <Image src="/assets/Logo.svg" width="130" height="52" alt="" />
      </Link>
      <CartShop />
    </Header>
  );
}
