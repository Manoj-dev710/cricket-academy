"use client";
import { useState } from "react";
import classes from "./form.module.css";
const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, such as sending data to an API
    console.log("Form submitted:", formData);
  };

  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        <h3 className="middletext outfit text-blue">Address</h3>
        <div className="mt-2">
          <label htmlFor="fullName" className={classes.label}>Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className={classes.input}
          />
        </div>

        <div className="mt-2">
          <label htmlFor="phone" className={classes.label}>Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={classes.input}
          />
        </div>

        <div className="mt-2">
          <label htmlFor="message" className={classes.label}>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={classes.input}
          />
        </div>
        <div className="mt-2">
          <button type="submit" className={classes.button}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
