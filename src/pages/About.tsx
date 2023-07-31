import { gradientColor } from "../data";

function About(): JSX.Element {
	return (
		<div>
			<div className="relative isolate -z-10">
				<svg
					className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
					aria-hidden="true"
				>
					<defs>
						<pattern
							id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
							width={200}
							height={200}
							x="50%"
							y={-1}
							patternUnits="userSpaceOnUse"
						>
							<path d="M.5 200V.5H200" fill="none" />
						</pattern>
					</defs>
					<svg
						x="50%"
						y={-1}
						className="overflow-visible fill-gray-50"
					>
						<path
							d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
							strokeWidth={0}
						/>
					</svg>
					<rect
						width="100%"
						height="100%"
						strokeWidth={0}
						fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
					/>
				</svg>
				<div
					className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
					aria-hidden="true"
				>
					<div
						className={`aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[${gradientColor.dark}] to-[${gradientColor.light}] opacity-30`}
						style={{
							clipPath:
								"polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
						}}
					/>
				</div>
				<div className="overflow-hidden">
					<div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
						<div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-top">
							<div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
								<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
									About us
								</h2>
								<p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
									Beta reading is a pre-publication practice
									where selected readers, referred to as 'beta
									readers', review written works, providing
									feedback on character engagement, plot
									clarity, pacing, and immersion. This helps
									ensure that the work is appealing to its
									intended audience. This practice, distinct
									from professional editing, is equally
									beneficial for fiction and nonfiction pieces
									alike.
								</p>
								<p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
									At Muchbeta, we streamline this process with
									a specialized blind matching algorithm,
									catering to the writer's desired
									demographics. It takes into account not only
									designated genres but also screens for
									potential trigger warnings. While any
									content can be evaluated by our adult beta
									readers, we appropriately filter the
									materials for our younger readers aged
									13-17.
								</p>
								<p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
									With the self-publishing industry growing
									exponentially, writers are beginning to see
									the value in having someone from their
									target audience provide helpful feedback.
									And while our budgets are often limited for
									pursuing our dreams, one of the many
									benefits of our app is being able to fund
									your publishing dreams by being paid to beta
									read.
								</p>
								<p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
									As a writer, you're encouraged to submit
									your work, whether it's a rough alpha-level
									draft, a piece from a beginner seeking to
									hone their skills, a manuscript from an
									established writer, and everything in
									between. After all, collaboration is a
									common practice among the best in the
									industry.
								</p>

								<p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
									You can submit your work to any number of
									beta readers, either in its entirety or
									chapter-by-chapter, allowing you to
									continually adapt your work throughout the
									writing process. As a reader, the feedback
									deadline is proportional to the length of
									the work, providing you ample time for a
									thorough critique while maintaining a timely
									return for the writer.
								</p>

								<p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
									To ensure the highest quality of
									interaction, we mandate a training program
									for both writers and readers. Writing
									samples provided by users are individually
									reviewed by a team member, ensuring that
									everyone understands the expectations and
									guidelines of our service. This empowers
									readers to work with clarity and direction
									ultimately leading to better outcomes for
									writers.
								</p>

								<p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
									Muchbeta isn't just a service—it's a
									community that nurtures a supportive and
									encouraging environment, making it an ideal
									place for writers of all levels, of any
									objectives. Whether you're seeking a
									detailed critique to refine your work or a
									gentle push to keep the creative energy
									alive, we're here for you. Together, let's
									champion the power of community and the
									transformative impact of collective wisdom.
								</p>
							</div>
							<div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
								<div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
									<div className="relative">
										<img
											src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
											alt=""
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>
								<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
									<div className="relative">
										<img
											src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
											alt=""
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<img
											src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
											alt=""
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>
								<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
									<div className="relative">
										<img
											src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
											alt=""
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<img
											src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
											alt=""
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
