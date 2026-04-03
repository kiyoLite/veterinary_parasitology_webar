export interface TaxonomicCategory {
    name: string,
    category: string,
    children?: TaxonomicCategory
    parasiteID?: number
}

