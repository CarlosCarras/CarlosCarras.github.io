const axios = require('axios');

module.exports.getPhone = () => {
    axios.get('/api/getPhone')
    .then(function (response) {
        console.log(response.data.phone);
    })
    .catch(function (error) {
        console.log(error);
    });
}

module.exports.getEmail = () => {
    axios.get('/api/getEmail')
    .then(function (response) {
        console.log(response.data.email);
    })
    .catch(function (error) {
        console.log(error);
    });
}

module.exports.getDomain = () => {
    axios.get('/api/getDomain')
    .then(function (response) {
        console.log(response.data.domain);
    })
    .catch(function (error) {
        console.log(error);
    });
}
