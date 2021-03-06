import "./App.css";

import Posts from "./components/Posts";
import Postform from "./components/Postform";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Postform></Postform>
      <Posts></Posts>
    </div>
  );
}

export default App;
