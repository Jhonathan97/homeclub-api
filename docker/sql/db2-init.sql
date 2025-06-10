-- CREATE DATABASE homeclub_db2;

-- USE homeclub_db2;
-- Create table apartment details 

SET NAMES 'utf8mb4';
SET CHARACTER SET utf8mb4;

CREATE TABLE apartment_detail (
    id INT AUTO_INCREMENT PRIMARY KEY,
    apartmentId INT NOT NULL UNIQUE,
    description VARCHAR(255),
    imageUrl VARCHAR(500),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt DATETIME DEFAULT NULL
);

-- Inserción de detalles de apartamentos
INSERT INTO apartment_detail (apartmentId, description, imageUrl)
VALUES 
  (2, 'Moderno apartamento en Torrenazas con todos los servicios.', 'https://example.com/img1.jpg'),
  (3, 'Apartamento turístico en Vinateros con excelente ubicación.', 'https://example.com/img2.jpg'),
  (4, 'Confortable propiedad en Guzmán del Bueno, ideal para ejecutivos.', 'https://example.com/img3.jpg'),
  (5, 'Acogedor apartamento en Balseiro cerca de puntos turísticos.', 'https://example.com/img4.jpg'),
  (6, 'Lujoso apartamento en María del Portugal con vista panorámica.', 'https://example.com/img5.jpg'),
  (7, 'Apartamento en Vallecas bien conectado con la ciudad.', 'https://example.com/img6.jpg'),
  (8, 'Propiedad botánica en Valencia con diseño natural.', 'https://example.com/img7.jpg'),
  (9, 'Apartamento moderno en San Ramón (Barcelona).', 'https://example.com/img8.jpg'),
  (10, 'Departamento amplio en Badalona (Barcelona).', 'https://example.com/img9.jpg'),
  (11, 'Apartamento familiar en Miami Gardens (Florida).', 'https://example.com/img10.jpg');



