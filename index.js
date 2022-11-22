
var axios = require('axios');


async function get() {
    var config = {
    method: 'get',
    url: 'http://35.226.150.90:8080/dtplant/?echo=humidity',
    headers: { 
        'Content-Type': 'application/json'
    },
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
    setTimeout(get, 100);
}

get()





