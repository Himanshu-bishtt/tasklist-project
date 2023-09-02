import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  {
    name: "Projects",
    href: "https://himanshuu.netlify.app",
    current: false,
  },
];

export default function Header() {
  return (
    <header className="text-white rounded-md mt-5">
      <ul className="flex gap-x-10 justify-center items-center">
        {navigation.map((items, index) => (
          <NavLink
            to={items.href}
            key={`nav-item-${index}`}
            className={({ isActive }) =>
              isActive ? "rounded bg-indigo-900" : ""
            }
          >
            <li className={`py-3 px-2 text-md font-bold`}>{items.name}</li>
          </NavLink>
        ))}
      </ul>
    </header>
  );
}
