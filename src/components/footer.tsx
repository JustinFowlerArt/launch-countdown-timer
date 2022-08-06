export const Footer = () => {
	return (
		<footer
			className='absolute bottom-0 flex z-10 w-full h-1/4 items-center justify-center bg-cover bg-right'
			style={{
				backgroundImage: 'url(./images/pattern-hills.svg)',
			}}
		>
			<div className='flex space-x-10 absolute bottom-16'>
				<a href='#'><img src='./images/icon-facebook.svg' className='h-8 w-8 hover:icon-red'></img></a>
				<a href='#'><img src='./images/icon-pinterest.svg' className='h-8 w-8 hover:icon-red'></img></a>
				<a href='#'><img src='./images/icon-instagram.svg' className='h-8 w-8 hover:icon-red'></img></a>
			</div>
		</footer>
	);
};
