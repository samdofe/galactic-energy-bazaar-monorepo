import { FedsCoreEnvSyncService } from './feds-core-env-sync.service';
import { TFedsCoreDefaultEnvironment } from './feds-core-env.model';
import { inject } from '@angular/core';

export const fedsCoreEnvInitializerSync = (environment:TFedsCoreDefaultEnvironment)=> () => {
  const envSyncService = inject(FedsCoreEnvSyncService);
  envSyncService.setEnvironment(environment);
}