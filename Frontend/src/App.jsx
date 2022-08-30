import { MapView } from "./components/mapview.jsx";
import "./App.css";
import { Inputs } from "./components/inputs.jsx";
import { JornadaProvider } from "./context/Jornada.jsx";

function App() {
   return (
      <JornadaProvider>
         <Inputs />
         <MapView central={[38.992755472122806, -77.20152818880148]} />
      </JornadaProvider>
   );
}

export default App;
