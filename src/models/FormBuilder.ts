import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { FormComponent } from './FormComponent';

@Entity()
@ObjectType()
export class FormBuilder {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => [FormComponent])
  @OneToMany(() => FormComponent, component => component.formBuilder, { cascade: true })
  components: FormComponent[];
}
