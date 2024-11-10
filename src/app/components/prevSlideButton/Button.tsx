"use client"
import {useRouter} from 'next/navigation'
export default function PrevSlideButton() {
    const router = useRouter();
    return (
        <button
            className="prevSlide p-0"
            onClick={() => router.back()}
        >
            ◀️
        </button>
    )
}