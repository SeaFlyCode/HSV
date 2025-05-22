import React from "react";

const Location: React.FC = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.16795795133!2d2.3596577761272464!3d48.83593490228699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6719c601e3d4b%3A0xa276da210d650d1c!2zSMO0cGl0YWwgU2FscMOpdHJpw6hyZQ!5e0!3m2!1sfr!2sfr!4v1747726421382!5m2!1sfr!2sfr"
    width={1400}
    height={456.933}
    style={{
      border: 0,
      borderRadius: 16,
      aspectRatio: "1359 / 456.93",
      display: "block",
    }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Localisation HSV"
  ></iframe>
);

export default Location;