import { NavBar } from "./components/NavBar";
import { JsonInfo } from "./assets/json";

function App() {
  const { developer, links } = JsonInfo;

  return (
    <div>
      <h1 className="text-4xl font-bold font-signature">ANTONIO</h1>
      <NavBar developer={developer} links={links} />
    </div>
  );
}

export default App;
