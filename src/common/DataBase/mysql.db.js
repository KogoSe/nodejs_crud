import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()


const db = mysql.createConnection({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
})

db.connect((error) =>{
    if(error){
        console.error(`[error with database connection]: ${error}`)
        return
    }

    console.log(`MYSQL connection as id: ${db.threadId}`)
})

export const doQuery = (sql,options) => {
    return new Promise ((resolve, reject) => {
        db.query(sql,options, (err,res) => {
            if(err){
                throw err
            }

            resolve(res)
        })
    })
}

export default db