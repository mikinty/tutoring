import "./App.css";
import "./styles.scss";
import Classes from "./pages/Classes";
import Tutors from "./pages/Tutors";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Tutors />
      <Classes />
      <Contact />
    </div>
  );
}

export default App;
