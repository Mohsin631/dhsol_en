import { useEffect, useState } from "react";

const MENA_GCC_COUNTRIES = [
  "AE", "SA", "QA", "OM", "BH", "KW",
  "EG", "MA", "DZ", "TN", "LY", "JO", "LB", "IQ", "YE", "SY", "SD", "PS"
];

const FRENCH_SPEAKING_COUNTRIES = [
  "FR", "BE", "CH", "CA", "LU", "CI", "SN", "CM", "TN", "DZ", "MA", "BF", "NE", "ML", "GN", "TG", "CD", "DJ", "CF", "CG", "GA", "MG", "RW", "BI", "VU", "SC"
];

export default function LocationRedirectPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    async function checkLocation() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const countryCode = data.country_code;
        setCountry(countryCode);

        if (MENA_GCC_COUNTRIES.includes(countryCode)) {
          setRegion("mena");
          setShowPopup(true);
        } else if (FRENCH_SPEAKING_COUNTRIES.includes(countryCode)) {
          setRegion("fr");
          setShowPopup(true);
        }
      } catch (err) {
        console.error("Geo API error:", err);
      }
    }

    checkLocation();
  }, []);

  const redirectToRegionalSite = () => {
    if (region === "mena") {
      window.location.href = "https://mena.dhsol.net";
    } else if (region === "fr") {
      window.location.href = "https://fr.dhsol.net";
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  const flag = country ? getCountryFlag(country) : "🌍";

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <div style={styles.header}>
          <span style={styles.flag}>{flag}</span>
          <h2 style={styles.title}>
            {region === "mena" ? "مرحبا بك!" : region === "fr" ? "Bienvenue!" : "Welcome!"}
          </h2>
          <p style={styles.subtitle}>
            {region === "mena"
              ? "يبدو أنك من منطقة الشرق الأوسط وشمال أفريقيا. هل ترغب في زيارة موقعنا الإقليمي؟"
              : region === "fr"
              ? "Il semble que vous veniez d'une région francophone. Voulez-vous visiter notre site français ?"
              : "It looks like you're from another region."}
          </p>
        </div>

        <div style={styles.actions}>
          <button style={styles.primaryBtn} onClick={redirectToRegionalSite}>
            {region === "mena" ? "الذهاب إلى موقع MENA" : "Visiter le site Français"}
          </button>
          <button style={styles.secondaryBtn} onClick={closePopup}>
            {region === "mena" ? "ابق على هذا الموقع" : "Rester sur ce site"}
          </button>
        </div>
      </div>
    </div>
  );
}

function getCountryFlag(code) {
  return code
    .toUpperCase()
    .replace(/./g, char => String.fromCodePoint(127397 + char.charCodeAt()));
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    animation: "fadeIn 0.3s ease-in-out"
  },
  card: {
    background: "white",
    padding: "32px 28px",
    borderRadius: "20px",
    maxWidth: "440px",
    width: "90%",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
    fontFamily: `"Inter", "Segoe UI", sans-serif`,
    animation: "popUp 0.35s ease"
  },
  header: {
    textAlign: "center"
  },
  flag: {
    fontSize: "40px",
    display: "block",
    marginBottom: "12px"
  },
  title: {
    fontSize: "24px",
    fontWeight: 700,
    marginBottom: "12px",
    color: "#1e1e2f"
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6"
  },
  actions: {
    marginTop: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  primaryBtn: {
    background: "#3533cd",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 0.2s",
  },
  secondaryBtn: {
    background: "transparent",
    color: "#3533cd",
    border: "2px solid #3533cd",
    padding: "10px 18px",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.2s"
  }
};
