import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Corpo from "./Corpo";
import FundoMobile from "./FundoMobile";

function App() {
    return (
        <div>
            <Navbar />
            <Corpo />
            <FundoMobile /> 
        </div>
        
    );
  }
  
  export default App;

ReactDOM.render(<App />, document.querySelector(".root"));