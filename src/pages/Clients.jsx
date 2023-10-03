import ClientHeader from "../components/Layout/Clients/Header/ClientHeader";
import ClientOne from "../components/Layout/Clients/Client_One/ClientOne";
import ClientTwo from "../components/Layout/Clients/Client_Two/ClientTwo";
import Footer from "../components/Layout/Footer";

const Clients = () => {
  return (
    <div className="md:snap-y md:snap-mandatory h-screen overflow-auto overflow-x-hidden">
      <div className="md:snap-start md:snap-always">
        <ClientHeader />
      </div>
      <div className="md:snap-start md:snap-always">
        <ClientOne />
      </div>
      <div className="md:snap-start md:snap-always">
        <ClientTwo />
      </div>
      <div className="md:snap-start md:snap-always">
        <Footer />
      </div>
    </div>
  );
};

export default Clients;
