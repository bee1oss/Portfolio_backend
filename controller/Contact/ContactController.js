import ContactModel from "../../models/contactme/ContactModel.js";

export const getAll = async (req, res) => {
    try {
        const contacts = await ContactModel.find().exec();
        res.json(contacts);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            messeage: 'Butun veriler alinamadi...',
        });
    }
};

export const remove = async (req, res) => {
    try {
        const contactId = req.params.id;

        ContactModel.findOneAndDelete({
            _id: contactId,
        }, (err, doc) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: 'silme islemi basarisiz oldu',
                });
            }
            if (!doc) {
                return res.status(404).json({
                    message: 'veri bulunamadi',
                });
            }
            res.json({success: true,});
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Silme islemi basarisiz oldu',
        });
    }
};

export const getOne = async (req, res) => {
    try {
        const contactId = req.params.id;

        ContactModel.findOneAndUpdate(
            {
                _id: contactId,
            },
            {
                returnDocument: 'after',
            },
            (err, doc) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: 'bulunamadi',
                    });
                }

                if (!doc) {
                    return res.status(404).json({
                        message: 'bulunamadi',
                    });
                }

                res.json(doc);
            },
        )
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: '',
        });
    }
};

export const create = async (req, res) => {
    try {
        const contactDoc = new ContactModel({
            email: req.body.email,
            phone: req.body.phone,
            adress: req.body.adress
        });
        const contact = await contactDoc.save();

        res.json(contact);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            messeage: 'Olusturma islemi basarisiz olmustur',
        });
    }
};