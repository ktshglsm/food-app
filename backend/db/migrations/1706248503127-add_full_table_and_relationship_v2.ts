import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFullTableAndRelationshipV21706248503127 implements MigrationInterface {
    name = 'AddFullTableAndRelationshipV21706248503127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_33cec94980b8c14c809a852c707\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_9ad13532f48db4ac5a3b3dd70e5\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_c93f22720c77241d2476c07cabf\``);
        await queryRunner.query(`ALTER TABLE \`food\` DROP FOREIGN KEY \`FK_7c9492140866fe2a0867b381dcf\``);
        await queryRunner.query(`CREATE TABLE \`feedback\` (\`id\` int NOT NULL AUTO_INCREMENT, \`rate\` int NOT NULL, \`comment\` varchar(255) NOT NULL, \`createdBy\` varchar(255) NOT NULL, \`updatedBy\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`userId\` int NULL, \`foodId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`discount_code\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quantity\` int NOT NULL, \`discountAmount\` double NOT NULL, \`minimumAmount\` double NOT NULL, \`discountType\` varchar(255) NOT NULL, \`startTime\` datetime NOT NULL, \`endTime\` datetime NOT NULL, \`createdBy\` varchar(255) NOT NULL, \`updatedBy\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`categoryId\` int NULL, \`restaurantId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`restaurant\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, \`openingHours\` time NOT NULL, \`closingHours\` time NOT NULL, \`createdBy\` varchar(255) NOT NULL, \`updatedBy\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cart\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quantity\` int NOT NULL, \`createdBy\` varchar(255) NOT NULL, \`updatedBy\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`foodId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order_detail\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quantity\` int NOT NULL, \`subtotalAmount\` double NOT NULL, \`deliveryAmount\` double NOT NULL, \`discount\` double NOT NULL, \`createdBy\` varchar(255) NOT NULL, \`updatedBy\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`orderId\` int NULL, \`foodId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`image\` (\`id\` int NOT NULL AUTO_INCREMENT, \`ownerId\` varchar(255) NOT NULL, \`ownerType\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`Quantity\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`SubtotalAmount\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`restaurantId\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`paymentId\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`foodId\``);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD \`status\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD \`paymentDate\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD \`createdBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD \`updatedBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`status\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`deliveryDate\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`totalAmount\` double NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`totalDiscount\` double NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`createdBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`updatedBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`createdBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`updatedBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`createdBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`updatedBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`food\` ADD \`discount\` double NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`food\` ADD \`status\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`food\` ADD \`createdBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`food\` ADD \`updatedBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP COLUMN \`paymentMethod\``);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD \`paymentMethod\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`feedback\` ADD CONSTRAINT \`FK_4a39e6ac0cecdf18307a365cf3c\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`feedback\` ADD CONSTRAINT \`FK_ba0448fd8f2d062a1caf2a11732\` FOREIGN KEY (\`foodId\`) REFERENCES \`food\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`discount_code\` ADD CONSTRAINT \`FK_26596c34c0c3b6c208da75ecadd\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`discount_code\` ADD CONSTRAINT \`FK_742128d99deb6c40dcb005ce8bf\` FOREIGN KEY (\`restaurantId\`) REFERENCES \`restaurant\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cart\` ADD CONSTRAINT \`FK_79a89ef8fd10351c120357a5d09\` FOREIGN KEY (\`foodId\`) REFERENCES \`food\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cart\` ADD CONSTRAINT \`FK_756f53ab9466eb52a52619ee019\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`food\` ADD CONSTRAINT \`FK_7c9492140866fe2a0867b381dcf\` FOREIGN KEY (\`restaurantId\`) REFERENCES \`restaurant\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_detail\` ADD CONSTRAINT \`FK_88850b85b38a8a2ded17a1f5369\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_detail\` ADD CONSTRAINT \`FK_c5085ec2a6549f2e3b270d015c6\` FOREIGN KEY (\`foodId\`) REFERENCES \`food\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order_detail\` DROP FOREIGN KEY \`FK_c5085ec2a6549f2e3b270d015c6\``);
        await queryRunner.query(`ALTER TABLE \`order_detail\` DROP FOREIGN KEY \`FK_88850b85b38a8a2ded17a1f5369\``);
        await queryRunner.query(`ALTER TABLE \`food\` DROP FOREIGN KEY \`FK_7c9492140866fe2a0867b381dcf\``);
        await queryRunner.query(`ALTER TABLE \`cart\` DROP FOREIGN KEY \`FK_756f53ab9466eb52a52619ee019\``);
        await queryRunner.query(`ALTER TABLE \`cart\` DROP FOREIGN KEY \`FK_79a89ef8fd10351c120357a5d09\``);
        await queryRunner.query(`ALTER TABLE \`discount_code\` DROP FOREIGN KEY \`FK_742128d99deb6c40dcb005ce8bf\``);
        await queryRunner.query(`ALTER TABLE \`discount_code\` DROP FOREIGN KEY \`FK_26596c34c0c3b6c208da75ecadd\``);
        await queryRunner.query(`ALTER TABLE \`feedback\` DROP FOREIGN KEY \`FK_ba0448fd8f2d062a1caf2a11732\``);
        await queryRunner.query(`ALTER TABLE \`feedback\` DROP FOREIGN KEY \`FK_4a39e6ac0cecdf18307a365cf3c\``);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP COLUMN \`paymentMethod\``);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD \`paymentMethod\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`food\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`food\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`food\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`food\` DROP COLUMN \`discount\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`totalDiscount\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`totalAmount\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`deliveryDate\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP COLUMN \`paymentDate\``);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`foodId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`paymentId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`restaurantId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`SubtotalAmount\` double NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`Quantity\` int NOT NULL DEFAULT '1'`);
        await queryRunner.query(`DROP TABLE \`image\``);
        await queryRunner.query(`DROP TABLE \`order_detail\``);
        await queryRunner.query(`DROP TABLE \`cart\``);
        await queryRunner.query(`DROP TABLE \`restaurant\``);
        await queryRunner.query(`DROP TABLE \`discount_code\``);
        await queryRunner.query(`DROP TABLE \`feedback\``);
        await queryRunner.query(`ALTER TABLE \`food\` ADD CONSTRAINT \`FK_7c9492140866fe2a0867b381dcf\` FOREIGN KEY (\`restaurantId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_c93f22720c77241d2476c07cabf\` FOREIGN KEY (\`restaurantId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_9ad13532f48db4ac5a3b3dd70e5\` FOREIGN KEY (\`paymentId\`) REFERENCES \`payment\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_33cec94980b8c14c809a852c707\` FOREIGN KEY (\`foodId\`) REFERENCES \`food\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
