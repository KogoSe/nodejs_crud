import UserService from "../services/user.services.js"

const UserControllers = {
    addUser: async (req,res) => {
        const {name,birthdate} = req.body
        console.log({ name,birthdate})
        const created = await UserService.create({ name, birthdate: new Date(birthdate) })
        //plese post "birthday" in format "YYYY-MM-DD"in another is invailed
        
        res.status(201).json({
            sucess:true,
            data: created
            
        })
    },
    getAllUsers: async (req,res)=> {
        const Users = await UserService.getAll()

        res.status(200).json({
            success: true,
            data: Users
        })
    }
    
}

export default UserControllers