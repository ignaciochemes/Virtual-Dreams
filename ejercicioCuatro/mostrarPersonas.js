const axios = require('axios');

axios.get('https://reclutamiento-14cf7.firebaseio.com/personas.json')
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
});