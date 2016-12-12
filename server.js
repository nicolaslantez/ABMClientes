var http = require("http");
var url = require("url");
var express = require("express"); 
var bodyParser = require('body-parser');
var mu  = require('mu2');
var multer = require('multer'); 
var upload = multer();
var app = express();
var request = require('request');
var fs = require("fs");
var server = http.createServer();

app.get('/listaClientes',function(req,res){
	mu.clearCache();
	request.get("http://localhost:9000/clientes", function(error,response,body){
			fs.exists('listadoClientes.html',function(exists){
				if(exists){
					var stream = mu.compileAndRender('listadoClientes.html', {clientes: JSON.parse(body)});
					stream.pipe(res)
				}else{
					res.writeHead(404);
					res.end("No existe!");
				}	
			});
		});
});	

app.get('/listaClientesTabla',function(req,res){
	mu.clearCache();
	request.get("http://localhost:9000/clientes", function(error,response,body){
			fs.exists('listadoClientesTabla.html',function(exists){
				if(exists){
					var stream = mu.compileAndRender('listadoClientesTabla.html', {clientes: JSON.parse(body)});
					stream.pipe(res)
				}else{
					res.writeHead(404);
					res.end("No existe!");
				}	
			});
		});
});	

app.get('/cliente/:id',function(req,res){
	mu.clearCache();
		var idCliente = req.params.id;
		 request.get("http://localhost:9000/cliente/" + idCliente, function(error,response,body){
			fs.exists('informacionCliente.html',function(exists){
				if(exists){
					var stream = mu.compileAndRender('informacionCliente.html', {cliente: JSON.parse(body)});
					stream.pipe(res)
				}else{
					res.writeHead(404);
					res.end("No existe!");
				}	
			});
		});
});

app.get('/nuevoCliente',function(req,res){
	mu.clearCache();
	fs.exists('nuevoCliente.html',function(exists){
		if(exists){
			var stream = mu.compileAndRender('nuevoCliente.html');
			stream.pipe(res)
		}else{
			res.writeHead(404);
			res.end("No existe");
		}
	});
});





app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 3000);


	






























