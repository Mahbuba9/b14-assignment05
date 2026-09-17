export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="w-9 h-9 rounded-full border-4 border-gray-200 border-t-pink-500 animate-spin" />
      <p className="text-gray-400 text-sm">Loading technologies…</p>
    </div>
  );
}