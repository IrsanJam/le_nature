import React from "react";
import Layout from "../components/Layout";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Layout>
        <div
          className="bg-cover bg-center flex items-center bg-black py-24 2xl:h-[80vh] "
          style={{
            backgroundImage: 'url("https://putrasionmandiri.co.id/wp-content/uploads/2023/08/trip-3_13-Photo.jpg")',
            filter: "blur(0.1px)",
          }}
        >
          <div className="container mx-auto px-4 md:px-20 drop-shadow-lg ">
            <h1 className="text-3xl font-bold mb-4 text-white z-10 relative">Tentang Kami - KosKita</h1>
            <p className="text-white mb-4 md:pr-20 ">
              Selamat datang di KosKita! Kami adalah tempat penyewaan kos-kosan yang nyaman dan terjangkau. Dengan komitmen memberikan pelayanan terbaik kepada pelanggan, kami berusaha untuk menjadi pilihan utama bagi mereka yang mencari
              hunian sementara.
            </p>
            <p className="text-white md:pr-20 hidden md:block">
              Website ini baru saja dibangun dengan tujuan memudahkan calon penyewa untuk menemukan informasi tentang kos-kosan yang kami tawarkan. Kami berkomitmen untuk terus meningkatkan kualitas pelayanan dan fasilitas agar pengalaman
              tinggal di KosKita selalu menyenangkan.
            </p>
          </div>
        </div>
        <section className="bg-gray-100 py-12 ">
          <div className="container mx-auto px-4 md:px-20">
            <h2 className="text-2xl font-bold mb-4">Testimoni Pelanggan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p>"Pelayanan dari KosKita sangat memuaskan. Saya merasa betah tinggal di kosan mereka."</p>
                <p className="text-sm mt-2">- John Doe</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p>"Saya sangat senang dengan fasilitas yang disediakan oleh KosKita. Sangat recommended!"</p>
                <p className="text-sm mt-2">- Jane Smith</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p>"KosKita memberikan harga yang sangat terjangkau tanpa mengorbankan kenyamanan."</p>
                <p className="text-sm mt-2">- Michael Johnson</p>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-lime-600 text-white py-4">
          <div className="container mx-auto text-center">
            <p>Hak Cipta © {new Date().getFullYear()} KosKita. All rights reserved.</p>
          </div>
        </footer>
      </Layout>
    </>
  );
};

export default AboutUsPage;
