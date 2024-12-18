import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <main className="m-auto w-[85%] min-h-screen px-4 py-6 font-primary">
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </AuthProvider>
    </>
  );
}

export default App;
