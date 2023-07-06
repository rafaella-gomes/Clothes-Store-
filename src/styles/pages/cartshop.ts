import { styled } from "..";
import * as Dialog from "@radix-ui/react-dialog";

export const CartContent = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  width: "30rem",
  background: "$gray800",
  padding: "3rem",
  paddingTop: "4.5rem",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  display: "flex",
  flexDirection: "column",

  strong: {
    fontWeight: "bold",
    fontSize: "$lg",
    color: "$gray100",
    marginBottom: "2rem",
  },
});

export const CartClose = styled(Dialog.Close, {
  background: "none",
  border: "none",
  color: "$gray500",
  position: "absolute",
  top: "1.75rem",
  right: "1.75rem",
});

export const CartProduct = styled("div", {
  width: "100%",
  display: "flex",
  gap: "1.25rem",
  alignItems: "center",
  height: "5.815rem",
  marginBottom: "2.5rem",
});

export const CartProductImage = styled("div", {
  width: "6.312rem",
  height: "5.815rem",
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%);",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 8,

  img: {
    objectFit: "cover",
  },
});

export const CartProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100%",

  span: {
    fontSize: "$md",
    color: "$gray300",
  },

  strong: {
    marginTop: 4,
    fontSize: "$md",
    color: "$gray100",
  },

  button: {
    marginTop: "auto",
    border: "none",
    width: "max-content",
    backgroundColor: "transparent",
    textDecoration: "none",
    cursor: "pointer",
    color: "$green500",
    fontSize: "$s",
    fontWeight: "bold",

    "	&:hover": {
      color: "$green300",
    },
  },
});

export const CartQuantity = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "auto ",

  button: {
    width: "100%",
    background: "$green500",
    color: "$white",
    fontSize: "$md",
    height: "4.3125rem",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",

    "&:disabled)": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "	&:not(:disabled):hover": {
      backgroundColor: "$green300",
    },
  },
});

export const CartQuantityDetails = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  marginBottom: 55,

  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    p: {
      fontSize: "$md",
      color: "$gray300",
    },

    "&:last-child": {
      fontWeight: "bold",

      span: {
        fontSize: "$md",
      },
      p: {
        fontSize: "$xl",
        color: "$gray100",
      },
    },
  },
});
