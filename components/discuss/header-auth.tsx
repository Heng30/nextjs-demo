"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import * as actions from "@/components/actions";
import {
  Button,
  Popover,
  NavbarItem,
  PopoverContent,
  PopoverTrigger,
  Avatar,
} from "@nextui-org/react";

export default function HeaderAuth() {
  const session = useSession();
  const [isSignOut, setIsSignOut] = useState(false);

  if (session.status === "loading") return null;

  return !isSignOut && session.data?.user ? (
    <Popover placement="left">
      <div className="flex gap-4 items-center">
        <PopoverTrigger>
          <Avatar
            src={session.data.user.image || ""}
            size="sm"
            alt="github avatar"
          ></Avatar>
        </PopoverTrigger>
        <div>{session.data.user.name}</div>
      </div>

      <PopoverContent>
        <div className="p-4">
          <form
            action={async () => {
              await actions.signOut();
              session.update();
              setIsSignOut(true);
            }}
          >
            <Button type="submit" color="secondary" variant="flat">
              Sign Out
            </Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  ) : (
    <NavbarItem className="flex gap-4 text-xl items-center">
      <form
        action={async () => {
          await actions.signIn();
        }}
      >
        <Button type="submit" color="secondary" variant="bordered">
          Sign In
        </Button>
      </form>
      <form
        action={async () => {
          await actions.signIn();
        }}
      >
        <Button type="submit" color="primary" variant="flat">
          Sign Up
        </Button>
      </form>
    </NavbarItem>
  );
}
