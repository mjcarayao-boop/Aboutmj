export default function HobbiesPage() {
  const hobbies = [
    {
      icon: "💻",
      title: "Programming",
      description:
        "I enjoy building websites, exploring new technologies, and improving my coding skills through personal projects.",
    },
    {
      icon: "📚",
      title: "Reading",
      description:
        "Reading helps me learn new ideas, gain knowledge, and stay inspired by different perspectives.",
    },
    {
      icon: "🎵",
      title: "Listening to Music",
      description:
        "Music helps me relax, focus, and stay motivated while studying or working on projects.",
    },
    {
      icon: "📷",
      title: "Photography",
      description:
        "I enjoy capturing beautiful moments, landscapes, and memorable experiences.",
    },
    {
      icon: "✈️",
      title: "Traveling",
      description:
        "Exploring new places allows me to experience different cultures and learn from new environments.",
    },
    {
      icon: "⚽",
      title: "Sports",
      description:
        "Playing sports helps me stay active, healthy, and develop teamwork skills.",
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
              className="text-gray-600 hover:text-green-800"
            >
              Education
            </a>

            <a
              href="/hobbies"
              className="text-green-800 font-semibold"
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
            Hobbies & Interests
          </p>

          <h1 className="text-5xl font-bold text-green-950 mb-6">
            What I Love Doing
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Outside of academics and professional growth, these
            are some of the activities that keep me inspired,
            motivated, and creatively engaged.
          </p>
        </div>
      </section>

      {/* Hobbies Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {hobby.icon}
                </div>

                <h2 className="text-2xl font-bold text-green-900 mb-4">
                  {hobby.title}
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Favorite Hobby Section */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-green-900 rounded-3xl p-10 md:p-14 text-white shadow-2xl">
            <p className="uppercase tracking-widest text-green-300 mb-3">
              Favorite Activity
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Programming & Technology
            </h2>

            <p className="text-green-100 text-lg leading-relaxed max-w-4xl">
              One of my strongest interests is technology and
              programming. I enjoy creating websites, learning
              modern development tools, solving problems, and
              continuously improving my technical skills.
              Technology inspires me because it allows me to turn
              ideas into real-world solutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}