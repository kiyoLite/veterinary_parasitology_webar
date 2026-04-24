import { Routes } from '@angular/router';
import { TaxonomicMapPageComponent } from './pages/taxonomic/taxonomic-map-page';
import { GeneralEpidemiologicalMapPage } from './pages/general-epidemiological-map/general-epidemiological-map-page';
import { AboutParasitePage } from './pages/about-parasite/about-parasite-page';
import { ParasiteQuiz } from './pages/parasite-quiz/parasite-quiz';
import { ParasiteEpidemiologicalMap } from './pages/parasite-epidemiological-map/parasite-epidemiological-map';
import { HomePage } from './pages/home/home';

export const routes: Routes = [{
    path: 'taxonomic-map',
    component: TaxonomicMapPageComponent
},
{
    path: '',
    component: HomePage
},
{
    path: 'epidemiological-map/:parasite',
    component: ParasiteEpidemiologicalMap
},
{
    path: 'epidemiological-map',
    component: GeneralEpidemiologicalMapPage
},
{
    path: 'parasite-quiz/:parasite',
    component: ParasiteQuiz
},
{
    path: 'about-parasite/:parasite',
    component: AboutParasitePage,
}

];
