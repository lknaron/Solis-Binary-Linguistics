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

// Deletes users old availability information and saves their new information
router.post('/', function(req, res) {
	mysql_pool.getConnection(function(err, connection) {
	    if (err) {
	      	connection.release();
	      	console.log('Error getting mysql_pool connection: ' + err);
	      	throw err;
	    }
	    connection.query('SELECT * FROM Languages WHERE ASURITE_ID = ?', [req.body.user], function(err2, rows) { 
	      	if(err2) {
	        	console.log('Error performing query: ' + err2);
	        	throw err2;
	      	} else if (!rows.length) {
	        	connection.query('INSERT INTO Languages SET ?', [req.body.languages[0]], function(err3) {
	          		if(err3) {
	           			console.log('Error performing query: ' + err3);
	            		throw err3;
	          		} 
	        	});
	      	} else if (rows) {
		        connection.query('UPDATE Languages SET ? WHERE ASURITE_ID = ?', [req.body.languages[0], req.body.user], function(err4) {
		          	if(err4) {
		            	console.log('Error performing query: ' + err4);
		            	throw err4;
		          	}
		        }); 
	      	}
	    });
	    connection.query('SELECT * FROM IDEs WHERE ASURITE_ID = ?', [req.body.user], function(err5, rows) { 
	      	if(err5) {
	        	console.log('Error performing query: ' + err5);
	        	throw err5;
	      	} else if (!rows.length) {
	        	connection.query('INSERT INTO IDEs SET ?', [req.body.ide[0]], function(err6) {
	          		if(err6) {
	            		console.log('Error performing query: ' + err6);
	            		throw err6;
	          		} 
	        	});
	      	} else if (rows) {
	        	connection.query('UPDATE IDEs SET ? WHERE ASURITE_ID = ?', [req.body.ide[0], req.body.user], function(err7) {
	          		if(err7) {
	            		console.log('Error performing query: ' + err7);
	            		throw err7;
	          		}
	        	}); 
	      	}
	    });
	    connection.query('SELECT * FROM Collaborative_Tools WHERE ASURITE_ID = ?', [req.body.user], function(err8, rows) { 
	      	if(err8) {
	        	console.log('Error performing query: ' + err8);
	        	throw err8;
	      	} else if (!rows.length) {
	        	connection.query('INSERT INTO Collaborative_Tools SET ?', [req.body.tools[0]], function(err9) {
	          		if(err9) {
	            		console.log('Error performing query: ' + err9);
	            		throw err9;
	          		} 
	        	});
	      	} else if (rows) {
	        	connection.query('UPDATE Collaborative_Tools SET ? WHERE ASURITE_ID = ?', [req.body.tools[0], req.body.user], function(err10) {
	          		if(err10) {
	            		console.log('Error performing query: ' + err10);
	            		throw err7;
	          		}
	        	}); 
	      	}
	      	connection.release();
	      	res.sendStatus(200);
	    });
	});
});

// Returns data to populate application page if user already saved languages information
router.post('/getLanguagesInfo', function(req, res) {
	var languages = [];
	var languagesOther = '';
	var ide = [];
	var ideOther = '';
	var tools = [];
	var ctOther = '';
  	mysql_pool.getConnection(function(err, connection) {
    	if (err) {
    		connection.release();
      		console.log('Error getting mysql_pool connection: ' + err);
      		throw err;
    	}
    	connection.query('SELECT * FROM Languages WHERE ASURITE_ID = ?', [req.body.user], function(err2, rows) {	
      		if(err2) {
        		console.log('Error performing query: ' + err2);
        		throw err2;
      		} else if (rows && rows.length != 0) {
      			// Format languages to desired return
      			var arr = [];
      			var counter = 0;
      			var results = JSON.parse(JSON.stringify(rows[0]));
      			languagesOther = results.Other;
    			delete results['LanguagesID'];
    			delete results['ASURITE_ID'];
    			
				for(var x in results){
				  	arr.push(results[x]);
				}

      			var names = ['C', 'C#', 'C++', 'CSS', 'HTML', 'Java', 'Javascript', 'JSON', 'List/Scheme', 'PHP', 'PLP', 'Prolog', 'Python', 'SQL', 'Swift', 'Verilog', 'XML'];
      			var chunk = 2,
					subset
					data = [];

				for (var i = 0; i < names.length * 2; i += chunk) {
    				subset = arr.slice(i, i+chunk);
    				data.push(names[counter]);
    				data.push(subset[0]);
    				data.push(subset[1]);
    				counter++;
				}

				var chunk2 = 3,
					subset2;

				for (var m = 0; m < data.length; m += chunk2) {
					subset2 = data.slice(m, m+chunk2);
					languages.push({ 
          				'name' 	: subset2[0],
          				'value' : subset2[1],
          				'level' : subset2[2] 
      				});
				}	
      		}
      			
    	});
    	connection.query('SELECT * FROM IDEs WHERE ASURITE_ID = ?', [req.body.user], function(err3, rows) {
    		if(err3) {
        		console.log('Error performing query: ' + err3);
        		throw err3;
      		} else if (rows && rows.length != 0) {
      			// Format IDE's to desired return
      			var arr = [];
      			var results = JSON.parse(JSON.stringify(rows[0]));
      			ideOther = results.Other;
    			delete results['IDEid'];
    			delete results['ASURITE_ID'];
    			delete results['Other'];
      			var names = ['Android Studio','Brackets','IntelliJ','NetBeans','Xcode'];

      			for(var x in results){
				  	arr.push(results[x]);
				}
				
				for (var i = 0; i < names.length; i++) {
					ide.push({ 
          				'name' 	: names[i],
          				'value' : arr[i],
      				});
				}
      		}
      		
    	});
    	connection.query('SELECT * FROM Collaborative_Tools WHERE ASURITE_ID = ?', [req.body.user], function(err4, rows) {
    		if(err4) {
        		console.log('Error performing query: ' + err4);
        		throw err4;
      		} else if (rows && rows.length != 0) {
      			var arr = [];
      			var results = JSON.parse(JSON.stringify(rows[0]));
      			ctOther = results.Other;
    			delete results['ToolID'];
    			delete results['ASURITE_ID'];
    			delete results['Other'];
      			var names = ['Github', 'Taiga','Slack'];

      			for(var x in results){
				  	arr.push(results[x]);
				}
				
				for (var i = 0; i < names.length; i++) {
					tools.push({ 
          				'name' 	: names[i],
          				'value' : arr[i],
      				});
				}
      		}
    		connection.release();
    		sendPopulateResponse(res, languages, languagesOther, ide, ideOther, tools, ctOther);
    	});
  	});
});

function sendPopulateResponse (res, languages, languagesOther, ide, ideOther, tools, ctOther) {
 	res.send({'data':{'languageData':{'selectionArray': languages, 'other' : languagesOther}, 'ideData':{'selectionArray': ide, 'other' : ideOther}, 'toolData':{'selectionArray': tools, 'other' : ctOther}}}); 		
}

module.exports = router;