---
to: src/components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.tsx
---
<%
  Name = h.changeCase.pascalCase(name)
-%>
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<unknown>

export const <%= Name %>: FC<Props> = (props) => {
  const { children } = props;

  return <>{children}</>;
};
