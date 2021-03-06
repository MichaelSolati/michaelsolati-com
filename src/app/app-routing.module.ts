import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    loadChildren: 'app/home/home.module#HomeModule'
  }, {
    path: 'community',
    loadChildren: 'app/community/community.module#CommunityModule'
  }, {
    path: 'education',
    loadChildren: 'app/education/education.module#EducationModule'
  }, {
    path: 'experience',
    loadChildren: 'app/experience/experience.module#ExperienceModule'
  }, {
    path: 'portfolio',
    loadChildren: 'app/portfolio/portfolio.module#PortfolioModule'
  }, {
    path: '**',
    redirectTo: '/'
  }];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
