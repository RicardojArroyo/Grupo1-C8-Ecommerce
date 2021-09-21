const fs = require('fs');
const path = require('path');

module.exports = {
    getProducts: JSON.parse(fs.readFileSync(path.join(__dirname, '/products.json'), 'utf-8')),
    getUsers: JSON.parse(fs.readFileSync(path.join(__dirname, '/users.json'), 'utf-8')),
    writeProductsJson: (dataBase) => {
        fs.writeFileSync(path.join(__dirname, '/products.json'), JSON.stringify(dataBase, 'utf-8'))
    },
    writeUsersJson: (dataBase) => {
        fs.writeFileSync(path.join(__dirname, '/users.json'), JSON.stringify(dataBase, 'utf-8'))
    }
}

