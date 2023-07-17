# Task manager dashboard

This is a simple task manager that allows you to create a tasks and edit the status of the task from either 'todo', 'in progress' or 'completed'.
The purpose of this project was to learn the latest features of React v18 in 2023 and to implement TypeScript across the frontend + backend.

This project was created using the following:

- React v18.2.0
- TypeScript v4.9.5
- Node v18.16.0
- Express v4.18.2
- MySQL

### HOW TO RUN THE APPLICATION IN DEV

\*\* if it's your first time building the application, please run "npm install" to install all the dependent packages in both the 'server' and 'client' folder

1. In the 'server' folder, run "npm run dev"
2. In the 'client folder', run "npm install" "npm start"

\*\* ensure MySQL is running on the local machine otherwise server side will fail and return status code '500'

### CLIENT SIDE SCRIPTS

In the client project directory ('client'), you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### SERVER SIDE SCRIPTS

### `npm run dev`

Builds the backend for the development environment

### `npm run build`

Compiles the TS logic to JS via tsc ('typescript config')

### `npm run start`

Builds the backend for the production environment
