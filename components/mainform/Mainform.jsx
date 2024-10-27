"use client";
import { useState } from "react";
import classes from "./form.module.css";
const Mainform = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    dob: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    country: "",
    zipcode: "",
    parentFirstName: "",
    parentLastName: "",
    parentPhone: "",
    parentEmail: "",
    emergencyPhone: "",
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
    <div className="inner-margin">
      <form onSubmit={handleSubmit}>
        <div className="grid-2-to-2 gap5">
          <div>
            <div className="form-sec">
              <h2 className="formtitle text-blue lg-text-center">
                Player Details
              </h2>
              <div className="inner-margin">
                <div className="grid-2-to-2 gap1">
                  <div>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className={classes.input}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className={classes.input}
                    />
                  </div>
                </div>
                <div className="grid-2-to-2 gap1 mt-1">
                  <div>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={classes.input}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={classes.input}
                    />
                  </div>
                </div>
                <div className="mt-1">
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    placeholder="Date of Birth"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className={classes.input}
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    id="address1"
                    name="address1"
                    placeholder="Address Line 1"
                    value={formData.address1}
                    onChange={handleChange}
                    required
                    className={classes.input}
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    id="address2"
                    name="address2"
                    placeholder="Address Line 2"
                    value={formData.address2}
                    onChange={handleChange}
                    required
                    className={classes.input}
                  />
                </div>
                <div className="grid-2-to-2 gap1 mt-1">
                  <div>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className={classes.input}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="province"
                      name="province"
                      placeholder="Province"
                      value={formData.province}
                      onChange={handleChange}
                      required
                      className={classes.input}
                    />
                  </div>
                </div>
                <div className="grid-2-to-2 gap1 mt-1">
                  <div>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      placeholder="Country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className={classes.input}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="zipcode"
                      name="zipcode"
                      placeholder="Zip Code"
                      value={formData.zipcode}
                      onChange={handleChange}
                      required
                      className={classes.input}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="form-sec">
              <h2 className="formtitle text-blue lg-text-center">
                Parent Details
              </h2>
              <div className="inner-margin">
                <div className="grid-2-to-2 gap1">
                  <div>
                    <input
                      type="text"
                      id="parentFirstName"
                      name="parentFirstName"
                      placeholder="First Name"
                      value={formData.parentFirstName}
                      onChange={handleChange}
                      required
                      className={classes.input}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="parentLastName"
                      name="parentLastName"
                      placeholder="Last Name"
                      value={formData.parentLastName}
                      onChange={handleChange}
                      required
                      className={classes.input}
                    />
                  </div>
                </div>
                <div className="grid-2-to-2 gap1 mt-1">
                  <div>
                    <input
                      type="text"
                      id="parentPhone"
                      name="parentPhone"
                      placeholder="Phone Number"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      required
                      className={classes.input}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="parentEmail"
                      name="parentEmail"
                      placeholder="Email Address"
                      value={formData.parentEmail}
                      onChange={handleChange}
                      required
                      className={classes.input}
                    />
                  </div>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    id="emergencyPhone"
                    name="emergencyPhone"
                    placeholder="Emergency Contact"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    required
                    className={classes.input}
                  />
                </div>
                <div className="flex gap1">
                  <div className="mt-2">
                    <button type="submit" className={classes.button}>
                      Submit
                    </button>
                  </div>
                  <div className="mt-2">
                    <button type="submit" className={classes.button2}>
                      cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Mainform;
