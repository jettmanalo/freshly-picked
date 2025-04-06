import React, { useState } from "react";
import { assets } from "../assets/assets";

const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-green transition"
    type={type}
    placeholder={placeholder}
    name={name}
    onChange={handleChange}
    value={address[name]}
    required
  />
);

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-16 pb-16">
      <p className="text-2xl md:text-3xl text-gray-500">
        Add Shipping <span className="font-semibold text-green">Address</span>
      </p>

      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
        <div className="flex-1 max-w-md">
          <form onSubmit={onSubmitHandler} className="space-y-3 mt-6 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                type="text"
                name="firstName"
                placeholder="First Name"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>

            <InputField
              handleChange={handleChange}
              address={address}
              type="email"
              name="emailAddress"
              placeholder="Email Address"
            />
            <InputField
              handleChange={handleChange}
              address={address}
              type="text"
              name="street"
              placeholder="Street"
            />

            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                type="text"
                name="city"
                placeholder="City"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                type="text"
                name="state"
                placeholder="State"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                type="number"
                name="zipCode"
                placeholder="Zip Code"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                type="text"
                name="country"
                placeholder="Country"
              />
            </div>

            <InputField
              handleChange={handleChange}
              address={address}
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
            />

            <button className="w-full mt-6 bg-green text-white py-3 hover:bg-greener transition cursor-pointer uppercase">
              Save Address
            </button>
          </form>
        </div>

        <img
          src={assets.add_address_iamge}
          alt="Add Address"
          className="mb-16 md:mr-16 md:mt-0"
        />
      </div>
    </div>
  );
};

export default AddAddress;
