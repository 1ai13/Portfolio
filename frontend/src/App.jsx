import "./styles/App.css";
import Header from "./components/Header.jsx";
import MyInfo from "./components/MyInfo.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="bg-linear-to-b from-bg-body to-bg-body-light min-h-screen">
        <Header />
        <MyInfo />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
