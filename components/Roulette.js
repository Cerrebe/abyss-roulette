import React from 'react';

const Roulette = ({ list }) => {
	const listjson = JSON.parse(JSON.stringify(list));

	const textjson = [];
	const colorjson = [];
	listjson.forEach((element, i) => {
		textjson[i] = element.text;
		colorjson[i] = element.color;
	});

	const listref = React.createRef();
	const winref = React.createRef();

	var lastli = 0;
	var lastelement = 0;

	const startAnimation = () => {
		var sel = Math.floor(Math.random() * 10);
		listref.current.animate(
			{ right: sel * 130 + (sel * 8 - 12) - 119 + 'px' },
			10000
		);
		//animate({ right: sel * 130 + (sel * 8 - 12) - 119 }, 10000);
	};

	return (
		<div className='relative w-fit h-fit m-5 p-2'>
			<div className='w-[40vh] h-[20vh] relative right-0 text m-auto overflow-x-scroll border-4 border-blue-400 rounded-sm'>
				<div className='arrowup'></div>
				<div className='arrowdown'></div>
				<ul
					className='flex flex-1 float-left h-full relative left-0 justify-between'
					ref={listref}
				>
					{textjson.map((element, i) => (
						<li
							key={i}
							style={{ backgroundColor: colorjson[i] }}
							className='text-center list-none float-left m-0 w-28'
						>
							<div className='flex justify-center items-center text-center h-full'>
								{element}
							</div>
						</li>
					))}
					<li
						key={-1}
						style={{ backgroundColor: colorjson[0] }}
						className='text-center list-none float-left m-0 w-28'
					>
						<div className='flex justify-center items-center text-center h-full'>
							{textjson[0]}
						</div>
					</li>
					<li
						key={-2}
						style={{ backgroundColor: colorjson[1] }}
						className='text-center list-none float-left m-0 w-28'
					>
						<div className='flex justify-center items-center text-center h-full'>
							{textjson[1]}
						</div>
					</li>
					<li
						key={-3}
						style={{ backgroundColor: colorjson[2] }}
						className='text-center list-none float-left m-0 w-28'
					>
						<div className='flex justify-center items-center text-center h-full'>
							{textjson[2]}
						</div>
					</li>
				</ul>
				<button
					onClick={() => {
						startAnimation();
					}}
					className='absolute w-full h-full top-0 left-0'
				></button>
			</div>
		</div>
	);
};

export default Roulette;
