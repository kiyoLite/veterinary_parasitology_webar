import { Routes } from '@angular/router';
import { TaxonomicMapPageComponent } from './pages/taxonomic/taxonomic-map-page';
import { GeneralEpidemiologicalMapPage } from './pages/general-epidemiological-map/general-epidemiological-map-page';
import { AboutParasitePage } from './pages/about-parasite/about-parasite-page';

export const routes: Routes = [{
    path: 'taxonomic-map',
    component: TaxonomicMapPageComponent
},
{
    path: 'epidemiological-map',
    component: GeneralEpidemiologicalMapPage
},
{
    path: 'about-parasite/:parasite',
    component: AboutParasitePage

}
];
