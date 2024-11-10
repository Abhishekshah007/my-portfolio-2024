import "@/app/Home/style.css";
import Image from "next/image";
import onComputer from "../../../public/images/onComp.png";
import { SocialIcon } from "react-social-icons";
import NextSlideButton from "../components/nextSlideButton/Button";
export default function Home() {
    return (
        <>
            <div className="nextSlideBtn">

                <NextSlideButton urlPath="/Skills" />

            </div>
            <div className="container mx-auto p-8">

                <div className="socialLinks">
                    <SocialIcon url="https://github.com/Abhishekshah007/" bgColor="black" fgColor="white" />
                    <SocialIcon url="https://www.linkedin.com/in/abhishek-shah007/" bgColor="black" fgColor="white" />
                    <SocialIcon url="mailto:abhishekshah03737@gmail.com" bgColor="black" fgColor="white" />
                </div>
                {/* Main Introduction Section */}
                <div className="containerBox flex flex-col items-center gap-4 animate-fadeInUp">
                    <div className="textbox text-5xl font-extrabold text-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 delay-500 animate-fadeIn">
                            Hello, I&apos;m Abhishek Shah,
                        </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 delay-700 animate-fadeIn">
                            I&apos;m a Fullstack Developer
                        </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 delay-900 animate-fadeIn">
                            Based in India.
                        </span>
                    </div>
                    <Image
                        src={onComputer}
                        alt="Illustration of working on a computer"
                        width={500}
                        height={500}
                        className="image"
                    />
                </div>

                <div className="flex flex-row text-justify align-top content-between flex-wrap">
                    {/* Quick Facts Section */}
                    <div className="quick-facts mt-16 text-justify animate-fadeInLeft">
                        <h2 className="text-3xl font-bold mb-4 text-blue-500">Quick Facts</h2>
                        <ul className="facts-list space-y-2 text-yellow-50">
                            <li>🌐 Passionate about creating dynamic web applications</li>
                            <li>💼 Experienced in Next.js, React, MongoDB, and Appwrite</li>
                            <li>🚀 Aim: To master scalable backend systems and frontend dynamics</li>
                            <li>📖 Learning: .NET, Docker, Kubernetes</li>
                            <li>🎓 Fun Fact: I can give life changing advices on any topic.</li>
                        </ul>
                    </div>

                    {/* Timeline / Journey Section */}
                    <div className="timeline mt-16 text-center animate-fadeInRight">
                        <h2 className="text-3xl font-bold mb-4 text-blue-500 text-left">My Journey in Tech</h2>
                        <ul className="timeline-list list-none text-left mx-auto max-w-xl space-y-2 text-yellow-50">
                            <li><strong>2020</strong> - Started with HTML and CSS, building static web pages</li>
                            <li><strong>2021</strong> - Learned PHP and MySQL, started developing dynamic web applications</li>
                            <li><strong>2022</strong> - Explored the MERN stack and worked on full-stack projects</li>
                            <li><strong>2023</strong> - Expanded into development with Flutter and Next.js</li>
                            <li><strong>2024</strong> - Exploring Docker, Kubernetes, and Generative AI for future projects</li>
                        </ul>
                    </div>


                </div>

                {/* Favorite Quote Section */}
                <div className="quote mt-16 text-center max-w-lg mx-auto animate-fadeInUp delay-1500">
                    <h2 className="text-3xl font-bold mb-4 text-blue-500">Favorite Quote</h2>
                    <p className="italic text-lg text-gray-600">
                        “Continuous learning and collaboration are keys to success in tech.”
                    </p>
                </div>
            </div>
        </>
    );
}
