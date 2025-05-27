let base_path = __dirname;
base_path = base_path.replace('config', '');

module.exports = {
  'database': {
    host: 'localhost',
    user: 'root',
    password: 'cqlsys123',
    database: 'vendingmechine'
  },
  'upload_path': base_path + 'public/',
  // 'url_path': 'http://localhost:8095',
  'url_path': 'http://202.164.42.227:5001',
  'image_url': 'http://202.164.42.227/vendingmechines/public/users/images/',
  'mail_auth' : {
    service: 'gmail',
    auth: {
      user: 'test978056@gmail.com',
      pass: 'cqlsys123'
    }
  }
}