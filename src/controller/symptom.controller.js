const symptomModels = require("../models/symptom.models")

// Mengambil data gejala beserta pertanyaannya
const getAllSymptom = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 5;
        const offset = (page - 1) * limit;

        const data = await symptomModels.getAllSymptom(limit, offset);
        const totalGejala = await symptomModels.getCountSymptom();

        const totalPages = Math.ceil(totalGejala / limit)
        res.status(200).json({
            status: "Success",
            message: "GET All Symptom Success",
            limit,
            data,
            pagination: {
                totalGejala,
                totalPages,
                prevPage: page > 1 ? page - 1 : null,
                currentPage: page,
                nextPage: page < totalPages ? page + 1 : null,
                offset
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message
        })
    }
}

const getSymptomById = async (req, res) => {
    try {
        const id_gejala = parseInt(req.params.id_gejala, 10)

        const data = await symptomModels.getSymptomById(id_gejala);
        res.json({
            status: "Success",
            message: "GET Detail Symptom Success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "error"
        })
    }
}
const getAllRules = async (req, res) => {
    try {
        const data = await symptomModels.getAllRules();
        res.json({
            status: "Success",
            message: "GET All Rules Success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "error"
        })
    }
}

const postNewListSymptom = async (req, res) => {
    try {
        const newSymptom = req.body
        await symptomModels.createNewListSymptom(newSymptom)
        res.status(201).json({
            status: "Success",
            message: "Symptom has been successfuly created",
            data: newSymptom
        })

    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message
        })
    }

}
const putNewListSymptom = async (req, res) => {
    try {
        const id_gejala = parseInt(req.params.id_gejala, 10)
        const updatedDisease = req.body
        const result = await symptomModels.editListSymptom(id_gejala, updatedDisease)
        console.log(result.affectedRows);
        if (result.affectedRows === 0) {
            return res.status(400).json({
                status: "Not Found",
                message: "Symptom not found"
            })
        }

        res.status(201).json({
            status: "Success",
            message: "Symptom has been successfuly updated",
            data: updatedDisease
        })

    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message
        })
    }

}

const deleteListSymptom = async (req, res) => {
    try {
        const id_gejala = parseInt(req.params.id_gejala, 10)
        await symptomModels.deleteListSymptom(id_gejala)
        res.status(200).json({
            status: "Success",
            message: "Symptom has been successfuly deleted",
            data: id_gejala
        })

    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message
        })

    }
}



module.exports = {
    getAllSymptom,
    getSymptomById,
    getAllRules,
    postNewListSymptom,
    putNewListSymptom,
    deleteListSymptom
}