import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./utils/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
