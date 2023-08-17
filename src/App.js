import AppRoutes from "./routes";
import backgroundImg from "./assets/background.jpeg";
import { AuthProvider } from "./contexts/authContext";
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
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
