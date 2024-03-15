import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { saveShippingAddress } from './../Redux/Actions/cartActions';

const ShippingScreen = () => {
  window.scrollTo(0, 0);
  
 
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const history = useNavigate()
  const dispatch = useDispatch();
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history("/payment");
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>ADRESSE DE LIVRAISON</h6>
          <input
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
          <button type="submit">Continuer</button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
