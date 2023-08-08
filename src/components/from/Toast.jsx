import React, { useEffect, useState } from "react";
import "../../toast.css";
function Toast({ success, error }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (success) {
      setIsVisible(true);

      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 30000); // 30 seconds

      return () => clearTimeout(hideTimeout);
    }
  }, [success]);
  return (
    <>
      {success && (
        <div className={`toast ${isVisible ? "show" : ""}`}>
          {success && <p>{success}</p>}
        </div>
      )}
      {error && (
        <div className={`toast ${isVisible ? "show" : ""}`}>
          {error && <p>{error}</p>}
        </div>
      )}
    </>
  );
}

export default Toast;
