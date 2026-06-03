export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">
        Trademark Management System
      </h1>

      <p className="text-gray-300 mb-8">
        User & Admin Dashboard
      </p>

      <div className="flex gap-4">
        <button className="bg-blue-600 px-6 py-3 rounded-lg">
          User Login
        </button>

        <button className="bg-green-600 px-6 py-3 rounded-lg">
          Admin Login
        </button>
      </div>
    </main>
  );
}