let express = require('express');
let app = express();
<<<<<<< HEAD
let port = 3000
let path = require('path');
=======
let port = 3000;
let path = require('path');
let methodOverride = require('method-override');
let session = require('express-session');
let cookieParser = require('cookie-parser')
>>>>>>> main

/* ENRUTADORES */
let indexRouter = require('./routes/index');
let productRouter = require('./routes/product');
let adminRouter = require('./routes/admin');
let usersRouter = require('./routes/users');

/* VIEWS */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

<<<<<<< HEAD
/* Middlewares */
app.use(express.static('public'));


/* Rutas */
app.use('/', indexRouter);
app.use('/product', productRouter);
app.use('/admin', adminRouter);
app.use('/', usersRouter);



=======
/* MIDDLEWARES */
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
    secret: 'muebleriaImperio',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 10000 }
}));

/* RUTAS */
app.use('/', indexRouter);
app.use('/product', productRouter);
app.use('/admin', adminRouter);
app.use('/users', usersRouter);
>>>>>>> main

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}\nhttp://localhost:${port}`));
