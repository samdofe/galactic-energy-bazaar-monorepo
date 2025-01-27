import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FedsCoreEnvSyncService } from '@feds/core-env';
import {
  IPlanetStorePlanetModel,
  IPlanetTradeStatsQueryParams,
  IPlanetTradeStatsResponse,
  TPlanetStoreEnvironment
} from './planets-store.model';
import { Observable } from 'rxjs';

@Injectable()
export class PlanetsStoreService {
  readonly #http = inject(HttpClient);
  readonly #envSrv = inject(FedsCoreEnvSyncService);
  readonly #environment = this.#envSrv.environment();
  readonly #apiPlanetsDomain = (this.#environment() as TPlanetStoreEnvironment).API_PLANETS_DOMAIN;
  readonly #apiPlanetsContext= (this.#environment() as TPlanetStoreEnvironment).API_PLANETS_CONTEXT;

  getPlanetTradeStats(query: IPlanetTradeStatsQueryParams): Observable<IPlanetTradeStatsResponse>{

    let queryParams = '';
    Object.entries(query).forEach(([key, value], idx) => {
      queryParams = idx === 0 ? `?${key}=${value}` : `&${key}=${value}`;
    })
    return this.#http.get<IPlanetTradeStatsResponse>(`${this.#apiPlanetsDomain}/${this.#apiPlanetsContext}/${queryParams}`);
  }
  getAllPlanet(): Observable<IPlanetStorePlanetModel[]>{
    return this.#http.get<IPlanetStorePlanetModel[]>(`${this.#apiPlanetsDomain}/${this.#apiPlanetsContext}`);
  }

  getPlanet(planetId: string): Observable<IPlanetStorePlanetModel>{
    return this.#http.get<IPlanetStorePlanetModel>(`${this.#apiPlanetsDomain}/${this.#apiPlanetsContext}/${planetId}`);
  }

  /**
   * OUT OF SCOPE
   * NEW PLANET
   * UPDATE PLANET
   * DELETE PLANET
   * **/

}