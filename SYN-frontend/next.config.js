/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    projectEnvironment:process.env.NEXT_PUBLIC_ENV,
    authApiUrl:process.env.NEXT_AUTH_API_URL,
    basicAuth :process.env.NEXT_API_BASIC_AUTH,
    GOOGLE_ID : process.env.GOOGLE_CLIENT_ID,
    GOOGLE_SECRET :process.env.GOOGLE_SECRET_CLIENT,
    S3_ALLOW_URL :process.env.S3_COMPLETE_URL,
    S3_NEW_ALLOW_URL :process.env.S3_NEW_URL,
    FIREBASE_APIKEY :process.env.FIREBASE_API_KEY,
    FIREBASE_AUTHDOMAIN :process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DBURL :process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECTID :process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGEBUCKET :process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_SENDER_MSGID :process.env.FIREBASE_SENDER_ID,
    FIREBASE_APPID : process.env.FIREBASE_APP_ID,
  },
  images: {

    domains: ['lh3.googleusercontent.com',process.env.S3_IMAGE_URL,process.env.S3_NEW_IMAGE_URL],

  },
}
module.exports = nextConfig





