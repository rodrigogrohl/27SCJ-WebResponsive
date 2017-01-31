var cursos = [ {
	"id" : "curso-1",
	"titulo" : "Desenvolvimento de Soluções"
}, {
	"id" : "curso-2",
	"titulo" : "Arquitetura Java"
}, {
	"id" : "curso-3",
	"titulo" : "Arquitetura .NET"
}, {
	"id" : "curso-4",
	"titulo" : "Projetos Integrados"
}, {
	"id" : "curso-5",
	"titulo" : "Gestão de Processos"
}, {
	"id" : "curso-6",
	"titulo" : "Compiladores"
} ];
var lista = document.getElementById("curso");

function limparLista() {
	while (lista.firstChild) {
		lista.removeChild(lista.firstChild);
	}
}

function exibirCursoss() {
	limparLista();
	for (var i = 0; i < cursos.length; i++) {
		var option = document.createElement("option");
		option.textContent = cursos[i].titulo;
		option.setAttribute("value", vagas[i].id);
		lista.appendChild(option);
	}
}

exibirCursos();
