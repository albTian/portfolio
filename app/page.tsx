'use client';
import { useSession } from "next-auth/react";
import Login from "@components/Login";
import UserDisplay from "@components/UserDisplay";
import Navbar from "@components/NavBar";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="min-h-screen flex flex-col">
      <div>stuff</div>
      {/* Other elements can go here */}
    </main>
  );
}
