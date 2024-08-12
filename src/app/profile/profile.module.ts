import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { CertificationComponent } from './certification/certification.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { SplitPipe } from '../pipes/split.pipe';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { HttpClient } from '@angular/common/http';
// import { ProjectsComponent } from './projects/projects.component';
// import { NgxPaginationModule } from 'ngx-pagination';

// import { ExtraCiricularComponent } from './extra-ciricular/extra-ciricular.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    NgxTypedJsModule
  //  NgxPaginationModule
  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationComponent,
    ContactComponent,
    ProjectComponent,
    SplitPipe
    // SplitPipe,
    // ExtraCiricularComponent
  ],
 
})
export class ProfileModule { }