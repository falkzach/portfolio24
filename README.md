# portfolio24 - [falkzach.net](falkzach.net)

An updated portfolio site for 2024, built on vite + react

Lazily deployed with docker compose

With automated lets encrypt cert

Run it in a container locally
```bash
docker compose --profile local up
```

Develop locally with SWC
```bash
nvm use
npm install
npm run dev
```

Upload to server
```bash
./upload.sh
```

Run on the deploy server, no hangups, logs and errors to `log.txt`
```bash
./init-certbot.sh
docker stop portfolio24
nohup docker compose --profile deployed up > log.txt 2>&1 &
```
