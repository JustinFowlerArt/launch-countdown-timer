interface Props {
	time: string;
	interval: string;
}

export const Counter = ({ time, interval }: Props) => {
	return (
		<div className='relative flex flex-col items-center'>
			<div
				className='bg-desaturated-blue bg-opacity-50 h-10 w-20 rounded-lg z-10 animate-flip'
				key={time}
			></div>
			<div className='bg-desaturated-blue h-10 w-20 rounded-md'></div>
			<span className='absolute top-3 text-5xl font-bold text-soft-red'>
				{time}
			</span>
			<span className='text-gray-blue text-xs tracking-[.25em] mt-4'>
				{interval.toUpperCase()}
			</span>
		</div>
	);
};
