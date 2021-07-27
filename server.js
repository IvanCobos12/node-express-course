const express = require ('express');
const app = express();


const  mockUserData = [ 
	{ nombre : 'Mark' } , 
	{ nombre : 'Jill' } 
]

app.get( '/users', function (req, res) { 
	res.json({ 
		success : true, 
		message : 'consiguió usuarios con éxito. ¡ Bien !', 
		users : mockUserData
	}) 
})
app.get( '/users:id', function (req, res) { 
	res.json({ 
		success : true, 
		message : 'consiguió usuarios con éxito. ¡ Bien !', 
		users : req.params.id
	}) 
})


app.listen( 8000 , function() { 
    console.log( "The server is running" ) ;
})