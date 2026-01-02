"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, Chrome, Github } from "lucide-react";
import Link from "next/link";
import DeveloperBudyFullImage from "../../local-assets/developerbudy_full_avatar.png";
import { isValidEmail } from "@/utils/EmailValidation.ts";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      console.log("Invalid Email");
      return;
    }

    if (mode === "signup") {
      console.log("Create user:", { name, email, password });
    } else {
      console.log("Login:", { email, password });
    }
  };

  return (
    <div className="bg-white w-full max-w-[480px] rounded-[32px] shadow-2xl p-8 sm:p-10 relative flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center pb-4">
        <Image
          src={DeveloperBudyFullImage}
          alt="DeveloperBudy Logo"
          className="no-interaction"
          draggable="false"
        />
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {mode === "signup" && (
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all"
          />
        )}

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all pr-12"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-[#A3D154] hover:bg-[#92bd4b] text-gray-900 font-bold py-3.5 rounded-xl mt-6 transition-colors shadow-sm"
        >
          {mode === "login" ? "Log In" : "Create Account"}
        </button>
      </form>

      {/* Divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500">or continue with</span>
        </div>
      </div>

      {/* Social */}
      <div className="flex justify-center gap-4 mb-8">
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-lime-50 border border-lime-100 hover:bg-lime-100">
          <Chrome className="w-5 h-5" />
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-lime-50 border border-lime-100 hover:bg-lime-100">
          <Github className="w-5 h-5" />
        </button>
      </div>

      {/* Terms */}
      {mode === "signup" && (
        <p className="text-center text-xs text-gray-500 mb-6 px-4 leading-relaxed">
          By creating an account you agree to developerbudy's{" "}
          <Link href="#" className="text-lime-600 hover:underline font-semibold">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-lime-600 hover:underline font-semibold">
            Privacy Policy
          </Link>.
        </p>
      )}

      {/* Toggle */}
      <div className="text-center text-sm font-semibold text-gray-600">
        {mode === "login" ? (
          <>
            Don’t have an account?{" "}
            <button
              onClick={() => setMode("signup")}
              className="text-lime-600 hover:underline"
            >
              Create one
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              onClick={() => setMode("login")}
              className="text-lime-600 hover:underline"
            >
              Log in
            </button>
          </>
        )}
      </div>
    </div>
  );
}
