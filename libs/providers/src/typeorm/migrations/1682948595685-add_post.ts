import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPost1682948595685 implements MigrationInterface {
  name = 'AddPost1682948595685';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "posts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "post_date" integer, "text" character varying, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "posts"`);
  }
}
