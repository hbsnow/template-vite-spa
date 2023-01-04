---
to: src/cores/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.tsx
---
<%
  Name = h.changeCase.pascalCase(name)
-%>
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from "react";

type Props = Readonly<
  PropsWithChildren<Omit<ComponentPropsWithoutRef<"div">, "className">>
>;

export const <%= Name %> = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <div ref={ref} {...props} />;
});
<%= Name %>.displayName = "<%= Name %>";

