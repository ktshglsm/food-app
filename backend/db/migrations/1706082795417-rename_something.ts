import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameSomething1706082795417 implements MigrationInterface {
    name = 'RenameSomething1706082795417'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`refresh_token\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`refreshToken\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`refreshToken\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`refresh_token\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    }

}
