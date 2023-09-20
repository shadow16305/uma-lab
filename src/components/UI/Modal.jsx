import cross_icon from "../../assets/cross_modal_icon.svg";
import check_icon from "../../assets/modal_icon.svg";
import facebook_icon from "../../assets/facebook-icon.svg";
import instagram_icon from "../../assets/instagram-icon.svg";
import telegram_icon from "../../assets/tegram_icon.svg";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-20 h-screen w-screen flex justify-center items-center bg-[#1a1a1a]">
      <div className="border-[3px] border-white bg-[#1a1a1a] rounded-xl flex flex-col lg:w-[534px] lg:h-[481px]">
        <div className="flex justify-end pe-5 pt-5">
          <Link to="/">
            <img src={cross_icon} alt="" />
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center pt-3">
            <img src={check_icon} alt="" />
          </div>
          <h2 className="text-white text-[32px] font-semibold pt-3">
            Заявка відправлена
          </h2>
          <p className="text-gray-400 text-sm pt-11 lg:max-w-[381px] text-center">
            Ваша заявка була успішно відправлена, найближчий часом очікуйте на
            відповідь{" "}
          </p>
          <h3 className="text-white text-xl font-semibold pt-11">
            Стежте за нами
          </h3>
          <div className="flex gap-x-2 justify-end md:justify-normal items-center pt-7">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100093691271416"
            >
              <img
                src={facebook_icon}
                width={30}
                height={30}
                alt="logo"
                className="invert just"
              />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/_uma_lab_/"
            >
              <img
                src={instagram_icon}
                width={30}
                height={30}
                alt="logo"
                className="invert"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://t.me/UMAlab">
              <img src={telegram_icon} width={30} height={30} alt="logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
