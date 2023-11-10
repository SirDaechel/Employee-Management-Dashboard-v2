import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
