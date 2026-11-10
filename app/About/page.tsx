export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-green-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-900">
            My Portfolio
          </h1>

          <div className="hidden md:flex gap-6">
            <a href="/" className="text-gray-600 hover:text-green-800">
              Home
            </a>

            <a href="/about" className="text-green-800 font-semibold">
              About
            </a>

            <a
              href="/education"
              className="text-gray-600 hover:text-green-800"
            >
              Education
            </a>

            <a
              href="/hobbies"
              className="text-gray-600 hover:text-green-800"
            >
              Hobbies
            </a>

            <a
              href="/contact"
              className="text-gray-600 hover:text-green-800"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-green-600 font-semibold mb-3">
            About Me
          </p>

          <h1 className="text-5xl font-bold text-green-950 mb-6">
            Who I Am
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Learn more about my background, personality, goals,
            and aspirations. Replace the placeholder information
            below with your own details.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Personal Information
            </h2>

            <div className="space-y-4 text-gray-700">
              <div>
                <span className="font-semibold text-green-800">
                  Name:
                </span>{" "}
                Your Name
              </div>

              <div>
                <span className="font-semibold text-green-800">
                  Age:
                </span>{" "}
                18 Years Old
              </div>

              <div>
                <span className="font-semibold text-green-800">
                  Location:
                </span>{" "}
                Your City, Country
              </div>

              <div>
                <span className="font-semibold text-green-800">
                  Course:
                </span>{" "}
                Information Technology
              </div>

              <div>
                <span className="font-semibold text-green-800">
                  Email:
                </span>{" "}
                your@email.com
              </div>
            </div>
          </div>

          {/* Personality */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Personality
            </h2>

            <p className="text-gray-600 leading-relaxed">
              I am a motivated and curious individual who enjoys
              learning new technologies and improving my skills.
              I believe in continuous growth, teamwork, creativity,
              and perseverance when facing challenges.
            </p>
          </div>

          {/* Goals */}
          <div className="bg-white rounded-3xl p-8 shadow-lg lg:col-span-2">
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Goals & Ambitions
            </h2>

            <p className="text-gray-600 leading-relaxed">
              My goal is to become a successful professional in the
              technology industry while continuously learning and
              contributing to meaningful projects. I aim to develop
              my technical skills, gain valuable experience, and use
              technology to create solutions that positively impact
              people and communities.
            </p>
          </div>

          {/* Bio */}
          <div className="bg-white rounded-3xl p-8 shadow-lg lg:col-span-2">
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              About My Journey
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              I am passionate about technology, innovation, and
              personal growth. Throughout my academic journey, I
              have developed interests in programming, web
              development, and problem-solving.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Beyond academics, I enjoy exploring new hobbies,
              learning from experiences, and meeting people who
              inspire growth and creativity. This portfolio serves
              as a space to showcase my background, achievements,
              and interests.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}