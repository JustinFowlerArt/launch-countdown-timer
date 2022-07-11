export const CountdownTimer = () => {
	return (
		<div className='flex space-x-8 pt-12'>
			<div className='flex flex-col items-center'>
				<span className='text-4xl font-bold text-soft-red'>08</span>
				<span className='text-white text-xs tracking-[.25em]'>DAYS</span>
			</div>
			<div className='flex flex-col items-center'>
				<span className='text-4xl font-bold text-soft-red'>23</span>
				<span className='text-white text-xs tracking-[.25em]'>HOURS</span>
			</div>
			<div className='flex flex-col items-center'>
				<span className='text-4xl font-bold text-soft-red'>55</span>
				<span className='text-white text-xs tracking-[.25em]'>MINUTES</span>
			</div>
			<div className='flex flex-col items-center'>
				<span className='text-4xl font-bold text-soft-red'>41</span>
				<span className='text-white text-xs tracking-[.25em]'>SECONDS</span>
			</div>
		</div>
	);
};
