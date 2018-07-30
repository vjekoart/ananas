# Ananas

Number to word list converter with Node ([Express](https://expressjs.com/)) backend and [React](https://reactjs.org/) frontend.

*Online demo: -*

*Due to simplicity, both API and client are stored in a single repository. Also, there is only one Readme.md file for both projects.*


## Usage

Run API, serve client and visit application in a web browser.

### API

*API was developed in Node v8.11.*

```
# Install dependencies
cd api && npm install

# Run API, default port is 3333
npm start

# Run API on different port
PORT=3939 npm start
```

### Client

*Project structure based on [Create React App](https://github.com/facebook/create-react-app/)*

```
# Install dependencies
cd client && npm install

# Change API location in `src/configuration.js`

# Build application
npm run build

# Serve `public/` folder with HTTP/S server, e.g.
http-server -p 8080 dist

# Visit application in your web browser, i.e. http://localhost:8080
```


## Client Development

During the development of React client, run `npm start` in the `client/` folder. This will run development server, and will watch for source file changes to automatically reload the browser.


## API Testing

Run `npm run test` inside `api/` folder to start unit tests based on Jest.


## License

Both projects, API and client, are licensed under the MIT license. License files are located in the root folders of the respective projects.