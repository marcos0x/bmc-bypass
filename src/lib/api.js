const crypto = require('./crypto');

class Api {
  constructor() {
    this.date = new Date().toISOString().split('T')[0].split('-').join('');
  }

  getLink(url, cuil, mail) {
    const data = crypto.encrypt(cuil+'|'+mail+'|'+this.date);
    return encodeURIComponent(url+'?data='+data+'&utm_source=Email&utm_medium=Canales_Adquisicion');
  }

  createLinks(req) {
    return new Promise(async (resolve) => {
      const response = { code: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ links: [] }) };

      try {
        const { error, body: data } = req;

        if (error) {
          response.code = error.status || 500;
          response.headers = { 'Content-Type': 'application/json' };
          response.body = JSON.stringify({ error, errorMessage: error.message || 'Ha ocurrido un error' });
          return resolve(response);
        }

        let url = 'https://stg-bmc322.globant.com/tramiteonline/eresumen/';
        const cuils = data.cuils.split(',');
        const emails = data.emails.split(',');
        let index = 0;
        const links = [];

        if (data.url) {
          url = data.url;
        }

        for (const cuil of cuils) {
          if (cuil) {
              let email = emails[0];

              if (emails.length > 1 && emails[index]) {
                  email = emails[index];
              }

              links.push(this.getLink(url, cuil, email));
          }
          index += 1;
        }

        response.body = JSON.stringify({ links });
      } catch (error) {
        response.code = error.status || 500;
        response.headers = { 'Content-Type': 'application/json' };
        response.body = JSON.stringify({ error: error.message || 'Ha ocurrido un error' });
      }

      return resolve(response);
    });
  }
}

module.exports = new Api();
