const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
async function run() {
  let connection;
  try {
    oracledb.getConnection( {
      user          : "System",
      password      : 'omsnyh2001',
      connectString : "localhost/xe",
    },
  function(err, connection)
  {
    if (err){ 
      console.error(err); return; 
    }
    connection.execute(
      "SELECT * "
    + "FROM Hello ",
      function(err, result)
      {
        if (err) { console.error(err); return; }
        console.log(result.rows);
      });
  });

  } catch (err) {
    console.error(err);
  } 
}
run();