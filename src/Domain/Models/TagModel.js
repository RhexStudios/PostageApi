const { Model, DataTypes } = require('sequelize');

class Tag extends Model {
    static init ( connection ) {
        super.init ( {
            name: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
}

module.exports = Tag;