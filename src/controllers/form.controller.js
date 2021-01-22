const FormSchema = require('../schemas/form.schema');
class FormController {
    
    create = async (req, res, next) => {
        try {
            const form = await new FormSchema(req.body).save();
            res.json({success: true});
        }
        catch (err) {
            next(err);
        }
    }
}

module.exports = new FormController();
