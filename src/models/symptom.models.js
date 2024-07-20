const dbPool = require('../config/database')

const getAllSymptom = async (limit, offset) => {
    const [result] = await dbPool.query("SELECT * FROM daftar_gejala LIMIT ? OFFSET ?", [limit, offset])
    return result
}

const getSymptomById =async (id_gejala) => {
    const [result] = await dbPool.query("SELECT * FROM daftar_gejala where id_gejala=?",[id_gejala])
    return result
}

const getCountSymptom = async () => {
    const [result] = await dbPool.query("select count(*) as totalSymptom from daftar_gejala;")
    return result[0].totalSymptom
}
// Get all rules grouping
const getAllRules = async () => {
    const [result] = await dbPool.query("SELECT kode_aturan, GROUP_CONCAT (kode_gejala ORDER BY kode_gejala) AS kode_gejala, kode_penyakit FROM aturan_gejala GROUP BY kode_aturan,kode_penyakit ")
    return result
}

// table daftar_gejala
const createNewListSymptom = async (newSymptom) => {
    const { kode_gejala, nama_gejala, pertanyaan } = newSymptom
    const [result] = await dbPool.query("INSERT INTO daftar_gejala(kode_gejala,nama_gejala,pertanyaan) VALUES (?,?,?)", [kode_gejala, nama_gejala, pertanyaan])
    return result
}

// table daftar_gejala
const editListSymptom = async (id_gejala,updatedDisease) => {
    const { kode_gejala, nama_gejala, pertanyaan } = updatedDisease
    const [result] = await dbPool.query("UPDATE daftar_gejala SET kode_gejala=?, nama_gejala=?, pertanyaan=? WHERE id_gejala=?", [kode_gejala, nama_gejala, pertanyaan,id_gejala])
    return result
}
// table daftar_gejala
const deleteListSymptom = async (id_gejala) => {
    const [result] = await dbPool.query("DELETE FROM daftar_gejala WHERE id_gejala = ?", [id_gejala])
    return result
}

module.exports = {
    getAllSymptom,
    getSymptomById,
    getCountSymptom,
    getAllRules,
    createNewListSymptom,
    editListSymptom,
    deleteListSymptom
}