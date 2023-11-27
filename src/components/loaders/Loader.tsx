import Image from "next/image";
import { BiLoaderAlt } from "react-icons/bi";

export default function Loader() {
    return (
        <div className="flex w-full h-full items-center justify-center">
            <BiLoaderAlt className="animate-spin text-5xl text-indigo-400" />
        </div>
    );
}

export function MainLoader() {
    return (
        <div className="flex animate-pulse w-screen h-screen items-center justify-center">
            <Image
                src="/images/vercel.svg"
                width={120}
                height={50}
                alt="Company"
            />
        </div>
    );
}
