import face from "../assets/face-icon.svg";
import insta from "../assets/insta-icon.svg";
import web_icon from "../assets/Web-icon.svg";

const QrCode = () => {
  return (
    <div className="bg-[#1a1a1a] flex flex-col lg:flex-row h-screen justify-center gap-10 items-center absolute z-50 w-screen overflow-hidden">
      <a href="https://uma-lab.com.ua" target="_blank" rel="noreferrer">
        <img src={web_icon} className="w-[170px]" alt="" />
      </a>
      <a
        href="https://www.instagram.com/_uma_lab_/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={insta} className="w-[170px]" alt="" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100093691271416"
        target="_blank"
        rel="noreferrer"
      >
        <img src={face} className="w-[170px]" alt="" />
      </a>
    </div>
  );
};

export default QrCode;
