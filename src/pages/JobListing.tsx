import React from "react";

const JobListing = () => {
  return (
    <div className="max-w-[1400px] mx-auto py-10">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Browse Listings</h1>
        <p className="text-muted-foreground">
          Discover businesses for sale and investment opportunities across
          Pakistan
        </p>
      </div>
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <div className="relative md:col-span-2">
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
            className="lucide lucide-search absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8"
            placeholder="Search listings..."
            type="search"
          />
        </div>
        <div>
          <button
            type="button"
            role="combobox"
            aria-controls="radix-«r33»"
            aria-expanded="false"
            aria-autocomplete="none"
            dir="ltr"
            data-state="closed"
            data-placeholder=""
            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1"
          >
            <span
            //  style="pointer-events: none;"
            >
              Category
            </span>
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
              className="lucide lucide-chevron-down h-4 w-4 opacity-50"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
        </div>
        <div>
          <button
            type="button"
            role="combobox"
            aria-controls="radix-«r34»"
            aria-expanded="false"
            aria-autocomplete="none"
            dir="ltr"
            data-state="closed"
            data-placeholder=""
            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1"
          >
            <span
            // style="pointer-events: none;"
            >
              Investment Type
            </span>
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
              className="lucide lucide-chevron-down h-4 w-4 opacity-50"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="grid gap-6">
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  E-commerce Platform for Handcrafted Goods
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  E-commerce • Karachi
                </p>
              </div>
              <div
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground w-fit"
                data-v0-t="badge"
              >
                Full Acquisition
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <p className="text-sm text-muted-foreground">
              Established e-commerce platform connecting artisans with customers
              nationwide. Growing user base with consistent revenue.
            </p>
            <div className="mt-4">
              <p className="font-medium">Asking Price: PKR 5,000,000</p>
            </div>
          </div>
          <div className="flex items-center p-6 pt-0">
            <a
              href="/listings/1"
              className="inline-flex text-white items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              View Details
            </a>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Food Delivery App with 10k+ Users
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Food Tech • Lahore
                </p>
              </div>
              <div
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground w-fit"
                data-v0-t="badge"
              >
                Partial Investment
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <p className="text-sm text-muted-foreground">
              Popular food delivery application operating in Karachi, Lahore and
              Islamabad with established restaurant partnerships.
            </p>
            <div className="mt-4">
              <p className="font-medium">Asking Price: PKR 12,000,000</p>
            </div>
          </div>
          <div className="flex items-center p-6 pt-0">
            <a
              href="/listings/2"
              className="inline-flex text-white items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              View Details
            </a>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  EdTech Platform for K-12 Students
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Education • Islamabad
                </p>
              </div>
              <div
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground w-fit"
                data-v0-t="badge"
              >
                Partnership
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <p className="text-sm text-muted-foreground">
              Online learning platform with curriculum-aligned content for
              Pakistani students. Ready for market launch.
            </p>
            <div className="mt-4">
              <p className="font-medium">Asking Price: PKR 3,500,000</p>
            </div>
          </div>
          <div className="flex items-center p-6 pt-0">
            <a
              href="/listings/3"
              className="inline-flex text-white items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              View Details
            </a>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Healthcare Appointment Booking System
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Healthcare • Karachi
                </p>
              </div>
              <div
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground w-fit"
                data-v0-t="badge"
              >
                Full Acquisition
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <p className="text-sm text-muted-foreground">
              Digital platform connecting patients with healthcare providers
              across Pakistan. Established partnerships with 100+ clinics.
            </p>
            <div className="mt-4">
              <p className="font-medium">Asking Price: PKR 7,000,000</p>
            </div>
          </div>
          <div className="flex items-center p-6 pt-0">
            <a
              href="/listings/4"
              className="inline-flex items-center text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              View Details
            </a>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Sustainable Fashion Brand
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Retail • Lahore
                </p>
              </div>
              <div
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground w-fit"
                data-v0-t="badge"
              >
                Partial Investment
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <p className="text-sm text-muted-foreground">
              Eco-friendly fashion brand with strong online presence and growing
              customer base. Includes inventory and supplier relationships.
            </p>
            <div className="mt-4">
              <p className="font-medium">Asking Price: PKR 4,200,000</p>
            </div>
          </div>
          <div className="flex items-center p-6 pt-0">
            <a
              href="/listings/5"
              className="inline-flex items-center text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
