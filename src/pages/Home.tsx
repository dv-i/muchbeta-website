import { XMarkIcon } from "@heroicons/react/24/outline";

import {
	ChatBubbleLeftRightIcon,
	PlusCircleIcon,
	NewspaperIcon,
	CheckIcon,
} from "@heroicons/react/20/solid";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

function Home(): JSX.Element {
	return (
		<div className="flex flex-col">
			<Banner />
			<LandingSection />
			<JoinSection />
			<PricingSection />
			<BlogSection />
			<NewsLetterSection />
		</div>
	);
}

export default Home;

function Banner(): JSX.Element {
	return (
		<div className="flex items-center gap-x-6 bg-teal-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
			<p className="text-sm leading-6 text-white">
				<a href="#">
					<strong className="font-semibold">muchbeta</strong>
					<svg
						viewBox="0 0 2 2"
						className="mx-2 inline h-0.5 w-0.5 fill-current"
						aria-hidden="true"
					>
						<circle cx={1} cy={1} r={1} />
					</svg>
					Join the waitlist <span aria-hidden="true">&rarr;</span>
				</a>
			</p>
			<div className="flex flex-1 justify-end">
				<button
					type="button"
					className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
				>
					<span className="sr-only">Dismiss</span>
					<XMarkIcon
						className="h-5 w-5 text-white"
						aria-hidden="true"
					/>
				</button>
			</div>
		</div>
	);
}

function JoinSection(): JSX.Element {
	const features = [
		{
			name: "Sign Up",
			description: "Sign up and complete a brief training program",
			href: "#",
			icon: PlusCircleIcon,
		},
		{
			name: "Subscribe",
			description: "Subscribe for a yearly membership",
			href: "#",
			icon: NewspaperIcon,
		},
		{
			name: "Discuss",
			description:
				"Join our discussion board and help shape the future of muchbeta!",
			href: "#",
			icon: ChatBubbleLeftRightIcon,
		},
	];
	return (
		<div className="bg-teal-700 py-24 lg:py-12 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					{/* <h2 className="text-base font-semibold leading-7 text-white">
						Get Started
					</h2> */}
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Let's Get Started
					</p>
					{/* <p className="mt-6 text-lg leading-8 text-teal-200">
						Quis tellus eget adipiscing convallis sit sit eget
						aliquet quis. Suspendisse eget egestas a elementum
						pulvinar et feugiat blandit at. In mi viverra elit nunc.
					</p> */}
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.name} className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
									<feature.icon
										className="h-5 w-5 flex-none text-white"
										aria-hidden="true"
									/>
									{feature.name}
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-teal-200">
									<p className="flex-auto">
										{feature.description}
									</p>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}

function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(" ");
}

const frequencies = [
	{ value: "annually", label: "Annually", priceSuffix: "/year" },
];

const tiers = [
	{
		name: "Writer",
		id: "tier-writer",
		href: "#",
		price: { annually: "$25" },
		description:
			"Leverage our sophisticated algorithm to blind match with your ideal target audience.",
		features: [
			"Unlimited Projects",
			"Upload Chapter By Chapter",
			"Choose Your Desired Demographics",
		],
		mostPopular: false,
	},
	{
		name: "Reader",
		id: "tier-reader",
		href: "#",
		price: { annually: "$45" },
		description:
			"Enjoy a flexible, meaningful side hustle you can do in your pajamas or at the beach.",
		features: [
			"Choose Your Genres",
			"Preview Jobs Before Accepting",
			"Earn $0.0008 per word",
		],
		mostPopular: false,
	},
	{
		name: "Both",
		id: "tier-both",
		href: "#",
		price: { annually: "$60" },
		description:
			"Fund your publishing dreams by getting paid to beta read.",
		features: ["Join as both a reader and writer."],
		mostPopular: true,
	},
];

function PricingSection(): JSX.Element {
	const [frequency, setFrequency] = useState(frequencies[0]);

	return (
		<div className="bg-gray-900 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					{/* <h2 className="text-base font-semibold leading-7 text-teal-400">
						Pricing
					</h2> */}
					<p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
						Limited Time Launch Price!
					</p>
				</div>
				<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
					Secure your membership for a full year at this exclusive
					rate.
				</p>
				{/* <div className="mt-16 flex justify-center">
					<RadioGroup
						value={frequency}
						onChange={setFrequency}
						className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
					>
						<RadioGroup.Label className="sr-only">
							Payment frequency
						</RadioGroup.Label>
						{frequencies.map((option) => (
							<RadioGroup.Option
								key={option.value}
								value={option}
								className={({ checked }) =>
									classNames(
										checked ? "bg-teal-500" : "",
										"cursor-pointer rounded-full px-2.5 py-1"
									)
								}
							>
								<span>{option.label}</span>
							</RadioGroup.Option>
						))}
					</RadioGroup>
				</div> */}
				<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{tiers.map((tier) => (
						<div
							key={tier.id}
							className={classNames(
								tier.mostPopular
									? "bg-white/5 ring-2 ring-teal-500"
									: "ring-1 ring-white/10",
								"rounded-3xl p-8 xl:p-10"
							)}
						>
							<div className="flex items-center justify-between gap-x-4">
								<h3
									id={tier.id}
									className="text-lg font-semibold leading-8 text-white"
								>
									{tier.name}
								</h3>
								{tier.mostPopular ? (
									<p className="rounded-full bg-teal-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
										Most popular
									</p>
								) : null}
							</div>
							<p className="mt-4 text-sm leading-6 text-gray-300">
								{tier.description}
							</p>
							<p className="mt-6 flex items-baseline gap-x-1">
								<span className="text-4xl font-bold tracking-tight text-white">
									{tier.price.annually}
								</span>
								<span className="text-sm font-semibold leading-6 text-gray-300">
									{frequency.priceSuffix}
								</span>
							</p>
							<a
								href={tier.href}
								aria-describedby={tier.id}
								className={classNames(
									tier.mostPopular
										? "bg-teal-500 text-white shadow-sm hover:bg-teal-400 focus-visible:outline-teal-500"
										: "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
									"mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
								)}
							>
								Subscribe
							</a>
							<ul
								role="list"
								className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
							>
								{tier.features.map((feature) => (
									<li key={feature} className="flex gap-x-3">
										<CheckIcon
											className="h-6 w-5 flex-none text-white"
											aria-hidden="true"
										/>
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function LandingSection(): JSX.Element {
	return (
		<div className="relative overflow-hidden bg-white">
			<div
				className="hidden lg:absolute lg:inset-0 lg:block"
				aria-hidden="true"
			>
				<svg
					className="absolute left-1/2 top-0 -translate-y-8 translate-x-64 transform"
					width={640}
					height={784}
					fill="none"
					viewBox="0 0 640 784"
				>
					<defs>
						<pattern
							id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
							x={118}
							y={0}
							width={20}
							height={20}
							patternUnits="userSpaceOnUse"
						>
							<rect
								x={0}
								y={0}
								width={4}
								height={4}
								className="text-gray-200"
								fill="currentColor"
							/>
						</pattern>
					</defs>
					<rect
						y={72}
						width={640}
						height={640}
						className="text-gray-50"
						fill="currentColor"
					/>
					<rect
						x={118}
						width={404}
						height={784}
						fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
					/>
				</svg>
			</div>
			<div className="relative pb-16 pt-10 sm:pb-24 lg:pb-40">
				<main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 lg:mt-32">
					<div className="lg:grid lg:grid-cols-12 lg:gap-8">
						<div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
							<h1>
								<span className="block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">
									Coming soon
								</span>
								<span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
									<span className="block text-gray-900">
										What is
									</span>
									<span className="block text-teal-600">
										muchbeta ?
									</span>
								</span>
							</h1>
							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
								A service that connects{" "}
								<span className="font-bold">writers</span> with{" "}
								<span className="font-bold">readers</span> from
								their target audience providing readers with an
								opportunity to earn money by giving thoughtful
								feedback and helping writers hone their craft
							</p>
						</div>
						<div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
							<svg
								className="absolute left-1/2 top-0 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
								width={640}
								height={784}
								fill="none"
								viewBox="0 0 640 784"
								aria-hidden="true"
							>
								<defs>
									<pattern
										id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
										x={118}
										y={0}
										width={20}
										height={20}
										patternUnits="userSpaceOnUse"
									>
										<rect
											x={0}
											y={0}
											width={4}
											height={4}
											className="text-gray-200"
											fill="currentColor"
										/>
									</pattern>
								</defs>
								<rect
									y={72}
									width={640}
									height={640}
									className="text-gray-50"
									fill="currentColor"
								/>
								<rect
									x={118}
									width={404}
									height={784}
									fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
								/>
							</svg>
							<div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
								<button
									type="button"
									className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
								>
									<span className="sr-only">
										Watch our video to learn more
									</span>
									<img
										className="w-full"
										src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
										alt=""
									/>
									<span
										className="absolute inset-0 flex h-full w-full items-center justify-center"
										aria-hidden="true"
									>
										<svg
											className="h-20 w-20 text-teal-500"
											fill="currentColor"
											viewBox="0 0 84 84"
										>
											<circle
												opacity="0.9"
												cx={42}
												cy={42}
												r={42}
												fill="white"
											/>
											<path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
										</svg>
									</span>
								</button>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

const posts = [
	{
		id: 1,
		title: "Boost your conversion rate",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		imageUrl:
			"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
		date: "Mar 16, 2020",
		datetime: "2020-03-16",
		author: {
			name: "Michael Foster",
			imageUrl:
				"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		id: 2,
		title: "Improving your customer experience",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		imageUrl:
			"https://images.unsplash.com/photo-1491309055486-24ae511c15c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
		date: "Mar 16, 2020",
		datetime: "2020-03-16",
		author: {
			name: "Michael Foster",
			imageUrl:
				"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		id: 3,
		title: "Writing effectice landing page copy",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		imageUrl:
			"https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
		date: "Mar 16, 2020",
		datetime: "2020-03-16",
		author: {
			name: "Michael Foster",
			imageUrl:
				"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	// More posts...
];

function BlogSection(): JSX.Element {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						From The Blog
					</h2>
					{/* <p className="mt-2 text-lg leading-8 text-gray-600">
						Checkout our most recent articles and newletters
					</p> */}
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{posts.map((post) => (
						<article
							key={post.id}
							className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
						>
							<img
								src={post.imageUrl}
								alt=""
								className="absolute inset-0 -z-10 h-full w-full object-cover"
							/>
							<div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
							<div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

							<div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
								<time dateTime={post.datetime} className="mr-8">
									{post.date}
								</time>
								{/* <div className="-ml-4 flex items-center gap-x-4">
									<svg
										viewBox="0 0 2 2"
										className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
									>
										<circle cx={1} cy={1} r={1} />
									</svg>
									<div className="flex gap-x-2.5">
										<img
											src={post.author.imageUrl}
											alt=""
											className="h-6 w-6 flex-none rounded-full bg-white/10"
										/>
										{post.author.name}
									</div>
								</div> */}
							</div>
							<h3 className="mt-3 text-lg font-semibold leading-6 text-white">
								<a href={post.href}>
									<span className="absolute inset-0" />
									{post.title}
								</a>
							</h3>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}

function NewsLetterSection(): JSX.Element {
	return (
		<div className="bg-teal-700 py-16 sm:py-24 lg:py-32">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
				<div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
					<h2 className="inline sm:block lg:inline xl:block">
						This is just the beginning!
					</h2>{" "}
					<p className="mt-2 text-lg leading-8 text-white">
						Be the first to know. Sign up for news and updates.
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
