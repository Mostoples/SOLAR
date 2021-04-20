import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'solar',
    loadChildren: () => import('./solar/solar.module').then( m => m.SolarPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'verif',
    loadChildren: () => import('./verif/verif.module').then( m => m.VerifPageModule)
  },
  {
    path: 'tentang',
    loadChildren: () => import('./tentang/tentang.module').then( m => m.TentangPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'earth',
    loadChildren: () => import('./earth/earth.module').then( m => m.EarthPageModule)
  },
  {
    path: 'mercury',
    loadChildren: () => import('./mercury/mercury.module').then( m => m.MercuryPageModule)
  },
  {
    path: 'venus',
    loadChildren: () => import('./venus/venus.module').then( m => m.VenusPageModule)
  },
  {
    path: 'sun',
    loadChildren: () => import('./sun/sun.module').then( m => m.SunPageModule)
  },
  {
    path: 'mars',
    loadChildren: () => import('./mars/mars.module').then( m => m.MarsPageModule)
  },
  {
    path: 'moon',
    loadChildren: () => import('./moon/moon.module').then( m => m.MoonPageModule)
  },
  {
    path: 'jupyter',
    loadChildren: () => import('./jupyter/jupyter.module').then( m => m.JupyterPageModule)
  },
  {
    path: 'asteroid',
    loadChildren: () => import('./asteroid/asteroid.module').then( m => m.AsteroidPageModule)
  },
  {
    path: 'saturn',
    loadChildren: () => import('./saturn/saturn.module').then( m => m.SaturnPageModule)
  },
  {
    path: 'neptune',
    loadChildren: () => import('./neptune/neptune.module').then( m => m.NeptunePageModule)
  },
  {
    path: 'uranus',
    loadChildren: () => import('./uranus/uranus.module').then( m => m.UranusPageModule)
  },
  {
    path: 'komet',
    loadChildren: () => import('./komet/komet.module').then( m => m.KometPageModule)
  },
  {
    path: 'meteor',
    loadChildren: () => import('./meteor/meteor.module').then( m => m.MeteorPageModule)
  },
  {
    path: 'milkyway',
    loadChildren: () => import('./milkyway/milkyway.module').then( m => m.MilkywayPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
