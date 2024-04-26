import EventPromo from "../../sharedComponents/components/EventPromo";
import Hero from "../../sharedComponents/components/Hero";
import Instagram from "../../sharedComponents/components/Instagram";
import Layout from "../../sharedComponents/components/Layout";
import OurStory from "../../sharedComponents/components/OurStory";
import OurProduct from "../../sharedComponents/components/OurProduct";
import WhatsNew from "../../sharedComponents/components/WhatsNew";

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
