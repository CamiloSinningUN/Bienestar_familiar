const controller = {};

controller.list = (req, res) => {
    res.render('indice');
};

controller.crud_hijos = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM hijo', (err, rows) => {
            
            res.render('hijos', {
                data: rows,
                error: 0
            });
        });
    });
};

controller.crud_padres = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM padre', (err, rows) => {
                res.render('padres', {
                    data: rows,
                    error: 0
                });
        });
    });
};


module.exports = controller;