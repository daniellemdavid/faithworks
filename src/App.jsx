import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-900 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Faith Works Church</h1>
        <p className="mt-2 text-lg">A place of faith, hope, and community</p>
      </header>

      <section className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Us This Sunday</h2>
        <p className="text-lg">Worship starts at 10:30 AM</p>
        <p className="text-md mt-1">123 Church St, Yourtown, USA</p>
      </section>

      {/* <section className="p-8 bg-gray-100 text-center">
        <h2 className="text-xl font-semibold mb-2">Watch a Sermon</h2>
        <div className="max-w-2xl mx-auto">
          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/your-sermon-id"
            title="Sermon video"
            allowFullScreen
          ></iframe>
        </div>
      </section> */}

      <section className="p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Message"
          ></textarea>
          <button
            className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800"
            type="submit"
          >
            Send
          </button>
        </form>
      </section>

      <footer className="bg-blue-900 text-white p-4 text-center">
        © {new Date().getFullYear()} Faith Works Church
      </footer>
    </div>
  );
}

export default App;