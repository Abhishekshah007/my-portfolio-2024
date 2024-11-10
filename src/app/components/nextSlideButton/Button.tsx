"use client";
import { useRouter } from "next/navigation";

interface url {
    urlPath: string
}
export default function NextSlideButton({urlPath: urlPath}: url) {
    const router = useRouter();

    return (
        <button onClick={()=>router.push(urlPath)}
            className="nextSlide p-0"        >
           ▶️
        </button>
    );
}