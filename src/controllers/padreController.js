const controller = {};



controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, connection) => {
        connection.query('INSERT INTO padre set ?', data, (err, rows) => {
            if(err){
                connection.query('SELECT * FROM padre', (err, rows) => {
                    res.render('padres', {
                        data: rows,
                        error: 1
                    });
                });
            }else{
                res.redirect('/padres');
            }
        });
    });
};



controller.update = (req, res) => {
    const { id } = req.params;
    const newpadre = req.body;
    req.getConnection((err, conn) => {

        conn.query('UPDATE padre set ? where id = ?', [newpadre, id], (err, rows) => {
            res.redirect('/padres');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM padre WHERE id = ?', [id], (err, rows) => {
            res.redirect('/padres');
        });
    });
}

module.exports = controller;