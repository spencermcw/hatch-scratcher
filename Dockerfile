# Hatch Scratcher (standalone demo): Vite build of game/, served by static-base (Caddy) on $PORT.
# static-base is copied from spencermcw/spencermcw-site deploy/static-base at c4211b2.

FROM node:18-slim AS build
WORKDIR /app/game
COPY game/package.json game/package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY game/ ./
# Plain `vite build` (base "/"); build:prod targets the old game/ sub-path of the Blockchain Arcade.
RUN npx vite build

FROM caddy:2.10.2-alpine AS static-base
COPY deploy/static-base/Caddyfile /etc/caddy/Caddyfile
COPY deploy/static-base/defaults/ /etc/caddy/defaults/
ENV PORT=8080
EXPOSE 8080
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]

FROM static-base
# Pixi runs without 'unsafe-eval' via @pixi/unsafe-eval (installed in main.js). Textures and the
# scratch layer use data: and blob: URLs; the font, images and sounds are all served from /srv.
ENV SITE_CSP="default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; media-src 'self' blob:; connect-src 'self'; manifest-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests"
COPY --from=build /app/game/dist/ /srv/
