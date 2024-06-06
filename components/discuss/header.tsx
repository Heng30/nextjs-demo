import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";
import DiscussPaths from "@/components/discuss/paths";
import HeaderAuth from "@/components/discuss/header-auth";

export default async function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand className="gap-8">
        <Link className="font-bold text-xl" href="/">
          Home
        </Link>
        <Link className="font-bold text-xl" href={DiscussPaths.home()}>
          Discuss
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder="Search" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
