import ClientHeader from "../components/Layout/Clients/Header/ClientHeader";
import ClientOne from "../components/Layout/Clients/Client_One/ClientOne";
import ClientTwo from "../components/Layout/Clients/Client_Three/ClientTwo";
import Footer from "../components/Layout/Footer";

const Clients = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-auto overflow-x-hidden">
      <div className="snap-start snap-always">
        <ClientHeader />
      </div>
      <div className="snap-start snap-always">
        <ClientOne />
      </div>
      <div className="snap-start snap-always">
        <ClientTwo />
      </div>
      <div className="snap-start snap-always">
        <Footer />
      </div>
    </div>
  );
};

export default Clients;
