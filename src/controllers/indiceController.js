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

controller.hijos_edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM hijo WHERE id = ?", [id], (err, rows) => {
            res.render('hijos_edit', {
                data: rows[0]
            })
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM padre WHERE id = ?", [id], (err, rows) => {
            res.render('padres_edit', {
                data: rows[0]
            })
        });
    });
};
module.exports = controller;