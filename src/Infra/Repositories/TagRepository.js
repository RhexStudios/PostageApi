const Tag = require('../../Domain/Models/TagModel');


//#region - POST -
const createTag = async (req, res) => {
    
    const name = req.body;
    const tag = await Tag.create(
        name
    );

    if( !tag.name )
        return res.status(400).json({ message: 'preencha o campo corretamente.' });
    else if ( tag.name.length > 32 )
        return res.status(400).json({ message: 'nome da tag muito grande.' });

    if (!tag)
        return res.status(400).json({ message: 'Não foi possível criar a tag.' });

    return res.status(200).json(tag);
}
//#endregion

//#region - GET -
const getTags = async (req, res) => {
    const tags = await Tag.findAll();

    if (!tags)
        return res.sendStatus(404);
    return res.json(tags);
}

const getTagById = async (req, res) => {
    const query = req.params;
    const tag = await Tag.findOne({ where: id = query });

    if (!tag)
        return res.sendStatus(400);
    return res.json(tag);
}

const getTagByName = async (req, res) => {
    const query = req.body;
    const tags = await Tag.findAll({ where: {
        name: {
            [Op.like]: query
            }
        }
    });

    if(!tags)
        return res.sendStatus(404);
    return res.json(tags);
}
//#endregion

module.exports = { createTag, getTags, getTagById, getTagByName };