import Footer from "./Footer";
import Navbar from "./Navbar";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-white p-0">
      <Navbar />
      <div>
        {children}{" "}
        <FloatingWhatsApp
          phoneNumber="+233500483753"
          accountName="Wellmark Specialist Hospital"
          avatar="/assets/img/logo.png"
        />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
