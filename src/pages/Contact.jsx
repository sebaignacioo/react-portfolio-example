import { useState } from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regexMessage = /^.{10,}$/;

    const errors = {
      name: name === "" || !regexName.test(name),
      email: email === "" || !regexEmail.test(email),
      message: message === "" || !regexMessage.test(message),
    };

    setErrors(errors);

    console.log({ name, email, message, errors });
  };

  return (
    <div className="px-5">
      <h1 className="text-xl flex gap-x-2 items-center py-8 text-primary-content">
        <HiOutlineEnvelope /> Contacto
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleChangeName}
          placeholder={
            errors.name ? "Debe ingresar un nombre correcto" : "Nombre completo"
          }
          className={`${
            errors.name ? "input-error" : ""
          } input input-bordered w-full`}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          onChange={handleChangeEmail}
          placeholder={
            errors.email
              ? "Debe ingresar un email correcto"
              : "Correo electrónico"
          }
          className={`${
            errors.email ? "input-error" : ""
          } input input-bordered w-full`}
        />
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          value={message}
          onChange={handleChangeMessage}
          placeholder={
            errors.message
              ? "Debe ingresar un mensaje de al menos 10 caracteres"
              : "Mensaje a enviar"
          }
          className={`${
            errors.message ? "textarea-error" : ""
          } textarea textarea-bordered w-full`}
        />
        <button className="btn btn-info" type="submit">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}
