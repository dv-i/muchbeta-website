import React from "react";
import { NavLink } from "react-router-dom";
function NewsLetterSection(): JSX.Element {
	return (
		<div className="bg-teal-700 py-16 sm:py-24 lg:py-32 bg">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
				<div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
					<h2 className="inline sm:block lg:inline xl:block">
						Coming Soon
					</h2>{" "}
					<p className="mt-2 text-lg leading-8 text-white">
						Sign up for news and updates.
					</p>
				</div>
				<form className="w-full max-w-md lg:col-span-5 lg:pt-2">
					<div className="flex gap-x-4">
						<label htmlFor="email-address" className="sr-only">
							Email address
						</label>
						<input
							id="email-address"
							name="email"
							type="email"
							autoComplete="email"
							required
							className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/75 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
							placeholder="Enter your email"
						/>
						<button
							type="submit"
							className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-teal-600 shadow-sm hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>
							Subscribe
						</button>
					</div>
					<p className="mt-4 text-sm leading-6 text-gray-300">
						We care about your data. Read our{" "}
						<a
							href="#"
							className="font-semibold text-white hover:text-teal-50"
						>
							privacy&nbsp;policy
						</a>
						.
					</p>
				</form>
			</div>
		</div>
	);
}

export default function Learn(): JSX.Element {
	return (
		<main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-teal-700">
			<div className="text-center">
				<NewsLetterSection />
			</div>
		</main>
	);
}
