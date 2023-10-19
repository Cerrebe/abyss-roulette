import React, { useState } from 'react';

const Ruleta = ({ list }) => {
	const listjson = JSON.parse(JSON.stringify(list));
	const textjson = [];
	const colorjson = [];
	listjson.forEach((element, i) => {
		textjson[i] = element.text;
		colorjson[i] = element.color;
	});
	const [random1, setRandom1] = useState(textjson[1]);
	const [random2, setRandom2] = useState(textjson[2]);
	const [random3, setRandom3] = useState(textjson[3]);

	const randomize = () => {
		let sel1 = Math.floor(Math.random() * listjson.length);
		let sel2 = Math.floor(Math.random() * listjson.length);
		let sel3 = Math.floor(Math.random() * listjson.length);

		function checkSame() {
			if (sel2 == sel1) {
				sel2 = Math.floor(Math.random() * listjson.length);
				checkSame();
			}
			if (sel3 == sel1 || sel3 == sel2) {
				sel3 = Math.floor(Math.random() * listjson.length);
				checkSame();
			}
		}
		checkSame();

		setRandom1(textjson[sel1]);
		setRandom2(textjson[sel2]);
		setRandom3(textjson[sel3]);
	};

	return (
		<div className='relative'>
			<div className='text-center text-xl'>
				<ul className='block'>
					<li className='bg-cyan-800 bg-opacity-90 h-20 flex justify-center items-center'>
						{random1}
					</li>
					<li className='bg-cyan-700 bg-opacity-90 h-20 flex justify-center items-center'>
						{random2}
					</li>
					<li className='bg-cyan-600 bg-opacity-90 h-20 flex justify-center items-center'>
						{random3}
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

export default Ruleta;
