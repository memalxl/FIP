import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobSeekerService } from "./jobSeeker.service";
import { JobSeekerControllerBase } from "./base/jobSeeker.controller.base";

@swagger.ApiTags("jobSeekers")
@common.Controller("jobSeekers")
export class JobSeekerController extends JobSeekerControllerBase {
  constructor(protected readonly service: JobSeekerService) {
    super(service);
  }
}
