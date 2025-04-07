import { useState } from "react";
import LicenseForm from "./components/LicenseForm";
import LicenseOutput from "./components/LicenseOutput";

function App() {
  const [licenses, setLicenses] = useState([]);

  return (
    <div className="App">
      <h1>JSON Generator</h1>
      <LicenseForm licenses={licenses} setLicenses={setLicenses} />
      <LicenseOutput licenses={licenses} />
    </div>
  );
}

export default App;