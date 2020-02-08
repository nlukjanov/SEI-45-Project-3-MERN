const env = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 4000
const dbURI = env === 'production' ? process.env.MONGODB_URI : `${process.env.MONGODB_URI}-${env}`
const secret = process.env.SECRET || 'jwtsecret'

module.exports = {
  port,
  dbURI,
  secret
}
