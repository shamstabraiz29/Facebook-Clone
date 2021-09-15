export const HeaderIcon = ({ Icon }) => {
	return (
		<div className='flex items-center  cursor-pointer  md:px-10 sm:h-10 md:hover:bg-gray-100 rounded-xl active:bg-green-700 '>
			<Icon className='h-5 text-center text-gray-500 sm:h-7 mx-auto' />
		</div>
	);
};
