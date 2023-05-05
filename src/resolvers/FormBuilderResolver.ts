// src/resolvers/FormBuilderResolver.ts

import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { FormBuilder } from '../models/FormBuilder';
import { FormComponent } from '../models/FormComponent';
import { getRepository } from 'typeorm';

@Resolver()
export class FormBuilderResolver {
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
  async createFormBuilder(@Arg('name') name: string): Promise<FormBuilder> {
    const formBuilderRepository = getRepository(FormBuilder);
    const formBuilder = new FormBuilder();
    formBuilder.name = name;
    return formBuilderRepository.save(formBuilder);
  }

  @Mutation(() => FormBuilder)
  async addComponentToFormBuilder(
    @Arg('formBuilderId') formBuilderId: number,
    @Arg('component') component: FormComponent,
  ): Promise<FormBuilder | undefined> {
    const formBuilderRepository = getRepository(FormBuilder);
    const formBuilder = await formBuilderRepository.findOne(formBuilderId, { relations: ['components'] });
    if (!formBuilder) {
      return undefined;
    }
    formBuilder.components.push(component);
    return formBuilderRepository.save(formBuilder);
  }
}
