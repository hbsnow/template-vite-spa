---
to: src/components/<%= h.changeCase.pascalCase(name) %>/index.tsx
---
<%
  Name = h.changeCase.pascalCase(name)
-%>
import { <%= Name %> } from "./<%= Name %>";

export { <%= Name %> };
