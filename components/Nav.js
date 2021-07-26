import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import navStyle from "./styles/nav.module.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";

import { useTranslation } from "next-i18next";

function Nav() {
  const navItem = useRef(null);
  const menuItem = useRef(null);
  const iconItem = useRef(null);
  const langComp = useRef(null);
  const [openNav, changeOpenNav] = useState(false);
  const [fullLogo, updateLogoType] = useState(false);

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
        updateLogoType(true);
      } else {
        navItem.current.className = navStyle.nav;
        langComp.current.style.color = "white";
        updateLogoType(false);
      }
    }
  }

  function getMenu() {
    if (openNav) {
      menuItem.current.className = navStyle.menu;
      iconItem.current.style.color = "";
    } else {
      menuItem.current.className = navStyle.menu + " " + navStyle.menuResp;
      iconItem.current.style.color = "white";
    }
    changeOpenNav((prev) => !prev);
  }

  function getSubmenu(e) {
    if (
      e.target.className ===
      navStyle.navitem + " " + navStyle.submenuActive
    ) {
      e.target.className = navStyle.navitem;
    } else if (e.target.className === navStyle.navitem) {
      e.target.className = navStyle.navitem + " " + navStyle.submenuActive;
    } else if (e.target.parentElement.className === navStyle.navitem) {
      e.target.parentElement.className =
        navStyle.navitem + " " + navStyle.submenuActive;
    } else if (
      e.target.parentElement.className ===
      navStyle.navitem + " " + navStyle.submenuActive
    ) {
      e.target.parentElement.className = navStyle.navitem;
    } else if (
      e.target.tagName === "svg" &&
      e.target.parentElement.parentElement.className === navStyle.navitem
    ) {
      e.target.parentElement.parentElement.className =
        navStyle.navitem + " " + navStyle.submenuActive;
    } else if (
      e.target.tagName === "svg" &&
      e.target.parentElement.parentElement.className ===
        navStyle.navitem + " " + navStyle.submenuActive
    ) {
      e.target.parentElement.parentElement.className = navStyle.navitem;
    }
  }

  return (
    <nav className={navStyle.cont}>
      <div ref={navItem} className={navStyle.nav}>
        <div className={navStyle.logo}>
          <Link href="/">
            {fullLogo ? (
              <Image
                layout="fill"
                objectFit="contain"
                priority
                src="/emblem2.svg"
                alt="LaWomen Logo"
              />
            ) : (
              <Image
                layout="fill"
                objectFit="contain"
                priority
                src="/emblem1.svg"
                alt="LaWomen Logo"
              />
            )}
          </Link>
        </div>

        <div ref={iconItem} className={navStyle.menuIcon} onClick={getMenu}>
          <HiOutlineMenuAlt3 size={42} />
        </div>
        <div className={navStyle.mainNavCont}>
          <ul ref={menuItem} className={navStyle.menu}>
            <li className={navStyle.navitem}>
              <Link href="/lawyers">{t("advocate")}</Link>
            </li>
            <li
              className={navStyle.navitem}
              aria-haspopup="true"
              onClick={getSubmenu}
            >
              <p>
                {t("services")} <BiChevronDown size={23} />
              </p>
              <ul className={navStyle.dropdown} aria-label="submenu">
                <li>
                  <Link href="/services#paid">{t("paid")}</Link>
                </li>
                <li>
                  <Link href="/services#community">{t("free")}</Link>
                </li>
                <li>
                  <Link href="/services">{t("advice")}</Link>
                </li>
              </ul>
            </li>
            <li
              className={navStyle.navitem}
              aria-haspopup="true"
              onClick={getSubmenu}
            >
              <p>
                {t("people")} <BiChevronDown size={23} />
              </p>
              <ul className={navStyle.dropdown} aria-label="submenu">
                <li>
                  <Link href="/people#lawomen">{t("lawomenTeam")}</Link>
                </li>
                <li>
                  <Link href="/lawyers">{t("lawyers")}</Link>
                </li>
                <li>
                  <Link href="/people#firms">{t("firms")}</Link>
                </li>
                <li>
                  <Link href="/people#fellows">{t("fellows")}</Link>
                </li>
                <li>
                  <Link href="/apply">{t("joinPeople")}</Link>
                </li>
              </ul>
            </li>
            <li className={navStyle.navitem}>
              <Link href="/blog">{t("blog")}</Link>
            </li>
            <li
              className={navStyle.navitem}
              aria-haspopup="true"
              onClick={getSubmenu}
            >
              <p>
                {t("about")} <BiChevronDown size={23} />{" "}
              </p>
              <ul className={navStyle.dropdown} aria-label="submenu">
                <li>
                  <Link href="/about">{t("aboutUs")}</Link>
                </li>
                <li>
                  <Link href="/patrons">{t("patrons")}</Link>
                </li>
                <li>
                  <Link href="/photos">{t("gallery")}</Link>
                </li>
              </ul>
            </li>
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
      </div>
    </nav>
  );
}

export default Nav;
