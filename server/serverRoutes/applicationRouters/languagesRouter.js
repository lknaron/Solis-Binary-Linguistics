/*
 * File: languagesRouter.js
 * Description: Processes all requests routed from the server made to /languages
 */

var express  = require('express');
var router = express.Router();
var mysql = require('mysql');

// Invoked for any request passed to this router
router.use(function(req, res, next) {
  	next();
});

// Create mysql connection pool
var mysql_pool  = mysql.createPool({
	connectionLimit : 100,
	host            : 'localhost',
	user            : 'root',
	password        : 'sblpass1',
	database        : 'sblDB'
});

// Creates/Updates user language choices
router.post('/', function(req, res) {
	mysql_pool.getConnection(function(err, connection) {
	    if (err) {
	      	connection.release();
	      	console.log('Error getting mysql_pool connection: ' + err);
	      	throw err;
	    }
	    if (req.body[0].length === 0) {
	    	connection.query('DELETE FROM Languages WHERE ASURITE_ID = ?', [req.body[3][0]], function(err2) {
		    	if(err2) {
		        	console.log('Error performing query: ' + err2);
		            throw err2;
		        }
		    });
	    } 
	    if (req.body[0].length != 0) {
		    connection.query('DELETE FROM Languages WHERE ASURITE_ID = ?', [req.body[3][0]], function(err3) {
		        if(err3) {
		        	console.log('Error performing query: ' + err3);
		            throw err3;
		        } else {
		            connection.query('INSERT INTO Languages (isLanguage, LanguageLevel, OtherLanguage, OtherLevel, ASURITE_ID) VALUES ?', [req.body[0]], function(err4) { 
						if(err4) {
					    	console.log('Error performing query: ' + err4);
					        throw err4;
					    }
				    });
		        } 
		    });
		} 
		if (req.body[1].length === 0) {
			connection.query('DELETE FROM IDEs WHERE ASURITE_ID = ?', [req.body[3][0]], function(err5) {
		    	if(err5) {
		        	console.log('Error performing query: ' + err5);
		            throw err5;
		        }
		    });
		} 
		if (req.body[1].length != 0) {
			connection.query('DELETE FROM IDEs WHERE ASURITE_ID = ?', [req.body[3][0]], function(err6) {
		        if(err6) {
		        	console.log('Error performing query: ' + err6);
		            throw err6;
		        } else {
		            connection.query('INSERT INTO IDEs (isIDE, OtherIDE, ASURITE_ID) VALUES ?', [req.body[1]], function(err7) { 
						if(err7) {
					    	console.log('Error performing query: ' + err7);
					        throw err7;
					    } 
				    });
		        } 
		    });
		} 
		if (req.body[2].length === 0) {
			connection.query('DELETE FROM Collaborative_Tools WHERE ASURITE_ID = ?', [req.body[3][0]], function(err8) {
		    	if(err8) {
		        	console.log('Error performing query: ' + err8);
		            throw err8;
		        }
		    });	
		}
		if (req.body[2].length != 0) {
			connection.query('DELETE FROM Collaborative_Tools WHERE ASURITE_ID = ?', [req.body[3][0]], function(err9) {
		        if(err9) {
		        	console.log('Error performing query: ' + err9);
		            throw err9;
		        } else {
		            connection.query('INSERT INTO Collaborative_Tools (isTool, OtherTool, ASURITE_ID) VALUES ?', [req.body[2]], function(err10) { 
						if(err10) {
					    	console.log('Error performing query: ' + err10);
					        throw err10;
					    }
				    });
		        } 
		    });	
		}
		connection.release();
		res.sendStatus(200); 
  	});
});

// Returns data to populate application page if user already saved languages information
router.post('/getLanguagesInfo', function(req, res) {
	var languages = [];
	var ide = [];
	var tools = [];

  	mysql_pool.getConnection(function(err, connection) {
    	if (err) {
    		connection.release();
      		console.log('Error getting mysql_pool connection: ' + err);
      		throw err;
    	}
    	connection.query('SELECT isLanguage, LanguageLevel, OtherLanguage, OtherLevel FROM Languages WHERE ASURITE_ID = ?', [req.body.user], function(err2, rows) {	
      		if(err2) {
        		console.log('Error performing query: ' + err2);
        		throw err2;
      		} else if (rows && rows.length != 0) {
      			for (var i = 0; i < rows.length; i++) {  				
      				languages.push(rows[i]);
      			}
      		}	
    	});
    	connection.query('SELECT isIDE, OtherIDE FROM IDEs WHERE ASURITE_ID = ?', [req.body.user], function(err3, rows) {
    		if(err3) {
        		console.log('Error performing query: ' + err3);
        		throw err3;
      		} else if (rows && rows.length != 0) {
      			for (var i = 0; i < rows.length; i++) {  				
      				ide.push(rows[i]);
      			}
      		}	
    	});
    	connection.query('SELECT isTool, OtherTool FROM Collaborative_Tools WHERE ASURITE_ID = ?', [req.body.user], function(err4, rows) {
    		if(err4) {
        		console.log('Error performing query: ' + err4);
        		throw err4;
      		} else if (rows && rows.length != 0) {
      			for (var i = 0; i < rows.length; i++) {  				
      				tools.push(rows[i]);
      			}
      		}
    		connection.release();
    		sendPopulateResponse(res, languages, ide, tools);
    	});
  	});
});

function sendPopulateResponse (res, languages, ide, tools) {
	res.send({'data':{'languageData': languages, 'ideData': ide, 'toolData': tools}});		
}

module.exports = router;