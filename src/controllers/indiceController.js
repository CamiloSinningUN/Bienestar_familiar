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

controller.mis_hijos = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM padre;', (err, rows1) => {
            conn.query('SELECT hijo.id, hijo.nom FROM hijo where hijode = ?;',data, (err, rows2) => {
                console.log(rows1)
                console.log(rows2)
                console.log(data)
                res.render('consulta1', {
                    data_padres: rows1,
                    data_hijos: rows2,
                    error: 0
                });
            });
        });
        
    });
};

controller.cons1 = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM padre;', (err, rows) => {
            console.log(err)
            console.log(rows)
            res.render('consulta1', {
                data_padres: rows,
                data_hijos: null,
                error: 0
            });
        });
    });
};

controller.cons2 = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM hijo right outer join padre on padre.id=hijo.hijode where hijo.hijode is null;', (err, rows) => {
            console.log(err)
            console.log(rows)
            res.render('consulta2', {
                data: rows,
                error: 0
            });
        });
    });
};

controller.cons3 = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select id, nom from hijo where hijode = 0;', (err, rows) => {
            console.log(err)
            console.log(rows)
            res.render('consulta3', {
                data: rows,
                error: 0
            });
        });
    });
};

controller.cons4 = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select padre.id, padre.nom, count(hijo.id) as Cantidad_Hijos from padre left join hijo on padre.id=hijo.hijode where padre.id!=0 group by padre.id;', (err, rows) => {
            console.log(err)
            console.log(rows)
            res.render('consulta4', {
                data: rows,
                error: 0
            });
        });
    });
};
module.exports = controller;