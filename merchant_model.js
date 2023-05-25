// JavaScript source code

// const Pool = require('pg').Pool
// const pool = new Pool({
//     user: 'aisrm',
//     host: 'localhost',
//     database: 'aisrm',
//     password: 'aisrm',
//     port: 5432,
// });


const Pool = require('pg').Pool
const pool = new Pool({
    user: 'my_user',
    host: 'localhost',
    database: 'my_user',
    password: 'root',
    port: 5432,
});



// отобразить запись
const getMerchants = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}


// создать запись
const createMerchant = (body) => {
   return new Promise(function(resolve, reject) {
    const { name1, name2 } = body
    console.log(body.name1)
    
    pool.query('INSERT INTO merchants (name1, name2) VALUES ($1, $2) RETURNING *', [name1, name2], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Добавить A new merchant has been added added: ${results.rows[0]}`)
    })
  })
}

// удалить запись
const deleteMerchant = () => {
  return new Promise(function(resolve, reject) {
     const id = parseInt(request.params.id)
     console.log(request.params.id)
     pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Merchant Удалить with ID: ${id}`)
    })
  })
 }


// изменить запись
const editMerchant = (body) => {
  return new Promise(function(resolve, reject) {
     const id = parseInt(request.params.id)
     const { name1 } = body
     console.log(request.params.id)
     pool.query('UPDATE FROM merchants set name1 = $2 WHERE id = $1' , [id, name1], (error, results) => {
      if (error) {
        reject(error)
      }
        resolve(results.rows);
      // resolve(`Изменить запись with ID: ${id}`)
    })
  })
}


module.exports = {
  getMerchants,
  createMerchant,
  deleteMerchant,
  editMerchant,
}




/*
 user: 'my_user',
    host: 'localhost',
    database: 'my_database',
    password: 'root',
    port: 5432,
    */

    