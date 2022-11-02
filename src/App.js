import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Started from "./pages/Started";
import Formpage from "./pages/Formpage";
import Survey from "./pages/Survey";
import './styles/style.scss'



function App() {
  return (
    <>
      <Navigation />
      <div className="divider"></div>
      <div className="container">
        <Header />
        <Routes>
        <Route path="/"  element={<Started />}/>
        <Route path="/form"  element={<Formpage />}/>
        <Route path="/survey"  element={<Survey />} />
      </Routes>
      </div>
     
      <main className="main">
        <Sidebar />        
      </main>
    </>
  );
}

export default App;
