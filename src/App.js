import {
  NavBar,
  Home,
  About,
  Portfolio,
  Experience,
  Contact,
  Social,
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
    </>
  );
};
