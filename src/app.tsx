import { useEffect, useState } from 'react';
import { CountdownTimer } from './components/countdownTimer';
import { Footer } from './components/footer';

export const App = () => {
	const [now, setNow] = useState(new Date());
	const launchDate = new Date(2022, 9, 7, 0, 0, 0);

	useEffect(() => {
		const initializer = setInterval(() => {
			setNow(new Date());
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
			<CountdownTimer now={now} launchDate={launchDate} />
			<Footer />
		</div>
	);
};
