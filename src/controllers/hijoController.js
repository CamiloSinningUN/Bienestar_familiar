const controller = {};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO hijo set ?', data, (err, rows) => {
            res.redirect('hijos');
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newHijo = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE hijo set ? where id = ?', [newHijo, id], (err, rows) => {
            res.redirect('hijos');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM hijo WHERE id = ?', [id], (err, rows) => {
            res.redirect('hijos');
        });
    });
}

module.exports = controller;