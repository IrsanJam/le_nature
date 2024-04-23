import Layout from "../components/Layout";

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4 font-Poppins md:px-20 md:my-20">
        <h1 className="text-4xl font-bold mb-4 text-center">Blog</h1>
        <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded">
            <h2 className="text-2xl font-semibold mb-2">Post 1</h2>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.</p>
          </div>
          <div className="border p-4 rounded">
            <h2 className="text-2xl font-semibold mb-2">Post 2</h2>
            <p className="text-lg">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
