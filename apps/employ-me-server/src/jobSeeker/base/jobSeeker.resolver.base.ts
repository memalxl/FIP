/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { JobSeeker } from "./JobSeeker";
import { JobSeekerCountArgs } from "./JobSeekerCountArgs";
import { JobSeekerFindManyArgs } from "./JobSeekerFindManyArgs";
import { JobSeekerFindUniqueArgs } from "./JobSeekerFindUniqueArgs";
import { DeleteJobSeekerArgs } from "./DeleteJobSeekerArgs";
import { JobSeekerService } from "../jobSeeker.service";
@graphql.Resolver(() => JobSeeker)
export class JobSeekerResolverBase {
  constructor(protected readonly service: JobSeekerService) {}

  async _jobSeekersMeta(
    @graphql.Args() args: JobSeekerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [JobSeeker])
  async jobSeekers(
    @graphql.Args() args: JobSeekerFindManyArgs
  ): Promise<JobSeeker[]> {
    return this.service.jobSeekers(args);
  }

  @graphql.Query(() => JobSeeker, { nullable: true })
  async jobSeeker(
    @graphql.Args() args: JobSeekerFindUniqueArgs
  ): Promise<JobSeeker | null> {
    const result = await this.service.jobSeeker(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => JobSeeker)
  async deleteJobSeeker(
    @graphql.Args() args: DeleteJobSeekerArgs
  ): Promise<JobSeeker | null> {
    try {
      return await this.service.deleteJobSeeker(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
