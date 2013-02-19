module.exports = {
  salt: process.env.APP_SALT || 'HFGKLDSDHKT0123DS534GDW1120SD823',
  encryption: process.env.APP_ENCRYPTION || 'sha512',
  encoding: process.env.APP_ENCODING || 'hex'
}