export default function scrollDown() {
  const geometry = document.querySelector("ul")?.firstElementChild?.getBoundingClientRect()!;
  const cardHeight = geometry.height ? geometry.height : 0;
  //  one card
  if (window.innerWidth < 704)
    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
    });
  //  two cards
  if (window.innerWidth >= 704 && window.innerWidth < 1040)
    window.scrollBy({
      top: cardHeight * 3,
      behavior: "smooth",
    });
  //  three cards
  if (window.innerWidth >= 1040)
    window.scrollBy({
      top: cardHeight * 4,
      behavior: "smooth",
    });
}
