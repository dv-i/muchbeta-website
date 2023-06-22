import { Disclosure } from "@headlessui/react";
import {
	Bars3Icon,
	DevicePhoneMobileIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const NAVBAR_PAGES = [
	{
		name: "About",
		route: "/about",
	},
	{
		name: "Team",
		route: "/team",
	},
	{
		name: "Vision",
		route: "/vision",
	},
	{
		name: "Knowledge",
		route: "/knowledge",
	},
	{
		name: "Training",
		route: "/training",
	},
	{
		name: "FAQ",
		route: "/faq",
	},
	{
		name: "Contact",
		route: "/contact",
	},
];

export default function Example(): JSX.Element {
	return (
		<Disclosure as="nav" className="bg-white shadow">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<NavLink
									to="/"
									className="flex flex-shrink-0 items-center"
								>
									<img
										className="block h-8 w-auto lg:hidden"
										src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=600"
										alt="Much Beta"
									/>
									<img
										className="hidden h-8 w-auto lg:block"
										src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=600"
										alt="Much Beta"
									/>
								</NavLink>
								<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
									{NAVBAR_PAGES.map(({ name, route }) => (
										<NavLink
											key={name}
											to={route}
											className={({ isActive }) =>
												`inline-flex items-center border-b-2 ${
													isActive
														? "border-teal-500"
														: "border-transparent"
												} px-1 pt-1 text-sm font-medium text-gray-900`
											}
										>
											{name}
										</NavLink>
									))}
								</div>
							</div>
							<div className="flex gap-3 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<button
									type="button"
									className="rounded-lg bg-teal-50 px-2.5 py-1.5 text-sm font-semibold text-teal-600 shadow-sm hover:bg-teal-100"
								>
									Discussion Board
								</button>
								<button
									type="button"
									className="rounded-lg flex gap-1 bg-teal-50 px-2.5 py-1.5 text-sm font-semibold text-teal-600 shadow-sm hover:bg-teal-100"
								>
									MuchBeta App
									<DevicePhoneMobileIcon className="h-5 w-5" />
								</button>
								<button
									type="button"
									className="rounded-full bg-teal-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
								>
									Donate
								</button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 pb-4 pt-2">
							{NAVBAR_PAGES.map(({ name, route }) => (
								<Disclosure.Button
									key={name}
									as="a"
									href="#"
									className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
								>
									<NavLink
										to={route}
										className={({ isActive }) =>
											`${
												isActive
													? "border-teal-500 bg-teal-50 text-teal-700"
													: "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
											} block border-l-4 py-2 pl-3 pr-4 text-base font-medium`
										}
									>
										{name}
									</NavLink>
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
