import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="w-full">
      {/* Breadcrumb with background color */}
      <nav 
        className="w-full h-[350px] bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center mb-8" 
        aria-label="Breadcrumb"
      >
        <ol className="list-none p-0 inline-flex justify-center">
          <li className="flex items-center">
            <Link href="/" className="text-amber-100 hover:text-white transition duration-150 ease-in-out text-xl">
              Home
            </Link>
            <span className="mx-2 text-amber-200 text-xl">/</span>
          </li>
          <li className="flex items-center text-white font-semibold text-xl">Contact Us</li>
        </ol>
      </nav>

      <div className="container mx-auto px-4">
        {/* <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1> */}

        {/* Information Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-amber-50 p-6 rounded-lg shadow-md border border-amber-200">
            <h2 className="text-xl font-semibold mb-3 text-amber-800">Address</h2>
            <p className="text-amber-700">123 Main Street</p>
            <p className="text-amber-700">Marrakech, Morocco</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg shadow-md border border-amber-200">
            <h2 className="text-xl font-semibold mb-3 text-amber-800">Contact</h2>
            <p className="text-amber-700">Email: info@example.com</p>
            <p className="text-amber-700">Phone: +212 123 456 789</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg shadow-md border border-amber-200">
            <h2 className="text-xl font-semibold mb-3 text-amber-800">Hours</h2>
            <p className="text-amber-700">Monday - Friday: 9am - 5pm</p>
            <p className="text-amber-700">Saturday - Sunday: Closed</p>
          </div>
        </div>

        {/* Contact Form and Map */}
        <div className="flex flex-col md:flex-row gap-8 border-4 border-amber-200 p-6 rounded-lg mb-4">
          {/* Map */}
          <div className="w-full md:w-1/2 h-[400px] mb-6 md:mb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108703.06715623277!2d-8.0780139!3d31.6294723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakesh%2C%20Morocco!5e0!3m2!1sen!2sus!4v1652893681155!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 text-white font-bold py-2 px-4 rounded hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-150 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}