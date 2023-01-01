import { FC } from "react";

import { Outlet, useNavigation } from "react-router-dom";

export const RootLayout: FC = () => {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && <div>Loading</div>}
      <header>
        <h1>
          Template Vite <abbr>SPA</abbr>
        </h1>
      </header>

      <Outlet />

      <footer>
        <p>&copy; YOUR_NAME</p>
      </footer>
    </>
  );
};
