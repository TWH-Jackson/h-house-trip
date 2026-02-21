Bash
npm install firebase
npm run dev
npm init -y && npm install vite @vitejs/plugin-react react react-dom firebase
sed -i 's/"test": "echo \\"Error: no test specified\\" && exit 1"/"dev": "vite --host 0.0.0.0"/' package.json
npm run dev
npx vite --host 0.0.0.0
npm install gh-pages --save-dev
git config --global user.email "lit.kinjackson@gmail.com"
git config --global user.name "TWH-Jackson"
git branch -M main
git remote add origin https://github.com/你的帳號/git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TWH-Jackson/Hhouse-trip.git
git init
git add .
git rm -r --cached .
git add --all
echo ".gemini/" >> .gitignore && echo ".codeoss/" >> .gitignore && echo "node_modules/" >> .gitignore && echo ".idx/" >> .gitignore
git rm -rf --cached .
rm -rf .git
git init
git config user.name "TWH-Jackson"
git config user.email "lit.kinjackson@gmail.com"
git add .
git commit -m "Initial commit with correct config"
git remote add origin https://github.com/TWH-Jackson/h-house-trip.git
git branch -M main
git push -u origin main --force
rm -rf .git
git init
echo ".gemini/" > .gitignore
echo ".codeoss/" >> .gitignore
echo ".idx/" >> .gitignore
echo ".cache/" >> .gitignore
echo "node_modules/" >> .gitignore
echo "dist/" >> .gitignore
