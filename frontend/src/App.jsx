import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex m-auto w-[85%] min-h-screen px-4 py-6 font-primary">
        <Outlet></Outlet>
      </main>
      <div>Footer</div>
    </>
  );
}

export default App;
