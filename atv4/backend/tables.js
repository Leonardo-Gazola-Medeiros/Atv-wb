var mysql = require('mysql2');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "wb"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Conectado");
	
	//ROLES
	var sql = `CREATE TABLE cliente (
		id INTEGER AUTO_INCREMENT PRIMARY KEY,
		nome varchar(255),
		sobrenome varchar(255),
		genero char,
		cpf varchar(255),
		data_emissao date
	  ); `;
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela cliente criada");
	});
});