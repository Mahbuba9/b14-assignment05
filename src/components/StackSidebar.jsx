export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <aside className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24 h-fit">
      <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>

      {count === 0 ? (
        <p className="text-sm text-gray-400 mt-1">No technologies selected yet.</p>
      ) : (
        <p className="text-sm text-gray-400 mt-1">
          {count} Technolog{count === 1 ? "y" : "ies"} Selected
        </p>
      )}

      <div className="mt-5 flex flex-col gap-3">
        {count === 0 ? (
          <div className="border border-dashed border-gray-200 rounded-xl py-8 flex items-center justify-center">
            <span className="text-sm text-gray-400">Your stack is empty.</span>
          </div>
        ) : (
          stack.map(function (tech) {
            return (
              <div
                key={tech.id}
                className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 py-2"
              >
                <img src={tech.icon} alt={tech.name} className="w-7 h-7 object-contain" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{tech.name}</p>
                  <p className="text-xs text-gray-400 truncate">{tech.category}</p>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  aria-label={"Remove " + tech.name + " from stack"}
                  className="text-gray-400 hover:text-gray-600 text-lg leading-none"
                >
                  ✕
                </button>
              </div>
            );
          })
        )}
      </div>

      {count > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-6 w-full py-2.5 rounded-full border border-red-200 text-red-500 font-semibold text-sm hover:bg-red-50 transition-colors"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}