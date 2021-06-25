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

function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className={footerStyles.cont}>
      <div className={footerStyles.about}>
        <h3>Firm Logo</h3>
        <p>Mission Statement: {t("footerDesc")}</p>
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
        <h3>Office Info</h3>
        <div className={footerStyles.iconP}>
          <AiOutlinePhone />
          <p>Tele: </p>
        </div>
        <div className={footerStyles.iconP}>
          <AiOutlineMail />
          <p>Email: </p>
        </div>
        <div className={footerStyles.iconP}>
          <IoLocationSharp />
          <p>Address</p>
        </div>
        <div className={footerStyles.iconP}>
          <AiOutlineClockCircle />
          <p>Working Hours</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
