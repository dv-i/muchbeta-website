import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { gradientColor } from "../data";

const aboutFAQs = [
	{
		question: "What is Muchbeta?",
		answer: "Muchbeta is an innovative service that connects writers with beta readers from their target audience. Writers get the valuable feedback they need to hone their craft, while readers earn money for their thoughtful insights.",
	},
	{
		question: "What is a beta reader?",
		answer: "A beta reader is a non-professional who reads a written work with the intent of looking over the material to find and improve elements such as plot holes, character development, and continuity, providing feedback and suggestions for improvement.",
	},
	{
		question:
			"What is the difference between a beta reader and a professional editor?",
		answer: "While a professional editor has formal training and focuses on improving the quality of writing in terms of grammar, punctuation, and coherence, a beta reader looks at the work from a reader's perspective, offering feedback on how appealing it is to its intended audience.",
	},
	{
		question:
			"Why should I use Muchbeta instead of finding a beta reader independently?",
		answer: "Muchbeta streamlines the process and takes the hassle out of finding and vetting beta readers while also helping to hold both parties accountable. Our blind matching algorithm ensures your work is reviewed by readers from your target demographic without bias. Plus, our robust community standards and training process mean you can count on high-quality, constructive feedback. And if it comes to it, a process for resolving disputes.",
	},
	{
		question:
			"How does muchbeta create a supportive environment for writers and readers?",
		answer: "Muchbeta creates a supportive environment by offering comprehensive training to both readers and writers. This training equips readers to provide constructive criticism, while helping writers navigate feedback and refine their work. By nurturing a sense of community and shared goals, muchbeta fosters support, collaboration, and growth among its members.",
	},
];

const startedFAQs = [
	{
		question: "How does Muchbeta work?",
		answer: "Muchbeta operates through a custom algorithm that pairs writers with beta readers based on their preferred demographics and genre. Writers submit their work, and beta readers provide constructive feedback.",
	},
	{
		question: "How do I sign up?",
		answer: "During the initial launch period, we are allowing select users on the platform for beta testing the app. You can sign up through our website's waitlist.",
	},
	{
		question: "What training do I need to undergo?",
		answer: "Both writers and readers must undergo a multiple-choice training program to ensure a thorough understanding of our service's expectations and guidelines. The writing samples provided by both readers and writers will be individually reviewed by our team for this purpose.",
	},
];

const paymentFAQs = [
	{
		question: "What is Muchbeta?",
		answer: "Muchbeta is an innovative service that connects writers with beta readers from their target audience. Writers get the valuable feedback they need to hone their craft, while readers earn money for their thoughtful insights.",
	},
	{
		question: "How much does it cost?",
		answer: "Writer’s - TBD. Reader’s - The launch price offers reader’s a one time community fee of $49 guaranteed for the whole year.",
	},
	{
		question: "How do beta readers get paid?",
		answer: "Beta readers are compensated at .0008 per word.",
	},
	{
		question: "Why am I unable to set my own rates as a beta reader?",
		answer: "We have plans to introduce a tiered system in the future. Beta readers with a proven record of punctuality, professionalism, and insightful critiques will have the ability to opt for an expertise tier that offers a higher compensation rate.",
	},
	{
		question: "How are payments processed?",
		answer: "Payments are processed securely using the Stripe payment gateway.",
	},
];

const qualityFAQs = [
	{
		question: "What is the average turnaround time for feedback?",
		answer: "TBD - The time allotted to the beta reader to complete will be calculated based on the number of words in the submitted work.",
	},
	{
		question:
			"What should I do if I'm not satisfied with the feedback from my beta reader?",
		answer: "If you find the quality of the feedback below your expectations, please score the work accordingly. Any ratings below a certain threshold will flag the user for review by our team.",
	},
];

const contentFAQs = [
	{
		question: "What genres are accepted on Muchbeta?",
		answer: "Muchbeta accepts all genres.",
	},
	{
		question: "What age groups can use Muchbeta?",
		answer: "Muchbeta is accessible to adults aged 18 and above during our beta testing period, with plans to admit youth aged 13-17 in the near future.",
	},
	{
		question: "How does Muchbeta handle sensitive or mature content?",
		answer: "Content designed for adults will be scanned by our automated system to identify sensitive and mature content. Similarly, adult content that is not categorized as erotica will also be scanned for potential sensitive and mature words.",
	},
	{
		question: "What content is allowed on the app?",
		answer: "All content submitted here must be original and users must possess the necessary rights to their work - any form of copyright infringement, including plagiarism, is prohibited. While adult content is allowed on our platform, it should be explicitly labeled as such and content that glorifies explicit scenarios involving minors, non-consensual sex, or other inappropriate scenarios is disallowed. Our platform is committed to maintaining a respectful dialogue and thus, content that encourages hate speech or glorifies violence is prohibited. It's also crucial that the integrity of information shared here remains uncompromised, hence, any content designed to mislead readers or misrepresent facts is not permitted. Any promotion or insinuation of illegal activities through content is also disallowed. While you may incorporate public domain content, it's important that it's substantially transformed before submitting. Security and Plagiarism",
	},
	{
		question:
			"What are the security measures taken by Muchbeta to ensure my work isn’t plagiarized?",
		answer: "Every participant in Muchbeta agrees to a Non-Disclosure Agreement (NDA), safeguarding your work from plagiarism.",
	},
	{
		question: "Do I retain the rights to my work when I use Muchbeta?",
		answer: "Yes, you retain all rights to your work when you use Muchbeta.",
	},
];

const troubleFAQs = [
	{
		question:
			"What happens if a writer or beta reader violates Muchbeta's community standards?",
		answer: "Any violations of our community standards should be reported for investigation.",
	},
];

const platformFAQs = [
	{
		question: "What is the blind matching algorithm and how does it work?",
		answer: "Our blind matching algorithm is a system built into our app that randomly and anonymously pairs writers with beta readers based on their preferred genre, demographics and availability.",
	},
	{
		question: "Is there a mobile app for Muchbeta?",
		answer: "Currently, Muchbeta is available as a web application only.",
	},
];

const jobsFAQs = [
	{
		question: "How many jobs can I have at once?",
		answer: "You can only have one active job at a time. However, if you are working with a writer submitting work chapter by chapter, the count only increases when there's an uncompleted chapter in your queue.",
	},
	{
		question: "Will my location impact job availability?",
		answer: "Writers choose their demographic preferences, so it is at their discretion which countries best represent their target market.",
	},
];

const feedbackFAQs = [
	{
		question: "Can I provide feedback on the platform itself?",
		answer: "Yes, we love to hear from our community to best understand how to continually improve and grow our platform. Please send your comments and suggestions to info@muchbeta.org.",
	},
];

const languageFAQs = [
	{
		question:
			"What if my work is not in English, can I still use Muchbeta?",
		answer: "As of now, Muchbeta only accepts works in English. However, we have plans to include support for non-English works in the near future.",
	},
];

const careerFAQs = [
	{
		question: "Is MuchBeta hiring?",
		answer: "Muchbeta will be looking for Developers, Content Writers, Social Media Managers, Marketing Experts and more in the very near future. Stay tuned!",
	},
];
export default function FAQ(): JSX.Element {
	return (
		<div className="isolate bg-white px-6 py- sm:py-32 lg:px-8">
			<div
				className="absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] -z-10"
				aria-hidden="true"
			>
				<div
					className={`relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[${gradientColor.dark}] to-[${gradientColor.light}] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]`}
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				/>
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:py-0 sm:py-32 lg:px-8">
				<h2 className="mx-auto max-w-4xl text-2xl font-bold leading-10 tracking-tight text-gray-900">
					Frequently asked questions
				</h2>
				<h4 className="max-w-4xl mx-auto pt-20 text-xl font-bold leading-10 tracking-tight text-teal-600">
					About Muchbeta
				</h4>
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<dl className="pt-5 space-y-6 divide-y divide-gray-900/10">
						{aboutFAQs.map((faq) => (
							<Disclosure
								as="div"
								key={faq.question}
								className="pt-6"
							>
								{({ open }) => (
									<>
										<dt>
											<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
												<span className="text-base font-semibold leading-7">
													{faq.question}
												</span>
												<span className="ml-6 flex h-7 items-center">
													{open ? (
														<MinusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													) : (
														<PlusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													)}
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel
											as="dd"
											className="mt-2 pr-12"
										>
											<p className="text-base leading-7 text-gray-600">
												{faq.answer}
											</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>

				<h4 className="max-w-4xl mx-auto pt-20 text-xl font-bold leading-10 tracking-tight text-teal-600">
					Getting Started
				</h4>
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<dl className="pt-5 space-y-6 divide-y divide-gray-900/10">
						{startedFAQs.map((faq) => (
							<Disclosure
								as="div"
								key={faq.question}
								className="pt-6"
							>
								{({ open }) => (
									<>
										<dt>
											<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
												<span className="text-base font-semibold leading-7">
													{faq.question}
												</span>
												<span className="ml-6 flex h-7 items-center">
													{open ? (
														<MinusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													) : (
														<PlusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													)}
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel
											as="dd"
											className="mt-2 pr-12"
										>
											<p className="text-base leading-7 text-gray-600">
												{faq.answer}
											</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>

				<h4 className="max-w-4xl mx-auto pt-20 text-xl font-bold leading-10 tracking-tight text-teal-600">
					Cost & Payment
				</h4>
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<dl className="pt-5 space-y-6 divide-y divide-gray-900/10">
						{paymentFAQs.map((faq) => (
							<Disclosure
								as="div"
								key={faq.question}
								className="pt-6"
							>
								{({ open }) => (
									<>
										<dt>
											<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
												<span className="text-base font-semibold leading-7">
													{faq.question}
												</span>
												<span className="ml-6 flex h-7 items-center">
													{open ? (
														<MinusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													) : (
														<PlusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													)}
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel
											as="dd"
											className="mt-2 pr-12"
										>
											<p className="text-base leading-7 text-gray-600">
												{faq.answer}
											</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>

				<h4 className="max-w-4xl mx-auto pt-20 text-xl font-bold leading-10 tracking-tight text-teal-600">
					Quality & Satisfaction
				</h4>
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<dl className="pt-5 space-y-6 divide-y divide-gray-900/10">
						{qualityFAQs.map((faq) => (
							<Disclosure
								as="div"
								key={faq.question}
								className="pt-6"
							>
								{({ open }) => (
									<>
										<dt>
											<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
												<span className="text-base font-semibold leading-7">
													{faq.question}
												</span>
												<span className="ml-6 flex h-7 items-center">
													{open ? (
														<MinusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													) : (
														<PlusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													)}
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel
											as="dd"
											className="mt-2 pr-12"
										>
											<p className="text-base leading-7 text-gray-600">
												{faq.answer}
											</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>

				<h4 className="max-w-4xl mx-auto pt-20 text-xl font-bold leading-10 tracking-tight text-teal-600">
					Content & Generes
				</h4>
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<dl className="pt-5 space-y-6 divide-y divide-gray-900/10">
						{contentFAQs.map((faq) => (
							<Disclosure
								as="div"
								key={faq.question}
								className="pt-6"
							>
								{({ open }) => (
									<>
										<dt>
											<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
												<span className="text-base font-semibold leading-7">
													{faq.question}
												</span>
												<span className="ml-6 flex h-7 items-center">
													{open ? (
														<MinusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													) : (
														<PlusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													)}
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel
											as="dd"
											className="mt-2 pr-12"
										>
											<p className="text-base leading-7 text-gray-600">
												{faq.answer}
											</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>

				<h4 className="max-w-4xl mx-auto pt-20 text-xl font-bold leading-10 tracking-tight text-teal-600">
					Troubles & Disputes
				</h4>
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<dl className="pt-5 space-y-6 divide-y divide-gray-900/10">
						{troubleFAQs.map((faq) => (
							<Disclosure
								as="div"
								key={faq.question}
								className="pt-6"
							>
								{({ open }) => (
									<>
										<dt>
											<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
												<span className="text-base font-semibold leading-7">
													{faq.question}
												</span>
												<span className="ml-6 flex h-7 items-center">
													{open ? (
														<MinusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													) : (
														<PlusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													)}
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel
											as="dd"
											className="mt-2 pr-12"
										>
											<p className="text-base leading-7 text-gray-600">
												{faq.answer}
											</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>

				<h4 className="max-w-4xl mx-auto pt-20 text-xl font-bold leading-10 tracking-tight text-teal-600">
					Platform & Technology
				</h4>
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<dl className="pt-5 space-y-6 divide-y divide-gray-900/10">
						{platformFAQs.map((faq) => (
							<Disclosure
								as="div"
								key={faq.question}
								className="pt-6"
							>
								{({ open }) => (
									<>
										<dt>
											<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
												<span className="text-base font-semibold leading-7">
													{faq.question}
												</span>
												<span className="ml-6 flex h-7 items-center">
													{open ? (
														<MinusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													) : (
														<PlusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													)}
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel
											as="dd"
											className="mt-2 pr-12"
										>
											<p className="text-base leading-7 text-gray-600">
												{faq.answer}
											</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>

				<h4 className="max-w-4xl mx-auto pt-20 text-xl font-bold leading-10 tracking-tight text-teal-600">
					Participation & Jobs
				</h4>
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<dl className="pt-5 space-y-6 divide-y divide-gray-900/10">
						{jobsFAQs.map((faq) => (
							<Disclosure
								as="div"
								key={faq.question}
								className="pt-6"
							>
								{({ open }) => (
									<>
										<dt>
											<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
												<span className="text-base font-semibold leading-7">
													{faq.question}
												</span>
												<span className="ml-6 flex h-7 items-center">
													{open ? (
														<MinusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													) : (
														<PlusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													)}
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel
											as="dd"
											className="mt-2 pr-12"
										>
											<p className="text-base leading-7 text-gray-600">
												{faq.answer}
											</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>

				<h4 className="max-w-4xl mx-auto pt-20 text-xl font-bold leading-10 tracking-tight text-teal-600">
					Feedback & Improvements
				</h4>
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<dl className="pt-5 space-y-6 divide-y divide-gray-900/10">
						{feedbackFAQs.map((faq) => (
							<Disclosure
								as="div"
								key={faq.question}
								className="pt-6"
							>
								{({ open }) => (
									<>
										<dt>
											<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
												<span className="text-base font-semibold leading-7">
													{faq.question}
												</span>
												<span className="ml-6 flex h-7 items-center">
													{open ? (
														<MinusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													) : (
														<PlusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													)}
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel
											as="dd"
											className="mt-2 pr-12"
										>
											<p className="text-base leading-7 text-gray-600">
												{faq.answer}
											</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>

				<h4 className="max-w-4xl mx-auto pt-20 text-xl font-bold leading-10 tracking-tight text-teal-600">
					Languages & Location
				</h4>
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<dl className="pt-5 space-y-6 divide-y divide-gray-900/10">
						{languageFAQs.map((faq) => (
							<Disclosure
								as="div"
								key={faq.question}
								className="pt-6"
							>
								{({ open }) => (
									<>
										<dt>
											<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
												<span className="text-base font-semibold leading-7">
													{faq.question}
												</span>
												<span className="ml-6 flex h-7 items-center">
													{open ? (
														<MinusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													) : (
														<PlusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													)}
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel
											as="dd"
											className="mt-2 pr-12"
										>
											<p className="text-base leading-7 text-gray-600">
												{faq.answer}
											</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>

				<h4 className="max-w-4xl mx-auto pt-20 text-xl font-bold leading-10 tracking-tight text-teal-600">
					Careers at Muchbeta
				</h4>
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<dl className="pt-5 space-y-6 divide-y divide-gray-900/10">
						{careerFAQs.map((faq) => (
							<Disclosure
								as="div"
								key={faq.question}
								className="pt-6"
							>
								{({ open }) => (
									<>
										<dt>
											<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
												<span className="text-base font-semibold leading-7">
													{faq.question}
												</span>
												<span className="ml-6 flex h-7 items-center">
													{open ? (
														<MinusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													) : (
														<PlusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													)}
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel
											as="dd"
											className="mt-2 pr-12"
										>
											<p className="text-base leading-7 text-gray-600">
												{faq.answer}
											</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
