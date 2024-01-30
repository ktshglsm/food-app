import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatedByToNumberInFood1706544799070 implements MigrationInterface {
    name = 'CreatedByToNumberInFood1706544799070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`food\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`food\` ADD \`createdBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`food\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`food\` ADD \`updatedBy\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`food\` DROP COLUMN \`updatedBy\``);
        await queryRunner.query(`ALTER TABLE \`food\` ADD \`updatedBy\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`food\` DROP COLUMN \`createdBy\``);
        await queryRunner.query(`ALTER TABLE \`food\` ADD \`createdBy\` varchar(255) NOT NULL`);
    }

}
