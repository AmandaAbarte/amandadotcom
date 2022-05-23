import React from "react";

export default function Contact(props) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    isHuman: false,
  });
  function handleInputs(event) {
      const {name,value, type, checked} = event.target;
      setFormData(prevData => {
          return {
              ...prevData,
              [name]: type === "checkbox" ? checked : value
          }
      })
  }
  function handleSubmit(event) {
      event.preventDefault();
      //send to api?
      console.log(formData);
  }
  return (
    <div
      className="contact-container"
      style={{ backgroundColor: props.lights ? "white" : "black" }}
    >
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First and Last Name"
          onChange={handleInputs}
          name="name"
          value={formData.name}
          required
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleInputs}
          name="email"
          value={formData.email}
          required
        />
        <input
          type="text"
          placeholder="Your Message"
          onChange={handleInputs}
          name="message"
          value={formData.message}
          required
        />
        <input
            type="checkbox"
            id= "isHuman"
            checked={formData.isHuman}
            onChange={handleInputs}
            name="isHuman"
            required
        />
        <label htmlFor="isHuman">Are you really human?</label>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
}
