# REMQuill

A lightweight portfolio site hosted with GitHub Pages.

## Add artwork

1. Copy image files into `assets/images/`.
2. Add an entry for each image to the `artwork` array in `site-config.js`:

   ```js
   {
     src: "assets/images/my-artwork.jpg",
     alt: "A short, useful description of the image",
     title: "Optional title"
   }
   ```

Use descriptive alt text and reasonably sized JPEG, PNG, or WebP images. The current collection is stored as optimized WebP files in `assets/images/`.

## Enable Ko-fi donations

Set `kofiUrl` in `site-config.js` to the artist's Ko-fi page URL, for example `https://ko-fi.com/yourusername`. The donation link remains hidden until a URL is configured. Donations are handled by Ko-fi; this static site does not collect payment details.

## Publish

The GitHub Actions workflow in `.github/workflows/pages.yml` publishes the site from the `main` branch. In the repository's **Settings → Pages**, choose **GitHub Actions** as the build and deployment source. A push to `main` then triggers a deployment.

Music is intentionally not shown until audio is available.
