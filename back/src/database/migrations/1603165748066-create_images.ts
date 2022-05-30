import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1603165748066 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',

                },

                {
                    name: 'path',
                    type: 'varchar',
                },

                {
                    name: 'pothole_id',
                    type: 'integer',
                }
            ],
            foreignKeys: [
                {
                    name: 'ImagePothole',
                    columnNames: ['pothole_id'],
                    referencedTableName: 'potholes',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images')
    }

}
