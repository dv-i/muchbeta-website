function Vision(): JSX.Element {
	const stats = [
		{ label: "New users annually", value: "500" },
		{ label: "New books monthly", value: "12" },
	];
	return (
		<div>
			<div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Our vision
					</h2>
					<div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
						<div className="lg:w-full lg:max-w-2xl lg:flex-auto">
							<p className="text-xl leading-8 text-gray-600">
								Unleash your writing potential with muchbeta:
								where authors thrive, readers engage, and dreams
								take flight!
							</p>
							<div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
								<p>
									This is just the beginning. muchbeta has the
									potential to be an all-inclusive tool for
									writers, paving the path for self-publishing
									success. We want to address all
									self-publishing needs by connecting writers
									to beta readers, vetted freelancers of all
									kinds, and their target audience. While also
									creating a meaningful community as a place
									to promote users, foster collaboration,
									support one another in achieving goals, and
									celebrate success.
								</p>
								<p className="mt-10">
									By January 2023 we will be launching an
									ambitious crowdfunding campaign to take this
									app to a level never seen before. Joining in
									at ground level will offer All-in-One Money
									Solution for CONTACT US GET STARTED us the
									opportunity to expand our offerings to make
									the most complete writer’s network
									available.
								</p>
							</div>
						</div>
						<div className="lg:flex lg:flex-auto lg:justify-center">
							<dl className="w-64 space-y-8 xl:w-80">
								{stats.map((stat) => (
									<div
										key={stat.label}
										className="flex flex-col-reverse gap-y-4"
									>
										<dt className="text-base leading-7 text-gray-600">
											{stat.label}
										</dt>
										<dd className="text-5xl font-semibold tracking-tight text-gray-900">
											{stat.value}
										</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Vision;
