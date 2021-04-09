/* eslint-disable new-cap */
const mongoose = require('mongoose');

function MongoClient() {
    this.options = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    };
}

MongoClient.prototype.initialize = function() {
    mongoose
        .connect(process.env.DB_URL, this.options)
        .then(() => log.magenta('Database connected'))
        .catch(error => {
            throw error;
        });
};

MongoClient.prototype.mongify = function(id) {
    return mongoose.Types.ObjectId(id);
};

// mongoose.set('debug', (collectionName, methodName, query, updateQuery) => {
//     if (collectionName !== 'rummytables') return false;
//     if (methodName !== 'updateOne') return false;
//     log.cyan('const query = ', query);
//     log.cyan('const updateQuery', updateQuery);
//     log.cyan(`${collectionName}.${methodName}(query, updateQuery)`);
// });

module.exports = new MongoClient();
