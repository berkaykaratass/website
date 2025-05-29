import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const buttons = document.querySelectorAll(".navbar-button");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const target = e.currentTarget as HTMLElement;
          const section = target.getAttribute("data-href");
          if (section) {
            smoother.scrollTo(section, true, "top top");
          }
        }
      });
    });

    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          {/* Logo veya isim gelebilir */}
        </a>
        <a
          href="mailto:berkaykaratas@stu.khas.edu.tr"
          className="navbar-connect"
          data-cursor="disable"
        >
          berkaykaratas@stu.khas.edu.tr
        </a>
        <ul>
          <li>
            <button className="navbar-button button" data-href="#about">
              <span className="button-content">ABOUT</span>
            </button>
          </li>
          <li>
            <button className="navbar-button button" data-href="#work">
              <span className="button-content">WORK</span>
            </button>
          </li>
          <li>
            <button className="navbar-button button" data-href="#contact">
              <span className="button-content">CONTACT</span>
            </button>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;