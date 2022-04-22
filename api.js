import Constants from "expo-constants";
const { ngrokUrl } = Constants.manifest.extra;

const isLocal = ngrokUrl && __DEV__;

const productionUrl = "https://example.com";

const baseUrl = isLocal ? ngrokUrl : productionUrl;

// now we can export an object of api endpoints
export default {
  login: `${baseUrl}/login`,
};
