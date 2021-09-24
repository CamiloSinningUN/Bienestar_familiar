const controller = {};

controller.list = (req, res) => {
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

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO padre set ?', data, (err, rows) => {
            console.log(err)
            console.log(rows)
            res.redirect('/padres');
        });
    });
};

// controller.edit = (req, res) => {
//     const { id } = req.params;
//     req.getConnection((err, conn) => {
//         conn.query("SELECT * FROM padre WHERE id = ?", [id], (err, rows) => {
//             res.render('customers_edit', {
//                 data: rows[0]
//             })
//         });
//     });
// };

controller.update = (req, res) => {
    const { id } = req.params;
    const newpadre = req.body;
    req.getConnection((err, conn) => {

        conn.query('UPDATE padre set ? where id = ?', [newpadre, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM padre WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
}

module.exports = controller;