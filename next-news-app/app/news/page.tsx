"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async (query = "") => {
    setLoading(true);
    try {
      const res = await fetch(`/api/news?q=${query}`);
      if (!res.ok) throw new Error("Failed to fetch news");
      
      const data = await res.json();
      setNewsData(data.articles || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e:any) => {
    e.preventDefault();
    fetchNews(search);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6">
      <h1 className="text-4xl font-extrabold text-center my-6 text-white drop-shadow-lg">
        📰 Latest News
      </h1>

      <form onSubmit={handleSearch} className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search News..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 w-72 bg-white bg-opacity-20 border border-gray-500 rounded-l-md placeholder-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-3 rounded-r-md ml-3 hover:bg-blue-700 transition duration-300"
        >
          🔍 Search
        </button>
      </form>

      {loading && (
  <div className="flex justify-center items-center my-4">
    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
)}

<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
      {newsData.map((news: any, index) => (
        <div
          key={index}
          className="bg-blue-100 shadow-lg rounded-lg overflow-hidden border border-blue-300 transition-transform duration-300 transform hover:-translate-y-3 hover:shadow-[0_10px_20px_rgba(0,0,255,0.4)]"
        >
          <Image
            src={news.urlToImage || "/images/blog.jpg"}
            alt={news.title}
            width={400}
            height={250}
            className="w-full h-52 object-cover"
          />
          <div className="p-5">
            <span className="text-sm text-blue-600 font-semibold">
              {news.source.name}
            </span>
            <h2 className="text-lg font-semibold mt-2 text-black">{news.title}</h2>
            <p className="text-gray-600 mt-2 text-sm">{news.description}</p>
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              <button className="mt-3 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                Read More →
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
}  

export default NewsPage;