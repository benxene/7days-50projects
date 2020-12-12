module.exports = {
  images: {
    domains: [
      'source.unsplash.com',
      'upload.wikimedia.org',
      'avatars0.githubusercontent.com',
      'avatars1.githubusercontent.com',
      'avatars3.githubusercontent.com',
      'avatars2.githubusercontent.com',
      'raw.githubusercontent.com',
      'image.tmdb.org'
    ],
    dangerouslyAllowAllDomains: true,
    fallback: true
  },
  target: 'serverless'
};
