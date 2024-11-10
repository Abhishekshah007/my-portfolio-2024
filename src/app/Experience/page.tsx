import "../Experience/style.css";
import PrevSlideButton from "../components/prevSlideButton/Button";
import NextSlideButton from "../components/nextSlideButton/Button";
import Image from "next/image";
import me from "../../../public/images/bo.png";

export default function Page() {
    return (
        <>
            <div className="prevSlideBtn">
                <PrevSlideButton />
            </div>

            <div className="nextSlideBtn">
                <NextSlideButton urlPath="/Contacts" />
            </div>

            <div className="container mx-auto p-6 mt-10">
                <div className="containerBox flex flex-row items-center gap-4 animate-fadeInUp">
                    <Image
                        src={me}
                        alt="Illustration of working on a computer"
                        width={500}
                        height={500}
                        className="image animate-bounce"
                    />
                    <div className="textbox text-5xl font-extrabold text-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 delay-500 animate-fadeIn">
                            My&nbsp;
                        </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 delay-700 animate-fadeIn">
                             Work Experience
                        </span>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="experience-container mt-10">
                    <div className="experience-card animate-fadeInUp">
                        <h3 className="text-3xl font-semibold mb-2">Fullstack Developer</h3>
                        <p className="text-xl font-bold text-gray-500 mb-4">Applied Forensic Research Science</p>
                        <p className="text-lg mb-4">March 2021 - October 2024 | Indore, MP</p>
                        <ul className="list-disc list-inside text-md text-gray-700">
                            <li>Developed and managed the organization&apso;s official website using React.js, MongoDB, and Express.js.</li>
                            <li>Built and integrated a custom Content Management System, allowing efficient content updates and management.</li>
                            <li>Set up and managed ad monetization on the website, generating consistent ad revenue for the company.</li>
                            <li>Crafted an SEO strategy and intuitive interface to achieve prominent rankings across top browser platforms.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
