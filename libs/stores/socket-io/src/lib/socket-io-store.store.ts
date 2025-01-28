import { computed, inject } from '@angular/core';

import { signalStore, withHooks, withMethods } from '@ngrx/signals';
import { SocketIOStoreService } from './socket-io-store.service';

export const SocketIOStore = signalStore(
  withMethods((store, socketIOStoreSrv = inject(SocketIOStoreService)) => {
    const setUpListeners = () :void => {
      socketIOStoreSrv.setupListeners();
    }
    const getLatestTrade = socketIOStoreSrv.getLatestTrade();
    const disconnect = () => {
      socketIOStoreSrv.disconnect();
    }

    return {
      setUpListeners,
      getLatestTrade,
      disconnect
    }
  }),
  withHooks({
    onInit(store) {
      console.log(`SocketIOStore ::: Store :: setting up listeners ...`);
      store.setUpListeners()
    },
    onDestroy(store) {
      console.log(`SocketIOStore :: Sore :: disconnect`);
      store.disconnect();
    },
  }),
)

