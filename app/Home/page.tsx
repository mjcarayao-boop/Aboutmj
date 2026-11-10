export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-green-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-900">
            My Portfolio
          </h1>

          <div className="hidden md:flex gap-6">
            <a href="/" className="text-green-800 font-semibold">
              Home
            </a>

            <a
              href="/about"
              className="text-gray-600 hover:text-green-800 transition"
            >
              About
            </a>

            <a
              href="/education"
              className="text-gray-600 hover:text-green-800 transition"
            >
              Education
            </a>

            <a
              href="/hobbies"
              className="text-gray-600 hover:text-green-800 transition"
            >
              Hobbies
            </a>

            <a
              href="/contact"
              className="text-gray-600 hover:text-green-800 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 min-h-screen flex items-center pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Side */}
          <div>
            <p className="uppercase tracking-widest text-green-600 font-semibold mb-4">
              Welcome To My Portfolio
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold text-green-950 leading-tight">
              Hi, I'm
              <span className="text-green-700"> Your Name</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              I am a passionate student who loves learning,
              building projects, and exploring technology.
              Welcome to my personal website where you can
              learn more about me, my education, hobbies,
              and how to contact me.
            </p>

            <a
              href="/about"
              className="inline-block mt-8 bg-green-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-900 transition shadow-lg"
            >
              Learn More About Me
            </a>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-300 rounded-full blur-3xl opacity-20"></div>

              <img
                src="https://via.placeholder.com/500x500"
                alt="Profile"
                className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] object-cover rounded-full border-8 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}