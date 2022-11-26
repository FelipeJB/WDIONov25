const swAPI = require('../apis/swAPI');

describe('Star Wars API', () => {
    it.only('should be able to get people', async () => {
        let filmsResponse = await swAPI.films.getFilms();
        //console.log(filmsResponse);
        expect(filmsResponse.status).to.eq(200);
        expect(filmsResponse.body.results).to.have.length(6);
        expect(filmsResponse.body.results[0]).to.have.property('title', 'A New Hope');
    });
});


