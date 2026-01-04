import Hero from "../components/Hero";
import About from "../components/About";
import Conditions from "../components/Conditions";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="conditions"><Conditions /></section>
      <section id="services"><Services /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="faq"><FAQ /></section>
      <section id="contact"><Contact /></section>
    </>
  );
};

export default Home;
