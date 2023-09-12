import facebook_icon from "../../assets/facebook-icon.svg";
import instagram_icon from "../../assets/instagram-icon.svg";

const Footer = () => {
  return (
    <div className="w-full border-t bg-[#1a1a1a]">
      <div
        className="flex bg-[#1a1a1a] justify-center flex-col lg:flex-row lg:gap-x-48 mx-auto w-11/12 z-2 mb-10 pt-5"
        id="footer"
      >
        <div className="lg:w-1/2">
          <h1 className="sm:text-4xl text-3xl md:text-6xl font-semibold text-center lg:text-start self-center text-stroke text-stroke lg:ml-5">
            наші контакти
          </h1>
        </div>

        <div className="self-center flex flex-row gap-y-40 text-center md:text-left text-white">
          <div className="text-lg font-semibold flex flex-row gap-y-3 gap-x-7">
            <div className="">
              <p>+38 096 689 66 16</p>
              <p>info@uma-lub.com</p>
            </div>

            <div className="flex gap-x-2 justify-end md:justify-normal items-center">
              <a
                target="_blank"
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

              <a target="_blank" href="https://www.instagram.com/_uma_lab_/">
                <img
                  src={instagram_icon}
                  width={30}
                  height={30}
                  alt="logo"
                  className="invert"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
