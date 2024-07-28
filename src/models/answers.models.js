const dbPool = require('../config/database')

const getAllQuestions = async () => {
    const [result] = await dbPool.query('SELECT kode_gejala,pertanyaan FROM daftar_gejala')
    return result
}
const getAllRules = async () => {
    const [result] = await dbPool.query('SELECT * FROM aturan_gejala')
    return result
}
const getAllHypothesis = async () => {
    const [result] = await dbPool.query('SELECT * FROM hipotesis_gejala')
    return result
}

module.exports = {
    getAllQuestions,
    getAllRules,
    getAllHypothesis
}