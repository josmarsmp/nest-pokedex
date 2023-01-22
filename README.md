<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Setup in development

1. Clone repository
2. Execute following command to install all dependencies
```
yarn install
```
3. Install Nest CLI
```
npm i -g @nestjs/cli
```
4. Database setup
```
docker-compose up -d
```
5. Execute seeder endpoint to have dummy data into database
```
localhost:3000/api/v2/seed
```

## Stack
* MongoDB
* Nest