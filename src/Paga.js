import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

/**
 * 
 * @param {Paga react package} props 
 * @returns 
 */
export default function Paga(props) {
  const form = useRef(null);

  const [pagaAtrributes] = useState({
    src: props.src || "https://mypaga.com/checkout/?w=160&h=40",
    charge_url: props.charge_url || "https://mymarket/payment/complete",
    redirect_url_method: props.redirect_url_method || "GET",
    public_key: props.public_key || "",
    currency: props.currency || "NGN",
    amount: props.amount || "",
    payment_reference: props.payment_reference || "",
    account_number: props.account_number || "",
    product_description: props.product_description || "",
    phone_number: props.phone_number || "",
    email: props.email || "",
    product_codes: props.product_codes || "",
    display_image: props.display_image || "",
    display_name: props.display_name || "",
    display_tagline: props.display_tagline || "",
    button_label: props.button_label || "",
    width: props.width || "200",
    funding_sources: props.funding_sources || "BANK,CARD,PAGA"
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = pagaAtrributes.src;

    const attributes = Object.keys(pagaAtrributes);

    attributes.forEach((key, index) => {
      script.setAttribute(`data-${key}`, pagaAtrributes[key]);
    });

    script.async = true;

    form.current.appendChild(script);

    return () => {
      form.current.removeChild(script);
    };
  
  }, []);

  return (
    <span>
      <div className={pagaAtrributes.class}>
        <form method="POST" ref={form}></form>
      </div>
    </span>
  );
}

Paga.propTypes = {
  charge_url: PropTypes.string,
  redirect_url_method: PropTypes.string,
  public_key: PropTypes.string.isRequired,
  currency: PropTypes.string,
  amount: PropTypes.string.isRequired,
  payment_reference: PropTypes.string,
  account_number: PropTypes.string,
  product_description: PropTypes.string,
  phone_number: PropTypes.string,
  email: PropTypes.string,
  product_codes: PropTypes.string,
  display_image: PropTypes.string,
  display_name: PropTypes.string,
  display_tagline: PropTypes.string,
  button_label: PropTypes.string,
  width: PropTypes.string,
  funding_sources: PropTypes.string
};
