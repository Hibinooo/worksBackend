import jwt from 'jsonwebtoken';

function jwtTokens({ user_id, user_name, user_email }) {
    const user = {user_id, user_name, user_email};
    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET, {expiresIn:"40s"})
    const refreshToken = jwt.sign(user,process.env.REFRESH_TOKEN_SECRET, {expiresIn:"5m"})
    return ({accessToken, refreshToken})
}

export default jwtTokens