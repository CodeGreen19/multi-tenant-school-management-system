"use client";

import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function HomeNav() {
  return (
    <nav className="border-b">
      <div className="h-20 max-w-6xl m-auto flex items-center justify-between px-4">
        <Logo />
        <AuthButtons />
      </div>
    </nav>
  );
}

function AuthButtons() {
  return (
    <div className="flex  gap-1 items-center">
      <Link href={"/auth/sign-up"}>
        <Button variant={"outline"} className="">
          Sign Up
        </Button>
      </Link>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="">Sign In</Button>
        </DialogTrigger>
        <DialogContent className="top-[40%] min-h-[300px] p-8 md:p-10">
          <DialogHeader>
            <DialogTitle className="text-xl">
              Search by institution or domain
            </DialogTitle>
            <DialogDescription>
              your instituion is in a seperate domain. Hence, navigate to your
              domain and then login
            </DialogDescription>
          </DialogHeader>
          <SearchInput />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function SearchInput() {
  const [search, setSearch] = useState("");
  return (
    <div className="h-[350px]">
      <Input
        placeholder="Search here..."
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="mt-2">
        {["", "", "", ""].map((item, i) => (
          <li key={i} className="border-b pb-3 pt-2 last:border-none">
            <h1 className="">Darussunnah islamia madrasha</h1>
            <Badge variant={"outline"}>slug.domain.com</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
