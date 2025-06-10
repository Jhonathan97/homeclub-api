-- BASE DE DATOS 1 (Gestión de apartamentos, tarifas, clientes y reservas, tipos de apartamentos, estados de reserva)
-- Create database home club 1
-- CREATE DATABASE homeclub_db1;

-- USE homeclub_db1;
-- Create table types of apartments

SET NAMES 'utf8mb4';
SET CHARACTER SET utf8mb4;

CREATE TABLE type_apartment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt DATETIME
);


-- Create table apartments
CREATE TABLE apartment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    typeApartmentId INT NOT NULL,
    city VARCHAR(100)  NOT NULL,
    country VARCHAR(100)  NOT NULL,
    latitude DECIMAL(9,6)  NOT NULL,
    longitude DECIMAL(9,6)  NOT NULL,
    isActive TINYINT(1)   NOT NULL DEFAULT 1,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt DATETIME,
    INDEX (typeApartmentId),
    CONSTRAINT fk_apartments_typeApartments
    FOREIGN KEY (typeApartmentId)
    REFERENCES type_apartment(id)
    ON DELETE CASCADE ON UPDATE CASCADE
);

-- create tables apartments rates
CREATE TABLE apartment_rate (
    id INT AUTO_INCREMENT PRIMARY KEY,
    apartmentId INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    startDate DATETIME NOT NULL,
    endDate DATETIME NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt DATETIME,
    INDEX (apartmentId),
    CONSTRAINT fk_apartments_rates_apartment
    FOREIGN KEY (apartmentId)
    REFERENCES apartment(id)
    ON DELETE CASCADE ON UPDATE CASCADE
);


-- create tables customers
CREATE TABLE customer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100),
    email VARCHAR(100) NOT NULL UNIQUE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt DATETIME
);

-- create tables reserve states
CREATE TABLE reserve_state (
    id INT AUTO_INCREMENT PRIMARY KEY,
    state VARCHAR(45) NOT NULL,
    description VARCHAR(255),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt DATETIME
);


-- create tables reservations
CREATE TABLE reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(50) NOT NULL UNIQUE,
    startDate DATETIME NOT NULL,
    endDate DATETIME NOT NULL,
    statusId INT NOT NULL,
    apartmentId INT NOT NULL,
    customerId INT NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt DATETIME,
    INDEX (apartmentId),
    INDEX (customerId),
    INDEX (statusId),
    CONSTRAINT fk_reserve_status_reservations
        FOREIGN KEY (statusId)
        REFERENCES reserve_state(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_apartments_reservations
        FOREIGN KEY (apartmentId)
        REFERENCES apartment(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_customers_reservations 
        FOREIGN KEY (customerId)
        REFERENCES customer(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);



-- create tables payment concepts
CREATE TABLE payment_concept (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt DATETIME
);

-- create tables payments
CREATE TABLE payment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    reservationId INT NOT NULL,
    conceptId INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt DATETIME,
    INDEX (reservationId),
    INDEX (conceptId),
    CONSTRAINT fk_reservation_payments
        FOREIGN KEY (reservationId)
        REFERENCES reservation(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_paymentConcept_payments
        FOREIGN KEY (conceptId)
        REFERENCES payment_concept(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);


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