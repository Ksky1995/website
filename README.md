# Myanmar Precision Systems — Static Website

Professional, high-tech static website for Myanmar's specialist instrument service center.

## Project Structure
- `index.html`: Main entry point with HUD-style UI.
- `css/`: Modular stylesheets (variables, layout, components, etc.).
- `js/`: Interactivity (sticky nav, scroll transitions, form logic).
- `images/`: Placeholder guide for upcoming photography.
- `vercel.json`: Clean URL and security header configuration.

## Design Identity: "High-Tech Instrument UI"
- **Scanline Texture**: Fixed overlay for CRT/Instrument feel.
- **Blueprint Grids**: Animated background grids evoking engineering excellence.
- **HUD Overlines**: Navigation labels styled as instrument indicators.
- **Gold Accents**: High-contrast primary color for actions and importance.

## Local Development
1. Use any local server (e.g., VS Code Live Server).
2. For Python: `python3 -m http.server 3000` in the project root.
3. For Vite (already configured in this environment): `npm run dev`.

## Customization
- **Colors**: Edit `css/variables.css` to update the global theme.
- **Fonts**: Modify the Google Fonts link in `index.html` and the `--font-*` vars in `variables.css`.
- **Forms**: Currently simulated with JS. To make it live, integrate with Formspree or a back-end handler.

## Deployment (Vercel)
1. Push to a GitHub repository.
2. Select "Static Site" or "Other" in the Vercel dashboard.
3. No build command is required for this static version.

---
© 2025 Myanmar Precision Systems. Built for precision.
