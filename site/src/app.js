let express = require('express');
let app = express();
let port = 3000
let path = require('path');

/* ENRUTADORES */
let indexRouter = require('./routes/index');
let productRouter = require('./routes/product');
let adminRouter = require('./routes/admin');
let usersRouter = require('./routes/users');

/* VIEWS */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

/* Middlewares */
app.use(express.static('public'));


/* Rutas */
app.use('/', indexRouter);
app.use('/product', productRouter);
app.use('/admin', adminRouter);
app.use('/', usersRouter);




app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}\nhttp://localhost:${port}`));
