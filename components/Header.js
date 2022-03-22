import Image from 'next/image';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid';

const Header = () => {
	return(
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-10">
			<div className="relative flex items-center h-8 cursor-pointer my-auto">
				<Image src='https://links.papareact.com/qd3'
					layout='fill' objectFit='contain'
					objectPosition='left'
				 />
			</div>

			<div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
				<input className="flex-grow pl-4 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Search any place" />
				<SearchIcon className="hidden md:inline-flex h-6 bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2" />
			</div>

			<div className="flex items-center space-x-4 justify-end text-gray-500">
				<p className="hidden md:inline cursor-pointer text-sm">Become a host</p>
				<GlobeAltIcon className="h-5 cursor-pointer" />

				<div className="flex items-center space-x-2 border-2 py-1 rounded-full">
					<MenuIcon className="h-5" />
					<UserCircleIcon className="h-5" />
				</div>
			</div>
		</header>
	)
};

export default Header;