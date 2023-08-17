import AppRoutes from "./routes";
import backgroundImg from "./assets/background.jpeg";
import { AuthProvider } from "./contexts/authContext";
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
      <AuthProvider>
        <PowerViewProvider>
          <AppRoutes />
        </PowerViewProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
