const dbPool = require('../config/database')

const createAdmin = async (username, password,token,nama_admin) => {
    const [result] = await dbPool.query('INSERT INTO admin(username,password,token,nama_admin) values (?,?,?,?)', [username, password,token, nama_admin])
    return result
}

const loginAdmin = async (username) => {
    const [result] = await dbPool.query('SELECT * FROM admin where username=?', [username])
    return result
}

const updateToken = async (id,token) => {
    const [result] = await dbPool.query('UPDATE admin SET token = ? where id = ?',[token,id])
    return result
}




module.exports = {
    createAdmin,
    loginAdmin,
    updateToken
}