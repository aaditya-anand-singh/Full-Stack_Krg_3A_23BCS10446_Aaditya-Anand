import Header from "./components/Header.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Logs from "./pages/logs.jsx";


const App = () => {
  return (
    <>
      <Header  title="EcoTrack - Experiment 1" />
      <main style={{ padding: "1rem" }}>
        <Dashboard />
        <Logs/>
      </main>
    </>
  );
};
export default App;
