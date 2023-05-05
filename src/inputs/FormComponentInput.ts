import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class CreateFormComponentInput {
  @Field(() => String)
  type: string;

  @Field(() => String)
  label: string;

  @Field(() => ID)
  formBuilderId: number;

  //other fields to be added
}

