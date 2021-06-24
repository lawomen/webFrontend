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
    const locale = e.target.value;
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

  function getMenu(props) {
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
        <a ref={iconItem} className={navStyle.menuIcon} onClick={getMenu}>
          <BiMenuAltRight size={42} />
        </a>
        <ul ref={menuItem} className={navStyle.menu}>
          <li className={navStyle.navitem}>
            {t("cases")}
            <ul className={navStyle.dropdown} aria-label="submenu">
              <li>
                <a href="#">All Cases</a>
              </li>
              <li>
                <a href="#">Case one </a>
              </li>
            </ul>
          </li>
          <li className={navStyle.navitem} aria-haspopup="true">
            {t("expertise")}
            <ul className={navStyle.dropdown} aria-label="submenu">
              <li>
                <a href="#">All Areas</a>
              </li>
              <li>
                <a href="#">Civil Law</a>
              </li>
              <li>
                <a href="#">Civil Law</a>
              </li>
              <li>
                <a href="#">Civil Law</a>
              </li>
            </ul>
          </li>
          <li className={navStyle.navitem} aria-haspopup="true">
            {t("people")}
            <ul className={navStyle.dropdown} aria-label="submenu">
              <li>
                <a href="#">Lawyers</a>
              </li>
              <li>
                <a href="#">Lawomen</a>
              </li>
            </ul>
          </li>
          <li className={navStyle.navitem} aria-haspopup="true">
            {t("blog")}
            <ul className={navStyle.dropdown} aria-label="submenu">
              <li>
                <a href="#">All posts</a>
              </li>
              <li>
                <a href="#">Post One</a>
              </li>
              <li>
                <a href="#">Post Two</a>
              </li>
              <li>
                <a href="#">Post Three</a>
              </li>
            </ul>
          </li>
          <li className={navStyle.navitem}>{t("about")}</li>
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
