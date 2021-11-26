document.addEventListener('submit', registrarUsuario);

function registrarUsuario(e){
    e.preventDefault();
    let form = document.getElementById('formulario');
    let data = new FormData(form);
    let name = data.get('name');
    let last_name = data.get('last_name');
    let age = data.get('age');
    let Object ={
        name:name,
        last_name:last_name,
        age:age
    }
    fetch('/personas',{
        method:'POST' ,
        body:Object,
        headers:{
            'content-type':'application/json'
        }
    }).then(result=>{
        return result.json()
    }).then(Json=>{
        console.log(json);
        location.href='/'
    })
}