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
	
	// CREATE DEFAULT USERS
	var sql = `INSERT INTO cliente (nome, sobrenome, genero, cpf, data_emissao) VALUES 
	("Leonardo", "Medeiros", "M", "123","1998/08/17"),
	("cliente1","um","M","100","1111/11/11"),
	("cliente2","dois","F","101","1111/10/10"),
	("cliente3","tres","M","102","1111/09/09"),
	("cliente4","quatro","M","103","1111/09/07"),
	("cliente5","cinco","F","104","1111/09/02"),
	("cliente6","seis","F","105","1111/09/01"),
	("cliente7","sete","F","106","1111/09/11"),
	("cliente8","oito","F","107","1111/09/22"),
	("cliente9","nove","M","108","1111/09/12"),
	("cliente10","dez","M","109","1111/09/16"),
	("cliente11","onze","M","110","1111/09/19"),
	("cliente12","doze","F","111","1111/09/15"),
	("cliente13","treze","F","112","1111/09/06"),
	("cliente14","quatorze","M","113","1111/09/17");`;
	
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Criado usuários padrão");
	});
});
