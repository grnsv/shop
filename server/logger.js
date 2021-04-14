const moment = require('moment');
const fs = require('fs');
const path = require('path');

const statsJSON = path.resolve(__dirname, './db/stats.json');

const logger = (name, action) => {
  fs.readFile(statsJSON, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const stat = JSON.parse(data);
      stat.push({
        time: moment().format('DD MMM YYYY, h:mm:ss a'),
        prod_name: name,
        action,
      });
      fs.writeFile(statsJSON, JSON.stringify(stat, null, 4), (error) => {
        if (error) {
          console.log(error);
        }
      });
    }
  });
};

module.exports = logger;
