const {GuessPlugin} = require('guess-webpack');
const {parseRoutes} = require('guess-parser');
// This file is for hardcoded routes in Json usage :)
module.exports = {
  plugins: [
    new GuessPlugin({
      debug: true,
      // jwt: credentials,
      // GA: viewId,
      reportProvider() {
        return Promise.resolve(JSON.parse(require('fs').readFileSync('./routes.json')));
      },
      // period: {
      //     startDate: new Date('2019-10-01'),
      //     endDate: new Date('2020-3-01')
      //   }
      runtime: {
        // prefetchConfig: {
        //    '4g': 0.15,
        //    '3g': 0.3,
        //    '2g': 0.45,
        //    'slow-2g': 0.6
        // },
        delegate: false
      },
      routeProvider() {
        return parseRoutes('.');
      }
    })
  ]
};
