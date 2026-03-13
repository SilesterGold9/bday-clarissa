import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Feliz Aniversário Clarissa!',
  description: 'Um site de aniversário especial para a Clarissa',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-zinc-950 text-zinc-100" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
