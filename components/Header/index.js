import React from "react";
import styles from "./header.module.css";
import MobMenu from "components/MobMenu";

const hamBefore = `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`;
const hamBeforeActive = `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`;
const hamAfter = `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`;
const hamAfterActive = `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`;

const navigation = [
  {
    name: "About",
    to: "/#about",
  },
  {
    name: "Experience",
    to: "/#experience",
  },
  {
    name: "Projects",
    to: "/#projects",
  },
  {
    name: "Contact",
    to: "/#contact",
  },
];

class Header extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      scrollDirection: "none",
      lastScrollTop: 0,
      isMenuOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => this.handleScroll());
  }

  toggleMenu = () => {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  };

  handleScroll = () => {
    const DELTA = 5;
    const { scrollDirection, lastScrollTop, isMenuOpen } = this.state;
    const { scrollY, innerHeight } = window;
    if (Math.abs(lastScrollTop - scrollY) <= DELTA || isMenuOpen) return;
    if (scrollY < DELTA) {
      this.setState({ scrollDirection: "none" });
    } else if (scrollY > lastScrollTop && scrollY > 100) {
      if (scrollDirection !== "down")
        this.setState({ scrollDirection: "down" });
    } else if (scrollY + innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== "up") this.setState({ scrollDirection: "up" });
    }
    this.setState({ lastScrollTop: scrollY });
  };

  getHeaderStyle = () => {
    const { scrollDirection } = this.state;
    return {
      height: scrollDirection === "none" ? "100px" : "75px",
      boxShadow:
        scrollDirection === "up" ? `0 10px 30px -10px #020c1bb3` : "none",
      transform: `translateY(${scrollDirection === "down" ? "-70px" : "0px"})`,
    };
  };

  getHamburgerStyle = () => {
    const { isMenuOpen } = this.state;
    return (
      <div>
        <style>
          {`
                        .${styles.hamburgerInner}{
                            transition-delay: ${isMenuOpen ? "0.12s" : "0s"};
                            transform: rotate(${
                              isMenuOpen ? "225deg" : "0deg"
                            })!important;
                            transition-timing-function: cubic-bezier(${
                              isMenuOpen
                                ? "0.215, 0.61, 0.355, 1"
                                : "0.55, 0.055, 0.675, 0.19"
                            });
                        }
                        .${styles.hamburgerInner}::before{
                            width:${isMenuOpen ? "100%" : "120%"};
                            top:${isMenuOpen ? "0" : "-10px"};
                            opacity:${isMenuOpen ? "0" : "1"};
                            transition:${
                              isMenuOpen ? hamBeforeActive : hamBefore
                            };
                        }
                        .${styles.hamburgerInner}::after{
                            width:${isMenuOpen ? "100%" : "80%"};
                            bottom:${isMenuOpen ? "0" : "-10px"};
                            transform:rotate(${isMenuOpen ? "-90deg" : "0"});
                            transition:${
                              isMenuOpen ? hamAfterActive : hamAfter
                            };
                        }
                `}
        </style>
      </div>
    );
  };

  render() {
    const { isMenuOpen } = this.state;
    return (
      <header
        id="Header"
        className={styles.header}
        style={this.getHeaderStyle()}
      >
        <nav>
          <div className={styles.logo}>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 84 96"
                width="42"
                height="42"
              >
                <title>Logo</title>
                <g id="Logo" transform="translate(-8.000000, -2.000000)">
                  <g transform="translate(11.000000, 5.000000)">
                    <polygon
                      id="Shape"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points="39 0 0 22 0 67 39 90 78 68 78 23"
                    />
                  </g>
                </g>
              </svg>
              <span>V</span>
            </a>
          </div>
          <div
            role="button"
            className={styles.hamburger}
            aria-label="Menu"
            onClick={() => this.toggleMenu()}
          >
            {this.getHamburgerStyle()}
            <div className={styles.hamburgerBox}>
              <div className={styles.hamburgerInner}></div>
            </div>
          </div>
          <div className={styles.links}>
            <ol className={styles.linkOl}>
              {navigation.map(({ name, to }) => (
                <li key={name} className="text-base">
                  <a href={to} className={styles.linkAnchor}>
                    {name}
                  </a>
                </li>
              ))}
            </ol>
            <a href="/VipulResume.pdf">
              <div className={styles.resumeButton}>Resume</div>
            </a>
          </div>
          {isMenuOpen && (
            <MobMenu
              isMenuOpen={isMenuOpen}
              toggleMenu={this.toggleMenu}
              links={navigation}
            />
          )}
        </nav>
      </header>
    );
  }
}

export default Header;
