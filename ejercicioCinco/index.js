const express = require('express');
const axios = require('axios');
const path = require('path');

//Middleware
const bodyParser = require('body-parser');

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
app.post('/ejercicioseis', urlEnc, (req, res) => {
    const { nombre, apellido, dni } = req.body;
    axios.post('https://reclutamiento-14cf7.firebaseio.com/personas.json', {
        nombre: nombre,
        apellido: apellido,
        dni: dni
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


app.listen(port, () => {
    console.log(`Servidor on en puerto ${port}`);
});