import { Injectable, Signal, signal } from '@angular/core';
import { TFedsCoreDefaultEnvironment } from './feds-core-env.model';

@Injectable({
  providedIn: 'root',
})
export class FedsCoreEnvSyncService {
  private _environment = signal<TFedsCoreDefaultEnvironment>({});

  setEnvironment(env: TFedsCoreDefaultEnvironment): void {
    this._environment.set({ ...this._environment(), ...env});
  }

  environment(): Signal<TFedsCoreDefaultEnvironment> {
    return this._environment;
  }
}
