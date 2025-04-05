"use client";
import { useEffect } from "react";

export default function ThemeToggleButton() {
  useEffect(() => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const icon = themeToggle?.querySelector("i");

    themeToggle?.addEventListener("click", () => {
      if (body.getAttribute("data-theme") === "light") {
        body.setAttribute("data-theme", "dark");
        icon?.classList.remove("fa-sun");
        icon?.classList.add("fa-moon");
      } else {
        body.setAttribute("data-theme", "light");
        icon?.classList.remove("fa-moon");
        icon?.classList.add("fa-sun");
      }
    });
  }, []);
  return (
    <button className="theme-toggle" id="theme-toggle">
      <i className="fas fa-moon"></i>
    </button>
  );
}
