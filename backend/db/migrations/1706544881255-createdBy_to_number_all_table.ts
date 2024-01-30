import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatedByToNumberAllTable1706544881255 implements MigrationInterface {
    name = 'CreatedByToNumberAllTable1706544881255'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restaurant\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`restaurant\` ADD \`createdBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`restaurant\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`restaurant\` ADD \`updatedBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`discount_code\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`discount_code\` ADD \`createdBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`discount_code\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`discount_code\` ADD \`updatedBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`createdBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`updatedBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`feedback\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`feedback\` ADD \`createdBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`feedback\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`feedback\` ADD \`updatedBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD \`createdBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD \`updatedBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`createdBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`updatedBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order_detail\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`order_detail\` ADD \`createdBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order_detail\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`order_detail\` ADD \`updatedBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cart\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`cart\` ADD \`createdBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cart\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`cart\` ADD \`updatedBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`createdBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`updatedBy\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`updatedBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`createdBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cart\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`cart\` ADD \`updatedBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cart\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`cart\` ADD \`createdBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order_detail\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`order_detail\` ADD \`updatedBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order_detail\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`order_detail\` ADD \`createdBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`updatedBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`createdBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD \`updatedBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD \`createdBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`feedback\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`feedback\` ADD \`updatedBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`feedback\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`feedback\` ADD \`createdBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`updatedBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`createdBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`discount_code\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`discount_code\` ADD \`updatedBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`discount_code\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`discount_code\` ADD \`createdBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`restaurant\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`restaurant\` ADD \`updatedBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`restaurant\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`restaurant\` ADD \`createdBy\` varchar(255) NOT NULL`);
    }

}
