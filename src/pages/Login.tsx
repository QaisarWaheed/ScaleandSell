import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <form className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md">
          <div className="flex flex-col space-y-1.5 p-6">
            <h1 className="font-semibold tracking-tight text-2xl">Log In</h1>
            <p className="text-sm text-secondary">
              Access your StartupMarket account
            </p>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="Enter your email"
                type="email"
                value=""
                name="email"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="password"
                placeholder="Enter your password"
                type="password"
                value=""
                name="password"
              />
              <div className="text-right text-sm">
                <a
                  href="/auth/forgot-password"
                  className="text-green-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
          <div className="items-center p-6 pt-0 flex flex-col space-y-4">
            <button
              className="inline-flex items-center justify-center text-white gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 w-full bg-green-600 hover:bg-green-700"
              type="submit"
            >
              Log In
            </button>
            <div className="text-center text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-green-600 hover:underline">
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
