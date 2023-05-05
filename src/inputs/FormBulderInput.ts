import { InputType, Field, ID } from 'type-graphql';
import { CreateFormComponentInput } from './FormComponentInput';

@InputType()
export class CreateFormBuilderInput {
  @Field(() => ID, { nullable: true })
  id?: number;

  @Field(() => String)
  name: string;

  @Field(() => [CreateFormComponentInput], { nullable: true })
  components?: CreateFormComponentInput[];
}