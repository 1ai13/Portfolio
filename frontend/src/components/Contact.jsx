import translations from "./Translator.jsx";
import { useEffect, useRef } from "react";
const DOMAIN_URL = import.meta.env.VITE_DOMAIN_URL;
const REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const TOAST_TYPE = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

function Contact() {
  const emailModal = useRef(null);

  const {
    successMessage,
    errorMessage,
    contact,
    form: {
      name,
      nameExample,
      email,
      emailExample,
      invalidEmail,
      subject,
      message,
      submit,
      optional,
      intro,
    },
  } = translations();

  useEffect(() => {
    const id = setInterval(() => {
      fetch(DOMAIN_URL + "/ping");
    }, 600000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section id="contact" className="mb-24 md:mb-44">
        <h2 className="bg-bg-secondary text-2xl md:text-3xl font-bold mt-24 lg:mt-36 p-6 text-center border-b border-b-accent-primary lg:text-start lg:pl-10">
          {contact}
        </h2>
        <h3 className="bg-bg-primary sm:text-lg lg:text-xl lg:mb-14 font-semibold  p-6 text-center lg:pl-10">
          {intro}
        </h3>
        <form
          onSubmit={(e) => handleSubmit(e, invalidEmail)}
          className="bg-bg-terniary flex flex-col px-3 py-1 m-8 border-2 sm:w-1/2 lg:w-1/3 sm:mx-auto lg:p-7 lg:py-3 border-accent-primary gap-4 md:gap-5 rounded-lg"
        >
          <img src="emailHeader-icon.png" className="mx-auto w-20" />
          <div id="field-name" className="flex flex-col">
            <label htmlFor="name" className="font-bold w-fit h-fit">
              {name + ":"}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              minLength="3"
              placeholder={nameExample}
              required
              className="bg-white text-black px-2 py-0.5 md:py-1 rounded-lg shadow-md shadow-accent-primary"
            />
          </div>

          <div id="field-email" className="flex flex-col">
            <label htmlFor="email" className="font-bold w-fit h-fit">
              {email + ":"}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={emailExample}
              required
              onInput={(e) => e.target.setCustomValidity("")}
              className="bg-white text-black px-2 py-0.5 md:py-1 rounded-lg shadow-md shadow-accent-primary"
            />
          </div>

          <div id="field-subject" className="flex flex-col">
            <label htmlFor="subject" className="font-bold w-fit h-fit">
              {subject + ":"}
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder={`(${optional})`}
              className="bg-white text-black px-2 py-0.5 md:py-1 rounded-lg shadow-md shadow-accent-primary"
            />
          </div>

          <div id="field-message" className="flex flex-col">
            <label htmlFor="message" className="font-bold w-fit h-fit">
              {message + ":"}
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              required
              rows="6"
              minLength={2}
              maxLength="1500"
              className="bg-white text-black px-2 py-0.5 md:py-1 rounded-lg shadow-md shadow-accent-primary"
            />
          </div>
          <button
            name="btnSend"
            className="bg-blue-500 w-fit mx-auto my-2 px-3 py-2 b-2 rounded-xl border-white hover:cursor-pointer hover:bg-blue-600 active:bg-blue-300 active:text-white hover:text-black disabled:bg-gray-500 disabled:text-gray-300 font-bold"
            type="submit"
          >
            {submit}
          </button>
        </form>
        <dialog
          id="emailModal"
          ref={emailModal}
          className="block fixed top-25 mx-auto p-3 lg:text-lg rounded-lg font-semibold shadow-md5 shadow-accent-primary transition-opacity duration-500 opacity-0 cursor-default"
        ></dialog>
      </section>
    </>
  );

  async function handleSubmit(e, invalidEmail) {
    //No refresh on submit
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const modal = emailModal.current;
    //Email custom validation
    if (!REGEXP.test(data.email)) {
      form.email.setCustomValidity(invalidEmail);
      form.email.reportValidity();
      return;
    }
    //Validation ok
    form.btnSend.disabled = true;
    try {
      const res = await fetch(DOMAIN_URL + "/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      //Modal behaviour
      if (res.ok) {
        showToast(modal, TOAST_TYPE.SUCCESS);
      } else {
        showToast(modal, TOAST_TYPE.ERROR);
      }
    } catch (error) {
      showToast(modal, TOAST_TYPE.ERROR);
    } finally {
      form.reset();
      modal.classList.remove("opacity-0");
      modal.classList.add("opacity-100");
      setTimeout(() => {
        modal.classList.remove("opacity-100");
        modal.classList.add("opacity-0");
        form.btnSend.disabled = false;
      }, 4000);
    }
  }

  function showToast(modal, type) {
    modal.classList.remove(
      "bg-red-700",
      "bg-green-600",
      "text-red-200",
      "text-green-200",
    );
    if (type == TOAST_TYPE.SUCCESS) {
      modal.classList.add("bg-green-600", "text-green-200");
    } else {
      modal.classList.add("bg-red-700", "text-red-200");
      console.error(errorMessage);
    }
    modal.innerText =
      type == TOAST_TYPE.SUCCESS ? successMessage : errorMessage;
  }
}

export default Contact;
