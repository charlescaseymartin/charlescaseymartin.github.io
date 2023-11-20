import Link, { LinkProps } from "next/link";

type NavbarLinkType = {
  title: string;
  href: string;
}

function NavbarLink({ title, href }: NavbarLinkType & LinkProps) {
  return <Link className="p-6 lg:px-8" href={href}>{title}</Link>;
}

export default function Navbar() {
  return (
    <header>
      <nav className="mx-auto flex max-w-4xl md:h-[70px] items-center justify-between">
        <NavbarLink title="Home" href="/" />
        <NavbarLink title="About" href="/about" />
        <NavbarLink title="Services" href="/services" />
        <NavbarLink title="Projects" href="/projects" />
        <NavbarLink title="Blog" href="/blog" />
        <NavbarLink title="Contact" href="/contact" />
      </nav>
    </header>
  )
}