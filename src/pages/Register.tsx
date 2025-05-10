import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center py-10 md:py-16">
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold tracking-tight text-2xl">
            Create an Account
          </h3>
          <p className="text-sm text-muted-foreground">
            Join Pakistan's premier startup marketplace
          </p>
        </div>
        <form>
          <div className="p-6 pt-0 space-y-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="name"
                placeholder="Enter your full name"
                value=""
                name="name"
              />
            </div>
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
                placeholder="Create a password"
                type="password"
                value=""
                name="password"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="confirmPassword"
                placeholder="Confirm your password"
                type="password"
                value=""
                name="confirmPassword"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                I am a:
              </label>
              <div
                role="radiogroup"
                aria-required="false"
                dir="ltr"
                className="gap-2 flex flex-col space-y-1 outline-none"
              >
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    role="radio"
                    aria-checked="true"
                    data-state="checked"
                    value="entrepreneur"
                    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="entrepreneur"
                    data-radix-collection-item=""
                  >
                    <span
                      data-state="checked"
                      className="flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-circle h-2.5 w-2.5 fill-current text-current"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                    </span>
                  </button>
                  <input
                    aria-hidden="true"
                    type="radio"
                    value="entrepreneur"
                    // style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
                  />
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="entrepreneur"
                  >
                    Entrepreneur (I want to list my business)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    role="radio"
                    aria-checked="false"
                    data-state="unchecked"
                    value="investor"
                    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="investor"
                    data-radix-collection-item=""
                  ></button>
                  <input
                    aria-hidden="true"
                    type="radio"
                    value="investor"
                    // style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
                  />
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="investor"
                  >
                    Investor (I want to invest in businesses)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    role="radio"
                    aria-checked="false"
                    data-state="unchecked"
                    value="both"
                    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    data-radix-collection-item=""
                  ></button>
                  <input
                    aria-hidden="true"
                    type="radio"
                    value="both"
                    // style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
                  />
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="both"
                  >
                    Both
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center p-6 pt-0 flex flex-col space-y-4">
            <button
              className="inline-flex items-center text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-green-600 hover:bg-green-700"
              type="submit"
            >
              Create Account
            </button>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-green-600 hover:underline">
                Log in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
