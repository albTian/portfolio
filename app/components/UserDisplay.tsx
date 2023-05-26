import { useSession } from "next-auth/react";
import Image from "next/image";

interface User {
  name?: string;
  email?: string;
  image?: string;
}

interface Session {
  user?: User;
  expires?: string;
}

export const UserDisplay = () => {
  const { status, data: session } = useSession();

  
  if (status === "loading") return <p>Loading...</p>;
  
  if (status === "authenticated") {
    const { user, expires } = session as Session;
    return (
      <div>
        <h2>Welcome, {user?.name}</h2>
        <h3>Email: {user?.email}</h3>
        <Image src={user?.image || ""} alt="User avatar" />
        <h4>Session Expires: {expires}</h4>
      </div>
    );
  }
  return null;
};

export default UserDisplay