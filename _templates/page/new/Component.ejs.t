---
to: src/pages/<%= h.changeCase.pascalCase(name) %>Page/<%= h.changeCase.pascalCase(name) %>Page.tsx
---
<%
  Name = h.changeCase.pascalCase(name)
-%>
import { FC } from "react";

export const <%= Name %>Page: FC = () => {
  return (
    <main>example</main>
  );
};


