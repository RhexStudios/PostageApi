const { Model, DataTypes } = require('sequelize');

class Postage extends Model {
    static init ( connection ) {
        super.init ( {
            title: DataTypes.STRING,
            tagId: DataTypes.NUMBER || null,
            description: DatTypes.TEXT,
            author: Datatypes.STRING || null,
            date: DataTypes.DATEONLY || null,
            visualization: DataTypes.BOOLEAN
        }, {
            sequelize: connection
        })
    }
}

module.exports = Postage;