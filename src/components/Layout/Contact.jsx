import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    text: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    const errors = {};
    if (!formData.name) {
      errors.name = "потрібне ім'я";
    }
    if (!formData.number) {
      errors.number = "потрібен номер телефону";
    }
    if (!formData.email) {
      errors.email = "потрібна електронна пошта";
    }

    if (Object.keys(errors).length > 0) {
      e.preventDefault();
      setFormErrors(errors);
      return;
    }
  };

  return (
    <div className="flex" id="contact">
      <div className="flex flex-col lg:flex-row lg:gap-x-48 mx-auto text-white w-11/12 z-2 py-12 mb-20">
        <h1 className="text-4xl md:text-7xl font-bold text-end self-center w-full mb-5 lg:mb-0 lg:pl-20">
          {"Зв’яжіться з нами зараз"}
        </h1>

        <form
          action="https://fabform.io/f/j1aw9Wp"
          method="post"
          className="w-full self-center"
          onSubmit={handleSubmit}
        >
          <div className="mt-4 group">
            <label
              className="mb-6 flex flex-row gap-2 text-gray-400 group-hover:text-white"
              htmlFor="Name"
            >
              <p className="text-sky-500">*</p> Ваше ім`я
            </label>
            <input
              className={`w-full border-b border-gray-300 border-opacity-50 px-3 py-2 bg-transparent text-white focus:focus:outline-none focus:border-white ${
                formErrors.name ? "border-red-500" : ""
              }`}
              type="text"
              id="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-2">{formErrors.name}</p>
            )}
          </div>

          <div className="mt-4 group">
            <label
              className="mb-6 flex flex-row gap-2 text-gray-400 group-hover:text-white"
              htmlFor="number"
            >
              <p className="text-sky-500">*</p> Ваш телефон
            </label>
            <input
              className={`w-full border-b border-gray-300 border-opacity-50 px-3 py-2 bg-transparent text-white focus:focus:outline-none focus:border-white ${
                formErrors.number ? "border-red-500" : ""
              }`}
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
            {formErrors.number && (
              <p className="text-red-500 text-sm mt-2">{formErrors.number}</p>
            )}
          </div>

          <div className="mt-4 group">
            <label
              className="mb-6 flex flex-row gap-2 text-gray-400 group-hover:text-white"
              htmlFor="email"
            >
              <p className="text-sky-500">*</p> Ваш e-mail
            </label>
            <input
              className={`w-full border-b border-gray-300 border-opacity-50 px-3 py-2 bg-transparent text-white focus:focus:outline-none focus:border-white ${
                formErrors.email ? "border-red-500" : ""
              }`}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>
            )}
          </div>

          <div className="mt-4 group">
            <label
              className="mb-6 flex flex-row gap-2 text-gray-400 group-hover:text-white"
              htmlFor="text"
            >
              <p className="text-sky-500">*</p> Ваш коментар
            </label>
            <input
              className="w-full border-b border-gray-300 border-opacity-50 px-3 py-2 bg-transparent text-white focus:focus:outline-none focus:border-white"
              type="text"
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
            />
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-end text-white mt-4 gap-y-8 lg:gap-x-10">
            <p className="line-clamp-3 w-full lg:w-72 text-center lg:text-right">
              Подайте заявку, щоб ми допомогли Вам отримати максимум від Вашого
              бізнесу
            </p>
            <button
              type="submit"
              className="w-full lg:w-3/6 flex justify-center items-center text-xl py-4 bg-sky-500 hover:bg-sky-900 transition-all duration-200 ease-in-out font-semibold lg:py-2 rounded-lg xl:rounded-full"
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
