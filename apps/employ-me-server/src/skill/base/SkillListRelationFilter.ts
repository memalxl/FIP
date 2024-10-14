/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SkillWhereInput } from "./SkillWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SkillListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SkillWhereInput,
  })
  @ValidateNested()
  @Type(() => SkillWhereInput)
  @IsOptional()
  @Field(() => SkillWhereInput, {
    nullable: true,
  })
  every?: SkillWhereInput;

  @ApiProperty({
    required: false,
    type: () => SkillWhereInput,
  })
  @ValidateNested()
  @Type(() => SkillWhereInput)
  @IsOptional()
  @Field(() => SkillWhereInput, {
    nullable: true,
  })
  some?: SkillWhereInput;

  @ApiProperty({
    required: false,
    type: () => SkillWhereInput,
  })
  @ValidateNested()
  @Type(() => SkillWhereInput)
  @IsOptional()
  @Field(() => SkillWhereInput, {
    nullable: true,
  })
  none?: SkillWhereInput;
}
export { SkillListRelationFilter as SkillListRelationFilter };
