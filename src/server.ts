import express, { request, response } from "express";
const app = express();

app.get('/test', (request, response) => {
  return response.send("Ola! NLW");
});

app.post("/test-post", (request, response) => {
  return response.send("Ola! NLW - POST!")
});

app.listen('3000', () => console.log('Server is running!!'));