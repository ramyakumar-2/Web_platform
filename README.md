# JanConnect

JanConnect now includes two versions of the same idea:

- `public/` contains the original static prototype.
- `src/` plus the root `index.html` contain a React + Vite starter app.

## Open in VS Code

```powershell
code "C:\Users\Nithay Jain\OneDrive\Documents\New project"
```

## React project files

- `index.html` - Vite entry
- `src/App.jsx` - main React UI
- `src/content.js` - multilingual content and card data
- `src/index.css` - styling
- `package.json` - scripts and dependencies

## Run locally

PowerShell may block `npm`, so use `npm.cmd`:

```powershell
npm.cmd install
npm.cmd run dev
```

Then open the local URL Vite prints, usually `http://localhost:5173`.

## Static fallback

If you want a version that opens directly from a file without installing dependencies, use:

- `public/index.html`
