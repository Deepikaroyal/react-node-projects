// 'use strict';

// var SwaggerConnect = require('swagger-connect');
// const swaggerTools = require('swagger-tools');
// var app = require('connect')();
// module.exports = app; // for testing

// var config = {
//   appRoot: __dirname // required config
// };

// SwaggerConnect.create(config, function(err, swaggerConnect) {
//   if (err) { throw err; }

//   // install middleware
//   swaggerConnect.register(app);

//   var port = process.env.PORT || 10010;
//   app.listen(port);

//   if (swaggerConnect.runner.swagger.paths['/users']) {
//     console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
//   }
// });

'use strict';

const swaggerTools = require('swagger-tools');
const app = require('connect')();
module.exports = app; // for testing

const swaggerDoc = require('./api/swagger/swagger.json');

swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
  // install middleware
  app.use(middleware.swaggerMetadata());
  app.use(middleware.swaggerValidator());
  app.use(middleware.swaggerRouter({}));
  app.use(middleware.swaggerUi());

  var port = process.env.PORT || 10010;
  app.listen(port, function () {
    console.log('Server running on port %s', port);
  });
});

