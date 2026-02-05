import { useState, useEffect } from "react";

/**
 * Custom hook for managing Classical/Quantum mode theme switching
 * Persists preference in localStorage and applies dynamic theme changes
 */
export const useThemeMode = () => {
  const [mode, setMode] = useState("classical");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved mode preference on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("appThemeMode");
    if (savedMode && (savedMode === "classical" || savedMode === "quantum")) {
      setMode(savedMode);
      applyTheme(savedMode);
    } else {
      // Default to classical mode
      localStorage.setItem("appThemeMode", "classical");
      applyTheme("classical");
    }
    setIsLoaded(true);
  }, []);

  /**
   * Apply theme to the document root
   */
  const applyTheme = (themeMode) => {
    const root = document.documentElement;

    if (themeMode === "quantum") {
      // Quantum Mode - Dark/Futuristic Theme
      root.style.setProperty("--app-mode", "quantum");
      root.style.setProperty("--bg-0", "#0f172a"); // Very dark blue
      root.style.setProperty("--bg-1", "#1e293b"); // Dark slate
      root.style.setProperty("--bg-2", "#334155"); // Medium slate
      root.style.setProperty("--text", "#e2e8f0"); // Light text
      root.style.setProperty("--text-sub", "#cbd5e1"); // Light gray text
      root.style.setProperty("--card", "rgba(30, 41, 59, 0.95)"); // Dark card
      root.style.setProperty("--panel", "rgba(30, 41, 59, 0.9)"); // Dark panel
      root.style.setProperty("--border", "rgba(148, 163, 184, 0.3)"); // Lighter border for dark mode
      root.style.setProperty("--accent-neon", "#00ff88"); // Neon green
      root.style.setProperty("--accent-cyan", "#00ffff"); // Cyan glow
      root.style.setProperty("--glow-blue", "0 0 20px rgba(59, 130, 246, 0.8)");
      root.style.setProperty("--glow-purple", "0 0 20px rgba(139, 92, 246, 0.8)");
      root.style.setProperty("--glow-quantum", "0 0 15px rgba(0, 255, 136, 0.6)");
      document.documentElement.setAttribute("data-theme-mode", "quantum");
    } else {
      // Classical Mode - Light/Neutral Theme
      root.style.setProperty("--app-mode", "classical");
      root.style.setProperty("--bg-0", "#f8fafc"); // Light gray
      root.style.setProperty("--bg-1", "#ffffff"); // White
      root.style.setProperty("--bg-2", "#f5f7fb"); // Very light blue
      root.style.setProperty("--text", "#1f2937"); // Dark text
      root.style.setProperty("--text-sub", "#475569"); // Gray text
      root.style.setProperty("--card", "rgba(255, 255, 255, 0.95)");
      root.style.setProperty("--panel", "rgba(255, 255, 255, 0.9)");
      root.style.setProperty("--border", "rgba(148, 163, 184, 0.2)");
      root.style.setProperty("--accent-neon", "#3b82f6"); // Blue
      root.style.setProperty("--accent-cyan", "#06b6d4"); // Cyan
      root.style.setProperty("--glow-blue", "0 0 10px rgba(59, 130, 246, 0.5)");
      root.style.setProperty("--glow-purple", "0 0 10px rgba(139, 92, 246, 0.5)");
      root.style.setProperty("--glow-quantum", "0 0 10px rgba(59, 130, 246, 0.4)");
      document.documentElement.setAttribute("data-theme-mode", "classical");
    }

    // Apply transition class for smooth animation
    const appContainer = document.querySelector(".bb84-simulator");
    if (appContainer) {
      appContainer.classList.add("theme-transitioning");
      setTimeout(() => {
        appContainer.classList.remove("theme-transitioning");
      }, 400);
    }
  };

  /**
   * Toggle between classical and quantum modes
   */
  const toggleMode = () => {
    const newMode = mode === "classical" ? "quantum" : "classical";
    setMode(newMode);
    localStorage.setItem("appThemeMode", newMode);
    applyTheme(newMode);
  };

  return {
    mode,
    isLoaded,
    toggleMode,
    isQuantumMode: mode === "quantum",
  };
};
