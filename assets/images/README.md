# Artwork files

Upload the artist's image files into this folder. Then add each image to the `artwork` array in the repository's root `site-config.js`, using its path relative to the repository root, an accessible `alt` description, and an optional `title`.

For example:

```js
{
  src: "assets/images/my-artwork.jpg",
  alt: "A short, useful description of the image",
  title: "Optional title"
}
```

The GitHub Pages workflow automatically republishes the site after changes are pushed to `main`.
