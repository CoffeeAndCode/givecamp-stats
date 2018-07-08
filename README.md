# GiveCamp Stats

A single-page app used to help report and analyze EventBrite ticket sales for
Cleveland GiveCamp. You will need a csv export from the event which contains
all of the user's custom question responses.

This project was bootstrapped with
[Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.

You can find the most recent version of this guide
[here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Setup

This project uses `.env` to setup environment variables that are swapped into
the application during development and manually replaced in the static files
when the application is built. You can learn more about it at
(https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables).

To overwrite environment variables on your machine, you can make a file called
`.env.local` which is NOT checked into source control. The following explains
what each variable does:

```
# Comma separated list of emails that belong to "floaters" at GiveCamp.
REACT_APP_FLOATERS=me@example.com,another@example.com
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `bin/lint`

Runs code linters for the project and alerts on any issues encountered.

### `bin/format`

Runs the same code linters, but it will auto-correct any issues that it
encounters that are automatically correctable. It is encourated to run this
before committing new code.

### `bin/deploy`

Will build the project into static files and then sync them to AWS S3 where
the application is hosted.
