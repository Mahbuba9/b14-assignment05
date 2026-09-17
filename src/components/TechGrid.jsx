import TechCard from "./TechCard";

export default function TechGrid({ technologies, stackIds, onAdd }) {
  if (technologies.length === 0) {
    return <p className="text-gray-400">No technologies found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {technologies.map(function (tech) {
        const isAdded = stackIds.has(tech.id);
        return (
          <TechCard key={tech.id} tech={tech} isAdded={isAdded} onAdd={onAdd} />
        );
      })}
    </div>
  );
}
