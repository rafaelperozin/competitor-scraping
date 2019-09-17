# Express JS API
I created this API with ExpressJS to return a JSON data to an Angular App that list football players.

## Installing:
```
npm install
```

## Running
```
node server.js
```

## Check API running
After running the server.js go to your browser and access:
```
http://localhost:3000/api/players?limit=10&offset=0&search=
```

### Aceptable parameter:
* limit: number
* offset: number
* search: string