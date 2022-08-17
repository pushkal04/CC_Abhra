const db = require('../database');

const createSpecial = ((req, res) => {
    // Expecting ====
    // email and choice 

    if(!(req.body.email && req.body.choice)) {
        res.status(400).send({ msg: "insufficient parameters"});
    }

    db.query(`INSERT INTO abhroCC.Special (EmailID, Special) VALUES ('${req.body.email}','${req.body.choice}')`, (error, result) => {
        if(error) throw error;
        else {
            db.query(`SELECT Selectionid FROM abhroCC.Special WHERE EmailID = '${req.body.email}'`, (error, result) => {
                if(error) throw error;
                else {
                    return res.status(200).send(result);
                }
            })
        }
    })
})

const updateSpecial = ((req, res) => {
    // Expecting ====
    // ID and choice

    if(!(req.body.id && req.body.choice)){
        res.status(400).send({ msg: "missing params"});
    }

    db.query(`UPDATE abhroCC.Special SET Special = '${req.body.choice}' WHERE Selectionid = ${req.body.id}`, (error, result) => {
        if(error) throw error;
        else {
            return res.status(200).send({ msg : "Successfully updated"})
        }
    })
})

const getSpecial = ((req, res) => {
    db.query(`SELECT * FROM abhroCC.Special`, (error, result) => {
        if(error) throw error;
        else {
            return res.status(200).send(result)
        }

    })
})

const getAvailTime = ((req, res) => {
    if(!(req.body.StartTime)) {
        res.status(400).send({ msg: "insufficient parameters"});
    }

    db.query(`SELECT * FROM abhroCC.AvailbaleSLots WHERE StartTime < SUBTIME('${req.body.StartTime}', '00:30') OR StartTIme > ADDTIME('${req.body.StartTime}', '00:30');`, (error, result) => {
        if (error) throw error; 
        else{
            const intArr = []
            result.map((name)=>{
                return intArr.push(name.StartTime);
            });
            res.status(200).send(intArr);
        }
    })
})

const bookTimeSlot = ((req, res) => {
    if(!(req.body.email && req.body.StartTime)) {
        res.status(400).send({ msg: "insufficient parameters"});
    }

    db.query(`INSERT INTO abhroCC.Slots (EmailID, StartTime, EndTime) VALUES ("${req.body.email}", '${req.body.StartTime}', ADDTIME(StartTime, '00:30'));`, (error, result) => {
        if(error) throw error;
        else{
            res.status(200).send({msg : `booked!`});
        }
    })

})

const seeAllSlots = ((req, res) => {
    db.query(`SELECT * FROM abhroCC.Slots;`, (error, result) => {
        if(error) throw error;
        else {
            res.status(200).send(result)
        }
    })
})

module.exports = {
    createSpecial,
    updateSpecial,
    getSpecial,
    getAvailTime,
    seeAllSlots,
    bookTimeSlot,
}