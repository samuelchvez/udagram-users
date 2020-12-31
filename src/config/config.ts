export const config = {
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DB,
  'host': process.env.POSTGRES_HOST,
  'dialect': 'postgres',
  'url': process.env.ALLOW_REQUESTS_FROM_URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};
