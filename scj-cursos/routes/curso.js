module.exports = function (app) {
    var valida = require('./../middlewares/valida');
    var curso = app.controllers.curso;

    app.get('/menu', valida, curso.menu);
    app.get('/curso/add', valida, curso.criar);
    app.get('/curso/list', valida, curso.lista);

    app.post('/curso/add', curso.salvar);
}; 
