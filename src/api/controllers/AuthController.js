const User = require("../models/User");
const UserController = require("../controllers/UserController");
const storage = require("../utils/storage");
const config = require("../config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const privateKey = process.env.PRIVATE_KEY;
const expTime = process.env.EXP_TIME;

module.exports = {

    login: async (req, res) => {
        console.log("ingreso a login")
        const { email, password } = req.body;
        console.log(email, req.body)
        try {
            console.log("mongo_uri", process.env.MONGO_URI);
            console.log("mongo_uri", config.mongo_uri);

            const userFound = await User.findOne({ email });
            console.log("userFound = ", userFound, "userFound['password'] =", userFound['password'])
            const passwordFromDb = userFound['password']
            const isPasswordEqual = await bcrypt.compare(password, passwordFromDb);
            console.log("isPasswordEqual = ", isPasswordEqual)
            if (isPasswordEqual) {
                console.log("userFound = ", userFound)
                const { _id, name, last_name, role, email } = userFound;

                const token = jwt.sign(
                    {
                        data: {
                            _id,
                            email,
                            name,
                            last_name,
                            completeName: `${name} ${last_name}`,

                            rol: role //"Admin",
                        }
                        // exp: 120900121 EPOCH
                    },
                    privateKey,
                    {
                        expiresIn: expTime
                    }
                );
                console.log("token = ",token)
                console.log("token GENERADO 😎", token);
                res.status(200).json({ token, message: "User logged successfully" });
            } else {
                res.status(400).json({
                    message: "LogIn - password no coincide",
                    error,
                });
            }

        } catch (error) {
            res.status(400).json({
                message: "Error 400 - LogIn",
                error,
            });
        }
    },
};
