
const express = require('express')
const { authencation } = require('../middleware/auth');
const Image = require('../db/Image');
const multer = require('multer')
const jwt = require('jsonwebtoken');
const knex = require('../db/knex');
const router = express.Router();



// Create multer object
const imageUpload = multer({
    dest: 'images',
});

// Image Upload Routes
router.post('/', authencation, imageUpload.single('image'), (req, res) => {
    const { filename, mimetype, size } = req.file;
    const filepath = req.file.path;

    knex.insert({
        filename,
        filepath,
        mimetype,
        size,
        user_id: req.users.id
    })
        .into('image')
        .then(() => res.json({ success: true, filename }))
        .catch(err =>
            res.json({ success: false, message: 'upload failed', stack: err.stack }),
        );
});
// Image Get Routes
router.get('/:filename', (req, res) => {
    const { filename } = req.params;
    knex.select('*')
        .from('image')
        .where({ filename })
        .then(images => {
            if (images[0]) {
                const dirname = path.resolve();
                const fullfilepath = path.join(dirname, images[0].filepath);
                return res.type(images[0].mimetype).sendFile(fullfilepath);
            }
            return Promise.reject(new Error('Image does not exist'));
        })
        .catch(err => res.status(404).json({ success: false, message: 'not found', stack: err.stack }),
    );
});

/// Image delete /// 

router.delete('/:id', async function (req, res) {
    let images = await Image.getOneById(req.params.id)
    if (!images) return res.status(404).json({ 'message': 'no image found' })

    images = await Image.delete(req.params.id)
    if (images) return res.status(200).json({ 'message': 'success', 'response_objects': null });

})

module.exports = router;