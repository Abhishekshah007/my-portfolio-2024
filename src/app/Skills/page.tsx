"use client";
import PrevSlideButton from '@/app/components/prevSlideButton/Button';
import NextSlideButton from '@/app/components/nextSlideButton/Button';
import { useEffect } from 'react';
import '@/app/Skills/style.css';
export default function Page() {
    // Array to structure the skills data
    const skills = {
        Frontend: ["HTML5", "PHP", "WORDPRESS", "JAVASCRIPT", "REACT.JS", "NEXT.JS", "FLUTTER", "ANDROID"],
        Backend: ["PHP", "EXPRESS.JS", "NEXT.JS", "WORDPRESS", "NODE.JS"],
        Database: ["MYSQL", "MONGODB", "FIREBASE", "APPWRITE"],
        Ongoing: ["C#","DOCKER", "PROMPT ENGINEERING"],
    };

    // Adding a CSS animation for 3D effect and hovering
    useEffect(() => {
        // Dynamically add hover and animation effects
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach(card => {
            card.addEventListener('mouseover', () => card.classList.add('hover-effect'));
            card.addEventListener('mouseout', () => card.classList.remove('hover-effect'));
        });
    }, []);

    return (
        <>
            <div className="prevSlideBtn">
                <PrevSlideButton />
            </div>

            <div className="nextSlideBtn">
                <NextSlideButton urlPath="/Certification" />
            </div>

            <div className="container mx-auto p-8">
                {/* Title with Animation */}
                <div className="textbox text-5xl font-extrabold text-center mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 delay-500 animate-bounce">
                        Skill Pool
                    </span>
                </div>

                {/* Skill Categories */}
                {Object.entries(skills).map(([category, skillArray]) => (
                    <div key={category} className="skill-category mb-12">
                        <h2 className="text-3xl font-bold text-blue-500 mb-4 animate-fadeIn">{category}</h2>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                            {skillArray.map((skill) => (
                                <div key={skill} className="skill-card text-center p-4 shadow-lg transform transition-all duration-500 ease-in-out animate-slideUp">
                                    <span className=" font-semibold bg-gradient-to-r from-green-400 to-blue-600 text-white p-2 rounded-lg shadow-lg">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Styling with animations */}
            <style jsx>{`
                .skill-card {
                    perspective: 1000px;
                    transform-style: preserve-3d;
                    background-color: white;
                    border-radius: 0.75rem;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                }

                .skill-card:hover {
                    transform: rotateY(10deg) rotateX(5deg) scale(1.05);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
                }

                /* Animation Keyframes */
                @keyframes slideUp {
                    from { transform: translateY(50px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                /* Tailwind Custom Animation */
                .animate-fadeIn { animation: fadeIn 0.6s ease-in-out; }
                .animate-slideUp { animation: slideUp 0.8s ease-in-out; }
                .animate-bounce { animation: bounce 1s infinite; }
            `}</style>
        </>
    );
}

