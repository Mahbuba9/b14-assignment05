import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import StackSidebar from "./components/StackSidebar";
import LoadingSpinner from "./components/LoadingSpinner";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    fetch("/data/technologies.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(function (err) {
        console.error("Failed to load technologies:", err);
        setLoading(false);
      });
  }, []);

  const stackIds = new Set(stack.map((t) => t.id));

  function handleAdd(tech) {
    if (stackIds.has(tech.id)) {
      toast.warning(tech.name + " is already in your stack!");
      return;
    }
    setStack(function (prev) {
      return [...prev, tech];
    });
    toast.success(tech.name + " added to your stack.");
  }

  function handleRemove(id) {
    const removedTech = stack.find(function (t) {
      return t.id === id;
    });
    setStack(function (prev) {
      return prev.filter(function (t) {
        return t.id !== id;
      });
    });
    if (removedTech) {
      toast.info(removedTech.name + " removed from your stack.");
    }
  }

  function handleRemoveAll() {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Your stack has been cleared.");
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <main id="technologies" className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-14">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Explore the <span className="text-pink-500">Technologies</span>
          </h2>
          <p className="text-gray-500 mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">
            <TechGrid technologies={technologies} stackIds={stackIds} onAdd={handleAdd} />
            <StackSidebar stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
          </div>
        )}
      </main>

      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  );
}