import React, { useState } from "react";

export default function Auth() {
  const [state, setState] = useState("login"); // login | register
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLogin = state === "login";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && !name)) {
      alert("All fields are required");
      return;
    }

    const payload = { email, password };
    if (!isLogin) payload.name = name;

    console.log(isLogin ? "LOGIN DATA" : "REGISTER DATA", payload);

    // reset
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="text-center text-gray-500 mt-1">
          {isLogin
            ? "Login to continue"
            : "Sign up to get started"}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Switch */}
        <p className="text-center text-sm text-gray-500 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setState(isLogin ? "register" : "login")}
            className="ml-1 text-sky-600 font-medium hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
