import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaBlog,
} from "react-icons/fa";
const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          // `https://www.googleapis.com/youtube/v3/search?key=API_KEY&part=snippet,id&order=date&maxResults=5`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setVideos(data.items);
      } catch (err) {
        setError(true);
        console.error("Failed to fetch videos:", err);
      }
    };

    fetchVideos();
  }, []);

  const handleNextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleSwipe = (direction) => {
    if (direction === "left") {
      handleNextVideo();
    } else if (direction === "right") {
      handlePrevVideo();
    }
  };

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    const handleTouchMove = (e) => {
      const touchEndX = e.touches[0].clientX;
      if (touchStartX > touchEndX + 50) {
        handleSwipe("left");
        document.removeEventListener("touchmove", handleTouchMove);
      } else if (touchStartX < touchEndX - 50) {
        handleSwipe("right");
        document.removeEventListener("touchmove", handleTouchMove);
      }
    };
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", () => {
      document.removeEventListener("touchmove", handleTouchMove);
    });
  };

  const handleMouseDown = (e) => {
    const touchStartX = e.clientX;
    const handleMouseMove = (e) => {
      const touchEndX = e.clientX;
      if (touchStartX > touchEndX + 50) {
        handleSwipe("left");
        document.removeEventListener("mousemove", handleMouseMove);
      } else if (touchStartX < touchEndX - 50) {
        handleSwipe("right");
        document.removeEventListener("mousemove", handleMouseMove);
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMove);
    });
  };
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 lg:px-20 mt-10">
        <div className="max-w-xl text-center lg:text-left space-y-6">
          <p className="text-xl font-medium">Hey, I'm YOUR_GOOD_NAME 👋</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold">
            <span className="text-purple-600">Full Stack Developer</span> & Web
            Pentester
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Passionate about coding, web security, and ethical hacking. I build
            secure and optimized web applications while exploring cybersecurity
            vulnerabilities.
          </p>
          <button
            className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all"
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </button>
        </div>
        <div className="relative mt-10 lg:mt-0 flex justify-center">
          <div className="w-48 h-48 lg:w-64 lg:h-64 border-4 border-purple-600 rounded-full flex items-center justify-center p-2 shadow-lg bg-gray-200 dark:bg-gray-700">
            {/* Try loading the image, show fallback if not available */}
            <img
              src="/your-uploaded-image.png" // Replace with your actual image path
              alt="Your_Good_NAme"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => (e.target.style.display = "none")} // Hide image if it fails to load
            />
            <span className="absolute text-gray-500 text-lg font-medium">
              Image Hidden for Privacy
            </span>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
  
  
  
      {/* <section className="px-4 lg:px-20 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          My Latest YouTube Videos
        </h2>
        {error ? (
          <p className="text-lg text-red-500 text-center">
            Unable to fetch YouTube videos at the moment. Please check back
            later!
          </p>
        ) : videos.length > 0 ? (
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentVideo * 100}%)` }}
              onTouchStart={handleTouchStart}
              onMouseDown={handleMouseDown}
            >
              {videos.map((video, index) => (
                <div
                  key={video.id.videoId}
                  className="min-w-full flex justify-center"
                >
                  <div className="relative border border-gray-300 rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
                    <iframe
                      width="100%"
                      height="auto"
                      style={{ aspectRatio: "16/9" }}
                      src={`https://www.youtube.com/embed/${
                        video.id.videoId
                      }?autoplay=${currentVideo === index ? 1 : 0}`}
                      title={video.snippet.title}
                      frameBorder="0"
                      allowFullScreen
                      className="rounded-lg w-full"
                      onLoad={() => {
                        if (currentVideo !== index) {
                          const iframe = document.querySelector("iframe");
                          if (iframe) {
                            iframe.contentWindow.postMessage(
                              '{"event":"command","func":"pauseVideo","args":""}',
                              "*"
                            );
                          }
                        }
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                      <h3 className="font-bold text-sm sm:text-base">
                        {video.snippet.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={handlePrevVideo}
                className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={handleNextVideo}
                className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        ) : (
          <p className="text-lg text-gray-700 text-center">
            No videos available at the moment.
          </p>
        )}
      </section>

   */}
  
  
      {/* Experience Section */}
      <section className="px-4 lg:px-20 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          Experience
        </h2>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="w-full lg:w-1/4 border-l-4 border-purple-600 pl-4 space-y-4">
            <p className="text-purple-600 cursor-pointer font-semibold">
              Freelancing
            </p>
            <p className="cursor-pointer">YouTube (Content Creator)</p>
            <p className="cursor-pointer">Full-Stack Development</p>
            <p className="cursor-pointer">Web Penetration Testing (Learning)</p>
            <p className="cursor-pointer">Computer Science Teaching</p>
          </div>
          <div className="w-full lg:w-3/4 space-y-4">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer & Educator
            </h3>
            <p className="text-gray-500">2022 - Present</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-purple-600 mr-2">✔</span> Developed web
                applications using React, Laravel, and MERN stack.
              </li>
              <li className="flex items-center">
                <span className="text-purple-600 mr-2">✔</span> Teaching
                computer science to 11th and 12th-grade students, covering HTML,
                CSS, Java, and C++.
              </li>
              <li className="flex items-center">
                <span className="text-purple-600 mr-2">✔</span> Currently
                learning web penetration testing to improve security skills.
              </li>
              <li className="flex items-center">
                <span className="text-purple-600 mr-2">✔</span> Creating
                educational content on YouTube related to programming and web
                development.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 lg:px-20 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>ReactJS & NextJS</li>
              <li>Tailwind CSS</li>
              <li>Full-Stack Development</li>
              <li>API Development</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Web Penetration Testing</li>
              <li>SQL Injection & XSS</li>
              <li>Bug Bounty Hunting</li>
              <li>CTF Challenges</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Programming</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>C++</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>PHP</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Public Speaking</li>
              <li>Content Creation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 lg:px-20 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          My Story
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center"
        >
          I started my journey as a self-taught programmer and full-stack
          developer. Over time, I developed a strong interest in learning new
          technologies, including cybersecurity. While my primary focus is
          full-stack development, I am currently exploring web security and
          ethical hacking to enhance my skills in full-stack web hacking. I also
          run a YouTube channel where I teach web development, programming, and
          occasionally share insights on cybersecurity. My goal is to
          continuously improve and share knowledge with the community.
        </motion.p>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-8 w-full">
        <div className="container mx-auto text-center space-y-5 px-4">
          {/* GitHub Link */}
          <p className="text-lg md:text-xl font-medium">
            Code is available on{" "}
            <a
              href="https://github.com/your-repo-link"
              className="text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              <FaGithub className="text-lg" /> GitHub
            </a>
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://instagram.com/yourprofile"
              className="hover:text-blue-400 flex items-center gap-2"
            >
              <FaInstagram className="text-xl" /> <span>Instagram</span>
            </a>

            <a
              href="https://yourwebsite.com"
              className="hover:text-blue-400 flex items-center gap-2"
            >
              <FaBlog className="text-xl" /> <span>Blog</span>
            </a>
            <a
              href="https://tiktok.com/@yourprofile"
              className="hover:text-blue-400 flex items-center gap-2"
            >
              <FaTiktok className="text-xl" /> <span>TikTok</span>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="hover:text-blue-400 flex items-center gap-2"
            >
              <FaLinkedin className="text-xl" /> <span>LinkedIn</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-lg md:text-xl text-gray-400 font-medium">
            &copy; 2025{" "}
            <span className="text-purple-400 font-semibold">
              YOUR_GOOD_NAME
            </span>
            . All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
