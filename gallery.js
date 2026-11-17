const site = window.REMQUILL_SITE;
const gallery = document.querySelector("#gallery");
const emptyState = document.querySelector("#gallery-empty");
const donateLink = document.querySelector("#donate-link");
const donationNote = document.querySelector("#donation-note");

document.querySelector("#year").textContent = new Date().getFullYear();

for (const artwork of site.artwork) {
  const figure = document.createElement("figure");
  figure.className = "artwork";

  const image = document.createElement("img");
  image.src = artwork.src;
  image.alt = artwork.alt;
  image.loading = "lazy";
  image.decoding = "async";
  figure.append(image);

  if (artwork.title) {
    const caption = document.createElement("figcaption");
    caption.textContent = artwork.title;
    figure.append(caption);
  }

  gallery.append(figure);
}

if (site.artwork.length > 0) {
  emptyState.hidden = true;
}

if (site.kofiUrl) {
  const donationUrl = new URL(site.kofiUrl);
  if (donationUrl.protocol !== "https:" || donationUrl.hostname !== "ko-fi.com") {
    throw new Error("The Ko-fi URL must use https://ko-fi.com.");
  }

  donateLink.href = donationUrl.href;
  donateLink.hidden = false;
  donationNote.hidden = true;
}
