# Fetch Rewards Coding Exercise - Backend Software Engineering

## How to Run

- `git clone https://github.com/jknack0/fetch-rewards-coding-exercise.git`
- In the terminal, navigate to the root directory and `npm install`
- Create an empty `.env` file in the root directory, copy the `.env.example` contents into it
- To run `npm run start` in the root directory
- Now the application is listening for requests on port 3001

## How to Run the tests

- In the root directory `npm run test`

## Sending Requests 
- In postman create a `POST` request to `http://localhost:3001/api/version`
- The request should have the Content-Type Header of application/json
- The request body should have a JSON object with 2 keys `string1` and `string2` which are both strings
- Send the request and the application will respond with a body container `result` or `error`