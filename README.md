![ArchitecturalDiagram](https://user-images.githubusercontent.com/1351502/82134694-e6ad2c80-9817-11ea-8359-26c91ee9f63b.PNG)

## Run the project
This project expect that you have globally installed [Lerna](https://lerna.js.org/).</br>
execute `lerna bootstrap` from root folder.<br />
execute `lerna run start`</br>
(Or you can navigate to packges folder and `npm install` and `npm start` both 
be-server and client-app individually.</br>
You can access the game from http://localhost:3002/

### Description

There are two main compoents of this project.<br />
`be-server`: NodeJS file server which provide songs information.</br>
`client-app`: React application.<br>

### Additional features of the application
If backend is not available, an error is shown in playlist.</br>
All the components are wrapped by ErrorBoundary component to handle unexpected error status.</br>

### Notes

`Unit tests` and `storybook stories` are not added due to time limitations.<br />
`REACT_APP_SONG_SERVER_ADDR` variable in .env file can be used to connect application to different backend.</br>
`Code comments` are added only for critial scenarios.
