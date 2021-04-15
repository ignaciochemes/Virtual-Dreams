const express = require('express');
const axios = require('axios');
const path = require('path');

//Middleware
const bodyParser = require('body-parser');
const { stat } = require('fs');

//Inicio de aplicacion
const app = express();
const port = process.env.PORT || 3000;

//Opciones
const urlEnc = bodyParser.urlencoded({extended: false})

app.get('/', (req, res) => {
    res.send('HOLA A TODOS!');
});

//EJERCICIO 5
//Realizar peticion get y cargar los datos mediante un post a la url
app.get('/ejerciciocinco', (req, res) => {
    axios.post('https://reclutamiento-14cf7.firebaseio.com/personas.json', {
        nombre: "Ignacio",
        apellido: "Gonzalez",
        dni: 39632073
    })
    .then(obj => {
        console.log(obj);
        res.send(`Objeto cargado exitosamente! ${obj}`);
    })
    .catch(err => {
        console.log('ERROR');
        res.send('ERROR');
    }) 
});

//EJERCICIO 6
//Obtener el formulario por metodo GET
app.get('/ejercicioseis', (req, res) => {
    res.sendFile(path.join(__dirname + '/crearPersonas.html'));
});

//Enviar los datos del formulario por metodo POST a la base de datos
app.post('/ejercicioseis', urlEnc, (req, res, next) => {
    let mensaje400 = "El apellido y el dni son campos obligatorios";
    let mensaje400b = "El dni tiene que tener al menos 8 caracteres";
    let mensaje200 = "Informacion guardada con exito!"
    
    const { nombre, apellido, dni } = req.body; //Pido los datos del formulario
    
    if (!apellido || !dni) { //Si no existe apellido ni Dni, retorna error 400 con mensaje
        console.log('Status 400')
        res.status(400).send(mensaje400);
        return;
    } else if (dni.length < 8) { //Si el conjunto de caracteres del dni es < a 8, retorna mensaje 400b
        console.log('Status 400b');
        res.status(400).send(mensaje400b);
        return;
    } else {
        console.log('Status 200')
        axios.post('https://reclutamiento-14cf7.firebaseio.com/personas.json', {
            nombre: nombre,
            apellido: apellido,
            dni: parseInt(dni, 10) //Update del parametro DNI a parseInt() (Convierto string a numero);
        })
        .then(obj => {
            console.log(obj);
            res.status(200).send(mensaje200);
        })
        .catch(err => {
            console.log('ERROR');
            res.status(500).send('Ocurrio un error');
        })
    }
});


app.listen(port, () => {
    console.log(`Servidor on en puerto ${port}`);
});