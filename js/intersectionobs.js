
const look = () => {
  let observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.5) {
          entry.target.classList.remove("not-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: [0.5],
    }
  );

  let items = document.querySelectorAll(".row");

  items.forEach((item) => {
    item.classList.add("not-visible");
    observer.observe(item);
  });
};