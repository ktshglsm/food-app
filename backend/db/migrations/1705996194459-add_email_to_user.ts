import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmailToUser1705996194459 implements MigrationInterface {
    name = 'AddEmailToUser1705996194459'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }

}
