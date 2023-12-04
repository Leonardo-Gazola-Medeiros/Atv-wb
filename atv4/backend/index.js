var mysql = require('mysql2');
var express = require('express');
var http = require('http');
var path = require("path");
var bodyParser = require('body-parser');
var helmet = require('helmet');
var rateLimit = require("express-rate-limit");

/* var cors = require('cors'); */
var app = express();
var server = http.createServer(app);

const cors = require('cors');

const PORT = process.env.PORT || 3001;

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 200 // limit each IP to 100 requests per windowMs
});

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "wb"
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './')));
app.use(express.json());
app.use(helmet());
app.use(limiter);
app.use(cors({
	origin: 'http://localhost:3000',
	methods: ['POST', 'GET','PUT', 'DELETE'],
}));

app.set('view engine', 'ejs');

// FUNÇÃO PARA RECEBER OS JSON DOS CLIENTES NA ROTA localhost:3001/clientes

app.get("/", (req, res) => {
	con.connect(function (err) {
		if (err) throw err;
    console.log("Conectado");

    var sql = 'SELECT * FROM cliente';
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
	});
});

app.get("/clientes", (req, res) => {
	con.connect(function (err) {
		if (err) throw err;
		console.log("Conectado Clientes");

		var sql = 'SELECT id,nome, genero, cpf, data_emissao FROM cliente';
		con.query(sql, function (err, result, fields) {
			if (err) throw err;
			res.json(result);
		});
	});
});

// FUNÇÃO PARA RECEBER OS JSON DE UM CLIENTE ESPECÍFICO
app.get(`/clientes/:id`, (req, res) => {
	const { id } = req.params;

	con.connect(function (err) {
		if (err) throw err;
		console.log(`Dados solicitados para o cliente de id = ${id}`);

		var sql = 'SELECT nome, sobrenome, genero, cpf, data_emissao FROM cliente WHERE id = ?';

		con.query(sql, id, function (err, result) {
			if (err) throw err;
			res.json(result);
		});
	});
});

// FUNÇÃO PARA CADASTRAR NOVO CLIENTE

app.post("/clientes/cadastrar", (req, res) => {
	console.log(`Cadastrando cliente com dados: ${req.body}`)
	const {nome, sobrenome, genero, cpf, data_emissao } = req.body;
	con.connect(function (err) {
		if (err) throw err;
		console.log("Dados solicitados para novo cliente");

		var sql = 'INSERT INTO cliente (nome, sobrenome, genero, cpf, data_emissao) VALUES ( ?, ?, ?, ?, ?)';
		con.query(sql, [nome, sobrenome, genero, cpf, data_emissao], function (err, result, fields) {
			if (err) throw err;
			res.json(result);
			console.log(`Cadastro realizado com sucesso!`)
		});
	});
});



///// FUNÇÃO PARA EXCLUIR CLIENTES

app.delete("/clientes/excluir/:id", (req, res) => {
    const { id } = req.params; // Corrigindo para pegar o id dos parâmetros da URL
    con.connect(function (err) {
        if (err) throw err;
        console.log("Dados solicitados para excluir cliente");

        var sql = 'DELETE FROM cliente WHERE id = ?';
        con.query(sql, id, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    });
});

///// FUNÇÃO PARA ATUALIZAR CLIENTES

app.post("/clientes/atualizar", (req, res) => {
	const { nome, sobrenome, genero, cpf, data_emissao } = req.body;

	con.connect(function (err) {
		if (err) throw err;
		console.log("Dados solicitados para atualizar cliente");

		var sql = 'UPDATE cliente SET nome = ?, sobrenome = ?, genero = ?, cpf = ?, data_emissao = ? WHERE id = ? ';
		con.query(sql, [nome, sobrenome, genero, cpf, data_emissao], function (err, result, fields) {
			if (err) throw err;
			res.json(result);
		});
	});
});

app.listen(PORT, () => {
	console.log(`Servidor recebendo dados no port ${PORT}`);
});
