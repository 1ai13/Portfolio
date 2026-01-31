import translations from "./Translator.jsx";
import { useRef } from "react";
const DOMAIN_URL = import.meta.env.VITE_DOMAIN_URL;
const REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function Contact() {
  const emailModal = useRef(null);
  const btnSend = useRef(null);
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
            ref={btnSend}
            className="bg-blue-500 w-fit mx-auto my-2 px-3 py-2 b-2 rounded-xl border-white hover:cursor-pointer hover:bg-blue-600 active:bg-blue-300 active:text-white hover:text-black disabled:bg-gray-500 disabled:text-gray-300 font-bold"
            type="submit"
          >
            {submit}
          </button>
        </form>
        <dialog
          id="emailModal"
          ref={emailModal}
          closedby="any"
          onClose={handleCloseModal}
          className="fixed top-25 mx-auto p-3 lg:text-lg rounded-lg font-semibold shadow-md opacity-95 shadow-accent-primary"
        ></dialog>
      </section>
    </>
  );

  async function handleSubmit(e, invalidEmail) {
    //No refresh on submit
    e.preventDefault();

    const form = e.target;
    form.btnSend.disabled = true;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const modal = emailModal.current;
    //Email custom validation
    if (!REGEXP.test(data.email)) {
      form.email.setCustomValidity(invalidEmail);
      form.email.reportValidity();
      return;
    }
    const res = await fetch(DOMAIN_URL + "/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    //Modal behaviour
    if (res.ok) {
      modal.innerText = successMessage;
      modal.classList.remove("bg-red-700");
      modal.classList.add("bg-green-600");
      modal.classList.remove("text-red-200");
      modal.classList.add("text-green-200");
    } else {
      modal.innerText = errorMessage;
      modal.classList.remove("bg-green-600");
      modal.classList.add("bg-red-700");
      modal.classList.remove("text-green-200");
      modal.classList.add("text-red-200");
      console.error(errorMessage);
    }
    modal.show();
  }

  function handleCloseModal(e) {
    btnSend.current.disabled = false;
  }
}

export default Contact;
