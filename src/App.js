import "./App.css";
import Header from "./components/header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Routers from "./pages/Routers";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Header />
        <Routers />
        
      </header>
    </div>
  );
}

export default App;
