import  express  from 'express';
const app = express();
const server = app.listen(8080,() =>{
    console.log("Listening on 8080");
})

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    let renderObject={
        nombre:"Profe"
    }
    res.render('formulario',renderObject)
})

app.post('/personas',(req,res)=>{
    let user={
        name:req.body.name,
        las_name:req.body.las_name,
        age:req.body.age
    }
    usuarios.push(users);
    res.send({message:"registrado"})
})