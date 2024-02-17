import { Roboto, Inter, Lusitana } from 'next/font/google'

export const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});