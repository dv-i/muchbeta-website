import { Disclosure } from "@headlessui/react";
import {
	Bars3Icon,
	DevicePhoneMobileIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import iggLogo from "../src/images/igg_logo.png";
import mbLogo from "../src/images/logo.png";
import mbLogo2 from "../src/images/logo_2.png";

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
		name: "Articles",
		route: "/articles",
	},
	{
		name: "Join",
		route: "/join",
	},
	{
		name: "FAQ",
		route: "/faq",
	},
	// {
	// 	name: "Contact",
	// 	route: "/contact",
	// },
];

export default function Example(): JSX.Element {
	return (
		<Disclosure as="nav" className="bg-white z-50 relative">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 justify-between">
							<div className="inset-y-0 flex-1 left-0 flex items-center sm:hidden">
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
										className="block h-10 w-auto lg:hidden"
										src={mbLogo2}
										alt="Much Beta"
									/>
									<img
										className="hidden h-10 w-auto lg:block"
										src={mbLogo2}
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
							<div className="flex gap-3 justify-end flex-1 inset-y-0 right-0 items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<a
									href="/learn"
									type="button"
									className="lg:flex hidden rounded-lg bg-teal-50 px-2.5 py-1.5 text-sm font-semibold text-teal-600 shadow-sm hover:bg-teal-100"
								>
									Discussion Board
								</a>
								<a
									href="/join"
									type="button"
									className="lg:flex hidden rounded-lg flex gap-1 bg-teal-50 px-2.5 py-1.5 text-sm font-semibold text-teal-600 shadow-sm hover:bg-teal-100"
								>
									Muchbeta App
									<DevicePhoneMobileIcon className="h-5 w-5" />
								</a>
								{/* <button
									type="button"
									className="rounded-full bg-teal-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
								>
									Donate
								</button> */}
								<a href="/learn">
									<img
										src={iggLogo}
										width={100}
										height={"auto"}
									/>
								</a>
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

							<Disclosure.Button
								as="a"
								href="#"
								className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
							>
								<NavLink
									to={"/learn"}
									className={({ isActive }) =>
										`${
											isActive
												? "border-teal-500 bg-teal-50 text-teal-700"
												: "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
										} block border-l-4 py-2 pl-3 pr-4 text-base font-medium`
									}
								>
									Discussion Board
								</NavLink>
							</Disclosure.Button>

							<Disclosure.Button
								as="a"
								href="#"
								className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
							>
								<NavLink
									to={"/join"}
									className={({ isActive }) =>
										`${
											isActive
												? "border-teal-500 bg-teal-50 text-teal-700"
												: "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
										} block border-l-4 py-2 pl-3 pr-4 text-base font-medium`
									}
								>
									Muchbeta App
								</NavLink>
							</Disclosure.Button>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
