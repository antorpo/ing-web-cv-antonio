import { HomePage } from "./pages";
import { JsonInfo } from "./assets/json";

const { developer, links } = JsonInfo;
export const App = () => <HomePage developer={developer} links={links} />;
