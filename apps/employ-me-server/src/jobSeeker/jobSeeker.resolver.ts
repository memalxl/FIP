import * as graphql from "@nestjs/graphql";
import { JobSeekerResolverBase } from "./base/jobSeeker.resolver.base";
import { JobSeeker } from "./base/JobSeeker";
import { JobSeekerService } from "./jobSeeker.service";

@graphql.Resolver(() => JobSeeker)
export class JobSeekerResolver extends JobSeekerResolverBase {
  constructor(protected readonly service: JobSeekerService) {
    super(service);
  }
}
