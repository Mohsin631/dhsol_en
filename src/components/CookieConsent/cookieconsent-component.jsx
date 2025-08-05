import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (cookieAccepted) {
      setIsVisible(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsVisible(false);
  };

  const handleManage = () => {
    setIsModalOpen(true); // Open the modal to manage cookies
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences));
    setIsModalOpen(false);
    alert("Your preferences have been saved!");
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCookiePreferences((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="cookie-consent-banner">
        <div className="cookie-content">
          <p className="cookie-text">
            Hey there! We use cookies to personalize and optimize your experience. Continue browsing our website if you agree to our use of cookies (as described in our Cookie Policy) or manage cookies yourself.
          </p>
          <div className="cookie-actions">
            <button className="cookie-btn" onClick={handleAccept}>
              Okay, Got It!
            </button>
            <button className="manage-btn" onClick={handleManage}>
              Manage Cookies
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="cookie-modal">
          <div className="cookie-modal-content">
            <h2>Manage Cookie Preferences</h2>
            <div className="cookie-options">
              <label>
                <input
                  type="checkbox"
                  name="essential"
                  checked={cookiePreferences.essential}
                  disabled
                  onChange={handleCheckboxChange}
                />
                Essential Cookies (Always Active)
              </label>
              <label>
                <input
                  type="checkbox"
                  name="functional"
                  checked={cookiePreferences.functional}
                  onChange={handleCheckboxChange}
                />
                Functional Cookies
              </label>
              <label>
                <input
                  type="checkbox"
                  name="marketing"
                  checked={cookiePreferences.marketing}
                  onChange={handleCheckboxChange}
                />
                Marketing Cookies
              </label>
            </div>
            <div className="modal-actions">
              <button onClick={handleSavePreferences}>Save Preferences</button>
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
