import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product data:", error);
      setPosts([]);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="container mx-auto p-4 mt-16">
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div>
          <p className="text-gray-500">No Data Found</p>
        </div>
      )}
    </div>
  );
}

export default Home;
