import { useContext, useEffect, useRef } from "react";
import Client from "../components/Clients/Client";
import ClientHeader from "../components/Clients/ClientHeader";
import Footer from "../components/Layout/Footer";
import { clients } from "../constants/content";
import { ScrollContext } from "../context/scroll-context";

const Clients = () => {
  const { setScrolled } = useContext(ScrollContext);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setScrolled(scrollContainerRef.current.scrollTop > 0);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [setScrolled]);

  return (
    <div ref={scrollContainerRef} className="h-screen overflow-x-hidden md:snap-y md:snap-mandatory">
      <div className="md:snap-start md:snap-always" id="#clients-header">
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
            tags={client.tags}
            background={client.background}
            h2_color={client.h2_color}
            text_color={client.text_color}
            border_color={client.border_color}
            text_stroke={client.stroke}
            imgClassName={client.imgClass}
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
