import Link from "next/link";
import Icon from "./Icon";
import NavLink from "./NavLink";

export default function Navigation() {
  return (
    <div className="border-spacing-1 border-aqua w-full h-auto border-b-2 flex justify-end relative px-32 py-6">
      <div className="absolute top-1 left-32">
        <Link href="/">
          <Icon
            fill="#9fffcb"
            hoverFill="#9fffcb"
            hoverFill2="#fff"
            fill2="#004e64"
            height={70}
            width={70}
            scale={1.4}
          />
        </Link>
      </div>
      <div className="flex">
        <NavLink text="about" href="/about" />
        <NavLink text="skills" href="/skills" />
        <NavLink text="projects" href="/projects" />
        <NavLink text="articles" href="/articles" />
      </div>
    </div>
  );
}
