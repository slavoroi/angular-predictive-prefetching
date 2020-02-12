const {JWT} = require('google-auth-library');
const {GuessPlugin} = require('guess-webpack');
const {parseRoutes} = require('guess-parser');
const {fetch} = require('guess-ga');
const {writeFileSync} = require('fs');
const credentials = require('./credentials.json');
const viewId = '211081356';

const auth = new JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  ['https://www.googleapis.com/auth/analytics.readonly']
);

// fetch({
//   auth,
//   viewId,
//   period: {
//     startDate: new Date('2019-10-01'),
//     endDate: new Date('2020-3-01')
//   }
// }).then(g => {
//   writeFileSync('routes-from-analytics.json', JSON.stringify(g, null, 2));
// }).catch((err) => {
//   console.log(err);
//   throw err;
// });


module.exports = {
  plugins: [
    new GuessPlugin({
      debug: true,
      jwt: auth,
      GA: viewId,
      // reportProvider() {
      //   return Promise.resolve(JSON.parse(require('fs').readFileSync('./routes.json')));
      // },
      runtime: {
        delegate: false
      },
      routeProvider() {
        return parseRoutes('.');
      }
    })
  ]
};
