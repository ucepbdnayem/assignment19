-- CreateTable
CREATE TABLE `category` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `parentId` BIGINT NULL,
    `title` VARCHAR(75) NULL,
    `metaTitle` VARCHAR(100) NULL,
    `slug` VARCHAR(100) NULL,
    `content` VARCHAR(100) NULL,
    `createAt` TIMESTAMP(0) NULL,
    `updateAt` TIMESTAMP(0) NULL,

    INDEX `FK_category`(`parentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(100) NULL,
    `middleName` VARCHAR(100) NULL,
    `lastName` VARCHAR(100) NULL,
    `mobile` VARCHAR(100) NULL,
    `email` VARCHAR(100) NULL,
    `password` VARCHAR(100) NULL,
    `admin` BOOLEAN NULL,
    `registeredAt` DATETIME(0) NULL,
    `lastLogin` TIMESTAMP(0) NULL,
    `createAt` TIMESTAMP(0) NULL,
    `updateAt` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cart` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NULL,
    `sessionId` VARCHAR(100) NULL,
    `token` VARCHAR(100) NULL,
    `status` VARCHAR(100) NULL,
    `firstName` VARCHAR(100) NULL,
    `middleName` VARCHAR(100) NULL,
    `lastName` VARCHAR(100) NULL,
    `mobile` VARCHAR(100) NULL,
    `email` VARCHAR(100) NULL,
    `city` VARCHAR(100) NULL,
    `country` VARCHAR(100) NULL,
    `userId` BIGINT UNSIGNED NULL,
    `createAt` TIMESTAMP(0) NULL,
    `updateAt` TIMESTAMP(0) NULL,

    INDEX `FK_cart`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NULL,
    `token` VARCHAR(100) NULL,
    `subTotal` INTEGER NULL,
    `itemDiscount` INTEGER NULL,
    `tax` INTEGER NULL,
    `total` INTEGER NULL,
    `discount` INTEGER NULL,
    `grandTotal` INTEGER NULL,
    `firstName` VARCHAR(100) NULL,
    `middleName` VARCHAR(100) NULL,
    `lastName` VARCHAR(100) NULL,
    `mobile` VARCHAR(100) NULL,
    `email` VARCHAR(100) NULL,
    `city` VARCHAR(100) NULL,
    `country` VARCHAR(100) NULL,
    `userId` BIGINT UNSIGNED NULL,
    `createAt` TIMESTAMP(0) NULL,
    `updateAt` TIMESTAMP(0) NULL,

    INDEX `FK_order`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(100) NULL,
    `metaTitle` VARCHAR(100) NULL,
    `slug` VARCHAR(100) NULL,
    `summary` VARCHAR(100) NULL,
    `price` INTEGER NULL,
    `discount` INTEGER NULL,
    `publishedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `startsAt` TIMESTAMP(0) NULL,
    `endsAt` TIMESTAMP(0) NULL,
    `createAt` TIMESTAMP(0) NULL,
    `updateAt` TIMESTAMP(0) NULL,
    `userId` BIGINT UNSIGNED NULL,

    INDEX `FK_product`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_meta` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(100) NULL,
    `content` VARCHAR(100) NULL,
    `productId` BIGINT UNSIGNED NULL,
    `createAt` TIMESTAMP(0) NULL,
    `updateAt` TIMESTAMP(0) NULL,

    INDEX `FK_product_meta`(`productId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_review` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NULL,
    `rating` VARCHAR(100) NULL,
    `content` VARCHAR(100) NULL,
    `productId` BIGINT UNSIGNED NULL,
    `createAt` TIMESTAMP(0) NULL,
    `updateAt` TIMESTAMP(0) NULL,

    INDEX `FK_product_review`(`productId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `category` ADD CONSTRAINT `FK_category` FOREIGN KEY (`parentId`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `FK_cart` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `FK_order` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `FK_product` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_meta` ADD CONSTRAINT `FK_product_meta` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_review` ADD CONSTRAINT `FK_product_review` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
