const dbPool = require('../config/database')

// * Mengambil semua data penyakit
const getAllDisease = async () => {
    const [result] = await dbPool.query('SELECT * FROM penyakit')
    return result
}

const getDiseaseById = async (id_penyakit) => {
    const [result] = await dbPool.query('SELECT * FROM penyakit where id_penyakit=?',[id_penyakit])
    return result
}

// * Membuat data baru penyakit
const createDisease = async (createDisease) => {
    const { kode_penyakit, nama_penyakit } = createDisease
    const [result] = await dbPool.query('INSERT INTO penyakit(kode_penyakit,nama_penyakit) values (?,?)', [kode_penyakit, nama_penyakit])
    return result
}
// * Mengedit data penyakit
const updateDisease = async (id_penyakit,updatedDisease) => {
    const { kode_penyakit, nama_penyakit } = updatedDisease;
    const [result] = await dbPool.query('UPDATE penyakit SET kode_penyakit=?, nama_penyakit=? WHERE id_penyakit=?',[kode_penyakit,nama_penyakit,id_penyakit]);
    return result;
}
// * Menghapus Data penyakit
const deleteDisease = async (id_penyakit) => {
    const [result] = await dbPool.query('DELETE FROM penyakit WHERE id_penyakit=?',[id_penyakit]);
    return result;
}



module.exports = {
    getAllDisease,
    getDiseaseById,
    createDisease,
    updateDisease,
    deleteDisease
}