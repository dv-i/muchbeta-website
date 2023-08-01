const features = [
	{
		name: "Redefining Self-Publishing",
		innerHTML: true,
		description:
			"Today, the self-publishing landscape is dominated by platforms that focus more on quantity than quality, causing exceptional content to get lost in the noise. The traditional publishing path, on the other hand, presents an array of obstacles that deter many talented writers. At <b>MuchBeta</b>, we're determined to change this narrative.",
	},
	{
		name: "A Community-Centric Platform",
		innerHTML: true,
		description:
			"At the heart of <b>muchbeta</b> is the belief that 'it takes a village' to create, refine, and promote a piece of work. We aim to build an integrated community where authors can find support, connect with vetted freelancers, better market to their target demographic while empowering readers to better filter and discover the content that resonates with them. We strive to create a platform where every aspiring author can carve a path to success.",
	},
	{
		name: "Nurturing Quality and Creativity",
		description:
			"Our quality assurance process ensures the content on our platform meets high standards. We believe in fostering creativity, and to this end, we will be creating unique opportunities to inspire and promote our community of writers.",
	},
	{
		name: "Innovation and Future Growth",
		description:
			"This is just the beginning. Our ambitions go far beyond beta reading, aiming to harness technology's untapped potential to simplify and enrich the publishing process. It’s time we make it work for us and not against us. We envision a literary ecosystem that learns from its users how to best serve them, with innovative features designed to make the publishing process more accessible and rewarding than ever before.",
	},
	{
		name: "Empowering the Underrepresented",
		description:
			"Muchbeta is committed to giving voice to the unheard. We envision a platform that amplifies diverse perspectives, irrespective of an author's background or following. We aim to break down the financial barriers that prevent many talented authors from realizing their publishing dreams. And perhaps most importantly, leaving the power where it should be; in the writers and readers hands.",
	},
	{
		name: "Join Us on This Journey",
		description:
			"Muchbeta is more than just an app - it's a movement. A movement towards a more equitable, accessible, and vibrant self-publishing industry. A movement powered by a community of passionate writers, avid readers, and dedicated freelancers. Together, we can redefine self-publishing and ensure every story is given the chance to find its home.",
	},
];

export default function Vision(): JSX.Element {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						The Vision
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						To revolutionize the landscape of the industry, making
						it more democratic, inclusive, and rewarding for all.
						We're not just looking to disrupt the status quo, we're
						on a mission to reshape it entirely. (this text should
						be larger than the regular text but smaller than the
						heading)
					</p>
				</div>
				<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{features.map((feature) => (
						<div key={feature.name}>
							<dt className="font-semibold text-gray-900">
								{feature.name}
							</dt>
							{feature.innerHTML === true ? (
								<dd
									className="mt-1 text-gray-600"
									dangerouslySetInnerHTML={{
										__html: feature.description,
									}}
								>
									{/* {feature.description} */}
								</dd>
							) : (
								<dd className="mt-1 text-gray-600">
									{feature.description}
								</dd>
							)}
							{/* <dd className="mt-1 text-gray-600">
								{feature.description}
							</dd> */}
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}
