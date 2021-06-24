import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import navStyle from "./styles/nav.module.css";
import { BiMenuAltRight } from "react-icons/bi";

import { useTranslation } from "next-i18next";

function Nav() {
  const navItem = useRef(null);
  const menuItem = useRef(null);
  const iconItem = useRef(null);
  const langComp = useRef(null);
  const [openNav, changeOpenNav] = useState(false);
  
  const router = useRouter();
  const locale = router.locale;
  const { t, i18n } = useTranslation("nav");


  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    document.body.dir = i18n.dir();
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  function handleLang(e) {
    const locale = e.target.value
    router.push("", "", { locale });
  }

  function checkScroll() {
    if (typeof window !== undefined && langComp.current && navItem.current) {
      if (window.scrollY > 100) {
        navItem.current.className = navStyle.nav + " " + navStyle.scrolledNav;
        langComp.current.style.color = "black";
      } else {
        navItem.current.className = navStyle.nav;
        langComp.current.style.color = "white";
      }
    }
  }

  function getDropDown(props) {
    if (openNav) {
      menuItem.current.className = navStyle.menu;
      iconItem.current.style.color = "";
    } else {
      menuItem.current.className = navStyle.menu + " " + navStyle.menuResp;
      iconItem.current.style.color = "white";
    }
    changeOpenNav((prev) => !prev);
  }

  return (
    <nav className={navStyle.cont}>
      <div ref={navItem} className={navStyle.nav}>
        <div className={navStyle.logo}>
          {/* <Image width={144} height={75} src='" alt='LaWomen Logo' /> */}
        </div>
        <a ref={iconItem} className={navStyle.menuIcon} onClick={getDropDown}>
          <BiMenuAltRight size={42} />
        </a>
        <ul ref={menuItem} className={navStyle.menu}>
          <li>{t("cases")}</li>
          <li>{t("expertise")}</li>
          <li>{t("people")}</li>
          <li>{t("blog")}</li>
          <li>{t("about")}</li>
        </ul>
        <div className={navStyle.langCont}>
          <select
            ref={langComp}
            className={navStyle.lang}
            defaultValue={locale}
            onChange={handleLang}
            aria-label="Language selector"
          >
            <option value="en">EN</option>
            <option value="ur">UR</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
