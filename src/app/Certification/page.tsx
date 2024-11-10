import Image from "next/image";
import "../Certification/style.css";
import PrevSlideButton from "../components/prevSlideButton/Button";
import NextSlideButton from "../components/nextSlideButton/Button";
import Cert1 from "../../../public/images/cert-csharp.png";
import Cert2 from "../../../public/images/cert-prompt.png";

// Sample certifications array for display
const certifications = [
    {
        id: 1,
        title: "Foundational C# Certification",
        issueDate: "November 2024",
        description: "From completing the Foundational C# with Microsoft certification, I've gained a solid grasp of core C# concepts, like working with data types, object-oriented programming principles, control structures, classes, inheritance, polymorphism, exception handling, collections, and some fundamental data structures.\nMy next step will be diving into advanced C# topics such as LINQ (Language Integrated Query), asynchronous programming with async/await, working with APIs, and exploring .NET libraries for more practical application. ",
        imageUrl: Cert1
    },
    {
        id: 2,
        title: "Prompt Design in Vertex AI Skill Badge",
        issueDate: "October 2024",
        description: "Learn how to design and deploy machine learning models in Vertex AI.",
        imageUrl: Cert2
    },
    // Add more certificates as needed
];

export default function Page() {
    return (
        <>
            <div className="prevSlideBtn">
                <PrevSlideButton />
            </div>
            <div className="container mx-auto p-8">
                {/* Title with Animation */}
                <div className="textbox text-5xl font-extrabold text-center mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 delay-500 animate-bounce">
                        Recent Certifications
                    </span>
                </div>

                {/* Certifications List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
                    {certifications.map((cert) => (
                        <div key={cert.id} className="cert-card hover:shadow-2xl transition-transform transform hover:scale-105 bg-white rounded-lg overflow-hidden flex flex-col items-center min-h-[400px]">
                            <Image
                                src={cert.imageUrl}
                                alt={`${cert.title} certificate`}
                                width={300}
                                height={200}
                                className="w-full object-cover"
                            />
                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-blue-600">{cert.title}</h3>
                                    <p className="text-gray-500 text-sm">{cert.issueDate}</p>
                                </div>
                                <p className="text-gray-700 mt-4">{cert.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="nextSlideBtn">
                <NextSlideButton urlPath="/Projects" />
            </div>
        </>
    );
}
