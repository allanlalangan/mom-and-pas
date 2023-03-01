import { NextPage } from 'next';
import Head from 'next/head';

const Products: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='min-h-screen'>
				<h1 className='mt-4 font-brand text-8xl uppercase text-teal-900'>
					ALL PRODUCTS
				</h1>
			</main>
		</>
	);
};

export default Products;
