var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productsRouter = require('./routes/products');
var ordersRouter = require("./routes/orders")
var customersRouter = require("./routes/customers");
var accountRouter = require("./routes/account");
var transcationRouter = require("./routes/transcation");
const { dbConnection } = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/api/swagger/swagger.json");
var cors = require('cors')

var app = express();


const connect = require("./config/db");
const connection = connect.dbConnection();
var fs = require('fs');

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/product",productsRouter)
app.use("/order",ordersRouter);
app.use ('/customer',customersRouter)
app.use('/account',accountRouter)
app.use('/transcation',transcationRouter)


const httpsOptions = {
  key: fs.readFileSync(__dirname + '/key.pem'),
  cert: fs.readFileSync(__dirname + '/cert.pem')
};

// Enable CORS
app.use(cors());
//setup swagger
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument,{ 
   explorer: true,
   swaggerOptions: {
     validatorUrl: null,
     
   },
     // HTTPS options
  ...httpsOptions
 }));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));

});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Custom error handler:
app.use(function (err, req, res, next) {
  if (err && err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.log("!!!!!", err)
    res.status(400).json({ errors: err.message });
  } else if (err && Array.isArray(err)) {
    // Handle validation errors
    res.status(400).json({ errors: err });
  } else {
    next();
  }
});


// app.listen(3000,()=>{
//   console.log("listening...");
// })

module.exports = app;
