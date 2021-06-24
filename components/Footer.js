import footerStyles from "./styles/footer.module.css";
import { useTranslation } from "next-i18next";


function Footer() {
  const {t} = useTranslation("footer");

  return (
    <footer className={footerStyles.cont}>
      {/* <p>{t("footerDesc")}</p> */}
      <h3>Office Info</h3>
      <p>Tele: </p>
      <p>Email: </p>
      <p>Address</p>
      <p>Working Hours</p>

      <h3>Firm Logo</h3>
      <p>Mission Statement</p>
    </footer>
  );
}

export default Footer;
