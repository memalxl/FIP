import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VacancyList } from "./vacancy/VacancyList";
import { VacancyCreate } from "./vacancy/VacancyCreate";
import { VacancyEdit } from "./vacancy/VacancyEdit";
import { VacancyShow } from "./vacancy/VacancyShow";
import { JobSeekerList } from "./jobSeeker/JobSeekerList";
import { JobSeekerCreate } from "./jobSeeker/JobSeekerCreate";
import { JobSeekerEdit } from "./jobSeeker/JobSeekerEdit";
import { JobSeekerShow } from "./jobSeeker/JobSeekerShow";
import { ApplicationList } from "./application/ApplicationList";
import { ApplicationCreate } from "./application/ApplicationCreate";
import { ApplicationEdit } from "./application/ApplicationEdit";
import { ApplicationShow } from "./application/ApplicationShow";
import { ResumeList } from "./resume/ResumeList";
import { ResumeCreate } from "./resume/ResumeCreate";
import { ResumeEdit } from "./resume/ResumeEdit";
import { ResumeShow } from "./resume/ResumeShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { ReviewList } from "./review/ReviewList";
import { ReviewCreate } from "./review/ReviewCreate";
import { ReviewEdit } from "./review/ReviewEdit";
import { ReviewShow } from "./review/ReviewShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { PortfolioList } from "./portfolio/PortfolioList";
import { PortfolioCreate } from "./portfolio/PortfolioCreate";
import { PortfolioEdit } from "./portfolio/PortfolioEdit";
import { PortfolioShow } from "./portfolio/PortfolioShow";
import { UserProfileList } from "./userProfile/UserProfileList";
import { UserProfileCreate } from "./userProfile/UserProfileCreate";
import { UserProfileEdit } from "./userProfile/UserProfileEdit";
import { UserProfileShow } from "./userProfile/UserProfileShow";
import { SkillList } from "./skill/SkillList";
import { SkillCreate } from "./skill/SkillCreate";
import { SkillEdit } from "./skill/SkillEdit";
import { SkillShow } from "./skill/SkillShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"EmployMe-1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Vacancy"
          list={VacancyList}
          edit={VacancyEdit}
          create={VacancyCreate}
          show={VacancyShow}
        />
        <Resource
          name="JobSeeker"
          list={JobSeekerList}
          edit={JobSeekerEdit}
          create={JobSeekerCreate}
          show={JobSeekerShow}
        />
        <Resource
          name="Application"
          list={ApplicationList}
          edit={ApplicationEdit}
          create={ApplicationCreate}
          show={ApplicationShow}
        />
        <Resource
          name="Resume"
          list={ResumeList}
          edit={ResumeEdit}
          create={ResumeCreate}
          show={ResumeShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="Review"
          list={ReviewList}
          edit={ReviewEdit}
          create={ReviewCreate}
          show={ReviewShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="Portfolio"
          list={PortfolioList}
          edit={PortfolioEdit}
          create={PortfolioCreate}
          show={PortfolioShow}
        />
        <Resource
          name="UserProfile"
          list={UserProfileList}
          edit={UserProfileEdit}
          create={UserProfileCreate}
          show={UserProfileShow}
        />
        <Resource
          name="Skill"
          list={SkillList}
          edit={SkillEdit}
          create={SkillCreate}
          show={SkillShow}
        />
      </Admin>
    </div>
  );
};

export default App;
