import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from "react";

type Props = Readonly<
  PropsWithChildren<Omit<ComponentPropsWithoutRef<"button">, "className">>
>;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <button ref={ref} {...props} />;
});
Button.displayName = "Button";
