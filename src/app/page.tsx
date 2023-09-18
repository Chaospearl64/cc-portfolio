import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Sticky Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-10">
        <div className="max-w-5xl mx-auto py-4 px-8 flex justify-between items-center">
          <div>
            <a
              href="#home"
              className="text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about"
              className="ml-4 text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              About
            </a>
            <a
              href="#projects"
              className="ml-4 text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#blogs" // Link to the Blogs section
              className="ml-4 text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              Blogs
            </a>
            <a
              href="#testimonials"
              className="ml-4 text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              Testimonials
            </a>
            <a
              href="#skills"
              className="ml-4 text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              Skills
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Chaospearl64"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
            <span className="mx-2">|</span>
            <a
              href="https://www.linkedin.com/in/cody-cogbill-651502275"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient">
        <div id="home" className="max-w-5xl text-center">
          <h1 className="text-4xl font-semibold mb-6">Cody Cogbill</h1>
          <p className="text-lg text-gray-500">
            Web Developer | Designer | Creator
          </p>
        </div>

        <div id="about" className="relative mt-12">
          <Image
            src="/me.jpeg" // Make sure to start with a leading slash if it's in the public directory
            alt="Your Name"
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>

        {/* About Section */}
        <div id="about-section" className="mt-12 text-center">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="text-lg text-gray-500">
            Hi, I'm Cody Cogbill, a full-stack software engineer with a passion
            for all things tech-related. I'm 26 years old and I graduated from
            Flatiron School with a{" "}
            <a
              href="/public/Screenshot 2023-09-18 at 1.59.52 PM.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              certificate of completion
            </a>
            .
          </p>
          <p className="text-lg text-gray-500 mt-4">
            When I'm not coding, you can often find me enjoying music, watching
            movies, and exploring the latest in technology trends.
          </p>
        </div>

        {/* Skills Section */}
        <div id="skills-section" className="mt-12 text-center">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <p className="text-lg text-gray-500 mt-4">
            I have a diverse skill set that includes proficiency in several
            technologies and programming languages. Here are some of my key
            skills:
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {/* Skill Card - React */}
            <div className="p-4 border rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-semibold">React</h3>
              <p className="text-gray-500 mt-2">
                Building dynamic and interactive user interfaces.
              </p>
            </div>

            {/* Skill Card - JavaScript */}
            <div className="p-4 border rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-semibold">JavaScript</h3>
              <p className="text-gray-500 mt-2">
                Creating web functionality and enhancing user experiences.
              </p>
            </div>

            {/* Skill Card - Flask */}
            <div className="p-4 border rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-semibold">Flask</h3>
              <p className="text-gray-500 mt-2">
                Building lightweight and efficient web applications.
              </p>
            </div>

            {/* Skill Card - SQLalchemy */}
            <div className="p-4 border rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-semibold">SQLalchemy</h3>
              <p className="text-gray-500 mt-2">
                Working with relational databases and managing data using SQLalchemy.
              </p>
            </div>

            {/* Skill Card - Python */}
            <div className="p-4 border rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-semibold">Python</h3>
              <p className="text-gray-500 mt-2">
                Developing applications and scripting using Python.
              </p>
            </div>

            {/* Skill Card - Tailwind CSS */}
            <div className="p-4 border rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-semibold">Tailwind CSS</h3>
              <p className="text-gray-500 mt-2">
                Designing responsive and modern user interfaces.
              </p>
            </div>
          </div>
        </div>
        
        {/* Blogs Section */}
        <div id="blogs-section" className="mt-12 text-center">
          <h2 className="text-3xl font-semibold">Blogs</h2>
          <p className="text-lg text-gray-500 mt-4">
            While spending my time at Flatiron School, I had the opportunity to
            write blogs about topics I found interesting during my learning
            journey. You can check out my blogs on{" "}
            <a
              href="https://medium.com/@codeman24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Medium
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
