import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAvatarToUser1706173128270 implements MigrationInterface {
    name = 'AddAvatarToUser1706173128270'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`avatar\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`avatar\``);
    }

}
