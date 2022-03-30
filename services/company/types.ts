export interface Company {
  id: number;
  denomination: string;
  etablissement_siege: {
    siret: string;
    geo_adresse: string;
  };
}

export interface CompanyQueryResponse {
  unite_legale: Company;
}
