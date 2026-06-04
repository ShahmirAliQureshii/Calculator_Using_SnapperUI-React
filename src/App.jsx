import { Cpu, Layers, Zap, Sparkles } from "lucide-react";

import { IoBackspaceOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import {
  PiNumberEightBold,
  PiNumberFiveBold,
  PiNumberFourBold,
  PiNumberNineBold,
  PiNumberOneBold,
  PiNumberSevenBold,
  PiNumberSixBold,
  PiNumberThreeBold,
  PiNumberTwoBold,
} from "react-icons/pi";

import Button from "./components/Button";
import { useState } from "react";

export default function App() {
  const btns = [
    { icon: "C", operator: "clear" },
    { icon: <IoBackspaceOutline />, operator: "backspace" },
    { icon: "%", operator: "%" },
    { icon: "÷", operator: "/" },
    { icon: <PiNumberSevenBold />, operator: "7" },
    { icon: <PiNumberEightBold />, operator: "8" },
    { icon: <PiNumberNineBold />, operator: "9" },
    { icon: "×", operator: "*" },
    { icon: <PiNumberFourBold />, operator: "4" },
    { icon: <PiNumberFiveBold />, operator: "5" },
    { icon: <PiNumberSixBold />, operator: "6" },
    { icon: "−", operator: "-" },
    { icon: <PiNumberOneBold />, operator: "1" },
    { icon: <PiNumberTwoBold />, operator: "2" },
    { icon: <PiNumberThreeBold />, operator: "3" },
    { icon: "+", operator: "+" },
    { icon: "0", operator: "0" },
    { icon: <LuDot />, operator: "." },
    { icon: "=", operator: "=" },
  ];

  const [values, setValues] = useState([]);

  const [prevValue, setPrevValue] = useState(null);
  const [result, setResult] = useState(null);


  return (
    <div className="min-h-screen bg-white">
      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
        <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="absolute inset-0 bg-[radial-linear(circle_at_center,rgba(245,158,11,0.08)_0%,transparent_65%)] pointer-events-none"></div>
          <span className="text-xs font-bold tracking-[0.3em] text-amber-500 mb-6 uppercase block">
            THE NEW STANDARD OF COMPUTATION
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-linear-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent max-w-4xl leading-tight mb-6">
            Mathematical Elegance, Redefined.
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-12">
            Experience the world's most luxurious digital calculator. Designed
            for visionaries who demand absolute precision wrapped in
            breathtaking aesthetic perfection.
          </p>
        </section>
        <section className="py-12 px-4 md:px-8 relative z-10">
          <div className="max-w-md mx-auto rounded-[2.5rem] bg-linear-to-b from-zinc-900/90 to-black/95 border border-zinc-800/80 p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(245,158,11,0.05)] backdrop-blur-2xl">
            <div className="flex justify-between items-center mb-8 px-2">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400">
                  AURELIUS III
                </span>
              </div>
              <span className="text-[9px] font-semibold tracking-wider text-amber-500/80 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                PRECISION MODE
              </span>
            </div>
            <div className="mb-8 bg-zinc-950/60 border border-zinc-900 rounded-3xl p-6 text-right relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-amber-500/5 to-transparent rounded-full blur-2xl pointer-events-none"></div>
              <p className="text-zinc-500 text-sm font-mono tracking-wide mb-2 block">
                {prevValue ? prevValue : "299,792,458 × 1.6180339"}
              </p>
              <p className="text-4xl md:text-5xl font-light font-mono text-amber-100 tracking-tight overflow-auto scrollbar-none">
                {result ? result : values}
              </p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {btns.map((btn, index) => (
                <Button
                  key={index}
                  btn={btn}
                  prevValue={prevValue}
                  setPrevValue={setPrevValue}
                  result={result}
                  setResult={setResult}
                  values={values}
                  setValues={setValues}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
              Engineered Beyond Ordinary.
            </h2>
            <p className="text-zinc-400 text-lg font-light">
              Discover features that redefine premium software design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-linear-to-b from-zinc-900/40 to-black/40 border border-zinc-800/60 rounded-3xl p-8 hover:border-zinc-700/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-amber-500" content="" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Quantum-Grade Precision
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Utilizes arbitrary-precision arithmetic engines to process
                extreme floating-point calculations with zero degradation.
              </p>
            </div>
            <div className="bg-linear-to-b from-zinc-900/40 to-black/40 border border-zinc-800/60 rounded-3xl p-8 hover:border-zinc-700/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-amber-500" content="" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Glassmorphic Architecture
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Indulge in a breathtaking user interface curated with
                multi-layered micro-shadows and real-time frosted glass effects.
              </p>
            </div>
            <div className="bg-linear-to-b from-zinc-900/40 to-black/40 border border-zinc-800/60 rounded-3xl p-8 hover:border-zinc-700/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-amber-500" content="" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Instant Tactile Haptics
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Each press triggers a micro-calibrated feedback response,
                simulating mechanical luxury button presses digitally.
              </p>
            </div>
          </div>
        </section>
        <section className="py-24 border-t border-zinc-900 bg-black/50">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-black" content="" />
              </div>
              <span className="text-sm font-black tracking-[0.3em]">
                AURELIUS
              </span>
            </div>
            <p className="text-zinc-600 text-xs tracking-wide">
              © 2026 Aurelius Computational Laboratories. All mathematical
              rights reserved.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
