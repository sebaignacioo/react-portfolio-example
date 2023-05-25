import {
  HiOutlineHome,
  HiOutlineQuestionMarkCircle,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import {
  SiDiscord,
  SiGithub,
  SiLinkedin,
  SiReact,
  SiTwitter,
} from "react-icons/si";

const HeaderLinks = [
  {
    name: "Home",
    href: "/",
    Icon: HiOutlineHome,
  },
  {
    name: "About",
    href: "/about",
    Icon: HiOutlineQuestionMarkCircle,
  },
  {
    name: "Contact",
    href: "/contact",
    Icon: HiOutlineEnvelope,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "#",
    Icon: SiGithub,
  },
  {
    name: "Twitter",
    href: "#",
    Icon: SiTwitter,
  },
  {
    name: "Discord",
    href: "#",
    Icon: SiDiscord,
  },
  {
    name: "linkedin",
    href: "#",
    Icon: SiLinkedin,
  },
];

export default function Header() {
  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {HeaderLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="flex gap-x-2">
                  {link.Icon && <link.Icon className="w-6 h-6" />}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="/"
          className="flex gap-x-2 items-center normal-case text-2xl text-primary-content"
        >
          <SiReact /> Portafolio en React
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {HeaderLinks.map((link) => (
            <li key={link.name} className="text-primary-content/80 group">
              <a
                href={link.href}
                className="flex gap-x-2 group-hover:text-primary-content"
              >
                {link.Icon && (
                  <link.Icon className="w-6 h-6 group-hover:text-primary-content" />
                )}
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {socialLinks.map((link) => (
            <li key={link.name} className="text-primary-content/80 group">
              <a href={link.href}>
                {link.Icon && (
                  <link.Icon className="w-6 h-6 group-hover:text-primary-content" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
