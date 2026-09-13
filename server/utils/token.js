import jwt from "jsonwebtoken"

const token = (userID) => {
    return jwt.sign(
        { id: userID },
        process.env.JWT_SECRET,
        {
            expiresIn : process.env.JWT_EXPIRES_IN
        }
    )
} 

export default token