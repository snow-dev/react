/**
 * Created by snow on 06/09/2017.
 */

import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

const  app = express();
app.use(bodyParser.json());
const  dbUrl = 'mongodb://127.0.0.1/crudwithredux';

function validate(data) {

	let errors = {};
	if(data.serial === '') errors.serial = "Can't be empty";
    if(data.macAddress === '') errors.macAddress = "Can't be empty";
    const isValid = Object.keys(errors).length === 0;
    return {errors, isValid};
}

mongodb.MongoClient.connect(dbUrl, function(err, db) {
    app.get('/api/coolers', (req, res) => {
       db.collection('coolers').find({}).toArray((err, coolers) =>{
           res.json(({coolers}));
       });
    });

    app.post('/api/coolers', (req, res) => {
    	const {errors, isValid} = validate(req.body);
    	if(isValid){
    		const {serial, macAddress} = req.body;
    		db.collection('coolers').insert({serial, macAddress}, (err, result) => {
    			if (err) {
    				res.status(500).json({errors: {global: 'Comethin went wrong'}});
    			} else {
    				res.json({coolers: result.ops[0]});
    			}
    		});
    		
    	} else {
    		res.status(400).json({errors});
    	}
    })

    app.use((req, res) => {
    	res.status(404).json({
    		errors: {
    			global: "Still working on it. Please try again later when we implement it"
    		}
    	});
    })
    app.listen(8080, () => console.log('Server is running on 127.0.0.1:8080 '));
});