import {
	RectangleStackIcon,
	PencilSquareIcon,
	SparklesIcon,
} from "@heroicons/react/20/solid";
import { gradientColor } from "../data";
import { NavLink } from "react-router-dom";

export default function Training(): JSX.Element {
	return (
		<div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
			<div
				className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
				aria-hidden="true"
			>
				<div
					className={`aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[${gradientColor.dark}] to-[${gradientColor.light}] opacity-30`}
					style={{
						clipPath:
							"polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
					}}
				/>
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Training workflow
					</h1>
					<p className="mt-6 text-xl leading-8 text-gray-700">
						We offer training to ensure that our members bring value
						to the community.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
					<div className="relative lg:order-last lg:col-span-5">
						<svg
							className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
							aria-hidden="true"
						>
							<defs>
								<pattern
									id="e87443c8-56e4-4c20-9111-55b82fa704e3"
									width={200}
									height={200}
									patternUnits="userSpaceOnUse"
								>
									<path d="M0.5 0V200M200 0.5L0 0.499983" />
								</pattern>
							</defs>
							<rect
								width="100%"
								height="100%"
								strokeWidth={0}
								fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
							/>
						</svg>
						<figure className="border-l border-teal-600 pl-8">
							<blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
								<p>
									“Muchbeta's training is a game-changer! From
									guiding readers to provide constructive
									criticism to helping writers refine their
									work, they foster a supportive village where
									everyone thrives. Joining this dedicated
									platform has been an empowering experience!”
								</p>
							</blockquote>
							<figcaption className="mt-8 flex gap-x-4">
								<img
									src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
									className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
								/>
								<div className="text-sm leading-6">
									<div className="font-semibold text-gray-900">
										Brenna Goyette
									</div>
									<div className="text-gray-600">@brenna</div>
								</div>
							</figcaption>
						</figure>
					</div>
					<div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
						<p>
							Providing training is fundamental to our philosophy
							of supporting everyone in our village.
						</p>
						<ul
							role="list"
							className="mt-8 max-w-xl space-y-8 text-gray-600"
						>
							<li className="flex gap-x-3">
								<SparklesIcon
									className="mt-1 h-5 w-5 flex-none text-teal-600"
									aria-hidden="true"
								/>
								<span>
									<strong className="font-semibold text-gray-900">
										Best Practices.
									</strong>{" "}
									Our training modules are designed to promote
									best practices for Readers to provide
									constructive criticism and for Writers to be
									able to filter through feedback to create a
									better product.
								</span>
							</li>
							<li className="flex gap-x-3">
								<RectangleStackIcon
									className="mt-1 h-5 w-5 flex-none text-teal-600"
									aria-hidden="true"
								/>
								<span>
									<strong className="font-semibold text-gray-900">
										Multiple Choice Trainings.
									</strong>{" "}
									Our trainings are designed to screen for
									readers who can provide quality feedback and
									who are committed to supporting writers in
									their efforts. Readers will submit a written
									sample of work based on our prompts to
									demonstrate their ability to provide
									valuable feedback.
								</span>
							</li>
							<li className="flex gap-x-3">
								<PencilSquareIcon
									className="mt-1 h-5 w-5 flex-none text-teal-600"
									aria-hidden="true"
								/>
								<span>
									<strong className="font-semibold text-gray-900">
										Writer Trainings.
									</strong>{" "}
									Trainings for writers look to support them
									as they review feedback and revise their
									work to produce writing that is ready to be
									published. Writers will need to demonstrate
									their understanding of reviewing readers and
									community rules.
								</span>
							</li>
						</ul>
						<p className="mt-8">
							Still, have questions? Check out our{" "}
							<NavLink to="/faq">
								<span className="font-bold text-teal-600 underline">
									FAQ Page
								</span>
							</NavLink>
							.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
