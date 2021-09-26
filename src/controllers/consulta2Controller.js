const controller = {};

controller.post = (req, res) => {
    const data = req.body;
    req.getConnection((connection) => {
                connection.query('SELECT * FROM padre left outer join hijo on padre.id=hijo.hijode where hijo.hijode=0', (err, rows) => {
                    res.render('consulta2', {
                        data: rows,
                        error: 1
                    });
                });           
    });
};

module.exports = controller;