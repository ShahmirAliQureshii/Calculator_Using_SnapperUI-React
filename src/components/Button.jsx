const Button = ({ btn, values, setValues, setPrevValue, setResult }) => {
  const engine = () => {
    if (btn.operator == "clear") {
      return setValues([]);
    } else if (btn.operator == "backspace") {
      return setValues(values.slice(0, -1));
    }

    btn.operator === "="
      ? setPrevValue(values) ||
        setResult([eval(values.join(""))]) ||
        setValues([])
      : setResult(null) || setValues((prev) => [...prev, btn.operator]);
  };

  return (
    <button
      onClick={() => engine()}
      className={`rounded-2xl border transition-all duration-200 active:scale-95 flex items-center justify-center ${btn.operator == "=" ? "bg-amber-500 aspect-square hover:bg-amber-400 border border-amber-400 text-black font-bold text-2xl shadow-[0_0_25px_rgba(245,158,11,0.3)]" : btn.operator === "+" || btn.operator === "-" || btn.operator === "*" || btn.operator === "/" ? "bg-amber-500/10 hover:bg-amber-500/20 aspect-square border-amber-500/30 text-amber-500 font-semibold text-xl shadow-[0_0_15px_rgba(245,158,11,0.05)]" : btn.operator == "0" ? "col-span-2 bg-zinc-900/30 hover:bg-zinc-800/60 border border-zinc-800/30 text-zinc-100 text-lg pl-8 shadow-inner h-16" : "bg-zinc-900/30 hover:bg-zinc-800/60 border-zinc-800/30 text-zinc-100 text-lg"}`}
    >
      {btn.icon}
    </button>
  );
};

export default Button;
