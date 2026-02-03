Astro POC for following flows

- styling
  - For components, using style tags in components' .astro files
  - Global styles, importing .css files inside common Layout component
- js usage
  - inside sccript tag in components' .astro files
- svg usage
  - imported as .svg and used as inline Astro components
- folder structure
  - /pages (Astro enforces folder structure routing in this folder, only contains pages)
  - /features (contains all files related to individual page, imported by /pages)
  - /layouts contains shared layouts components
  - /assets contains images, icons
  - /styles contains global .css files which

To test the final build on http://localhost:8080  
$ ./serve-build.sh

To start dev server on http://localhost:4321
$ pnpm run dev
