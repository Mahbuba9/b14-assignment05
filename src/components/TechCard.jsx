export default function TechCard({ tech, isAdded, onAdd }) {
  const name = tech.name;
  const category = tech.category;
  const description = tech.description;
  const icon = tech.icon;
  const rating = tech.rating;
  const difficulty = tech.difficulty;
  const badge = tech.badge;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <img src={icon} alt={name + " logo"} className="w-9 h-9 object-contain" />

        {badge && (
          <span className="text-[11px] font-medium text-pink-600 bg-pink-50 border border-pink-100 px-2 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-gray-900 font-semibold text-lg">{name}</h3>
      <p className="mt-1 text-sm text-gray-500 flex-1">{description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600">{category}</span>
        <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600">{difficulty}</span>
        <span className="flex items-center gap-1 text-amber-500 ml-auto">
          ★ {rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={
          isAdded
            ? "mt-5 w-full py-2.5 rounded-full text-sm font-medium bg-gray-100 text-gray-400 cursor-not-allowed"
            : "mt-5 w-full py-2.5 rounded-full text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors"
        }
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}