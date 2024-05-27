-- CreateTable
CREATE TABLE `actions` (
    `action_type` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`action_type`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `logs` (
    `action_tracking_id` INTEGER NOT NULL AUTO_INCREMENT,
    `session_id` VARCHAR(191) NOT NULL,
    `action_type` INTEGER NOT NULL,
    `param1` VARCHAR(191) NOT NULL,
    `param2` VARCHAR(191) NULL,
    `param3` VARCHAR(191) NULL,
    `param4` VARCHAR(191) NULL,
    `param5` VARCHAR(191) NULL,
    `param6` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `logs_session_id_key`(`session_id`),
    PRIMARY KEY (`action_tracking_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `logs` ADD CONSTRAINT `logs_action_type_fkey` FOREIGN KEY (`action_type`) REFERENCES `actions`(`action_type`) ON DELETE RESTRICT ON UPDATE CASCADE;
