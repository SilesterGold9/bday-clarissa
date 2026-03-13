"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { Flame, Music, Swords, Quote, Skull, Sparkles } from "lucide-react";

const SHITPOSTS = [
  "Dracarys, mas com todo o respeito.",
  "Omae wa mou shindeiru. (Nani?!)",
  "Perdi todas as tuas fotos pra um ladrão de telefones, então você ganha esse site. Problemas modernos requerem soluções modernas. kkkkkk",
  "Tessarion é a melhor dragoa. Quem discordar tá errado.",
  "Gritando as letras do Yungblud às 3 da manhã.",
  "De acordo com todas as leis conhecidas da aviação, não há como um dragão conseguir voar.",
  "O Daeron poderia me consertar.",
  "I'm a lowlife, but I'm your lowlife.",
  "Apenas duas lendas absolutas existindo na mesma linha do tempo.",
];

export default function BirthdayPage() {
  const [quote, setQuote] = useState(
    "Clique no botão acima para uma revelação.",
  );

  useEffect(() => {
    // Trigger initial confetti burst on load (Red, Black, Silver, Pink for the Yungblud/HotD vibe)
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      const colors = ["#dc2626", "#000000", "#e5e5e5", "#db2777"];

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors,
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors,
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const generateShitpost = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#dc2626", "#000000", "#e5e5e5", "#db2777"],
    });

    // Pick a random quote that isn't the current one
    let random;
    do {
      random = SHITPOSTS[Math.floor(Math.random() * SHITPOSTS.length)];
    } while (random === quote && SHITPOSTS.length > 1);

    setQuote(random);
  };

  return (
    <main className="min-h-screen overflow-hidden selection:bg-red-900 selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center justify-center p-3 bg-zinc-900/50 backdrop-blur-sm rounded-full shadow-sm mb-4 border border-zinc-800">
            <Skull className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-sm font-medium text-zinc-300 uppercase tracking-widest">
              Level Up Desbloqueado
            </span>
            <Skull className="w-5 h-5 text-red-500 ml-2" />
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-bold text-zinc-100 tracking-tight">
            Feliz Aniversário, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 italic">
              Clarissa
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Já que um palhaço roubou meu telefone e eu perdi as tuas fotos, tive
            que improvisar. Bem-vinda ao teu santuário de aniversário programado
            do zero. Tá um pouco cringe, eu sei kkkkkk
          </p>

          <div className="pt-8">
            <button
              onClick={generateShitpost}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-zinc-950 transition-all duration-200 bg-red-500 font-serif rounded-full hover:bg-red-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:ring-offset-zinc-950 shadow-[0_0_30px_rgba(220,38,38,0.3)]"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
              Invocar o Oráculo
            </button>
          </div>
        </motion.div>
      </section>

      {/* The Oracle / Shitpost Generator */}
      <section className="py-24 px-4 bg-zinc-900 border-y border-zinc-800">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <Quote className="w-12 h-12 text-red-500/50 mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-serif italic text-zinc-200 min-h-[120px] flex items-center justify-center">
            &quot;{quote}&quot;
          </h2>
        </motion.div>
      </section>

      {/* Starter Pack Section */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-100 mb-4">
              Starter Pack da Clarissa
            </h2>
            <p className="text-zinc-400">Tudo o que faz você ser você.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-red-500/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-zinc-950 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-zinc-800">
                <Swords className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-3">
                Protagonista de Anime.. às vezes
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Apenas energia de personagem principal, ou de alguêm que
                definitivamente não devia andar livre na sociedade sem
                supervisão.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-red-500/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-zinc-950 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-zinc-800">
                <Flame className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-3">
                Defensora #1 do Daeron
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                O único Targaryen que presta. Tessarion é uma boa garota azul.
                Nós não fazemos as regras, apenas as aplicamos com fogo de
                dragão.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-red-500/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-zinc-950 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-zinc-800">
                <Music className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-3">Yungblud</h3>
              <p className="text-zinc-400 leading-relaxed">
                I mean, nem sei se ainda gostas dele, mas ainda ouço as músicas
                que me recomendaste na época, go go Yunglub!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Letter Section */}
      <section className="py-24 px-4 bg-zinc-900">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-zinc-950 p-8 md:p-12 rounded-3xl shadow-2xl border border-zinc-800 relative">
            <Flame className="absolute -top-6 -right-6 w-12 h-12 text-red-500 transform rotate-12 opacity-80" />
            <h2 className="text-3xl font-serif font-bold text-zinc-100 mb-6">
              Querida Clarissa,
            </h2>
            <div className="space-y-4 text-zinc-400 text-lg leading-relaxed font-serif">
              <p>
                Descansem em paz nossos arquivos de fotos (sim, está mesmo a me
                doer), mas sinceramente, isso aqui é bem mais fixe. Eu não podia
                deixar o teu aniversário passar sem fazer algo estúpido e
                especial.
              </p>
              <p>
                A distância não significa nada quando ainda podemos dividir o
                mesmo neurônio com memes, animes e dragões, e brainron, am i
                right?
              </p>
              <p>
                Espero que o teu dia seja cheio de comida boa, zero estresse, e
                talvez um rewatch dos seus episódios favoritos. Tenha o melhor
                aniversário de todos, nerd.
              </p>
              <p className="pt-4 font-bold text-red-500">
                Com carinho,
                <br />
                Tchipoque
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center bg-zinc-950 text-zinc-600 border-t border-zinc-900">
        <p className="flex items-center justify-center gap-2">
          Feito com <Flame className="w-4 h-4 text-red-500" /> e um celular
          roubado para a Clarissa
        </p>
      </footer>
    </main>
  );
}
