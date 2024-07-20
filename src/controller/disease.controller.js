const diseaseModels = require('../models/disease.models')


const getAllDisease = async (req, res) => {
    try {
        const data = await diseaseModels.getAllDisease();
        res.status(200).json({
            status: "Success",
            message: "GET All Data Success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status:"Error",
            message: "error"
        })

    }
}
const getDiseaseById = async (req, res) => {
    try {
        const id_penyakit = parseInt(req.params.id_penyakit, 10);
        const data = await diseaseModels.getDiseaseById(id_penyakit);
        if (data.length === 0) {
            return res.status(404).json({
                status: "Error",
                message: "Disease not found"
            });
        }
        res.status(200).json({
            status: "Success",
            message: "GET Detail data Success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status:"Error",
            message: "error"
        })

    }
}
const postDisease = async (req, res) => {
    try {
        const newDisease = req.body
        const result = await diseaseModels.createDisease(newDisease);
        res.status(201).json({
            status: "Success",
            message: 'Disease Data has been successfully created',
            id: result.insertId,
            data: newDisease
        })
    } catch (error) {
        res.status(500).json({
            status:"Error",
            message: error.message

        })

    }
}
const putDisease = async (req, res) => {
    try {
        const id_penyakit = parseInt(req.params.id_penyakit, 10);
        const updatedDisease = req.body;
        await diseaseModels.updateDisease(id_penyakit, updatedDisease)
        res.status(201).json({
            status: 'Success',
            message: 'Disease has been successfully updated',
            data: ({ id_penyakit, updatedDisease })
        })

    } catch (error) {

        res.status(500).json({
            status:"Error",
            message: error.message
        })
    }
}
const deleteDisease = async (req, res) => {
    try {
        const id_penyakit = parseInt(req.params.id_penyakit, 10);
        await diseaseModels.deleteDisease(id_penyakit)
        res.status(201).json({
            status: 'Success',
            message: 'Disease has been successfully deleted',
            data: id_penyakit
        })

    } catch (error) {

        res.status(500).json({
            status:"Error",
            message: error.message
        })
    }
}

module.exports = {
    getAllDisease,
    getDiseaseById,
    postDisease,
    putDisease,
    deleteDisease
}