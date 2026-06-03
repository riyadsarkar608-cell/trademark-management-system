"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Registration Successful! Check your email.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="bg-slate-800 p-8 rounded-lg w-96">
        <h1 className="text-3xl font-bold mb-6">
          Register
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded text-black"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded text-black"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signUp}
          className="w-full bg-green-600 p-3 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
}