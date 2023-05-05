// src/resolvers/FormBuilderResolver.ts

import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { FormBuilder } from '../models/FormBuilder';
import { FormComponent } from '../models/FormComponent';
import { getRepository } from 'typeorm';
import { CreateFormBuilderInput } from '../inputs/FormBulderInput';
import { CreateFormComponentInput } from '../inputs/FormComponentInput';

@Resolver()
export class FormBuilderResolver {

  private formBuilderRepository = getRepository(FormBuilder);
  private formComponentRepository = getRepository(FormComponent);

  @Query(() => [FormBuilder])
  async formBuilders(): Promise<FormBuilder[]> {
    const formBuilderRepository = getRepository(FormBuilder);
    return formBuilderRepository.find();
  }

  @Query(() => FormBuilder)
  async formBuilder(@Arg('id') id: number): Promise<FormBuilder | undefined> {
    const formBuilderRepository = getRepository(FormBuilder);
    return formBuilderRepository.findOne(id, { relations: ['components'] });
  }

  @Mutation(() => FormBuilder)
  async createFormBuilder(@Arg("data") data: CreateFormBuilderInput): Promise<FormBuilder> {
    const formBuilder = this.formBuilderRepository.create(data);
    return this.formBuilderRepository.save(formBuilder);

  }

  @Mutation(() => FormBuilder)
  async addComponentToFormBuilder(
    @Arg("data") data: CreateFormComponentInput
  ): Promise<FormBuilder | undefined> {
    const formBuilder = await this.formBuilderRepository.findOne(data.formBuilderId, { relations: ['components'] });
    if (!formBuilder) {
      return undefined;
    }
  const formComponent = this.formComponentRepository.create(data);
  formComponent.formBuilder = formBuilder;
  formBuilder.components.push(formComponent);
  return this.formBuilderRepository.save(formBuilder);
  }
}
