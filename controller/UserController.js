import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserModel from "../models/UserModel.js";


export const register = async (req, res) => {
    try {
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            fullName: req.body.fullName,
            email: req.body.email,
            paswdHash: hash,
        });

        const user = await doc.save();

        const token = jwt.sign({
                _id: user._id,
            }, 'secret123',
            {
                expiresIn: '30d',
            },);

        const {passwordHash, ...userData} = user._doc;

        res.json({...userData, token});
    } catch (err) {
        console.log(err);
        res.status(500).json({
            messeage: 'Kayit islemi basarisiz...',
        });
    }
};
//asassasa
export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email});
        if (!user) {
            return res.status(404).json({
                message: 'Kullanici bulunamadi',//eger gercek proje yapiyorsan bu kismi sadece login veya password yalnis deyip gec
            });
        }
        const isValidPass = await bcrypt.compare(req.body.password, user._doc.paswdHash);
        if (!isValidPass) {
            return res.status(403).json({
                message: 'Sifreniz veya email yalnis',//eger gercek proje yapiyorsan bu kismi sadece login veya password yalnis deyip gec
            });
        }

        const token = jwt.sign({
                _id: user._id,
            }, 'secret123',
            {
                expiresIn: '30d',
            },
        );

        const {paswdHash, ...userData} = user._doc;

        res.json({...userData, token});

    } catch (err) {
        console.log(err);
        res.status(500).json({
            messeage: 'Authorization yapilamadi ',
        });
    }
};


export const getMe = async (req,res)=>{
    try {
        const user = await UserModel.findById(req.userId);
        if (!user){
            return res.status(404).json({
                message: 'Kullanici bulunamadi..',
            });
        }else{
            const {paswdHash, ...userData} = user._doc;

            res.json(userData);
        }
    }catch (err) {
        console.log(err);
        res.status(500).json({//asas
            messeage: 'Yetkiniz yok..',
        });
    }
};
