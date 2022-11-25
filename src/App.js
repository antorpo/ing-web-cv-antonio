import {
  NavBar,
  Home,
  About,
  Portfolio,
  Experience,
  Contact,
  Social,
  Footer,
} from "./components";
import { JsonInfo } from "./assets/json";

export const App = () => {
  const { developer, links } = JsonInfo;

  return (
    <>
      <NavBar
        logo={developer.logo}
        username={developer.username}
        links={links}
      />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <Social />
      <Footer
        year={new Date().getFullYear()}
        email={developer.email}
        username={developer.username}
      />
    </>
  );
};
