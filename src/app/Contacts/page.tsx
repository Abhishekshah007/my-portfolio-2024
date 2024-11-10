import PrevSlideButton from "../components/prevSlideButton/Button";
import "../Contacts/style.css";

export default function Page() {
    return (
        <>
            <div className="prevSlideBtn">
                <PrevSlideButton />
            </div>

            <div className="container mx-auto p-6 mt-10">
                <div className="contact-container flex flex-col items-center gap-4 animate-fadeInUp">
                    <div className="textbox text-5xl font-extrabold text-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 delay-500 animate-fadeIn">
                            Hire Me
                        </span>
                    </div>

                    <form
                        action="https://formspree.io/f/xzzbgzon" 
                        method="POST"
                        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg animate-fadeInUp"
                    >
                        <div className="flex flex-col mb-4">
                            <label htmlFor="name" className="text-lg font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="p-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="email" className="text-lg font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="p-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="subject" className="text-lg font-medium text-gray-700">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                className="p-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="message" className="text-lg font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="p-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            ></textarea>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-lg font-bold rounded-md shadow-md hover:bg-gradient-to-l"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
