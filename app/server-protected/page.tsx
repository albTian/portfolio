import { getServerSession } from "next-auth/next";

const ServerProtectedPage = async () => {
    const session = await getServerSession();
    if (!session) {
        return <div>can't view, I'm protected</div>
    } else {
        return <div>logged in, can view!</div>
    }
}

export default ServerProtectedPage