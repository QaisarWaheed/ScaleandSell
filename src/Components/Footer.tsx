import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6 px-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-green-600">
              StartupMarket
            </span>
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Connecting Pakistani startups with investors since 2024
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="space-y-2">
            <h4 className="font-medium">Platform</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="/listings"
                  className="text-gray-500 hover:text-green-600 dark:text-gray-400"
                >
                  Browse Listings
                </a>
              </li>
              <li>
                <a
                  href="/how-it-works"
                  className="text-gray-500 hover:text-green-600 dark:text-gray-400"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="text-gray-500 hover:text-green-600 dark:text-gray-400"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="/about"
                  className="text-gray-500 hover:text-green-600 dark:text-gray-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-500 hover:text-green-600 dark:text-gray-400"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-500 hover:text-green-600 dark:text-gray-400"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Legal</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="/terms"
                  className="text-gray-500 hover:text-green-600 dark:text-gray-400"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-500 hover:text-green-600 dark:text-gray-400"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2024 StartupMarket. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
