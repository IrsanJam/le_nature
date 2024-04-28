import Layout from "../../sharedComponents/components/Layout";
import OurProduct from "./presentation/components/OurProduct";
import EventPromo from "./presentation/components/EventPromo";
import Hero from "./presentation/components/Hero";
import Instagram from "./presentation/components/Instagram";
import OurStory from "./presentation/components/OurStory";
import WhatsNew from "./presentation/components/WhatsNew";

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
