# sinanbilir.github.io integration project

This project is the cleaned deployment package for the new portfolio repository: `mrsinanbilir/sinanbilir.github.io`.

## What this package is for

- Use this package in the **new** portfolio repo, not the original `mrsinanbilir.github.io` repo.
- It keeps the new Lovable-style portfolio as the main site.
- It removes the Lovable/TanStack Start-specific runtime so the app builds cleanly as a standard Vite + React GitHub Pages project.
- It preserves your downloadable PDFs in `public/docs`.
- It preserves legacy assets in `public/assets` so you can reuse anything from the older site later.

## Project structure

- `src/` — main React app and portfolio sections
- `src/assets/` — imported hero and project images used by the new design
- `public/docs/` — CV and portfolio PDFs
- `public/assets/` — legacy assets copied from the earlier site
- `dist/` — generated after build

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm install
npm run build
```

## Deployment target

This package is prepared for the repository:

- `mrsinanbilir/sinanbilir.github.io`

The Vite `base` is set to `./` so the build works whether you publish the repo as:

- a project site such as `mrsinanbilir.github.io/sinanbilir.github.io/`, or
- a custom domain such as `sinanbilir.github.io`

## Suggested migration flow

1. Clone `mrsinanbilir/sinanbilir.github.io`.
2. Replace its contents with this package.
3. Run `npm install`.
4. Run `npm run build`.
5. Push to `main`.
6. In GitHub Pages, deploy with GitHub Actions.
7. If you want the site on `sinanbilir.github.io`, configure the custom domain in repository Pages settings and DNS.

## Notes

- The app is a single-page React portfolio with section anchor navigation.
- The old portfolio repo does not need to be touched for this deployment.
- This package is pinned to Vite 6 so it works on Node 18+ and avoids the Lovable/TanStack build failure you hit.
