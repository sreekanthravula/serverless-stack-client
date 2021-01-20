const config = {
  s3: {
    REGION: us-east-1,
    BUCKET: notes-apps-upload,
  },
  apiGateway: {
    REGION: us-east-1,
    URL: https://vrtozd9ybc.execute-api.us-east-1.amazonaws.com/prod,
  },
  cognito: {
    REGION: us-easst-1,
    USER_POOL_ID: us-east-1_dxZ5VHt0L,
    APP_CLIENT_ID: r3uvondkdbq3hv8me3e609m2a,
    IDENTITY_POOL_ID: us-east-1:f7786997-c042-41b6-b496-cfd291bd162e,
  },
};

export default config;