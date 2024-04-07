"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { RegisterDialog } from "./register-btn";
import { LoginDialog } from "./login-btn";

import { useCounterStore } from "@/providers/counter-store-provider";
import { handleGetCurrentUser } from "@/services/user";
import { useEffect } from "react";

const NavBar = () => {
  const { user, removeUser } = useCounterStore((state) => state);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Tramdot</span>
          </a>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/projects"
            >
              Projects
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/artists"
            >
              Artists
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/items"
            >
              Items
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between md:justify-end">
          {user ? (
            <div className="flex gap-4 items-center">
              <h6>Chào {user.first_name}</h6>
              <Button onClick={() => removeUser()}>Logout</Button>
            </div>
          ) : (
            <nav className="flex items-center gap-4">
              <LoginDialog />
              <RegisterDialog />
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
