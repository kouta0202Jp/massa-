  const header = document.querySelector("header");
  const slideBox = document.querySelector(".slideBox");

  window.addEventListener("scroll", () => {
    const slideBottom = slideBox.offsetTop + slideBox.offsetHeight;

    if (window.scrollY >= slideBottom) {
      header.classList.add("show");
    } else {
      header.classList.remove("show");
    }
  });
