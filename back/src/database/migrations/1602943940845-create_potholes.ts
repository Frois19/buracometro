import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPotholes1602943940845 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // REALIZAR ALTERAÇÕES NO BANCO DE DADOS: CRIAR TABELA, CRIAR CAMPO, DELETAR CAMPO
        await queryRunner.createTable(new Table({
            name: 'potholes',
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
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'description',
                    type: 'text',
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // DESFAZER O QUE FOI FEITO NO METODO UP
        await queryRunner.dropTable('potholes')
    }

}
