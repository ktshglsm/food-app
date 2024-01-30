import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNullableToFood1706518996489 implements MigrationInterface {
    name = 'AddNullableToFood1706518996489'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_43ebcd49fca84c2fda8c077ac6\` ON \`restaurant\``);
        await queryRunner.query(`ALTER TABLE \`food\` CHANGE \`discount\` \`discount\` double NULL`);
        await queryRunner.query(`ALTER TABLE \`food\` CHANGE \`status\` \`status\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`food\` CHANGE \`status\` \`status\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`food\` CHANGE \`discount\` \`discount\` double NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_43ebcd49fca84c2fda8c077ac6\` ON \`restaurant\` (\`userId\`)`);
    }

}
