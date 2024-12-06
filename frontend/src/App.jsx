import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="m-auto w-[85%] min-h-screen px-4 py-6 font-primary">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
