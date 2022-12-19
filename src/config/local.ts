const apiHost = process.env.REACT_APP_API_SERVER_ADDRESS;

export default {
  graphqlUrl: `http://${apiHost}/graphql`,
  restApiHost: `http://${apiHost}/`,
  secretKey: process.env.REACT_APP_PASSWORD_SECRET_KEY,
  chatServiceSocketUrl: process.env.REACT_APP_CHAT_SERVICE_SOCKET_URL,
  socketOptions: {
    transports: ['websocket'],
  },
  mediaServiceUrl: process.env.REACT_APP_MINIO_MEDIA_URL,
  googleCaptchaSiteKey: process.env.REACT_APP_CAPTCHA_SITE_KEY,
};
