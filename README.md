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
They are some ways of converting integer to roman numerals, 

#### Rules: 
- We only consider numbers ranging from 0 - 100
- Largest roman numeral is 3999
- Doesn't support Zero, so "nulla" or "N" references zero
- Roman numerals support fractions
- Roman numerals are written from highest to lowest except for defined cases where the lowest letter is written to the left in order to substract it from its own right neighbour

##### Notations
- Written from highest to lowest:
    - XVI = 16
    - XII = 12
- exceptions : I, X and C can be placed before to substract them
    - IV and IX are respectively 4 and 9 where we substract 1 to 5 and 1 to 10
    - XL and XC are respectively 40 and 90
- The approach we're taking here considers that we can deduce from the input number and represent all the roman numerals ranging from 0-100 { I, IV, V, IX, X, XL, L, XC, C } (excluding fractions that has to be processed separatlty)

##### Fraction
- 1/12       => ·   => 0.083
- 2/12, 1/6  => :   => 0.167
- 3/12, 1/4  => ∴   => 0.250
- 4/12, 1/3  => ∷   => 0.333
- 5/12       => ⁙   => 0.417
- 6/12, 1/2  => S   => 0.500
- 7/12       => S·  => 0.583
- 8/12, 2/3  => S:  => 0.667
- 9/12, 3/4  => S∴  => 0.750
- 10/12, 5/6 => S∷  => 0.833
- 11/12      => S⁙  => 0.917

==> 0.83 precision to the comma

##### Approach / Pseudo Code
- Input: number
- Output: string (roman numeral)

First we split the input number, so that we can process the integer part and the decimal part separatly

###### Integer Part
The approach we take is to iterate over the 9 values defining roman numerals ranging from 0 to 100, if our input number is greater than the standardized value, go to the next, when our input number is lesser than the standardized value, add the stndardized value to the output roman number string and substract the value to the input number.

Standardized values = { 
    1: I, 
    4: IV, 
    5: V, 
    9: IX, 
    10: X, 
    40: XL, 
    50: L, 
    90: XC, 
    100: C 
}

**Example:** 
Input : 94
94 < 100 => GoTo Next (Output = '', Input = 94)
94 > 90 => Add 90 (XC), substract to input (94 - 90 = 4), GoTo Next (Output = 'XC', Input = 4)
4 < 50 => GoTo Next (Output = 'XC', Input = 4)
4 < 40 => GoTo Next (Output = 'XC', Input = 4)
4 < 10 => GoTo Next (Output = 'XC', Input = 4)
4 < 9 => GoTo Next (Output = 'XC', Input = 4)
4 < 5 => GoTo Next (Output = 'XC', Input = 4)
4 == 4 => Add 4 (IV), substract to input (4 - 4 = 0), (Output = 'XCIV', Input = 0) STOP

###### Decimal Part
The approach is similiar that the integer part approach, the difference is that we have to consider that roman numerals cannot represent exact decimal values (precision is .083), so we have to find the decimal roman equivalent that is the closest to the decimal part of our input number

**Example**
Input : 0.169
abs(0.083 - 0.169) -> 0.086 < abs(0 - 0.169) -> 0.169 => true (output = 0.083)
abs(0.167 - 0.169) -> 0.002 < abs(0.83 - 0.169) -> 0.661 => true (output = 0.167)
abs(0.250 - 0.169) -> 0.081 < abs(0.167 - 0.169) -> 0.002 => false (output = 0.167)
==> Closest value to our decimal is 0.167 so the return value for the decimal part is ':'

**Process**
1. Retrieve integer and decimal part of input 
2. Convert the integer value as in the example above (reduce)
3. Convert the decimal value as in the example above (reduce)
4. Add the decimal and integer parts

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

--> Create/Register a user by going to the 'Signup' page
--> Connect the user by going to the Signin page
--> Use the converter !