module.exports = function (app) {
    var CursoController = {
        menu: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('curso/menu', params);
        },

        add: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('curso/cadastro', params);
        },

        list: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('curso/lista', params);
        }

    };
    return CursoController;
}; 
