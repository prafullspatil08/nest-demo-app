import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Represents the Product entity for TypeORM
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;
}
