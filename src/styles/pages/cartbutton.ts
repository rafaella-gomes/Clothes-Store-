import { styled } from "..";

export const CartButtonContainer = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: 6,
  position: "relative",

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
  background: "$gray800",
  color: "$gray500",

  width: "3rem",
  height: "3rem",

  svg: {
    fontSize: 24,
  },

  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.8rem",
    position: "absolute",
    right: "-0.4375rem",
    top: "-0.4375rem",
    width: "1.5rem",
    height: "1.5rem",
    backgroundColor: "$green300",
    borderRadius: "1000px",
    border: "3px solid $gray900",
    zIndex: "0",

    color: "$white",
    fontWeight: "bold",
    fontSize: "0.8rem",
  },
});
