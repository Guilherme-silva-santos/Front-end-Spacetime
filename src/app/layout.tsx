import type { Metadata } from 'next';
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });
const baijamjuree = BaiJamjuree({ subsets: ['latin'], weight:'700', variable: '--font-bai-jamjuree' });

export const metadata: Metadata = {
	title: 'SpaceTime ',
	description: 'Uma Cápsula do tempo',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={`${roboto.variable} ${baijamjuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
		</html>
	);
}
