import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-black flex flex-col">
      {/* Hero Section */}
      <main className="text-center py-20 flex flex-col items-center bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <h1 className="text-5xl font-bold mb-4 animate-fadeIn">
          Welcome to News!
        </h1>
        <p className="max-w-lg text-lg mb-6">
          Discover inspiring stories, the latest tech trends, and insightful articles curated just for you.
        </p>
        <Link href="/news">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200 transition">
            Explore News →
          </button>
        </Link>
      </main>

      {/* Recent News Preview */}
      <section className="bg-white py-12">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Recent Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          {["Startup", "Technology", "Lifestyle"].map((category, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={`/images/blog.jpg`}
                alt="Blog Image"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="block text-sm font-semibold text-gray-600 mb-2">
                  {category}
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  {category === "Startup"
                    ? "Shaping the Future of Startups"
                    : category === "Technology"
                    ? "Exploring the Evolution of Social Media"
                    : "Balance & Bliss: Navigating Life"}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mt-4">
          News is your go-to platform for insightful blogs on technology,
          startups, lifestyle, and more. Stay informed, stay inspired.
        </p>
        <Link href="/about">
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
            Learn More →
          </button>
        </Link>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="max-w-2xl mx-auto text-gray-300 mt-4">
          Have questions? Feel free to reach out to us anytime.
        </p>
        <Link href="/contact">
          <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-yellow-600 transition">
            Get in Touch →
          </button>
        </Link>
      </section>
    </div>
  );
}