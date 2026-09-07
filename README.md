to start the redis and postgree docker container - docker compose -f infra/docker-compose.yml up -d
to build backed docker image - docker build -t blockvault-api .
to run docker backed - docker run -p 5000:5000 blockvault-api
to build frontend docker image - docker build -t blockvault-frontend . 
to run frontend docker - docker run -p 3000:80 blockvault-frontend


to connect with docker container - docker exec -it dfs-postgres  psql -U postgres
to stop all runnig container - docker stop $(docker ps -q)
to add a new table in existing volume infra_postgres - docker exec -i dfs-postgres psql -U postgres -d distributed_storage < database/migrations/002_create_otp_verifications.sql
to list all tabels - docker exec -it dfs-postgres psql -U postgres -d distributed_storage -c "\dt"
to remove all the data  from the tabels - docker exec -it dfs-postgres psql -U postgres -d distributed_storage -c "TRUNCATE TABLE email_verification_otps, users RESTART IDENTITY CASCADE;"
to see what data contains in the table - docker exec -it dfs-postgres psql -U postgres -d distributed_storage -c "SELECT * FROM otp_verifications;"