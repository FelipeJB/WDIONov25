const chai = require('chai');
const chaiHTTP = require ('chai-http');
chai.use(chaiHTTP);

module.exports = {
  films : {
    getFilms: function() {
      return chai.request('https://swapi.dev')
                 .get('/api/films/') 
    },

    getPlanets: function() {
      return chai.request('https://swapi.dev')
                 .get('/api/planets/') 
    }
  }
}