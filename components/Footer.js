import Image from "next/image";
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

function Footer({ content }) {
  const { t } = useTranslation("footer");
  return (
    <footer className={footerStyles.cont}>
      <div className={footerStyles.footerLogo}>
        <Image
          layout="fill"
          objectFit="contain"
          priority
          src="/emblem1.svg"
          alt="LaWomen Logo"
        />
      </div>
      <div className={footerStyles.socials}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/LawomenPk/"
        >
          <RiFacebookCircleFill size={35} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/lawomenpk/"
        >
          <RiInstagramLine size={35} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pk.linkedin.com/company/lawomen"
        >
          <RiLinkedinFill size={35} />
        </a>
      </div>
      <p className={footerStyles.missionP}>{content.mission_statement}</p>
      <div className={footerStyles.infoCont}>
        <h3>{content.info_title}</h3>
        <div className={footerStyles.iconP}>
          <AiOutlinePhone />
          <p>{t("tele")} {content.info_title}</p>
        </div>
        <div className={footerStyles.iconP}>
          <AiOutlineMail />
          <p>{t("email")} {content.info_title}</p>
        </div>
        <div className={footerStyles.iconP}>
          <IoLocationSharp />
          <p>{t("address")} {content.info_title}</p>
        </div>
        <div className={footerStyles.iconP}>
          <AiOutlineClockCircle />
          <p>{t("working_hours")} {content.info_title}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
