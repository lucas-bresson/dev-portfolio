import { Alata, Inter, Josefin_Sans, Poppins, Rubik } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
});

export const rubik = Rubik({
  subsets: ['latin'],
});

export const josefinSans = Josefin_Sans({
  weight: ['300'],
  subsets: ['latin'],
});

export const alata = Alata({
  weight: ['400'],
  subsets: ['latin'],
});

export const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});
