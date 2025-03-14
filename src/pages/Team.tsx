import { CheckCircleIcon } from "@heroicons/react/20/solid";
import photo1 from "../images/julia_photo.jpeg";
const people = [
	{
		name: "Julia Durnin",
		role: "Founder / President",
		imageUrl: photo1,
		bio: "As a tortured artist, it's been a tough lesson to learn that seeking out help doesn't diminish our skills; it amplifies them. Embracing support and collective wisdom enhances our own vision, better enabling us to shine. Together, I'm confident we can surpass expectations while fostering meaningful connections–transforming the so often lonely pilgrimage of creativity–into a spirited caravan.",
		twitterUrl: "#",
		linkedinUrl: "#",
	},
	// More people...
];

function Team(): JSX.Element {
	return (
		<div>
			<TeamSection />
			<Example />
		</div>
	);
}

export default Team;

function TeamSection(): JSX.Element {
	return (
		<div className="bg-white py-24 md:py-32">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-28 gap-y-20 px-6 lg:px-8 xl:grid-cols-8">
				<div className="max-w-2xl xl:col-span-4 ">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						The Team
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						In the dark depths of lockdown, a seed was planted. A
						seed of frustration with the inherent isolation of the
						creative process; the yearning for connection, support,
						and honest feedback. That seed grew into Muchbeta.
						<br />
						<br />
						Muchbeta isn't just a platform; it's a lifeline for
						writers seeking quality, timely, feedback and an
						opportunity for readers to enjoy a flexible, remote side
						hustle that adds value to their lives in multiple ways.
						Whether it's through monetary compensation, a sense of
						community, or a renewed sense of purpose, Muchbeta is
						here to support and uplift writers and readers alike.
						<br />
						<br />
						I'm determined to create a workplace that embraces
						innovation and nurtures inclusion. My background in
						Psychology and Organizational Leadership has helped me
						understand how people feel valued when their unique
						contributions are recognized, while their growth and
						well-being are prioritized, within a supportive and
						transparent environment that encourages open and honest
						communication. Muchbeta embodies this philosophy at
						every level, from our organizational culture to the
						atmosphere we aim to cultivate within the app.
						Additionally, my background in Visual Communications has
						instilled in me the importance of our users' experience
						and understanding their needs.
						<br />
						<br />
						However, this is just a stepping stone. My current
						graduate studies in Marketing is starkly highlighting
						the importance of finding innovative ways to connect
						with our target audience; our true fans. The traditional
						follower-based model is being replaced by algorithmic
						curation, making it harder for creators to build
						sustainable careers, especially with the rapid
						advancements in AI and technology creating so much
						uncertainty. This is the problem I’m ultimately looking
						to solve, but I can’t do it alone.
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Join me and let’s continue improving this service in our
						collective vision. You can read more about the future of
						this platform{" "}
						<a href="/vision" className="underline">
							here
						</a>
						.
					</p>
				</div>
				<ul
					role="list"
					className="space-y-12 divide-y divide-gray-200 xl:col-span-4"
				>
					{people.map((person) => (
						<li
							key={person.name}
							className="flex flex-col gap-10 pt-12 sm:flex-row"
						>
							<div className="mt-6">
								<img
									className="w-66 h-96 flex-none rounded-2xl object-cover"
									src={person.imageUrl}
									alt=""
								/>
								<ul role="list" className="mt-6 flex gap-x-6">
									<li>
										<a
											href={person.twitterUrl}
											className="text-gray-400 hover:text-gray-500"
										>
											<span className="sr-only">
												Twitter
											</span>
											<svg
												className="h-5 w-5"
												aria-hidden="true"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
											</svg>
										</a>
									</li>
									<li>
										<a
											href={person.linkedinUrl}
											className="text-gray-400 hover:text-gray-500"
										>
											<span className="sr-only">
												LinkedIn
											</span>
											<svg
												className="h-5 w-5"
												aria-hidden="true"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
													clipRule="evenodd"
												/>
											</svg>
										</a>
									</li>
								</ul>
							</div>

							<div className="max-w-xl flex-auto">
								{/* <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
									{person.name}
								</h3>
								<p className="text-base leading-7 text-gray-600">
									{person.role}
								</p>
								<p className="mt-6 text-base leading-7 text-gray-600">
									{person.bio}
								</p> */}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

const jobs = [
	"Developers",
	"Content Writers",
	"Social Media Moderators",
	"Marketing Experts",
];

function Example(): JSX.Element {
	return (
		<div className="bg-teal-700 py-24 sm:py-32">
			<div className="relative isolate">
				<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
						<img
							className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
							src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
							alt=""
						/>
						<div className="w-full flex-auto">
							<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
								Shape the Future with Us
							</h2>
							<p className="mt-6 text-lg leading-8 text-gray-300">
								Are you driven to make change? Do you have a
								passion for disruption? As Muchbeta continues to
								grow and evolve, we'll be expanding our
								dedicated team to further nurture our vision and
								better serve our community. We'll soon be
								looking for:
							</p>
							<ul
								role="list"
								className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
							>
								{jobs.map((benefit) => (
									<li key={benefit} className="flex gap-x-3">
										<CheckCircleIcon
											className="h-7 w-5 flex-none"
											aria-hidden="true"
										/>
										{benefit}
									</li>
								))}
							</ul>
							<div className="mt-10 flex">
								<a
									href="#"
									className="text-sm font-semibold leading-6 text-teal-400"
								>
									Reach out{" "}
									<span aria-hidden="true">&rarr;</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div
					className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
					aria-hidden="true"
				>
					<div
						className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
						style={{
							clipPath:
								"polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
						}}
					/>
				</div>
			</div>
		</div>
	);
}
