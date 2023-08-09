import React, { useEffect, useState } from "react";
import "../../toast.css";

function Toast({ message, color }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 30 * 60 * 1000); // 30 minutes in milliseconds
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={`toast ${isVisible ? "show" : ""}`}
          style={{ backgroundColor: color }}
        >
          {message && <p>{message}</p>}
        </div>
      )}
    </>
  );
}

export default Toast;
