const answersModel = require("../models/answers.models")

const postNewAnswer = async (req, res) => {
    const { nama, umur, jenisKelamin, answer } = req.body;
    const result = await createNewAnswer(nama, umur, jenisKelamin, answer);
    res.json(result);
}

const getAllQuestions = async (req, res) => {
    try {
        const result = await answersModel.getAllQuestions();
        res.status(200).json({
            status: "Success",
            message: "Get All Questions Success",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message
        })
    }
}

module.exports = {
    postNewAnswer,
    getAllQuestions
}