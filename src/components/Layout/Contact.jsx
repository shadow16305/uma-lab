const Contact = () => {
  return (
    <div className="flex">
      <div className="flex flex-col lg:flex-row lg:gap-x-48 mx-auto text-white w-11/12 z-2 py-10 mb-20">
        <h1 className="text-4xl md:text-7xl font-bold text-end self-center w-full mb-5 lg:mb-0 lg:pl-20">
          {"Зв’яжіться з нами зараз"}
        </h1>

        <form
          className="w-full self-center"
          action="https://formsubmit.co/chris16305@gmail.com"
          method="POST"
        >
          <div className="mt-4 group  ">
            <label
              className="mb-6 flex flex-row text-gray-400 group-hover:text-white"
              htmlFor="Name"
            >
              <p className="text-sky-500">*</p> Ваше ім`я
            </label>
            <input
              className="w-full border-b border-gray-300 border-opacity-50 px-3 py-2 bg-transparent text-white focus:focus:outline-none focus:border-white"
              type="text"
              id="Name"
              name="Name"
              required
            />
          </div>

          <div className="mt-4 group">
            <label
              className="mb-6 flex flex-row text-gray-400 group-hover:text-white"
              htmlFor="number"
            >
              <p className="text-sky-500">*</p>Ваш телефон
            </label>
            <input
              className="w-full border-b border-gray-300 border-opacity-50 px-3 py-2 bg-transparent text-white focus:focus:outline-none focus:border-white"
              type="text"
              id="number"
              name="number"
              required
            />
          </div>

          <div className="mt-4 group">
            <label
              className="mb-6 flex flex-row text-gray-400 group-hover:text-white"
              htmlFor="email"
            >
              <p className="text-sky-500">*</p>Ваш e-mail
            </label>
            <input
              className="w-full border-b border-gray-300 border-opacity-50 px-3 py-2 bg-transparent text-white focus:focus:outline-none focus:border-white"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="mt-4 group">
            <label
              className="mb-6 flex flex-row text-gray-400 group-hover:text-white"
              htmlFor="message"
            >
              <p className="text-sky-500">*</p>Ваш коментар
            </label>
            <input
              className="peer w-full border-b border-gray-300 border-opacity-50 px-3 py-2 bg-transparent text-white focus:focus:outline-none focus:border-white"
              type="text"
              id="text"
              name="text"
              required
            />
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-end text-white mt-4 gap-y-8 lg:gap-x-10">
            <p className="line-clamp-3 w-full lg:w-72 text-center lg:text-right">
              Подайте заявку, щоб ми допомогли Вам отримати максимум від Вашого
              бізнесу
            </p>
            <button
              id="contact"
              type="submit"
              className=" w-full lg:w-3/6 text-xl py-4 bg-sky-500 hover:bg-sky-900 transition-all duration-200 ease-in-out font-semibold lg:py-2 rounded-lg xl:rounded-full"
            >
              Подати заявку
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
