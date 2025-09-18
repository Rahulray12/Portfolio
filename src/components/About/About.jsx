import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from "../../assets/profile2.png";

const About = () => {
    return (
        <section
            id="about"
            className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
        >
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                {/* Left Side */}
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                    {/* Greeting */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                        Hi, I am
                    </h1>
                    {/* Name */}
                    <h2 className="text-4xl sm:text-5xl md:text-5.9xl font-bold text-white mb-4 leading-tight">
                        Rahul Kumar Ray
                    </h2>
                    {/* Skills Heading with Typing Effect */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
                        <span className="text-white">I am a </span>
                        <ReactTypingEffect
                            text={[
                                'Fullstack Developer.',
                                'App Developer.',
                                'UI/UX Designer.',
                                'Power BI Developer.',
                                'Coder.',
                            ]}
                            speed={100}
                            eraseSpeed={50}
                            typingDelay={500}
                            eraseDelay={2200}
                            cursorRenderer={(cursor) => (
                                <span className="text-[#8245ec]">{cursor}</span>
                            )}
                        />
                    </h3>
                    {/* About Me Paragraph */}
                    <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                        I am a passionate full-stack developer currently pursuing my bachelor’s degree.
                        I have hands-on experience in building web applications using the MERN stack and other modern technologies.
                        I focus on developing efficient solutions and creating seamless user experiences through both front-end and back-end development.
                        Eager to learn, grow, and contribute to real-world projects.
                    </p>
                    {/* Resume Button */}
                    <a
                        href="https://drive.google.com/file/d/1k2qPhQmHNhMWSqHTtx7jclwwPjCKxS0P/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}
                    >
                        RESUME
                    </a>

                </div>
                {/* Right Side */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <Tilt
                        className="w-50 h-50 sm:w-60 sm:h-60 md:w-[20rem] md:h-[20rem] border-4 border-purple-700 rounded-full"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <img
                            src={profileImage}
                            alt="RAHUL RAY"
                            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                        />
                    </Tilt>
                </div>
            </div>
        </section>
    );
};

export default About;