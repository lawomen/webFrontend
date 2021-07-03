import footerStyles from "./styles/footer.module.css";
import { useTranslation } from "next-i18next";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineClockCircle,
} from "react-icons/ai";
import {
  RiInstagramLine,
  RiFacebookCircleFill,
  RiLinkedinFill,
} from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";

function Footer({content}) {
  const { t } = useTranslation("footer");

  return (
    <footer className={footerStyles.cont}>
      <div className={footerStyles.about}>
        <h3>Firm Logo</h3>
        <p>{content.mission_statement}</p>
        <div className={footerStyles.socials}>
          <a target="_blank" href="https://www.facebook.com/LawomenPk/">
            <RiFacebookCircleFill size={35} />
          </a>
          <a target="_blank" href="https://www.instagram.com/lawomenpk/">
            <RiInstagramLine size={35} />
          </a>
          <a target="_blank" href="https://pk.linkedin.com/company/lawomen">
            <RiLinkedinFill size={35} />
          </a>
        </div>
      </div>

      <div className={footerStyles.infoCont}>
        <h3>{content.info_title}</h3>
        <div className={footerStyles.iconP}>
          <AiOutlinePhone />
          <p>{t("tele")}</p>
        </div>
        <div className={footerStyles.iconP}>
          <AiOutlineMail />
          <p>{t("email")}</p>
        </div>
        <div className={footerStyles.iconP}>
          <IoLocationSharp />
          <p>{t("address")}</p>
        </div>
        <div className={footerStyles.iconP}>
          <AiOutlineClockCircle />
          <p>{t("working_hours")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
