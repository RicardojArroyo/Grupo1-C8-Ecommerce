var createError = require('http-errors');
var createError = require("http-errors");
let express = require('express');
let app = express();
let port = 3000;
let path = require('path');
let methodOverride = require('method-override');
let session = require('express-session');
let cookieParser = require('cookie-parser');
let localsCheck = require('./middlewares/localsCheck');

/* ENRUTADORES */
let indexRouter = require('./routes/index');
let productRouter = require('./routes/product');
let adminRouter = require('./routes/admin');
let usersRouter = require('./routes/users');

/* VIEWS */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

/* MIDDLEWARES */
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
    secret: 'muebleriaImperio',
    resave: false,
    saveUninitialized: true
}));
app.use(localsCheck);

/* RUTAS */
app.use('/', indexRouter);
app.use('/product', productRouter);
app.use('/admin', adminRouter);
app.use('/users', usersRouter);

//catch 404 and forward to error handler
app.use(function(req, res, next) {
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

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}\nhttp://localhost:${port}`));
