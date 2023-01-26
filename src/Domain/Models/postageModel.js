const { Model, DataTypes } = require('sequelize');

class Postage extends Model {
    static init ( connection ) {
        super.init ( {
            title: DataTypes.STRING,
            tagId: DataTypes.NUMBER,
            description: DatTypes.TEXT,
            author: Datatypes.STRING,
            date: DataTypes.DATEONLY,
            visualization: DataTypes.BOOLEAN
        }, {
            sequelize: connection
        })
    }
}

module.exports = Postage;