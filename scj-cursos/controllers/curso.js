var loki = require('lokijs');

module.exports = function (app) {

    var CursoController = {

        menu: function (request, response) {
            var curso = {};
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('curso/menu', params);
        },

        criar: function (request, response) {
            var curso = {};
            var usuario = request.session.usuario,
                params = { 
                    usuario: usuario,
                    curso: curso
                };
            response.render('curso/cadastro', params);
        },

        lista: function (request, response) {
            var db = new loki('database.json');
            var cursoDB = db.addCollection('curso');

            var cursos = cursoDB.chain()
                                .limit(25)
                                .data();

            console.log('Returned: ' + cursos);

            var usuario = request.session.usuario,
                params = { 
                    usuario: usuario,
                    cursos: request.session.cursos
                };
            response.render('curso/lista', params);
        },

        salvar: function(request, response) {
            var db = new loki('database.json');
            var cursoDB = db.addCollection('curso');

            var codigo = request.body.curso.codigo;
            var descricao = request.body.curso.descricao;
            var ch = request.body.curso.ch;

            //var categoria = request.body.curso.categoria;
            var categoria = request.body.curso.categoria;

            request.session.cursos.push(request.body.curso);

            //SAVE
            console.log('Saving ' + codigo + ", " + descricao);
            cursoDB.insert({codigo: codigo, descricao: descricao, ch :ch, categoria: categoria});

            response.redirect('/menu');
        }

    };
    return CursoController;
}; 
