
USE homeclub_db1;

-- Base de datos 1
INSERT INTO type_apartment (name) VALUES ('Corporativo'), ('Turístico');

-- Agrega apartamentos
INSERT INTO apartment (name, address, latitude, longitude, typeApartmentId, city, country, isActive)
VALUES
('Propiedad torrenazas', 'Calle Torrenazas 123', 40.421172, -3.668683, 1, 'Madrid', 'España', true),
('Propiedad vinateros', 'Calle Vinateros 456', 40.410674, -3.654633, 2, 'Madrid', 'España', true),
('Guzman del bueno', 'Av. Guzman del Bueno 89', 40.434092, -3.713227, 1, 'Madrid', 'España', true),
('Balseiro', 'Calle Balseiro 12', 40.449905, -3.710190, 2, 'Madrid', 'España', true),
('Maria del portugal', 'Calle María del Portugal 5', 40.495361, -3.664375, 1, 'Madrid', 'España', true),
('Vallecas', 'Av. de Vallecas 78', 40.363814, -3.587611, 1, 'Madrid', 'España', true),
('Botanic (Valencia)', 'Calle del Botánico 33', 39.471748, -0.385786, 2, 'Valencia', 'España', true),
('San ramon (Barcelona)', 'Calle San Ramón 10', 41.385891, 2.126838, 2, 'Barcelona', 'España', true),
('Badalona (Barcelona)', 'Calle Badalona 27', 41.458080, 2.241886, 1, 'Barcelona', 'España', true),
('Miami gardens (Miami)', '123 Miami Gardens Dr', 25.941063, -80.200227, 1, 'Miami', 'USA', true);


-- Agrega tarifas
INSERT INTO apartment_rate (apartmentId, startDate, endDate, price)
VALUES
(1, '2025-01-01', '2025-12-31', 3000),
(2, '2025-01-01', '2025-12-31', 100),
(3, '2025-01-01', '2025-12-31', 3200),
(4, '2025-01-01', '2025-12-31', 90),
(5, '2025-01-01', '2025-12-31', 3500),
(6, '2025-01-01', '2025-12-31', 2900),
(7, '2025-01-01', '2025-12-31', 110),
(8, '2025-01-01', '2025-12-31', 95),
(9, '2025-01-01', '2025-12-31', 3100),
(10, '2025-01-01', '2025-12-31', 2800);


use homeclub2_db2;

SELECT *  FROM apartment_detail;

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



