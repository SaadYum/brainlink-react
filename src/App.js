import "./App.css";
import { useBrainLink } from "./hooks/useBrainLink";
function App() {
  const { connect, isConnected } = useBrainLink();
  return (
    <div className="App">
      <button onClick={connect}>Connect</button>
      <h1>Connected: {isConnected}</h1>
    </div>
  );
}

export default App;
