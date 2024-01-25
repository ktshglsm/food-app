import { MigrationInterface, QueryRunner } from "typeorm";

export class RelationshipFoodAndUser1706176901779 implements MigrationInterface {
    name = 'RelationshipFoodAndUser1706176901779'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`food\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`price\` double NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`restaurantId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`food\` ADD CONSTRAINT \`FK_7c9492140866fe2a0867b381dcf\` FOREIGN KEY (\`restaurantId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`food\` DROP FOREIGN KEY \`FK_7c9492140866fe2a0867b381dcf\``);
        await queryRunner.query(`DROP TABLE \`food\``);
    }

}
