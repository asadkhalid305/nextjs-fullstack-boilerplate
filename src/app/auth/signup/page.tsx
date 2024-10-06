"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { signUpUser } from "@/utils/api";
import { genericErrors, initialFormData } from "@/utils/constants";
import { FormData } from "@/utils/types";

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await signUpUser(formData);
    } catch (error) {
      setError((error as Error).message || genericErrors.signupFailed);
    } finally {
      setFormData(initialFormData);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg p-8 space-y-6 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-c-secondary">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-c-secondary"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-c-primary focus:border-c-primary"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-c-secondary"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-c-primary focus:border-c-primary"
            />
          </div>
          {/* Todo: make it file input field when Backend has support to store files */}
          {/* <div className="form-group">
            <label
              htmlFor="profileImage"
              className="block text-sm font-medium text-c-secondary"
            >
              Profile Image URL
            </label>
            <input
              type="text"
              id="profileImage"
              name="profileImage"
              value={formData.profileImage}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-c-primary focus:border-c-primary"
            />
          </div> */}
          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-c-secondary"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-c-primary focus:border-c-primary"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-c-secondary"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-c-primary focus:border-c-primary"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-c-secondary"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-c-primary focus:border-c-primary"
            />
          </div>
          {error && <p className="text-red-800">{error}</p>}
          <button
            type="submit"
            className="flex items-center justify-center space-x-2 w-full px-4 py-2 font-medium text-white bg-c-secondary rounded-md hover:bg-c-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-c-primary disabled:cursor-wait disabled:opacity-80"
            disabled={loading}
          >
            {loading && (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-5 h-5 text-white animate-spin fill-c-primary"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            <span className="">Signup</span>
          </button>
        </form>
        <p className="text-center text-c-primary">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-c-secondary hover:underline hover:text-c-primary"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
