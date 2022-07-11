import { useEffect, useState } from 'react';
import { CountdownTimer } from './components/countdownTimer';
import { Footer } from './components/footer';

export const App = () => {
	const [now, setNow] = useState(new Date());
	const [launchDate, setLaunchDate] = useState(new Date(2022, 6, 25, 0, 0, 0));

	useEffect(() => {
		const initializer = setInterval(() => {
			setNow(new Date());
			const diff = launchDate.getTime() - now.getTime();

			console.log(`now: ${now} launchDate: ${launchDate} diff: ${diff}`);
		}, 1000);
		return () => {
			clearInterval(initializer);
		};
	}, [now]);

	return (
		<div
			className='flex flex-col items-center h-screen pt-40 bg-dark-blue'
			style={{
				backgroundImage: 'url(./images/bg-stars.svg)',
			}}
		>
			<h1 className='text-xl font-bold text-center tracking-[.25em] px-12 text-white'>
				{`We're launching soon`.toUpperCase()}
			</h1>
			<CountdownTimer />
			<Footer />
		</div>
	);
};
