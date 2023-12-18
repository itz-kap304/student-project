const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;

const db = require("./db.js");

app.use(express.json());
app.use(cors());

app.route("/student").post((req, res) => {
  const values = Object.values(req.body);
  console.log(values);
    const query = `insert into Student(name,DOB,father_name,mother_name,address) values (?,?,?,?,?)`;
    db.query(query, values, (error, results) => {
      if (error) {
        console.error("Error executing SQL query:", error);
        return res.status(500).send("Database error: " + error);
      }
      // Processing the query results and sending a response to the client
      res.json(results);
    });
});

app.route("/session").post((req, res) => {
  const values = Object.values(req.body);
  const checkQuery = `SELECT * FROM academic_session WHERE year = ? AND class = ? AND batch_id = ?`
  db.query(checkQuery, [...values,req.body.year + "_" + req.body.class], (error, results) => {
  if (error) {
    return res.status(500).send("Database error: " + error);
  }
  
  if (results.length > 0) {
    console.log("already exists");
    res.json({});
  } else {
    
    const query = `insert into academic_session (year,class,batch_id) values (?,?,?)`;
    db.query(
      query,
      [...values, req.body.year + "_" + req.body.class],
      (error, results) => {
        if (error) {
          console.error("Error executing SQL query:", error);
          return res.status(500).send("Database error: " + error);
        }
        // Process the query results and sending a response to the client
        res.json(results);
      }
      );
    }
    });
  });

app.route("/batch_std_details").post((req, res) => {
  const values = Object.values(req.body);
  const checkQuery = `SELECT * FROM batch_student_details WHERE student_id=?`

  db.query(checkQuery, [values[1]], (error, results) => {
    if (error) {
      return res.status(500).send("Database error: " + error);
    }
    
    if (results.length > 0) {
      console.log("already exists");
      res.json({});
    } else {
      const query = `insert into batch_student_details (batch_id,student_id) values (?,?)`;
      db.query(query, values, (error, results) => {
        if (error) {
          console.error("Error executing SQL query:", error);
          return res.status(500).send("Database error: " + error);
        }
        res.json(results);
      });
    }
  });
});

app.route("/get_all_std_details").post((req, res) => {
  const values = Object.values(req.body);
  console.log(req.body);
  const query = `select * from student inner join (select * from batch_student_details where student_id=?) as d_t on d_t.student_id=student.student_id`;

  db.query(query, values, (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      return res.status(500).send("Database error: " + error);
    }
    console.log("Results: ",results);
    
    //Sending a response to the client
    if(results.length!==0)
    {
      const batch_details = results.map((item) => item.batch_id);
      const std_details = results[0];
      delete std_details.batch_id;
      
      console.log("batch details: ",batch_details)
  
      const data = batch_details.map((item) => {
        return item.split("_");
      });
  
      res.json({ std_details, batch_details,data });
    }
    else{
      res.json({})
    }
  });
});


app.route("/get_batch_students").post((req, res) => {
  const values = Object.values(req.body);
  console.log(req.body);
  const query = `SELECT s.student_id, s.name, s.DOB, s.father_name, s.mother_name, s.address
  FROM student s
  JOIN batch_student_details bsd ON s.student_id = bsd.student_id
  WHERE bsd.batch_id = ?;`;

  db.query(query, values, (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      return res.status(500).send("Database error: " + error);
    }
    console.log("Results: ",results);
    const resObject = {};
    
    // Processing the query results and sending a response to the client
    if(results.length!==0)
    {
      results.forEach(obj => {
        // Looping through each key in the object
        Object.keys(obj).forEach(key => {
            // If the key doesn't exist in the resObject, create it as an array
            if (!resObject[key]) {
                resObject[key] = [];
            }
            // Push the value to the corresponding key in resObject as an array
            resObject[key].push(obj[key]);
        });
      });
      res.json(resObject);
      // const batch_details = results.map((item) => item.batch_id);
      // const std_details = results[0];
      // delete std_details.batch_id;
      
      // console.log("batch details: ",batch_details)
  
      // const data = batch_details.map((item) => {
      //   return item.split("_");
      // });
  
      // res.json({ std_details, batch_details,data });
    }
    else{
      res.json({})
    }
  });
});


// Get Requests

app.get('/StudentTable', (req, res) => {
  const query = 'SELECT * FROM student'; 

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).json({ error: 'Failed to fetch data from database' });
      return;
    }

    res.json(results); 
  });
});


app.get('/BatchMaster', (req, res) => {
  const query = 'SELECT * FROM academic_session'; 

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).json({ error: 'Failed to fetch data from database' });
      return;
    }

    res.json(results); 
  });
});










app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
