import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FedsCoreEnvSyncService } from '@feds/core-env';
import {
  IPlanetStorePlanetModel,
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
  readonly #apiBase = `${this.#apiPlanetsDomain}${this.#apiPlanetsContext}`

  getPlanets(): Observable<IPlanetStorePlanetModel[]>{
    return this.#http.get<IPlanetStorePlanetModel[]>(`${this.#apiBase}`);
  }

  getPlanet(planetId: string): Observable<IPlanetStorePlanetModel>{
    return this.#http.get<IPlanetStorePlanetModel>(`${this.#apiBase}/${planetId}`);
  }

  /**
   * OUT OF SCOPE
   * NEW PLANET
   * UPDATE PLANET
   * DELETE PLANET
   * **/

}