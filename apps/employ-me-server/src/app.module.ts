import { Module } from "@nestjs/common";
import { VacancyModule } from "./vacancy/vacancy.module";
import { JobSeekerModule } from "./jobSeeker/jobSeeker.module";
import { ApplicationModule } from "./application/application.module";
import { ResumeModule } from "./resume/resume.module";
import { CompanyModule } from "./company/company.module";
import { ReviewModule } from "./review/review.module";
import { NotificationModule } from "./notification/notification.module";
import { PortfolioModule } from "./portfolio/portfolio.module";
import { UserProfileModule } from "./userProfile/userProfile.module";
import { SkillModule } from "./skill/skill.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    VacancyModule,
    JobSeekerModule,
    ApplicationModule,
    ResumeModule,
    CompanyModule,
    ReviewModule,
    NotificationModule,
    PortfolioModule,
    UserProfileModule,
    SkillModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
