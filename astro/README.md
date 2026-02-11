Astro POC for following flows

## Main Implementation (/src)

- styling
  - For components, using style tags in components' .astro files
  - Global styles, importing .css files inside common Layout component
- js usage
  - inside script tag in components' .astro files
- svg usage
  - imported as .svg and used as inline Astro components
- folder structure
  - /pages (Astro enforces folder structure routing in this folder, only contains pages)
  - /features (contains all files related to individual page, imported by /pages)
  - /layouts contains shared layouts components
  - /assets contains images, icons
  - /styles contains global .css files

## Tailwind Implementation (/src/tailwind-styled)

- styling
  - Using Tailwind CSS utility classes
  - Consistent design with main implementation, just different styling approach
- folder structure
  - /pages (route files that import from type-based folders)
  - /components (organized by page: /home, /about, /animated)
  - /scripts (organized by page: /animated, /about)
  - /constants (organized by page: /home, /animated)
  - /layouts contains shared layouts components
  - /assets contains images, icons
  - /data contains data files for components

## Development Commands

**Main version:**

```bash
$ pnpm run dev:main       # Dev server on http://localhost:4321
$ pnpm run build:main     # Build main version
$ ./serve-build.main.sh   # Serve build on http://localhost:8080
```

**Tailwind version:**

```bash
$ pnpm run dev:tailwind     # Dev server on http://localhost:4321
$ pnpm run build:tailwind   # Build tailwind version
$ ./serve-build.tailwind.sh # Serve build on http://localhost:8081
```

**Both versions (side-by-side comparison):**

```bash
$ ./serve-build.both.sh     # Serve both builds simultaneously
                           # Main: http://localhost:8080
                           # Tailwind: http://localhost:8081
```
