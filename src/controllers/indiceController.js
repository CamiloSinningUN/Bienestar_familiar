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
        conn.query('SELECT padre.id, padre.nom, count(padre.nom) as quantity FROM hijo right outer join padre on padre.id=hijo.hijode where hijo.hijode = padre.id and padre.id!=0 group by id;', (err, rows) => {
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