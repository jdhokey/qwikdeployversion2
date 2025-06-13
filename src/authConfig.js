import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "cca90012-2e7f-4f2e-aaf0-6ad4069cac0f",
    authority: "https://login.microsoftonline.com/36da45f1-dd2c-4d1f-af13-5abe46b99921",
    redirectUri: "https://qwikdeployversion2.vercel.app/", // Add your production URI later too
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) return;
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            break;
          case LogLevel.Info:
            console.info(message);
            break;
          case LogLevel.Verbose:
            console.debug(message);
            break;
          case LogLevel.Warning:
            console.warn(message);
            break;
        }
      },
    },
  },
};
export const loginRequest = {
  scopes: ["User.Read"],
};
