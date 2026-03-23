import { Routes } from '@angular/router';
import { TaxonomicMapPageComponent } from './pages/taxonomic/taxonomic-map-page';
import { GeneralEpidemiologicalMapPage } from './pages/general-epidemiological-map/general-epidemiological-map-page';

export const routes: Routes = [{
    path: 'toxonomic-map',
    component: TaxonomicMapPageComponent
},
{
    path: 'epidemiological-map',
    component: GeneralEpidemiologicalMapPage
}
];
