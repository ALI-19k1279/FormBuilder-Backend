import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
  } from "typeorm";
  
import { Category } from "./Category";

@Entity()
@Unique(["code"])
export class Product {
    @PrimaryGeneratedColumn()
    public readonly id!: number;

    @Column({ type: "varchar" })
    public code!: string;

    @Column({ type: "varchar" })
    public name!: string;

    @CreateDateColumn()
    public createdAt!: Date;

    @UpdateDateColumn()
    public updatedAt!: Date;

    @ManyToOne((_type) => Category, (category: Category) => category.id)
    @JoinColumn({ name: "categoryId" })
    public category!: Category;
}