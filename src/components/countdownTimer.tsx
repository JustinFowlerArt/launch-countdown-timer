import { Counter } from './counter';

interface Props {
	now: Date;
	launchDate: Date;
}

export const CountdownTimer = ({ now, launchDate }: Props) => {
	const diff = launchDate.getTime() - now.getTime();

	const remaining = diff < 0 ? 0 : diff;

	const timeConversion = (remaining: number) => {
		let seconds = 0;
		let minutes = 0;
		let hours = 0;
		let days = 0;
		if (remaining) {
			seconds = (remaining % 60000) / 1000;
			minutes = Math.floor(remaining / 60000);
			hours = Math.floor(minutes / 60);
			days = Math.floor(hours / 24);
		}
		return { seconds, minutes, hours, days };
	};

	const { seconds, minutes, hours, days } = timeConversion(remaining);

	const format = (value: number) => {
		return value.toString().padStart(2, '0');
	};

	return (
		<div className='flex space-x-4 pt-12'>
			<Counter time={format(days)} interval='days' />
			<Counter time={format(hours ? hours % 24 : 0)} interval='hours' />
			<Counter time={format(minutes ? minutes % 60 : 0)} interval='minutes' />
			<Counter
				time={format(seconds ? Math.floor(seconds) : 0)}
				interval='seconds'
			/>
		</div>
	);
};
