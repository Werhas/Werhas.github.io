document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  });
  
  window.addEventListener("load", () => {
    document.querySelector(".hero").classList.add("slide-in");
  });
  
  const style = document.createElement("style");
  style.textContent = `
    .hero.slide-in {
      transform: translateY(0);
      opacity: 1;
      transition: all 0.6s ease-in-out;
    }
  
    .hero {
      transform: translateY(-50px);
      opacity: 0;
    }
  `;
  document.head.appendChild(style);
  