const db = require('../database');

const bookByInterest = ((req,res) => {
    // Expecting ==>
    // studentName
    // interestName
    // duration

    if(!( req.body.studentName && req.body.interestName && req.body.duration )){
        res.status(400).send({ msg: "insufficient parameters"});
    }

    db.query(`SELECT *, ADDTIME(fTime, ${req.body.duration})  AS newFT FROM ccurve.mymentors WHERE interests LIKE '%${req.body.interestName}%' AND tTime >= ADDTIME(fTime, ${req.body.duration})` , (error, result) => {
        if(error) throw error;
        else if(result.length == 0)
        {
            return res.status(400).send({ msg: "All mentor slots are full!" });
        }
        else {
            const startTime = result[0].fTime;
            const newFinal = result[0].newFT;
            const mentor = result[0].mentorName;

            db.query(`INSERT INTO ccurve.mybookings (studentName, mentorName, interestName, fTime, tTime) VALUES ('${req.body.studentName}', '${mentor}', '${req.body.interestName}', '${startTime}', '${newFinal}')`, (error, result) => {
                if(error) throw error;
                else {
                    db.query(`UPDATE ccurve.mymentors SET fTime = '${newFinal}' WHERE mentorName = '${mentor}'`, (error, result) => {
                        if(error) throw error;
                    })
                }
            })
        }
        res.status(200).send({ msg: "Slot booked successfully!"});
    })
})

const getPremiumMentor = (req, res) => {

    if(!( req.body.studentName && req.body.interestName && req.body.duration )){
        res.status(400).send({ msg: "insufficient parameters"});
    }

    db.query(`SELECT mentorName FROM ccurve.mymentors WHERE interests LIKE '%${req.body.interestName}%' AND tTime >= ADDTIME(fTime, ${req.body.duration})` , (error, result)=>{
        if(error) throw error;
        else {
            const intArr = []
            result.map((name)=>{
                return intArr.push(name.mentorName);
            });
            res.status(200).send(intArr);
        }
    })
}

const getInterests = ((req, res) => {
    db.query(`SELECT interestName from ccurve.myinterests`, (err, result) => {
        if(err) throw err;
        else {
            const intArr = []
            result.map((name)=>{
                return intArr.push(name.interestName);
            });
            res.status(200).send(intArr);
        }
    })
})

const getBookingTable = ((req, res) => {
    db.query(`SELECT * from ccurve.mybookings`, (err, result) => {
        if(err) throw err;
        else {
            return res.status(200).send(result);
        }
    })

})

const getMentorTable = ((req, res) => {
    db.query(`SELECT * from ccurve.mymentors`, (err, result) => {
        if(err) throw err;
        else {
            return res.status(200).send(result);
        }
    })
})

module.exports = {
    bookByInterest,
    getInterests,
    getBookingTable,
    getMentorTable,
    getPremiumMentor
}