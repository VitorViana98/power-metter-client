import AppRoutes from "./routes";
import backgroundImg from "./assets/background.jpeg";
import { PowerViewProvider } from "./contexts/powerViewUserContext";
function App() {
  return (
    <div
      style={{
        fontFamily: "Roboto",
        backgroundImage: `url(${backgroundImg})`,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <PowerViewProvider>
        <AppRoutes />
      </PowerViewProvider>
    </div>
  );
}

export default App;
