---
to: src/pages/<%= h.changeCase.pascalCase(name) %>Page/index.tsx
---
<%
  Name = h.changeCase.pascalCase(name)
-%>
import { <%= Name %>Page } from "./<%= Name %>Page";

export default <%= Name %>Page;
