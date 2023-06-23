import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { gradientColor } from "../data";

const faqs = [
	{
		question: "What kind of training does muchbeta offer?",
		answer: "Muchbeta offers training modules designed to promote best practices for both readers and writers. The training helps readers provide constructive criticism and enables writers to filter through feedback and improve their work.",
	},
	{
		question: "How does the training for readers work?",
		answer: "The training for readers includes multiple-choice modules that screen for individuals who can provide quality feedback. Readers are also required to submit a written sample based on prompts to demonstrate their ability to offer valuable feedback.",
	},
	{
		question: "What does the training for writers entail?",
		answer: "The training for writers focuses on supporting them in reviewing feedback and revising their work to reach a publishable standard. Writers are expected to understand the process of reviewing readers and adhere to community rules.",
	},
	{
		question:
			"Why is training considered fundamental in the muchbeta philosophy?",
		answer: "Training is a fundamental aspect of muchbeta's philosophy as it supports everyone in the village. By providing training, muchbeta ensures that members bring value to the community, fostering a culture of growth, improvement, and mutual support.",
	},
	{
		question:
			"How does muchbeta create a supportive environment for writers and readers?",
		answer: "Muchbeta creates a supportive environment by offering comprehensive training to both readers and writers. This training equips readers to provide constructive criticism, while helping writers navigate feedback and refine their work. By nurturing a sense of community and shared goals, muchbeta fosters support, collaboration, and growth among its members.",
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
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
						Frequently asked questions
					</h2>
					<dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
						{faqs.map((faq) => (
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
