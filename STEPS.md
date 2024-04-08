# create network
docker network create --driver=bridge evershop-network
# create data base
docker pull postgres
docker run -p 5432:5432 --name evershop-ec-postgres-dev -e POSTGRES_PASSWORD=meta2024$# -d postgres 
# install pg admin
docker pull dpage/pgadmin4:latest
docker run -p 90:80 -e 'PGADMIN_DEFAULT_EMAIL=mikasomk34@gmail.com' -e 'PGADMIN_DEFAULT_PASSWORD=meta2024$#' -d dpage/pgadmin4 
## Access pg adming
http://localhost/login?next=%2F
## Get ip
docker inspect -f "{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}" evershop-ec-postgres-dev


## Run setup
npm run setup

√ Postgres Database User (postgres) · postgres
√ PostgreSQL Database Password (<empty>) · meta2024$#
√ Your full name · Miguel Ponce
√ Your administrator user email · mikasomk34@gmail.com
? Your administrator user password » meta2024$#

## Config dev mode


## Create user
npm run user:create -- --email "m" --password "user password" --name "user name"
npm run user:create -- --email "mikasomk34@gmail.com" --password "meta2024$#" --name "mikasomk34"
## Compilar
npm run build
## Arrancar servicio
npm run start

