import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Presentacion from "../../components/Presentacion/Presentacion.jsx";
import Intro from "../../components/Intro/Intro.jsx";
import Proyecto from "../../components/Proyecto/Proyecto.jsx";
import Timeline from "../../components/TimeLine/Timeline.jsx";
import Curriculum from "../../components/Curriculum/Curriculum.jsx";
import Contacto from "../../components/Contacto/Contacto.jsx";




const home = () => {
  return (
    <div  className="home" >

      <Navbar />
      <Presentacion/>
      <Intro />
      <Proyecto />
      <Timeline/>
      <Curriculum/>
      <Contacto/>
      {/* <Footer /> */}
    </div>
  );
};

export default home;
