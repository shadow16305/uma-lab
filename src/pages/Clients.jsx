import Client from "../components/Clients/Client";
import ClientHeader from "../components/Clients/ClientHeader";
import Footer from "../components/Layout/Footer";
import { clients } from "../constants/content";

const Clients = () => {
  return (
    <div className="h-screen overflow-auto overflow-x-hidden md:snap-y md:snap-mandatory">
      <div className="md:snap-start md:snap-always">
        <ClientHeader />
      </div>
      {clients.map((client) => (
        <div key={client.name} className="md:snap-start md:snap-always">
          <Client
            name={client.name}
            description={client.description}
            type={client.type}
            desktop_img={client.desktop_img}
            mobile_img={client.mobile_img}
            background={client.background}
            h2_color={client.h2_color}
            text_color={client.text_color}
            border_color={client.border_color}
            text_stroke={client.stroke}
          />
        </div>
      ))}
      <div className="md:snap-start md:snap-always">
        <Footer />
      </div>
    </div>
  );
};

export default Clients;
