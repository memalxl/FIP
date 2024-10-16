/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JobSeekerWhereInput } from "./JobSeekerWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { JobSeekerOrderByInput } from "./JobSeekerOrderByInput";

@ArgsType()
class JobSeekerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => JobSeekerWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => JobSeekerWhereInput, { nullable: true })
  @Type(() => JobSeekerWhereInput)
  where?: JobSeekerWhereInput;

  @ApiProperty({
    required: false,
    type: [JobSeekerOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [JobSeekerOrderByInput], { nullable: true })
  @Type(() => JobSeekerOrderByInput)
  orderBy?: Array<JobSeekerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { JobSeekerFindManyArgs as JobSeekerFindManyArgs };
