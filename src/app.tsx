import { useEffect, useState } from 'react';
import { CountdownTimer } from './components/countdownTimer';
import { Footer } from './components/footer';

export const App = () => {
	const [now, setNow] = useState(new Date());
	const [launchDate] = useState(new Date(Date.now() + 9 * (1000 * 60 * 60 * 24)));

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
