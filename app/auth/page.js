import Link from "next/link";

export default function AuthMenu() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-semibold">Join Us</h1>
      <p className="text-gray-600 mt-2">Choose an option below:</p>
      <div className="mt-6 flex space-x-4">
        <Link
          href="/signup"
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Signup
        </Link>
        <Link
          href="/login"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </Link>
      </div>
      <Link href="/" className="mt-6 text-gray-500 hover:text-gray-700 transition">
        ← Back to Home
      </Link>
    </div>
  );
}
