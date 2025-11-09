import { useEffect, useRef } from "react";

function About() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Git/GitHub",
    "RESTful APIs",
    "JWT Authentication",
    "Redux",
    "GSAP",
    "Three.js",
    "React Native",
    "Expo",
    "Firebase",
    "Docker",
    "Go (Golang)",
    "Gin",
    "Vue.js",
    "Angular",
  ];

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll<HTMLElement>(
      ".fade-in, .fade-in-left, .fade-in-right"
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 px-4 bg-gray-800"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center fade-in">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 md:order-1 fade-in-left">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
              alt="Coding"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>

          {/* Right side - Text */}
          <div className="order-1 md:order-2 fade-in-right">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Hi! I'm Seif Essam, a Full-Stack Developer with 3+ years of
              experience building scalable web and mobile applications. I
              specialize in creating intuitive user interfaces and robust
              backend systems using modern technologies.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm passionate about clean code, performance optimization, and
              staying up-to-date with the latest technologies. From React and
              Next.js on the frontend to Node.js and Go on the backend, I love
              building complete solutions.
            </p>
            {/* Download Resume Button */}
            <a
              href="/Seif_Essam_Resume.pdf"
              download="Seif_Essam_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
            {/* Skills */}
            <h3 className="text-2xl font-semibold mb-4">
              Skills & Technologies
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-700 rounded-full text-blue-400 font-medium hover:bg-gray-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
