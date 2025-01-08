networks:
  coolify:
    external: true
services:
  traefik:
    container_name: coolify-proxy
    image: 'traefik:v3.1'
    restart: unless-stopped
    environment:
      - DO_AUTH_TOKEN = dop_v1_55b05882490de8202c3b8f40241f4094cd9484437237dc5a1dfd677cb147cfab
    extra_hosts:
      - 'host.docker.internal:host-gateway'
    networks:
      - coolify
    ports:
      - '80:80'
      - '443:443'
      - '443:443/udp'
      - '8080:8080'
    healthcheck:
      test: 'wget -qO- http://localhost:80/ping || exit 1'
      interval: 4s
      timeout: 2s
      retries: 5
    volumes:
      - '/var/run/docker.sock:/var/run/docker.sock:ro'
      - '/data/coolify/proxy:/traefik'
    command:
      - '--ping=true'
      - '--ping.entrypoint=http'
      - '--api.dashboard=true'
      - '--api.insecure=false'
      - '--entrypoints.http.address=:80'
      - '--entrypoints.https.address=:443'
      - '--entrypoints.http.http.encodequerysemicolons=true'
      - '--entryPoints.http.http2.maxConcurrentStreams=50'
      - '--entrypoints.https.http.encodequerysemicolons=true'
      - '--entryPoints.https.http2.maxConcurrentStreams=50'
      - '--entrypoints.https.http3'
      - '--providers.docker.exposedbydefault=false'
      - '--providers.file.directory=/traefik/dynamic/'
      - '--providers.file.watch=true'
      - '--certificatesresolvers.letsencrypt.acme.httpchallenge=true'
      - '--certificatesresolvers.letsencrypt.acme.dnschallenge.provider=digitalocean'
      - '--certificatesresolvers.letsencrypt.acme.dnschallenge.delaybeforecheck=0'
      - '--certificatesresolvers.letsencrypt.acme.storage=/traefik/acme.json'
      - '--certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=http'
      - '--providers.docker=true'
    labels:
      - traefik.enable=true
      - traefik.http.routers.traefik.entrypoints=http
      - traefik.http.routers.traefik.service=api@internal
      - traefik.http.services.traefik.loadbalancer.server.port=8080
      - traefik.http.routers.traefik.middlewares=traefik-basic-auth@file
      - traefik.http.routers.traefik.tls.certresolver=letsencrypt
      - traefik.http.routers.traefik.tls.domains[0].main=ihsaan.my.id
      - traefik.http.routers.traefik.tls.domains[0].sans=*.ihsaan.my.id
      - traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https
      - traefik.http.middlewares.gzip.compress=true
      - coolify.managed=true
      - coolify.proxy=true