export default function ContactPage() {
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
              className="text-gray-600 hover:text-green-800"
            >
              Hobbies
            </a>

            <a
              href="/contact"
              className="text-green-800 font-semibold"
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
            Contact Me
          </p>

          <h1 className="text-5xl font-bold text-green-950 mb-6">
            Let's Connect
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Feel free to reach out if you'd like to collaborate,
            discuss opportunities, or simply say hello.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          
          {/* Left Side */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-4xl mb-4">📧</div>

              <h2 className="text-2xl font-bold text-green-900 mb-2">
                Email
              </h2>

              <p className="text-gray-600">
                yourname@email.com
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-4xl mb-4">📱</div>

              <h2 className="text-2xl font-bold text-green-900 mb-2">
                Phone
              </h2>

              <p className="text-gray-600">
                +63 912 345 6789
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🌐</div>

              <h2 className="text-2xl font-bold text-green-900 mb-4">
                Social Media
              </h2>

              <div className="space-y-2 text-gray-600">
                <p>
                  LinkedIn: linkedin.com/in/yourname
                </p>

                <p>
                  GitHub: github.com/yourname
                </p>

                <p>
                  Facebook: facebook.com/yourname
                </p>

                <p>
                  Instagram: instagram.com/yourname
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-green-900 mb-8">
              Send a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Message subject"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-800 hover:bg-green-900 text-white py-4 rounded-xl font-semibold transition duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 text-center py-8 text-green-100">
        <p>
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}