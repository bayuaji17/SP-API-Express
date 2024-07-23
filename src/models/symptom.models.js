const dbPool = require('../config/database')

const getAllSymptom = async (limit, offset) => {
    const [result] = await dbPool.query("SELECT * FROM daftar_gejala LIMIT ? OFFSET ?", [limit, offset])
    return result
}

const getSymptomById = async (id_gejala) => {
    const [result] = await dbPool.query("SELECT * FROM daftar_gejala where id_gejala=?", [id_gejala])
    return result
}

const getCountSymptom = async () => {
    const [result] = await dbPool.query("select count(*) as totalSymptom from daftar_gejala;")
    return result[0].totalSymptom
}
// Get all rules grouping
// const getAllRules = async () => {
//     const [result] = await dbPool.query("SELECT kode_aturan, GROUP_CONCAT (kode_gejala ORDER BY kode_gejala) AS kode_gejala, kode_penyakit FROM aturan_gejala GROUP BY kode_aturan,kode_penyakit ")
//     return result
// }
// table hipotesis_gejala
const getAllRules = async (limit, offset) => {
    const [result] = await dbPool.query("SELECT ag.kode_aturan, GROUP_CONCAT(ag.kode_gejala ORDER BY ag.kode_gejala) AS kode_gejala, ag.kode_penyakit, p.nama_penyakit FROM aturan_gejala ag JOIN penyakit p ON ag.kode_penyakit = p.kode_penyakit GROUP BY ag.kode_aturan, ag.kode_penyakit, p.nama_penyakit LIMIT ? OFFSET ?", [limit, offset])
    return result
}
const getCountRules = async () => {
    const [result] = await dbPool.query("SELECT COUNT(DISTINCT kode_aturan) AS totalRules FROM aturan_gejala;")
    return result[0].totalRules
}

const createNewRules = async (newRules) => {
    const {kode_aturan,kode_gejala,kode_penyakit} = newRules
    const [result] = await dbPool.query("INSERT INTO aturan_gejala(kode_aturan,kode_gejala,kode_penyakit) VALUES (?,?,?)", [kode_aturan,kode_gejala,kode_penyakit])
    return result
}





// table daftar_gejala
const createNewListSymptom = async (newSymptom) => {
    const { kode_gejala, nama_gejala, pertanyaan } = newSymptom
    const [result] = await dbPool.query("INSERT INTO daftar_gejala(kode_gejala,nama_gejala,pertanyaan) VALUES (?,?,?)", [kode_gejala, nama_gejala, pertanyaan])
    return result
}

// table daftar_gejala
const editListSymptom = async (id_gejala, updatedDisease) => {
    const { kode_gejala, nama_gejala, pertanyaan } = updatedDisease
    const [result] = await dbPool.query("UPDATE daftar_gejala SET kode_gejala=?, nama_gejala=?, pertanyaan=? WHERE id_gejala=?", [kode_gejala, nama_gejala, pertanyaan, id_gejala])
    return result
}
// table daftar_gejala
const deleteListSymptom = async (id_gejala) => {
    const [result] = await dbPool.query("DELETE FROM daftar_gejala WHERE id_gejala = ?", [id_gejala])
    return result
}

const createSymptomHypothesis = async (newHypothesis) => {
    const { kode_gejala, kode_penyakit, nilai_cf } = newHypothesis
    const [result] = await dbPool.query("INSERT INTO hipotesis_gejala(kode_gejala,kode_penyakit,nilai_cf) VALUES (?,?,?)", [kode_gejala, kode_penyakit, nilai_cf])
    return result
}
// SELECT hg.kode_gejala, hg.kode_penyakit, hg.nilai_cf, p.nama_penyakit FROM hipotesis_gejala hg JOIN penyakit p ON hg.kode_penyakit = p.kode_penyakit;


const getRelationSymptom = async (limit, offset) => {
    const [result] = await dbPool.query("SELECT hg.kode_gejala, hg.kode_penyakit, hg.nilai_cf, p.nama_penyakit FROM hipotesis_gejala hg JOIN penyakit p ON hg.kode_penyakit = p.kode_penyakit LIMIT ? OFFSET ?;", [limit, offset])
    return result
}

const getCountRelation = async () => {
    const [result] = await dbPool.query("SELECT COUNT(*) as total_gejala FROM hipotesis_gejala;")
    return result[0].total_gejala
}



module.exports = {
    getAllSymptom,
    getSymptomById,
    getCountSymptom,
    getAllRules,
    getCountRules,
    createNewListSymptom,
    editListSymptom,
    deleteListSymptom,
    getRelationSymptom,
    getCountRelation,
    createSymptomHypothesis,
    createNewRules
}