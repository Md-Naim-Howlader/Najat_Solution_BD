import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/responsive.css";
import MainLayout from "./layout/mainLayout/MainLayout";
import ContextProvider from "./context/ContextProvider";
import BackToTop from "./components/BackToTop";
import { useEffect, useState } from "react";
import "./styles/preloader.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="preloader">
          <div className="spinner d-block">
            <img src="images/favicon.jpg" alt="logo loader" />
          </div>
          <p className="lead position-absolute loadingTXT">Loading...</p>
        </div>
      ) : (
        <ContextProvider>
          <MainLayout />
          <BackToTop />
        </ContextProvider>
      )}
    </div>
  );
}

export default App;
