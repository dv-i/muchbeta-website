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
						The Vision
					</h2>
					<div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
						<div className="lg:w-full lg:max-w-2xl lg:flex-auto">
							<p className="text-xl leading-8 text-gray-600">
								To revolutionize the landscape of the industry,
								making it more democratic, inclusive, and
								rewarding for all. We're not just looking to
								disrupt the status quo, we're on a mission to
								reshape it entirely.
							</p>
						</div>
						{/* <div className="lg:flex lg:flex-auto lg:justify-center">
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
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Vision;
