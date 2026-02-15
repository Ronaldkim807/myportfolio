# Ronald Kimutai Portfolio

Modern personal portfolio built with React, TypeScript, and Vite.

## Tech Stack
- React
- TypeScript
- Vite
- React Router

## Run Locally
```bash
npm install
npm run dev
```

## Build for Production
```bash
npm run build
npm run preview
```

## Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy to GitHub Pages
If you want this project to run correctly on GitHub Pages, set Vite `base` to your repository name.

Example in `vite.config.ts`:
```ts
export default defineConfig({
  base: '/<your-repo>/',
  plugins: [react()],
})
```

Then:
1. Run `npm run build`
2. Push your code to GitHub
3. In GitHub, open `Settings > Pages`
4. Set `Source` to `GitHub Actions` or deploy the `dist/` folder with your preferred workflow

## Security Check Before Deploy
```bash
npm run security:check
```
