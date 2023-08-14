import AppRoutes from "./routes";
import backgroundImg from "./assets/background.jpeg";
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
      <AppRoutes />
    </div>
  );
}

export default App;
