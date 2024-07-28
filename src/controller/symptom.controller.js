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
// Rules
const getAllRules = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 6;
        const offset = (page - 1) * limit;

        const data = await symptomModels.getAllRules(limit, offset);
        const totalRules = await symptomModels.getCountRules();
        const totalPages = Math.ceil(totalRules / limit)
        res.json({
            status: "Success",
            message: "GET All Rules Success",
            limit,
            data,
            pagination: {
                totalRules,
                totalPages,
                prevPage: page > 1 ? page - 1 : null,
                currentPage: page,
                nextPage: page < totalPages ? page + 1 : null,
                offset
            }

        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
const getRulesById = async (req, res) => {
    try {
        const kode_aturan = req.params.kode_aturan
        const data = await symptomModels.getRulesById(kode_aturan);
        res.json({
            status: "Success",
            message: "GET Detail Rules Success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "error"
        })
    }
}
const postNewRules = async (req, res) => {
    try {
        const newRules = req.body
        await symptomModels.createNewRules(newRules)
        res.status(201).json({
            status: "Success",
            message: "Rules has been successfuly created",
            data: newRules
        })

    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message
        })
    }
}
const putNewRules = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10)
        const updatedRules = req.body
        const result = await symptomModels.updateSelectedRules(id, updatedRules)
        console.log(result.affectedRows);
        if (result.affectedRows === 0) {
            return res.status(400).json({
                status: "Not Found",
                message: "Rules not found"
            })
        }

        res.status(201).json({
            status: "Success",
            message: "Rules has been successfuly updated",
            data: updatedRules
        })

    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message
        })
    }

}
const deleteSingleRulesById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10)
        await symptomModels.deleteSingleRulesById(id)
        res.status(200).json({
            status: "Success",
            message: "Symptom has been successfuly deleted",
            data: id
        })
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message
        })
    }
}
const deleteRules = async (req, res) => {
    try {
        const kode_aturan = req.params.kode_aturan
        await symptomModels.deleteRules(kode_aturan)
        res.status(200).json({
            status: "Success",
            message: "Symptom has been successfuly deleted",
            data: kode_aturan
        })
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message
        })
    }
}
// Rules

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
// Relation
const getRelationSymptom = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 6;
        const offset = (page - 1) * limit;

        const data = await symptomModels.getRelationSymptom(limit, offset);
        const totalRelation = await symptomModels.getCountRelation();
        const totalPages = Math.ceil(totalRelation / limit)
        res.status(200).json({
            status: "Success",
            message: "GET All Relation Symptom Success",
            limit,
            data,
            pagination: {
                totalRelation,
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
const getRelationById = async (req, res) => {
    try {
        const id_gejala = parseInt(req.params.id_gejala, 10)

        const data = await symptomModels.getRelationById(id_gejala);
        res.json({
            status: "Success",
            message: "GET Detail Relation Success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "error"
        })
    }
}

const postRelationSymptom = async (req, res) => {
    try {
        const newRelation = req.body
        await symptomModels.createSymptomHypothesis(newRelation)
        res.status(201).json({
            status: "Success",
            message: "Relation Hypothesis has been successfuly created",
            data: newRelation
        })

    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message
        });
    }
}
const putNewRelation = async (req, res) => {
    try {
        const id_gejala = parseInt(req.params.id_gejala, 10)
        const updatedRelation = req.body
        const result = await symptomModels.editRelation(id_gejala, updatedRelation)
        console.log(result.affectedRows);
        if (result.affectedRows === 0) {
            return res.status(400).json({
                status: "Not Found",
                message: "Relation not found"
            })
        }

        res.status(201).json({
            status: "Success",
            message: "Relation has been successfuly updated",
            data: updatedRelation
        })

    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message
        })
    }

}
const deleteRelations = async (req, res) => {
    try {
        const id_gejala = parseInt(req.params.id_gejala, 10)
        await symptomModels.deleteRelation(id_gejala)
        res.status(200).json({
            status: "Success",
            message: "Relation has been successfuly deleted",
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
    postNewRules,
    postNewListSymptom,
    putNewListSymptom,
    deleteListSymptom,
    getRelationSymptom,
    postRelationSymptom,
    deleteRules,
    getRulesById,
    putNewRules,
    deleteSingleRulesById,
    putNewRelation,
    deleteRelations,
    getRelationById
}