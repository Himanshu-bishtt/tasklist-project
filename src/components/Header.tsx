const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Projects", href: "https://himanshuu.netlify.app", current: false },
];

export default function Header() {
  return (
    <header className="text-white rounded-md">
      <ul className="flex gap-x-10 justify-center items-center">
        {navigation.map((items, index) => (
          <a href={items.href}>
            <li
              key={`nav-item-${index}`}
              className={`text-md font-bold ${
                items.current ? "py-3 px-2 rounded bg-indigo-900" : ""
              }`}
            >
              {items.name}
            </li>
          </a>
        ))}
      </ul>
    </header>
  );
}
