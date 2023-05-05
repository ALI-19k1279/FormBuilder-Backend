import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { FormBuilder } from './FormBuilder';

@Entity()
@ObjectType()
export class FormComponent {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(()=>String)
  @Column({ type: "varchar" })
  type: string;

  @Field(()=>String)
  @Column({ type: "varchar" })
  label: string;

  //other fields to be added

  @Field(() => FormBuilder)
  @ManyToOne(() => FormBuilder, formBuilder => formBuilder.components)
  formBuilder: FormBuilder;
}
