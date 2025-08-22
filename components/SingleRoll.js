import React, { useState } from 'react';

const SingleRoll = ({ list }) => {
	const listjson = JSON.parse(JSON.stringify(list));
	const textjson = [];
	const colorjson = [];
	listjson.forEach((element, i) => {
		textjson[i] = element.text;
		colorjson[i] = element.color;
	});
	const [random, setRandom] = useState(textjson[1]);
	const randomize = () => {
		let sel = Math.floor(Math.random() * listjson.length);
		setRandom(textjson[sel]);
	};

	return (
		<div className='relative'>
			<div className='text-center text-xl'>
				<ul className='block'>
					<li className='bg-cyan-800 bg-opacity-90 h-20 flex justify-center items-center'>
						{random}
					</li>
				</ul>
			</div>
			<div className='relative'>
				<button
					className='bg-orange-600 w-full h-28 bg-opacity-90 transition ease-out duration-500 delay-0 hover:bg-orange-800 hover:bg-opacity-90 text-3xl'
					onClick={() => {
						randomize();
					}}
				>
					<b>Generar Equipo</b>
				</button>
			</div>
			<div className='border-8 border-zinc-700 rounded-xl absolute w-[102%] h-[103%] -top-[2%] -left-[1%] pointer-events-none'></div>
		</div>
	);
};

export default SingleRoll;
