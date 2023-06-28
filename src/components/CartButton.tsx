import { Handbag } from "phosphor-react";
import { CartButtonContainer } from "../styles/pages/cartbutton";
import { ComponentProps, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

type CartButtonProps = ComponentProps<typeof CartButtonContainer>;

export function CartButton({ ...rest }: CartButtonProps) {
  const { cartItems } = useContext(CartContext);

  const cartItemsQuantity = cartItems.length;
  return (
    <CartButtonContainer {...rest}>
      <Handbag weight="bold" />
      <div>{cartItemsQuantity}</div>
    </CartButtonContainer>
  );
}
