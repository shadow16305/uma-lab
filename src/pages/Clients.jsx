import ClientHeader from "../components/Layout/Clients/Header/ClientHeader";
import ClientOne from "../components/Layout/Clients/Client_One/ClientOne";
import ClientTwo from "../components/Layout/Clients/Client_Two/ClientTwo";
import Footer from "../components/Layout/Footer";

const Clients = () => {
  return (
    <div className="lg:snap-y lg:snap-mandatory h-screen overflow-auto overflow-x-hidden">
      <div className="lg:snap-start lg:snap-always">
        <ClientHeader />
      </div>
      <div className="lg:snap-start lg:snap-always">
        <ClientOne />
      </div>
      <div className="lg:snap-start lg:snap-always">
        <ClientTwo />
      </div>
      <div className="lg:snap-start lg:snap-always">
        <Footer />
      </div>
    </div>
  );
};

export default Clients;
