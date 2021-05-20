const db = require('../db')

module.exports = {
    getAll: ()=>{
        return new Promise((resolve, reject)=>{

            db.query('SELECT * FROM notes',(error, results)=>{
                if(error){reject(error); return}
                resolve(results)
            })

        })
    },


    findById: (id) => {
        return new Promise((resolve, reject)=> {

            db.query('SELECT * FROM notes WHERE ID = ?', [id], (error, results)=>{
                if(error){reject(error); return; }
                if(results.length > 0 ){
                    resolve(results[0])
                }else{
                    resolve(false)
                }
            })    
        })
    }
};