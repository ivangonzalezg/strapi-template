module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4f044183d72f1c3eb93642a1a06f39ed'),
  },
});
