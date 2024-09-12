import { useState, useRef } from "react";

import emailjs from "@emailjs/browser";
import Modal from "../UI/Modal";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_number: "",
    user_email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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
    e.preventDefault();

    const errors = {};
    if (!formData.user_name) {
      errors.name = "потрібне ім'я";
    }
    if (!formData.user_number) {
      errors.number = "потрібен номер телефону";
    }
    if (!formData.user_email) {
      errors.email = "потрібна електронна пошта";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    emailjs.sendForm("service_asdigrd", "template_1q5j959", form.current, "a7QAOThs89VSf4k6Q").then(
      (result) => {
        console.log(result.text);
        setIsFormSubmitted(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="flex relative z-10 md:z-0 bg-[#1a1a1a] scroll-mt-8 lg:scroll-mt-20" id="contact">
      <div className="flex flex-col w-11/12 py-12 mx-auto mb-20 text-white lg:flex-row md:gap-x-48 z-2">
        <h1 className="self-center w-full mb-5 text-4xl font-bold md:text-7xl text-end md:mb-0 md:pl-20">
          {"Зв’яжіться з нами зараз"}
        </h1>
        <form ref={form} className="self-center w-full" onSubmit={handleSubmit}>
          <div className="mt-4 group">
            <label className="flex flex-row gap-2 mb-6 text-gray-400 group-hover:text-white" htmlFor="Name">
              <p className="text-sky-500">*</p> Ваше ім`я
            </label>
            <input
              className={`w-full border-b border-gray-300 border-opacity-50 px-3 py-2 bg-transparent text-white focus:focus:outline-none focus:border-white ${
                formErrors.name ? "border-red-500" : ""
              }`}
              type="text"
              id="Name"
              name="user_name"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && <p className="mt-2 text-sm text-red-500">{formErrors.name}</p>}
          </div>
          <div className="mt-4 group">
            <label className="flex flex-row gap-2 mb-6 text-gray-400 group-hover:text-white" htmlFor="number">
              <p className="text-sky-500">*</p> Ваш телефон
            </label>
            <input
              className={`w-full border-b border-gray-300 border-opacity-50 px-3 py-2 bg-transparent text-white focus:focus:outline-none focus:border-white ${
                formErrors.number ? "border-red-500" : ""
              }`}
              type="text"
              id="number"
              name="user_number"
              value={formData.number}
              onChange={handleChange}
            />
            {formErrors.number && <p className="mt-2 text-sm text-red-500">{formErrors.number}</p>}
          </div>
          <div className="mt-4 group">
            <label className="flex flex-row gap-2 mb-6 text-gray-400 group-hover:text-white" htmlFor="email">
              <p className="text-sky-500">*</p> Ваш e-mail
            </label>
            <input
              className={`w-full border-b border-gray-300 border-opacity-50 px-3 py-2 bg-transparent text-white focus:focus:outline-none focus:border-white ${
                formErrors.email ? "border-red-500" : ""
              }`}
              type="email"
              id="email"
              name="user_email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <p className="mt-2 text-sm text-red-500">{formErrors.email}</p>}
          </div>
          <div className="mt-4 group">
            <label className="flex flex-row gap-2 mb-6 text-gray-400 group-hover:text-white" htmlFor="text">
              <p className="text-sky-500">*</p> Ваш коментар
            </label>
            <input
              className="w-full px-3 py-2 text-white bg-transparent border-b border-gray-300 border-opacity-50 focus:focus:outline-none focus:border-white"
              type="text"
              id="text"
              name="message"
              value={formData.text}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col justify-end w-full mt-4 text-white md:flex-row gap-y-8 md:gap-x-10">
            <p className="w-full text-center line-clamp-3 md:w-72 md:text-right">
              Подайте заявку, щоб ми допомогли Вам отримати максимум від Вашого бізнесу
            </p>
            <button
              type="submit"
              className="flex items-center justify-center w-full py-4 text-xl font-semibold transition-all duration-200 ease-in-out rounded-lg md:w-3/6 bg-sky-500 hover:bg-sky-900 md:py-2 xl:rounded-full">
              Подати заявку
            </button>
            {isFormSubmitted && <Modal onClick={() => setIsFormSubmitted(false)} />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
