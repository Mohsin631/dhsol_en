import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/scss/master.scss";
import "../../public/assets/scss/layout/_ceo.scss";
import "@/styles/extra.css";
import "../../public/assets/scss/layout/_ceo.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "devicon/devicon.min.css";
import CookieConsent from "@/components/CookieConsent/cookieconsent-component";
import StickyContactBar from "@/components/StickyContactBar";
import LocationRedirectPopup from "@/components/LocationRedirectPopup";
import SwitchToArabicButton from '@/components/SwitchToArabicButton';



import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
    
    <LocationRedirectPopup/>
 <CookieConsent/>
 <SwitchToArabicButton/>
      <Component {...pageProps} />
    </>
  );
}
