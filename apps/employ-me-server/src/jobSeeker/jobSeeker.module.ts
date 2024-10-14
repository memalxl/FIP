import { Module } from "@nestjs/common";
import { JobSeekerModuleBase } from "./base/jobSeeker.module.base";
import { JobSeekerService } from "./jobSeeker.service";
import { JobSeekerController } from "./jobSeeker.controller";
import { JobSeekerResolver } from "./jobSeeker.resolver";

@Module({
  imports: [JobSeekerModuleBase],
  controllers: [JobSeekerController],
  providers: [JobSeekerService, JobSeekerResolver],
  exports: [JobSeekerService],
})
export class JobSeekerModule {}
