-- BASE DE DATOS 1 (Gestión de apartamentos, tarifas, clientes y reservas, tipos de apartamentos, estados de reserva)
-- Create database home club 1
CREATE DATABASE homeclub_db1;

-- Create table types of apartments
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

-- BASE DE DATOS 2 (Detalles adicionales de la propiedad)


CREATE DATABASE homeclub_db2; ;

use homeclub2_db;
-- Create table apartment details 
CREATE TABLE apartment_detail (
    id INT AUTO_INCREMENT PRIMARY KEY,
    apartmentId INT NOT NULL UNIQUE,
    description VARCHAR(255),
    imageUrl VARCHAR(500),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt DATETIME DEFAULT NULL
);
