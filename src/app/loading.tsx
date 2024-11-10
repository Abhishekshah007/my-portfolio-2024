import load from "../../public/images/load.gif";
import Image from "next/image";

export default function Loading() {
    return (
        <div className="loading">
            <Image src={load} alt="loading" width={100} height={100} />
        </div>
    );
}
