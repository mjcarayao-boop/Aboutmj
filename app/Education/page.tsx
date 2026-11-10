export default function EducationPage() {
  const educationData = [
    {
      year: "2023 - Present",
      level: "College",
      school: "Your University Name",
      description:
        "Currently pursuing a degree in Information Technology and continuously developing technical and professional skills.",
    },
    {
      year: "2021 - 2023",
      level: "Senior High School",
      school: "Your Senior High School",
      description:
        "Completed Senior High School with a focus on academic excellence and personal growth.",
    },
    {
      year: "2017 - 2021",
      level: "Junior High School",
      school: "Your Junior High School",
      description:
        "Developed foundational knowledge and participated in various school activities.",
    },
    {
      year: "2011 - 2017",
      level: "Elementary",
      school: "Your Elementary School",
      description:
        "Built core academic skills and a passion for learning.",
    },
  ];

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-green-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-900">
            My Portfolio
          </h1>

          <div className="hidden md:flex gap-6">
            <a
              href="/"
              className="text-gray-600 hover:text-green-800"
            >
              Home
            </a>

            <a
              href="/about"
              className="text-gray-600 hover:text-green-800"
            >
              About
            </a>

            <a
              href="/education"
              className="text-green-800 font-semibold"
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
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-widest text-green-600 font-semibold mb-3">
            Education
          </p>

          <h1 className="text-5xl font-bold text-green-950 mb-6">
            Academic Journey
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A timeline of my educational background and the
            milestones that shaped my learning journey.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative border-l-4 border-green-700 ml-4">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="mb-12 ml-10 relative"
              >
                {/* Circle */}
                <div className="absolute -left-[54px] top-2 w-5 h-5 bg-green-700 rounded-full border-4 border-stone-50"></div>

                {/* Card */}
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300">
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                    {item.year}
                  </span>

                  <h2 className="text-2xl font-bold text-green-900">
                    {item.school}
                  </h2>

                  <h3 className="text-lg text-green-700 font-semibold mt-2">
                    {item.level}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mt-4">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Cards */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-950 mb-10">
            Academic Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-bold text-xl text-green-900 mb-2">
                Education
              </h3>
              <p className="text-gray-600">
                Lifelong dedication to learning and growth.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-bold text-xl text-green-900 mb-2">
                Knowledge
              </h3>
              <p className="text-gray-600">
                Continuous learning and skill development.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-bold text-xl text-green-900 mb-2">
                Achievement
              </h3>
              <p className="text-gray-600">
                Striving for excellence in academics and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}