/**
 * Enables horizontal mouse wheel scroll + drag for a container.
 */
export function initHorizontalScroll(container) {
  container.addEventListener(
    "wheel",
    (e) => {
      if (container.scrollWidth <= container.clientWidth) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const atStart = container.scrollLeft <= 0;
      const atEnd = container.scrollLeft >= maxScroll - 1;

      if ((atStart && e.deltaY < 0) || (atEnd && e.deltaY > 0)) return;

      e.preventDefault();
      container.scrollLeft += e.deltaY;
    },
    { passive: false },
  );

  let isDown = false;
  let startX = 0;
  let scrollStart = 0;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollStart = container.scrollLeft;
    container.style.cursor = "grabbing";
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    container.style.cursor = "";
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    container.style.cursor = "";
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollStart - walk;
  });
}
