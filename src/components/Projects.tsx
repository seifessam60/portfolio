function Projects() {
  const projects = [
    {
      title: "Magic Stream Movies",
      description:
        "High-performance movie streaming RESTful API using Go and Gin framework with AI-powered recommendations using LangChain.",
      tech: ["Go", "Gin", "MongoDB", "JWT", "LangChain"],
      github: "https://github.com/seifessam60",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    },
    {
      title: "Apple iPhone Store Clone",
      description:
        "Interactive 3D product showcase with Three.js, React Three Fiber, and GSAP animations replicating Apple's premium experience.",
      tech: ["React", "Three.js", "GSAP", "Tailwind CSS"],
      live: "#",
      github: "https://github.com/seifessam60",
      image:
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80",
    },
    {
      title: "Digital Wallet Backend",
      description:
        "Secure RESTful API for React Native mobile wallet with serverless PostgreSQL and Redis caching, achieving 60% performance improvement.",
      tech: ["Node.js", "Express.js", "PostgreSQL", "Redis"],
      github: "https://github.com/seifessam60",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    },
    {
      title: "AI Interview Platform",
      description:
        "Full-stack platform for scheduling and managing interviews with server-side rendering and JWT authentication.",
      tech: ["Next.js", "React", "Firebase", "TypeScript"],
      live: "#",
      github: "https://github.com/seifessam60",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      title: "Mojito Cocktails",
      description:
        "Animation-rich cocktail showcase with GSAP scroll-triggered effects and parallax scrolling.",
      tech: ["React", "GSAP", "Tailwind CSS", "Vite"],
      live: "#",
      github: "https://github.com/seifessam60",
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    },
    {
      title: "Movies App - React Native",
      description:
        "Cross-platform mobile app for browsing trending movies with infinite scroll and TypeScript architecture.",
      tech: ["React Native", "Expo", "TypeScript", "TMDB API"],
      github: "https://github.com/seifessam60",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          My Projects
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my skills in full-stack
          development, mobile apps, and interactive web experiences.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
