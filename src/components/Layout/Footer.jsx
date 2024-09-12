import facebook_icon from "../../assets/facebook-icon.svg";
import instagram_icon from "../../assets/instagram-icon.svg";
import telegram_icon from "../../assets/tegram_icon.svg";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-[#1a1a1a]">
      <div
        className="flex bg-[#1a1a1a] justify-center flex-col md:flex-row md:gap-x-48 mx-auto w-11/12 py-10 pb-20 md:pb-10 gap-y-12 md:gap-y-0 relative z-10 md:z-0"
        id="footer">
        <div className="md:w-1/2">
          <h1 className="self-center text-3xl font-semibold text-center sm:text-4xl md:text-6xl md:text-start text-stroke md:ml-5">
            наші контакти
          </h1>
        </div>

        <div className="flex flex-row self-center text-center text-white gap-y-40 md:text-left">
          <div className="flex flex-row text-lg font-semibold gap-y-3 gap-x-7">
            <div className="">
              <p>+38 096 689 66 16</p>
              <p>info@uma-lub.com</p>
            </div>

            {/* <div className="flex items-center justify-end gap-x-2 md:justify-normal">
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
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
