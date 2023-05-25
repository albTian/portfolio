"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

// protecting a client page

const AboutPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
        console.log("UNAUTHENTICATED!!")
        redirect("/")
    },
  });
  return (
    <div>
      <div>about page!</div>
    </div>
  );
};

export default AboutPage;
