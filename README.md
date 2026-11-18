# Interwall — Interior design studio

A responsive, frontend-only website built with semantic HTML, CSS, and vanilla JavaScript. No build step or backend is required.

## Local preview

```bash
python3 -m http.server 8000
```

Visit `http://localhost:8000`. GitHub Pages serves the repository root.

## Features

- Responsive navigation and layouts, with reduced-motion support
- Filterable concept portfolio and accessible project dialogs
- Expandable services and studio journal articles
- A project brief builder with browser validation, preview, editing, and a text-file download

The brief builder never submits information to a server or stores it in browser storage. Closing the dialog clears the fields. The portfolio is illustrative concept content, not a claim of completed client work.

## Files

- `index.html` — page content and dialogs
- `styles.css` — responsive design and interaction states
- `script.js` — navigation, filtering, dialogs, and local brief generation
- `assets/` — locally hosted photography and favicon

## Photography

Interior photography from Unsplash, downloaded for reliable local delivery:

- Hero: https://images.unsplash.com/photo-1600210492486-724fe5c67fb0
- The Still House: https://images.unsplash.com/photo-1600607687920-4e2a09cf159d
- Common Ground: https://images.unsplash.com/photo-1497366754035-f200968a6e72
- Soft Sanctuary / studio: https://images.unsplash.com/photo-1616486338812-3dadae4b4ace

DM Sans is served by Google Fonts, with system sans-serif fallbacks; editorial italics use Georgia.
