const express = require ('express');
const app = express();

const  bodyParser  =  require ( 'body-parser' ) ; 
app.use( bodyParser.json());


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
		message : 'Obtuve un usuario heeee', 
		users : req.params.id
	}) 
})

app.post('/login',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})

app.listen( 8000 , function() { 
    console.log( "The server is running" ) ;
})