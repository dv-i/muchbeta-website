import { XMarkIcon } from "@heroicons/react/24/outline";

import {
	ChatBubbleLeftRightIcon,
	PlusCircleIcon,
	NewspaperIcon,
	CheckIcon,
} from "@heroicons/react/20/solid";

// import image1 from "../images/slide-1.png";
// import image2 from "../images/slide-2.png";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

import "swiper/css";

function Home(): JSX.Element {
	return (
		<div className="flex flex-col">
			<Banner />
			<IntroSection />
			<JoinSection />
			<PricingSection />
		</div>
	);
}

export default Home;

function Banner(): JSX.Element {
	return (
		<div className="flex items-center gap-x-6 bg-teal-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
			<p className="text-sm leading-6 text-white">
				<a href="#">
					<strong className="font-semibold">MuchBeta</strong>
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

function IntroSection(): JSX.Element {
	return (
		<div className="bg-teal-700">
			<div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						What is MuchBeta ?
						<br />
					</h2>
					<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-teal-200">
						A service that connects{" "}
						<span className="font-bold">writers</span> with{" "}
						<span className="font-bold">readers</span> from their
						target audience providing readers with an opportunity to
						earn money by giving thoughtful feedback and helping
						writers hone their craft
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="#"
							className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-teal-600 shadow-sm hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>
							Get started
						</a>
						<a
							href="#"
							className="text-sm font-semibold leading-6 text-white"
						>
							Learn more <span aria-hidden="true">→</span>
						</a>
					</div>
				</div>
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
				"Join our discussion board and help shape the future of MuchBeta!",
			href: "#",
			icon: ChatBubbleLeftRightIcon,
		},
	];
	return (
		<div className="bg-white py-24 lg:py-12 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-teal-600">
						Deploy faster
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Everything you need to deploy your app
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Quis tellus eget adipiscing convallis sit sit eget
						aliquet quis. Suspendisse eget egestas a elementum
						pulvinar et feugiat blandit at. In mi viverra elit nunc.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.name} className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
									<feature.icon
										className="h-5 w-5 flex-none text-teal-600"
										aria-hidden="true"
									/>
									{feature.name}
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
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
	{ value: "monthly", label: "Monthly", priceSuffix: "/month" },
	{ value: "annually", label: "Annually", priceSuffix: "/year" },
];
const tiers = [
	{
		name: "Writer",
		id: "tier-writer",
		href: "#",
		price: { monthly: "$15", annually: "$120" },
		description: "The essentials to provide your best work for clients.",
		features: ["5 products"],
		mostPopular: false,
	},
	{
		name: "Reader",
		id: "tier-reader",
		href: "#",
		price: { monthly: "$35", annually: "$360" },
		description: "A plan that scales with your rapidly growing business.",
		features: ["25 products", "Up to 10,000 subscribers"],
		mostPopular: false,
	},
	{
		name: "Both",
		id: "tier-both",
		href: "#",
		price: { monthly: "$45", annually: "$480" },
		description: "Dedicated support and infrastructure for your company.",
		features: [
			"Unlimited products",
			"Unlimited subscribers",
			"Advanced analytics",
		],
		mostPopular: true,
	},
];
function PricingSection(): JSX.Element {
	const [frequency, setFrequency] = useState(frequencies[0]);

	return (
		<div className="bg-gray-900 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-base font-semibold leading-7 text-teal-400">
						Pricing
					</h2>
					<p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
						Limited time launch price !
					</p>
				</div>
				<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
					Choose an affordable plan that’s packed with the best
					features for engaging your audience, creating customer
					loyalty, and driving recognition.
				</p>
				<div className="mt-16 flex justify-center">
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
				</div>
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
									{frequency.value === "monthly"
										? tier.price.monthly
										: tier.price.annually}
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
								Buy plan
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
