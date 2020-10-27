const util = {
  stripTags(str, puntuaction = false) {
    let res = str || '';
    if (puntuaction) {
      res = str.replace(/(<\/([^>]+)>)/gi, '. ');
    }
    return res.replace(/(<([^>]+)>)/gi, '');
  },

  stripPunctuation(str) {
    return str.replace(/[¿?.,/#!$%^&*;:{}=\-_`~()]/g, '');
  },

  stripAccents(str) {
    const re = /[àáâãäçèéêëìíîïñòóôõöùúûüýÿÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝ]/g;
    const tr = 'aaaaaceeeeiiiinooooouuuuyyAAAAACEEEEIIIINOOOOOUUUUY';
    return str.replace(re, m => tr.substr(re.source.indexOf(m) - 1, 1));
  },

  cleanMessage(str) {
    let msg = str.toLowerCase();
    msg = util.stripAccents(msg);
    msg = util.stripPunctuation(msg);
    msg = util.stripTags(msg);
    return msg;
  },

  getKey(str) {
    let key = str.toLowerCase().replace(' ', '_');
    key = util.stripAccents(key);
    return key;
  },
};

module.exports = util;
