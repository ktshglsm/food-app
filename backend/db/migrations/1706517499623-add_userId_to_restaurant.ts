import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserIdToRestaurant1706517499623 implements MigrationInterface {
    name = 'AddUserIdToRestaurant1706517499623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restaurant\` ADD \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`restaurant\` ADD UNIQUE INDEX \`IDX_43ebcd49fca84c2fda8c077ac6\` (\`userId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_43ebcd49fca84c2fda8c077ac6\` ON \`restaurant\` (\`userId\`)`);
        await queryRunner.query(`ALTER TABLE \`restaurant\` ADD CONSTRAINT \`FK_43ebcd49fca84c2fda8c077ac68\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restaurant\` DROP FOREIGN KEY \`FK_43ebcd49fca84c2fda8c077ac68\``);
        await queryRunner.query(`DROP INDEX \`REL_43ebcd49fca84c2fda8c077ac6\` ON \`restaurant\``);
        await queryRunner.query(`ALTER TABLE \`restaurant\` DROP INDEX \`IDX_43ebcd49fca84c2fda8c077ac6\``);
        await queryRunner.query(`ALTER TABLE \`restaurant\` DROP COLUMN \`userId\``);
    }

}
