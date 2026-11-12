"use client";

import { useEffect, useState } from "react";
import logoIcon from "../logo-icon.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#work", label: "Our Work" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`.trim()}>
      <div className="container nav-inner">
        <a href="#" className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoIcon.src} alt="Logo Primatama Promotion" className="brand-logo" />
          <span className="brand-text">
            PRIMATAMA
            <small>PROMOTION</small>
          </span>
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </div>

        <button
          className="mobile-toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={close}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
