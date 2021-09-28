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
INSERT INTO padre VALUES (0, 'No tiene padres');

