const controller = {};

controller.list = (req, res) => {
    res.render('indice');
};

controller.crud_hijos = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM hijo', (err, rows) => {
            if (err) {
                res.json(err);
            }
            res.render('hijos', {
                data: rows
            });
        });
    });
};

controller.crud_padres = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM padre', (err, rows) => {
            if (err) {
                res.json(err);
            }
            res.render('padres', {
                data: rows
            });
        });
    });
};
module.exports = controller;