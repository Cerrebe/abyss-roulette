import Head from 'next/head';
import { connectToDatabase } from '../libs/mongodb';
import Link from 'next/link';

export default function Home({ bans, part }) {
	return (
		<>
			<Head>
				<title>Roulette</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='absolute w-full h-full bg-slate-800 -z-30 m-0'>
				<div className='z-30'>
					<div className='my-10 py-10 text-center mx-4 px-4'>
						<Link
							href='/abyss'
							className='bg-cyan-700 p-10 rounded-xl align-middle inline-block border-8 mx-8 my-2'
						>
							Abismo
						</Link>
						<div className='lg:px-16 rounded-xl align-middle inline-block lg:mx-8'></div>
						<Link
							href='/fighterz'
							className='bg-cyan-700 p-10 rounded-xl align-middle inline-block border-8 mx-8 my-2'
						>
							Fighterz
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const { db } = await connectToDatabase();

	const data = await db
		.collection('abyss_datatable')
		.find({})
		.limit(20)
		.toArray();

	const bansjson = JSON.parse(JSON.stringify(data[0].bans));
	const partjson = JSON.parse(JSON.stringify(data[0].part));

	return {
		props: {
			bans: bansjson,
			part: partjson,
		},
	};
}
