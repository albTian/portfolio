'use client';
import { useSession } from "next-auth/react";
import Login from "@components/Login";
import UserDisplay from "@components/UserDisplay";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? <UserDisplay /> : <Login />}
    </main>
  );
}
