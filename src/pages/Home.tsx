import EventPromo from "../components/EventPromo";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Navbar from "../components/Navbar";
import OurProduct from "../components/OurProduct";
import OurStory from "../components/OurStory";
import WhatsNew from "../components/WhatsNew";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurProduct />
      <EventPromo />
      <OurStory />
      <WhatsNew />
      <Instagram />
      <Footer />
    </>
  );
};

export default Home;
