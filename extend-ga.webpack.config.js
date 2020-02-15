const {JWT} = require('google-auth-library');
const {GuessPlugin} = require('guess-webpack');
const {parseRoutes} = require('guess-parser');
const {fetch} = require('guess-ga');
const {writeFileSync} = require('fs');
const credentials = require('./credentials.json');
const viewId = '211081356';
// This file is for GA routing usage :)
const auth = new JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  ['https://www.googleapis.com/auth/analytics.readonly']
);
//  how the routes from google analytics look like
fetch({
  auth,
  viewId,
  period: {
    startDate: new Date('2019-10-01'),
    endDate: new Date('2020-3-01')
  }
}).then(g => {
  writeFileSync('routes-from-ga.json', JSON.stringify(g, null, 2));
}).catch((err) => {
  console.log(err);
  throw err;
});


module.exports = {
  plugins: [
    new GuessPlugin({
      debug: true,
      jwt: credentials,
      GA: viewId,
      period: {
        startDate: new Date('2019-10-01'),
        endDate: new Date('2020-3-31')
      },
      runtime: {
        // prefetchConfig: {
        // '4g': 0.15,
        // '3g': 0.3,
        // '2g': 0.45,
        // 'slow-2g': 0.6
        // },
        delegate: false
      },
      routeProvider() {
        return parseRoutes('.');
      }
    })
  ]
};
