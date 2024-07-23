const express = require('express')
const cors = require('cors')
const dotenv = require("dotenv")
const dbPool = require('./src/config/database')
const symptomRoutes = require('./src/routes/symptom')
const diseaseRoutes = require('./src/routes/disease')
const answersRoutes = require('./src/routes/answers')
const authRoutes = require('./src/routes/auth')
const app = express()


app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))
dotenv.config()
const port = process.env.PORT


app.use(express.json())

app.use('/api', diseaseRoutes);
app.use('/api', symptomRoutes);
app.use('/api', authRoutes);
app.use('/api', answersRoutes);


// *SUCCESS
// app.post('/api/answer', (req, res) => {
//     const { nama, umur, jenisKelamin, answers } = req.body;
//     const questionIds = answers.map(answer => answer.questionId);
//     const answersMap = answers.reduce((map, answer) => {
//         map[answer.questionId] = answer.answer;
//         return map;
//     }, {});

//     console.log(questionIds);

//     const queryAturan = `SELECT * FROM aturan_gejala`;
//     const queryHipotesis = `SELECT * FROM hipotesis_gejala`;

//     dbPool.query(queryAturan, (errorAturan, resultsAturan) => {
//         if (errorAturan) {
//             console.error('Error fetching rules:', errorAturan);
//             return res.status(500).json({ message: 'Internal Server Error' });
//         }

//         dbPool.query(queryHipotesis, (errorHipotesis, resultsHipotesis) => {
//             if (errorHipotesis) {
//                 console.error('Error fetching hypothesis:', errorHipotesis);
//                 return res.status(500).json({ message: 'Internal Server Error' });
//             }

//             // Organize rules by kode_aturan
//             const rules = {};
//             resultsAturan.forEach(row => {
//                 if (!rules[row.kode_aturan]) {
//                     rules[row.kode_aturan] = {
//                         gejala: [],
//                         penyakit: row.kode_penyakit
//                     };
//                 }
//                 rules[row.kode_aturan].gejala.push(row.kode_gejala);
//             });

//             // Organize hypothesis by gejala and penyakit
//             const hypothesis = {};
//             resultsHipotesis.forEach(row => {
//                 const key = `${row.kode_gejala}_${row.kode_penyakit}`;
//                 hypothesis[key] = row.nilai_cf;
//             });

//             // Check user answers against each rule and get CF values
//             const matchedRules = [];
//             for (const kodeAturan in rules) {
//                 const { gejala, penyakit } = rules[kodeAturan];
//                 const isMatched = gejala.every(g => questionIds.includes(g));
//                 if (isMatched) {
//                     const cfValues = gejala.map(g => {
//                         const key = `${g}_${penyakit}`;
//                         const nilai_cf = hypothesis[key] || 0;
//                         const userAnswer = answersMap[g] || 0;
//                         return nilai_cf * userAnswer;
//                     });

//                     // Calculate CF combination
//                     let combinedCF = cfValues[0] || 0;
//                     for (let i = 1; i < cfValues.length; i++) {
//                         combinedCF = combinedCF + cfValues[i] * (1 - combinedCF);
//                     }

//                     matchedRules.push({
//                         kodeAturan,
//                         gejala,
//                         penyakit,
//                         cfValues,
//                         combinedCF
//                     });

//                     console.log(`Rule ${kodeAturan} matched with gejala: ${gejala.join(', ')}, penyakit: ${penyakit}, cfValues: ${cfValues.join(', ')}, combinedCF: ${combinedCF}.`);
//                 } else {
//                     console.log(`Rule ${kodeAturan} not matched.`);
//                 }
//             }

//             matchedRules.sort((a, b) => a.combinedCF - b.combinedCF)
//             const maxRule = matchedRules.reduce((prev, current) => (prev.combinedCF > current.combinedCF) ? prev : current, { combinedCF: -Infinity });

//             res.json({
//                 message: "Data berhasil dikirim",
//                 data: {
//                     nama,
//                     umur,
//                     jenisKelamin,
//                     answers
//                 },
//                 matchedRules: matchedRules,
//                 Results: maxRule
//             });
//         });
//     });
// });
// *SUCCESS

// app.post('/answer', (req, res) => {
//     const { nama, umur, jenisKelamin, answers } = req.body;

//     const questionIds = answers.map(answer => answer.questionId);
//     const answerMap = answers.reduce((map, answer) => {
//         map[answer.questionId] = answer.answer
//         return map
//     }, {})
//     console.log(questionIds);


//     const queryAturan = `SELECT * FROM aturan_gejala`;
//     const queryHipotesis = `SELECT * FROM hipotesis_gejala`;
//     dbPool.query(queryAturan, (errorAturan, resultsAturan) => {
//         if (errorAturan) {
//             console.error('Error fetching rules:', errorAturan);
//             return res.status(500).json({ message: 'Internal Server Error' });
//         }

//         dbPool.query(queryHipotesis, (errorHipotesis, resultsHipotesis) => {
//             if (errorHipotesis) {
//                 console.error('Error fetching hypothesis:', errorHipotesis);
//                 return res.status(500).json({ message: 'Internal Server Error' });
//             }

//             // Organize rules by kode_aturan
//             const rules = {};
//             resultsAturan.forEach(row => {
//                 if (!rules[row.kode_aturan]) {
//                     rules[row.kode_aturan] = {
//                         gejala: [],
//                         penyakit: row.kode_penyakit
//                     };
//                 }
//                 rules[row.kode_aturan].gejala.push(row.kode_gejala);
//             });

//             // Organize hypothesis by gejala and penyakit
//             const hypothesis = {};
//             resultsHipotesis.forEach(row => {
//                 const key = `${row.kode_gejala}_${row.kode_penyakit}`;
//                 hypothesis[key] = row.nilai_cf;
//             });

//             // Check user answers against each rule and get CF values
//             const matchedRules = [];
//             for (const kodeAturan in rules) {
//                 const { gejala, penyakit } = rules[kodeAturan];
//                 const isMatched = gejala.every(g => questionIds.includes(g));
//                 if (isMatched) {
//                     const cfValues = gejala.map(g => {
//                         const key = `${g}_${penyakit}`;
//                         const nilai_cf = hypothesis[key] || 0;
//                         const userAnswer = answerMap[g] || 0;
//                         return nilai_cf * userAnswer;
//                     });
//                     matchedRules.push({
//                         kodeAturan,
//                         gejala,
//                         penyakit,
//                         cfValues
//                     });
//                     console.log(`Rule ${kodeAturan} matched with gejala: ${gejala.join(', ')}, penyakit: ${penyakit}, cfValues: ${cfValues.join(', ')}.`);
//                 } else {
//                     console.log(`Rule ${kodeAturan} not matched.`);
//                 }
//             }

//             res.json({
//                 message: "Data berhasil dikirim",
//                 data: {
//                     nama,
//                     umur,
//                     jenisKelamin,
//                     answers
//                 },
//                 matchedRules: matchedRules
//             });
//         });
//     });
// });
//     dbPool.query(query, [questionIds], (error, results) => {
//         if (error) {
//             console.error('Error fetching rules:', error);
//             return res.status(500).json({ message: 'Internal Server Error' });
//         }


//         const matchedGejala = results.map(gejala => {
//             const userAnswer = answers.find(answer => answer.questionId === gejala.kode_gejala);
//             return {
//                 ...gejala,
//                 userAnswer: userAnswer ? userAnswer.answer : null
//             };
//         });

//         res.json({
//             message: "Data berhasil dikirim",
//             data: {
//                 nama,
//                 umur,
//                 jenisKelamin,
//                 answers
//             },
//             matchedGejala: matchedGejala
//         });
//     });
// });

// app.post('/answer', (req, res) => {
//     const { nama, umur, jenisKelamin, answers } = req.body;

//     const questionIds = answers.map(answer => answer.questionId);
//     console.log(questionIds)
//     const query = `SELECT * FROM aturan_gejala WHERE kode_gejala IN (?)`
//     dbPool.query(query, [questionIds], (error, results) => {
//         if (error) throw error;

//         // matching gejala
//         const matchedGejala = results.map(gejala => {
//             const userAnswer = answers.find(answer => answer.questionId === gejala.kode_gejala)
//             return {
//                 ...gejala,
//                 userAnswer: userAnswer ? userAnswer.answer : null
//             }
//         })

//         // const matchedGejala = results.filter(gejala => gejala.gejala_id === answers.gejala_id)
//         // console.log(matchedGejala)
//     })
//     res.json({
//         message: "Data berhasil dikirim",
//         data: {
//             nama,
//             umur,
//             jenisKelamin,
//             answers
//         },
//         matchedGejala: matchedGejala
//     })

// })


// app.get('/', (req, res) => {
//     dbPool.query('SELECT * FROM penyakit', function (error, results, fields) {
//         if (error) throw error;
//         res.json({
//             data: results
//         })
//     });
// })


app.listen(port, () => {
    console.log(`app listening in port ${port}`)
})