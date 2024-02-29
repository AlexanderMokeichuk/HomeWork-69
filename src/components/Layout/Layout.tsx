import React from "react";
import Header from "../Header/Header";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div className={"min-vh-100 d-flex flex-column"}>
      <Header />
      <main>
        <div className={"container"}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;