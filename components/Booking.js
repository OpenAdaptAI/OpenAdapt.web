import React, { useEffect } from "react";
import styles from './Booking.module.css';

const CalendlyForm = ({ url }) => {
    const [isClient, setIsClient] = React.useState(false);

    useEffect(() => {
      const head = document.querySelector("head");
      const script = document.createElement("script");
      script.setAttribute(
        "src",
        "https://assets.calendly.com/assets/external/widget.js"
      );
      head.appendChild(script);
      setIsClient(true);
    }, []);
  
    return isClient ? (
        <div>
            <h1 className="font-light text-3xl text-black my-0 bg-white pt-8 text-center">Book a Demo</h1>
            <div className={`calendly-inline-widget ${styles.calendly}`} data-url={url}></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </div>
    ) : <></>
  };

export default CalendlyForm
