import React from 'react'
import { AiFillInstagram, AiFillTikTok } from 'react-icons/ai'
import { FaDiscord } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {

    const sendWhatsapp = () =>{

        const number = '972523260336';
        const formattedPhoneNumber = number.replace(/\D/g, "");

        const msg = 'Hello!'

        const URL = `https://wa.me/${formattedPhoneNumber}?text=${msg}`;

        window.open(URL, '_blank')

    }




  return (
    <div className="social">
      <a
        href="https://www.instagram.com/idanshahar_?igsh=NXc2cnQ1cDhobHlo"
        target=" _blank"
      >
        <AiFillInstagram />
      </a>

      <a
        href="https://www.instagram.com/idanshahar_?igsh=NXc2cnQ1cDhobHlo"
        target=" _blank"
      >
        <AiFillTikTok />
      </a>

      <a
        href="https://www.instagram.com/idanshahar_?igsh=NXc2cnQ1cDhobHlo"
        target=" _blank"
      >
        <FaDiscord />
      </a>

      <button className='whats-btn'
      onClick={sendWhatsapp}
      >

        <FaWhatsapp />
      </button>
    </div>
  );
}

export default SocialLinks