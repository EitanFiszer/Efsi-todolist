let tareas=[]

let crearTarea = (nombre) =>{
    nombre = document.getElementById(nombre).value;
    console.log(nombre)
    tareas.push(nombre);
    let lista=document.getElementById("tareas")
    lista.innerHTML += `<li style="list-style-type: none"><input type="checkbox"></input>
                        <label class="tachado">${nombre}</label>
                        </li>`                         
}






