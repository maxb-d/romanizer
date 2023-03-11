# Overview
Rommanizer's purpose is to convert integers to roman numerals

## Functionnalities
- Authentification of a user
- Converter

## Tech stack
Romanizer is a Typescript PERN application

### Frontend
- ReactJs
- TailwindCSS (styling)
- Framer-Motion (animations)
- React Router DOM (Routing)
- Axios (API calls)
- ViteJs (bundler)

### Backend
- NestJs on top of ExpressJs
- JWT and Passport (Authentication)
### Database
- Prisma (ORM) on top of PostgreSQL

### Conversion Algorithm

### Getting started

#### Cloning the git repository
The project has two branches : 
    - main --> main branch with traditionnal CRUD functionnalities and AJAX model
    - sse_version --> branch with Server Sent Event function to retrieve the conversion

From a dedicated directory :
```bash
mkdir <project_name>
cd <project_name>
git clone -b <main or sse_version> <git_repository_url> # Get the corresponding
cd romanizer 
```

#### Creating the .env files:
You now need to create the .env files required:

- Server .env (in server root dir): 
```js
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/romanizerdb?schema=public

JWT_SECRET=<value_you_want>

PORT=5000
```

- Client .env (in client root dir):
```js
VITE_API_BASE_URL="http://localhost:5000"
```

#### Run the local dev version
```bash
cd romanizer
yarn                   # To install global deps (concurrently dep)
yarn install-all-deps # To install both client and server deps
yarn dev                # run the app
```

The Project should now be running in dev mode.

#### Dockerizing the client to run it from a container
```bash
cd client
docker build -t client  # Build the client image
docker run -p 5173:5173 --env-file .env -d client # Run the image in a container
```

Your client should now be running in a docker container and be accessible through http://localhost:5173 since we exposed the port and mapped it internally to the container