export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="bg-slate-800 p-8 rounded-lg w-96">
        <h1 className="text-3xl font-bold mb-6">
          User Registration
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded text-black"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded text-black"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded text-black"
        />

        <button className="w-full bg-green-600 p-3 rounded">
          Register
        </button>
      </div>
    </div>
  );
}