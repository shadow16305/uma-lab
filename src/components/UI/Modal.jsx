import cross_icon from "../../assets/cross_modal_icon.svg";
import check_icon from "../../assets/modal_icon.svg";
// import facebook_icon from "../../assets/facebook-icon.svg";
// import instagram_icon from "../../assets/instagram-icon.svg";
import telegram_icon from "../../assets/tegram_icon.svg";

const Modal = (props) => {
  return (
    <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-20 h-screen w-screen flex justify-center items-center bg-[#1a1a1a]">
      <div className="border-[3px] border-white bg-[#1a1a1a] rounded-xl flex flex-col md:w-[534px] md:h-[481px]">
        <div className="flex justify-end pt-5 pe-5">
          <button onClick={props.onClick}>
            <img src={cross_icon} alt="Cross Icon" />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center pt-3">
            <img src={check_icon} alt="Check Icon" />
          </div>
          <h2 className="text-white text-[32px] font-semibold pt-3">Заявка відправлена</h2>
          <p className="text-gray-400 text-sm pt-11 md:max-w-[381px] text-center">
            Ваша заявка була успішно відправлена, найближчий часом очікуйте на відповідь{" "}
          </p>
          <h3 className="text-xl font-semibold text-white pt-11">Як ще звʼязатись з нами</h3>
          <div className="flex items-center justify-end gap-x-2 md:justify-normal pb-7 pt-7 md:pb-0">
            {/* <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100093691271416">
              <img src={facebook_icon} width={30} height={30} alt="facebook icon" className="invert just" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_uma_lab_/">
              <img src={instagram_icon} width={30} height={30} alt="instagram icon" className="invert" />
            </a> */}
            <a target="_blank" rel="noreferrer" href="https://t.me/UMAlab">
              <img src={telegram_icon} width={30} height={30} alt="telegram icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
