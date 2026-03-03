import "./App.css";
import Firstcomponent from "./Firstcomponent";
import Secondcomponent from "./Secondcomponent";

function App() {
  return (
    <>
      <Firstcomponent title="TextUtil" about="Page info" />
      <div className="container">
        <Secondcomponent heading="container" />
      </div>
    </>
  );
}

export default App;
