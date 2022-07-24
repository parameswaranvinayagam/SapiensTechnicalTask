import { Auth } from "aws-amplify";

const isAuthenticated = () => {
  Auth.currentAuthenticatedUser({
    bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  })
    .then((user) => {
      return Object.keys(user).length !== 0;
    })
    .catch((err) => {
      return false;
    });
};

export default isAuthenticated;
