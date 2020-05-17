![ArchitecturalDiagram](https://user-images.githubusercontent.com/1351502/82133477-397fe780-980a-11ea-941a-aad6022951cd.PNG)

## Run the project
This project expect you to have globally installed [Lerna](https://lerna.js.org/).</br>
execute `lerna bootstrap` from root folder.<br />
execute `lerna run start`</br>
(Or you can navigate to packges folder and `npm install` and `npm start` both 
be-server and client-app individually

### Description

There are two main compoents of this project<br />
be-server: NodeJS file server which provide songs information.</br>
client-app: React application.<br>

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Additional features of the application
If backend is not available an error is shown in playlist.</br>
All the components are wrapped by ErrorBoundary component to handle unexpected error status.</br>
Selected song is displayed in playlist with blue background color</br>
Once user is reached to the end of the playlist, next hit on the next button will play the first song<br>

### Notes

Unit tests and storybook stories are not added due to time limitations.<br />
