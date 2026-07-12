console.log("JavaScript Loaded!");

const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const url = thumbnail.dataset.url;

    if (url) {
      window.open(url, "_blank");
    } else {
      console.log("No URL found for this thumbnail.");
    }
  });
});