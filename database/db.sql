use bienestar_familiar;
DROP TABLE IF EXISTS hijo; 
DROP TABLE IF EXISTS padre;


CREATE TABLE padre (
    id INT PRIMARY KEY NOT NULL,
    nom VARCHAR(20) 
);

CREATE TABLE hijo (
    id INT PRIMARY KEY NOT NULL,
    nom VARCHAR(20),
    hijode INT,
    FOREIGN KEY(hijode) REFERENCES padre(id) ON DELETE CASCADE
);

 /* Padre */
INSERT INTO padre VALUES (12345, 'Andres');
INSERT INTO padre VALUES (23456, 'Carlos');
INSERT INTO padre VALUES (34567, 'Esteban');
INSERT INTO padre VALUES (0, 'No tiene padres');
 
 /* Hijo */
INSERT INTO hijo VALUES (1, 'Ana', 12345);
INSERT INTO hijo VALUES (2, 'Camilo', 34567);
INSERT INTO hijo VALUES (3, 'Eduardo', 23456);
INSERT INTO hijo VALUES (4, 'Isabella',0);
