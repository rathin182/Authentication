"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
      } else {
        // Redirect to dashboard after login
        router.push("/dashboard");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-3xl font-bold text-blue-600">Login Page</h1>
      <p className="text-gray-600 mt-2">Access your account.</p>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <form onSubmit={handleLogin} className="mt-4 flex flex-col space-y-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="mt-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
      <div className="mt-4">
        <a href="/auth" className="text-blue-600 hover:underline">
          ← Back to Auth Menu
        </a>
      </div>
    </div>
  );
}
