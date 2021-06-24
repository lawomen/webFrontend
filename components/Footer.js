import footerStyles from "./styles/footer.module.css";
import { useTranslation } from "next-i18next";


function Footer() {
  const {t} = useTranslation("footer");

  return (
    <footer className={footerStyles.cont}>
      <p>{t("footerDesc")}</p>
    </footer>
  );
}

export default Footer;
