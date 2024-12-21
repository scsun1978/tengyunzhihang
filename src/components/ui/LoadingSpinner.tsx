export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600" />
    </div>
  );
}