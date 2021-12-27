import {doQuery} from "../../../common/DataBase/mysql.db.js"
import {Models,TableName} from "../models/user.model.js"

const UserService = {
    create: (payload) =>{
        return doQuery(`INSERT INTO ${TableName} SET ?`, payload)
    },
    getAll: (columns = Models) => {
        const options = [columns, TableName]

        return doQuery(`SELECT ?? FROM ??`, options)
    }
}

export default UserService