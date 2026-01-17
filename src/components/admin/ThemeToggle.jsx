import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle theme"
      className="relative w-[50px] h-[50px]"
    >
      {/* OUTER */}
      <div className="absolute inset-0 rounded-full bg-white flex items-center justify-center">
        {/* INNER */}
        <div
          className={`
            w-[45px] h-[45px]
            rounded-full
            flex items-center justify-center
            transition-colors
            ${
              isDark
                ? "bg-[#334155]"
                : "bg-white border-2 border-black"
            }
          `}
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-[#FACC15]" />
          ) : (
            <Moon className="w-6 h-6 text-[#2563EB]" />
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
