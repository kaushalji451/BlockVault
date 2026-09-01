to start the redis and postgree docker container - docker compose -f infra/docker-compose.yml up -d
to build backed docker image - docker build -t blockvault-api .
to run docker backed - docker run -p 5000:5000 blockvault-api
to build frontend docker image - docker build -t blockvault-frontend . 
to run frontend docker - docker run -p 3000:80 blockvault-frontend