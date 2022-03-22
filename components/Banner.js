import Image from 'next/image';

const Banner = () => {
	return(
		<div className="relative h-[250px] sm:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]">
			<Image src="https://links.papareact.com/0fm" 
				layout="fill" objectFit="cover"
		 	/>
		 <div className="absolute top-1/2 w-full text-center">
		 	<p className="text-sm sm:text-lg ">Yet not sure where to go? Alright!!</p>
		 	<button className="text-purple-500 bg-white px-8 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I`m flexible</button>
		 </div>
		</div>
	)
};

export default Banner;