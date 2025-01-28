import { inject, Injectable, signal, type Signal } from '@angular/core';
import { io, type Socket } from "socket.io-client"
import { ISocketStoreTradeModel, TSocketStoreEnvironment } from './socket-io-store.model';
import { FedsCoreEnvSyncService } from '@feds/core-env';

@Injectable({
  providedIn: "root",
})
export class SocketIOStoreService {
  readonly #envSrv = inject(FedsCoreEnvSyncService);
  readonly #environment = this.#envSrv.environment();
  readonly #apiSocketDomain = (this.#environment() as TSocketStoreEnvironment).API_SOCKET_DOMAIN;
  readonly #apiBase = `${this.#apiSocketDomain}`
  #socket: Socket;
  readonly #latestTradeSignal = signal<ISocketStoreTradeModel | null>(null);


  constructor() {
    this.#socket = io(this.#apiBase) // Replace with your backend URL
    // SocketIOStore will do it
    //this.setupListeners()
  }

  setupListeners() {
    this.#socket.on("tradeCreated", (trade: ISocketStoreTradeModel) => {
      console.log("New trade created:", trade)
      this.#latestTradeSignal.set(trade)
    })
  }

  getLatestTrade(): Signal<ISocketStoreTradeModel | null> {
    return this.#latestTradeSignal.asReadonly()
  }

  disconnect() {
    if (this.#socket) {
      this.#socket.disconnect()
    }
  }
}

