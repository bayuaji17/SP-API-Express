const dbPool = require('../config/database')

const getAllQuestions = async () => {
    const [result] = await dbPool.query('SELECT kode_gejala,pertanyaan FROM daftar_gejala')
    return result
}




module.exports = {
    getAllQuestions
}