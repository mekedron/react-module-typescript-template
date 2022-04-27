const pem = require('pem');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

if (!fs.existsSync('.ssl/key.pem') || !fs.existsSync('.ssl/cert.pem')) {
  pem.createCertificate({ days: 365, selfSigned: true }, function(err, keys) {
    if (err) {
      throw err;
    }

    // script is run in root of the project
    fs.writeFileSync('.ssl/key.pem', keys.clientKey);
    fs.writeFileSync('.ssl/cert.pem', keys.certificate);
  });
}
