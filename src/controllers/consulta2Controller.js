const controller = {};

controller.consult = (req, res) => {
    const data = req.body;
    req.getConnection((connection) => {
        if(err){
            connection.query('SELECT * FROM padre left outer join hijo on padre.id=hijo.hijode where hijo.hijode=0', (err, rows) => {
                res.render('consulta2', {
                    data: rows,
                    error: 1
                });
            });
        }else{
            res.redirect('/consulta2');
        }
            
    });
};

module.exports = controller;