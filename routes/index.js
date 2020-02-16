module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * from players ORDER BY id ASC"
    
        db.query(query, (err, result)=>{
            if (err){
                res.redict('/')
            }
            res.render('index.ejs',{
                title: "welcome to socka",
                players: result
            })
        })
    
    
    }
}