import React from "react";
import { NavBar, Footer } from "../../components";

export const MainLayout = ({ developer, links, children }) => {
  return (
    <>
      <NavBar
        logo={developer.logo}
        username={developer.username}
        links={links}
      />
      {children}
      <Footer
        year={new Date().getFullYear()}
        email={developer.email}
        username={developer.username}
      />
    </>
  );
};
