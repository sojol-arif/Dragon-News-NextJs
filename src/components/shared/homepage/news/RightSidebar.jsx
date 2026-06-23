'use client';

import { authClient } from "@/lib/auth-client";
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightSidebar = () => {
    const handleLoginWithGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

        console.log(data, 'data from google sign in');
    }
    const handleLoginWithGithub = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });

        console.log(data, 'data from github sign in');
    }

    return (
        <div className="">
            <h2 className="text-[20px]">Login with</h2>
            <div className="flex flex-col gap-2 mt-4">
                <button className="btn border-blue-500 text-blue-500" onClick={handleLoginWithGoogle}><FaGoogle />Login with Google</button>
                <button className="btn" onClick={handleLoginWithGithub}><FaGithub /> Login with github</button>
            </div>
        </div>
    );
};

export default RightSidebar;