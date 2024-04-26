import EventPromo from "../components/EventPromo";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Layout from "../components/Layout";
import OurProduct from "../components/OurProduct";
import OurStory from "../components/OurStory";
import WhatsNew from "../components/WhatsNew";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <OurProduct />
        <EventPromo />
        <OurStory />
        <WhatsNew />
        <Instagram />
      </Layout>
    </>
  );
};

export default Home;
