const decodeBase64 = (value) => {
  if (!value) return value;
  return Buffer.from(value, 'base64').toString('utf-8');
};

export const config = {
  'username': decodeBase64(process.env.POSTGRES_USERNAME),
  'password': decodeBase64(process.env.POSTGRES_PASSWORD),
  'database': process.env.POSTGRES_DB,
  'host': process.env.POSTGRES_HOST,
  'dialect': 'postgres',
  'aws_region': process.env.AWS_REGION,
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_BUCKET,
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};
