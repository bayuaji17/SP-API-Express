const answersModel = require("../models/answers.models")
const diseaseModel = require("../models/disease.models")
const postNewAnswer = async (req, res) => {
    const { nama, umur, jenisKelamin, answers } = req.body;
    const questionIds = answers.map(answer => answer.questionId);
    const answersMap = answers.reduce((map, answer) => {
        map[answer.questionId] = answer.answer;
        return map;
    }, {});
    try {
        const dataRules = await answersModel.getAllRules();
        const dataHypothesis = await answersModel.getAllHypothesis();
        const dataDisease = await diseaseModel.getAllDisease()

        // *Organize rules by kode_aturan
        const rules = {};
        dataRules.forEach(row => {
            if (!rules[row.kode_aturan]) {
                rules[row.kode_aturan] = {
                    gejala: [],
                    penyakit: row.kode_penyakit
                };
            }
            rules[row.kode_aturan].gejala.push(row.kode_gejala);
        });

        //  *Hypothesis
        const hypothesis = {};
        dataHypothesis.forEach(row => {
            const key = `${row.kode_gejala}_${row.kode_penyakit}`;
            hypothesis[key] = row.nilai_cf;
        });

        const disease = {}
        dataDisease.forEach(row => {
            disease[row.kode_penyakit] = row.nama_penyakit;
        })

        // !test
        const highestCF = {};
        for (const kodeAturan in rules) {
            const { gejala, penyakit } = rules[kodeAturan];
            const isMatched = gejala.every(g => questionIds.includes(g));
            if (isMatched) {
                const cfValues = gejala.map(g => {
                    const key = `${g}_${penyakit}`;
                    const nilai_cf = hypothesis[key] || 0;
                    const userAnswer = answersMap[g] || 0;
                    return nilai_cf * userAnswer;
                });

                // Calculate CF combination
                let combinedCF = cfValues[0] || 0;
                for (let i = 1; i < cfValues.length; i++) {
                    combinedCF = combinedCF + cfValues[i] * (1 - combinedCF);
                }

                if (!highestCF[penyakit] || combinedCF > highestCF[penyakit].combinedCF) {
                    highestCF[penyakit] = {
                        // kodeAturan,
                        // gejala,
                        penyakit,
                        nama_penyakit:disease[penyakit] || "unknown",
                        // cfValues,
                        combinedCF
                    };
                }
            }
        }

        // Convert highestCF object to array
        const matchedRules = Object.values(highestCF);

        // Sort matchedRules by combinedCF
        // matchedRules.sort((a, b) => b.combinedCF - a.combinedCF);

        // const maxRule = matchedRules.length > 0 ? matchedRules[0] : null;


        // !Check user answers against each rule and get CF values
        // const matchedRules = [];
        // for (const kodeAturan in rules) {
        //     const { gejala, penyakit } = rules[kodeAturan];
        //     const isMatched = gejala.every(g => questionIds.includes(g));
        //     if (isMatched) {
        //         const cfValues = gejala.map(g => {
        //             const key = `${g}_${penyakit}`;
        //             const nilai_cf = hypothesis[key] || 0;
        //             const userAnswer = answersMap[g] || 0;
        //             return nilai_cf * userAnswer;
        //         });

        //         // Calculate CF combination
        //         let combinedCF = cfValues[0] || 0;
        //         for (let i = 1; i < cfValues.length; i++) {
        //             combinedCF = combinedCF + cfValues[i] * (1 - combinedCF);
        //         }

        //         matchedRules.push({
        //             kodeAturan,
        //             gejala,
        //             penyakit,
        //             cfValues,
        //             combinedCF
        //         });

        //         console.log(`Rule ${kodeAturan} matched with gejala: ${gejala.join(', ')}, penyakit: ${penyakit}, cfValues: ${cfValues.join(', ')}, combinedCF: ${combinedCF}.`);
        //     } else {
        //         console.log(`Rule ${kodeAturan} not matched.`);
        //     }
        // }
        // matchedRules.sort((a, b) => a.combinedCF - b.combinedCF)
        // const maxRule = matchedRules.reduce((prev, current) => (prev.combinedCF > current.combinedCF) ? prev : current, { combinedCF: -Infinity });

        res.json({
            message: "Data berhasil dikirim",
            data: {
                nama,
                umur,
                jenisKelamin,
                answers
            },
            results: matchedRules

        });



    } catch (error) {

        console.log(error);
    }
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