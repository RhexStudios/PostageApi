const Postage = require('../../Domain/Models/postageModel');

//#region - POST -
const createPost = async ( req, res ) => {

    const {title, tagId, description, author, date, visualization} = req.body;

    const postage = await Postage.create(
        {
            title,
            tagId,
            description,
            author,
            date,
            visualization
        }
    );

    if(!postage.title || !postage.description)
        return res.status(400).json({ message: 'título e descrição obrigatórios.' })
    else if (postage.visualization & (!postage.author || !postage.date))
        return res.status(400).json({ message: 'Não pode publicar uma postagem sem autor ou sem data.' });

    return res.status(200).json(postage);
}

//#endregion

//#region - GET -

const getPostages = async ( req, res ) => {

    const postages = await Postage.findAll();

    if(!postages)
        return res.sendStatus(404);
    return res.json(postages);
}

const getPostageById = async ( req, res ) => {

    const query = req.params;
    const postage = await Postage.findOne({ where: id = query });

    if(!postage)
        return res.sendStatus(404);
    return res.json(postage);
}

const getPostagesByTitle = async ( req, res ) => {

    const query = req.body;
    const postages = await Postage.findAll({
        where: {
            title: {
                [Op.like]: query
            }
        }
    });

    if(!postages)
        return res.status(404);
    return res.json(postages);
}

const getPostagesByTag = async ( req, res ) => {

    const query = req.body;
    const postages = await Postage.findAll({
        where: {
            tagId: {
                [Op.like]: query
            }
        }
    });

    if(!postages)
        return res.status(404);
    return res.json(postages);
}

const getPostagesByExactDate = async ( req, res ) => {

    const query = req.body;
    const postages = await Postage.findAll({ where: date = query });

    if (!postages)
        return res.status(404);
    return res.json(postages);
}

const getPublishedPostages = async ( req, res ) => {

    const postages = await Postage.findAll({ where: visualization = true });

    if(!postages)
        return res.status(404);
    return res.json(postages);
}

const getUnpublishedPostages = async ( req, res ) => {

    const postages = await Postage.findAll( { where: visualization = false });

    if(!postages)
        return res.status(404);
    return res.json(postages);
}

//#endregion

//#region - PUT - 

const publishPostage = async ( req, res ) => {

    const query = req.params;
    const visualization = true;

    var postage = await Postage.update(
        { visualization: visualization },
        { where: id = query }
    );

    if(!postage)
        return res.status(400);
    return res.json(postage);
}

const hidePostage = async ( req, res ) => {

    const query = req.params;
    const visualization = false;

    var postage = await Postage.update(
        { visualization: visualization },
        { where: id = query }
    );

    if(!postage)
        return res.status(400);
    return res.json(postage);
}

const editPostage = async ( req, res ) => {

    const query = req.params;
    const { title, description } = req.body;

    const postage = await Postage.update(
        { title: title, description: description },
        { where: id = query }
    );

    if(!postage)
        return res.status(400);
    return res.json(postage);
}
//#endregion

//#region - DELETE -
const deletePostage = async ( req, res ) => {

    const query = req.params;
    const deletePostage = await Postage.destroy({ where: id = query });

    if(!deletePostage)
        return res.status(400);
    return res.json({ message: "postagem deletada com sucesso!" });
}
//#endregion

module.exports = { createPost, getPostageById, getPostages, getPostagesByExactDate, getPostagesByTag,
     getPostagesByTitle, getPublishedPostages, getUnpublishedPostages, publishPostage, hidePostage,
    editPostage, deletePostage };