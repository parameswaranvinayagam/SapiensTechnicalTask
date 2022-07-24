# Initial app setup:

### Run create-react-app using npm as the package manager

`npx create-react-app smartTrack --use-npm`

### Installed husky to manage linting and prettifying the code before git commits

`npm install --save-dev husky lint-staged prettier`

```
# Add this to package.json

"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }

   "lint-staged": {
   "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
     "prettier --write"
   ]
 }
```

### installed graphql macro so the queries can be written in the code using back ticks

`npm install --save graphql graphql.macro`

### Installed amplify react components

`npm install --save @aws-amplify/ui-react`

## Amplify setup:

### installed amplify-cli

`npm install -g @qws-amplify/cli`

### configured amplify-cli by running...

`amplify configure`

During the configuration process, created a new IAM user "smartTrackAmplify" with Admin privileges and saved teh credentials locally to aws credentials file

Initialised amplify by running `amplify init` and selecting default settings.

> #### Some next steps:
>
> - "amplify status" will show you what you've added already and if it's locally configured or deployed
> - "amplify add <category>" will allow you to add features like user login or a backend API
> - "amplify push" will build all your local backend resources and provision it in the cloud
> - "amplify console" to open the Amplify Console and view your project status
> - "amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
> - Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything

## Create the backend

Run `amplify add api` to create a backend API
Run `amplify update api` to update a backend API

### Updating graphQL schema

If any changes are made to the schema run `amplify api gql-compile ` then `amplify codegen` to update the cloudformation stacks and run `amplify push` to push the changes to the cloud.

### Multi env workflow

https://docs.amplify.aws/cli/teams/overview#sharing-projects-within-the-team
