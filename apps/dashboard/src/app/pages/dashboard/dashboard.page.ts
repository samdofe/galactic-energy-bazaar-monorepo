import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FedsCoreI18nService } from '@feds/core-i18n';
import { FedsCoreEnvSyncService } from '@feds/core/env';
import {environment} from '../../../environments/environment';
import * as defaultLanguageJSON from '../../../../public/i18n/en-US.json';
import { PlanetsListComponent } from '../../ui/planets-list/planets-list.component';
import { LeaderboardListComponent } from '../../ui/leaderboard-list/leaderboard-list.component';
import { IPlanetInfo } from '../../models/planet.model';
import { ILeaderboard } from '../../models/leaderboard.model';

@Component({
  selector: 'dashboard-page',
  imports: [
    CommonModule,
    PlanetsListComponent,
    LeaderboardListComponent,
    TranslateModule,
  ],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPageComponent {
  i18nTranslate = inject(FedsCoreI18nService);
  envSrv = inject(FedsCoreEnvSyncService);
  environment = this.envSrv.environment();
  constructor() {
    this.envSrv.setEnvironment(environment);
    console.log('DASHBOARD :: environment : ', this.environment());
    this.i18nTranslate.init({
      nameSpace: 'dashboard',
      defaultLangJSON: defaultLanguageJSON,
    });
  }
  planetsList = signal<IPlanetInfo[]>([
    {
      buyOrders: 50,
      sellOrders: 47,
      totalVolume: 237516,
      avgPrice: 5.5,
      planetId: 'ECL04',
      name: 'Ecliptica',
      description:
        'A planet with advanced solar farms that exports massive energy surpluses.',
      language: 'SOL',
      currency: 'PHOTON',
      images: {
        base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/ECL04.webp',
      },
      color: '#d97557',
      tradeVolume: 18000000,
      riskFactors: ['SOLAR_STORM', 'PIRACY'],
      averageDailyConsumption: 150000,
      creditRating: 'AAA',
      createdAt: '2025-01-03T14:00:00Z',
      updatedAt: '2025-01-09T18:00:00Z',
    },
    {
      buyOrders: 46,
      sellOrders: 47,
      totalVolume: 246960,
      avgPrice: 5.400322580645161,
      planetId: 'NEB10',
      name: 'Nebulon',
      description:
        'A distant planet heavily reliant on intergalactic energy imports.',
      language: 'NEB',
      currency: 'ENER_CRYST',
      images: {
        base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NEB10.webp',
      },
      color: '#5e90f1',
      tradeVolume: 9700000,
      riskFactors: ['IMPORT_DELAY', 'PIRACY_THREAT'],
      averageDailyConsumption: 410000,
      creditRating: 'A',
      createdAt: '2025-01-08T18:00:00Z',
      updatedAt: '2025-01-12T17:30:00Z',
    },
    {
      buyOrders: 40,
      sellOrders: 38,
      totalVolume: 201753,
      avgPrice: 5.43025641025641,
      planetId: 'HYP09',
      name: 'Hyperion',
      description:
        'A planet with advanced AI-driven energy systems and complex infrastructure.',
      language: 'HYP',
      currency: 'NANO_CR',
      images: {
        base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/HYP09.webp',
      },
      color: '#97c5cf',
      tradeVolume: 11000000,
      riskFactors: ['AI_MALFUNCTION', 'CYBER_RISK'],
      averageDailyConsumption: 370000,
      creditRating: 'AA',
      createdAt: '2025-01-07T16:00:00Z',
      updatedAt: '2025-01-12T14:00:00Z',
    },
    {
      buyOrders: 32,
      sellOrders: 46,
      totalVolume: 187722,
      avgPrice: 5.648076923076923,
      planetId: 'JOV08',
      name: 'Jovaris',
      description: 'A gas giant with a booming energy export industry.',
      language: 'JOV',
      currency: 'GAS_COIN',
      images: {
        base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/JOV08.webp',
      },
      color: '#625e5a',
      tradeVolume: 15000000,
      riskFactors: ['SUPPLY_DISRUPTION', 'ORBIT_UNSTABLE'],
      averageDailyConsumption: 200000,
      creditRating: 'AAA',
      createdAt: '2025-01-06T14:00:00Z',
      updatedAt: '2025-01-12T08:15:00Z',
    },
    {
      buyOrders: 43,
      sellOrders: 39,
      totalVolume: 189471,
      avgPrice: 4.976341463414634,
      planetId: 'CRY05',
      name: 'Cryonix',
      description:
        'An icy world with high energy demands for heating and survival systems.',
      language: 'CRYO',
      currency: 'FROST_CR',
      images: {
        base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/CRY05.webp',
      },
      color: '#a2b0bd',
      tradeVolume: 8200000,
      riskFactors: ['HARSH_WINTER', 'GLACIAL_SHIFT'],
      averageDailyConsumption: 320000,
      creditRating: 'AA',
      createdAt: '2025-01-05T12:00:00Z',
      updatedAt: '2025-01-11T08:00:00Z',
    },
    {
      buyOrders: 42,
      sellOrders: 37,
      totalVolume: 184317,
      avgPrice: 4.981392405063292,
      planetId: 'ZAR02',
      name: 'Zarxis Prime',
      description:
        'An aquatic planet where most energy is used for underwater civilizations.',
      language: 'ZARX',
      currency: 'AQU_TOK',
      images: {
        base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/ZAR02.webp',
      },
      color: '#e6993b',
      tradeVolume: 12500000,
      riskFactors: ['TIDAL_FLUCTUATION', 'SEISMIC_ACTIVITY'],
      averageDailyConsumption: 450000,
      creditRating: 'A',
      createdAt: '2025-01-09T15:00:00Z',
      updatedAt: '2025-01-11T09:45:00Z',
    },
    {
      buyOrders: 41,
      sellOrders: 43,
      totalVolume: 207995,
      avgPrice: 5.411190476190477,
      planetId: 'AET06',
      name: 'Aetheria',
      description:
        'A floating city-planet relying heavily on imported energy for air stabilization.',
      language: 'AETH',
      currency: 'SKY_TOK',
      images: {
        base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/AET06.webp',
      },
      color: '#e9dec9',
      tradeVolume: 7200000,
      riskFactors: ['ATMOS_INSTABILITY', 'SUPPLY_DELAY'],
      averageDailyConsumption: 280000,
      creditRating: 'BBB',
      createdAt: '2025-01-02T09:00:00Z',
      updatedAt: '2025-01-08T15:30:00Z',
    },
    {
      buyOrders: 42,
      sellOrders: 37,
      totalVolume: 197707,
      avgPrice: 5.505316455696203,
      planetId: 'NOV07',
      name: 'Nova Terra',
      description:
        'A recently colonized planet with booming energy needs for infrastructure.',
      language: 'GALCOM',
      currency: 'NOVA_COIN',
      images: {
        base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp',
        second:
          'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp',
        third:
          'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp',
      },
      color: '#5e90f1',
      tradeVolume: 9500000,
      riskFactors: ['INFRA_UNSTABLE', 'ECONOMIC_UNCERTAINTY'],
      averageDailyConsumption: 410000,
      creditRating: 'A',
      createdAt: '2025-01-04T10:30:00Z',
      updatedAt: '2025-01-10T14:45:00Z',
    },
    {
      buyOrders: 53,
      sellOrders: 45,
      totalVolume: 215167,
      avgPrice: 5.1817346938775515,
      planetId: 'ULT01',
      name: 'Ulthar',
      description:
        'A desert planet with high energy demands due to terraforming projects.',
      language: 'ULTH',
      currency: 'ULT_SHELLS',
      images: {
        base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/ULT01.webp',
      },
      color: '#a2b0bd',
      tradeVolume: 7500000,
      riskFactors: ['SOLAR_FLARE', 'RESOURCE_SCARCITY'],
      averageDailyConsumption: 300000,
      creditRating: 'AAA',
      createdAt: '2025-01-10T08:30:00Z',
      updatedAt: '2025-01-12T10:00:00Z',
    },
    {
      buyOrders: 48,
      sellOrders: 37,
      totalVolume: 216141,
      avgPrice: 5.683882352941176,
      planetId: 'DRA03',
      name: 'Draconis',
      description:
        'A volcanic world exporting rare minerals and using energy for mining operations.',
      language: 'DRAC',
      currency: 'OBS_SHA',
      images: {
        base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/DRA03.webp',
      },
      color: '#d9bc8e',
      tradeVolume: 13000000,
      riskFactors: ['VOLCANIC_ERUPTION', 'MINING_ACCIDENT'],
      averageDailyConsumption: 380000,
      creditRating: 'A',
      createdAt: '2025-01-01T11:00:00Z',
      updatedAt: '2025-01-07T13:00:00Z',
    },
  ]);

  leaderboardList = signal<ILeaderboard>({
    planetLeaderboard: [
      {
        tradeCount: 118,
        id: 'NEB10',
        name: 'Nebulon',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NEB10.webp',
        },
      },
      {
        tradeCount: 108,
        id: 'ULT01',
        name: 'Ulthar',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/ULT01.webp',
        },
      },
      {
        tradeCount: 107,
        id: 'ECL04',
        name: 'Ecliptica',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/ECL04.webp',
        },
      },
      {
        tradeCount: 103,
        id: 'CRY05',
        name: 'Cryonix',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/CRY05.webp',
        },
      },
      {
        tradeCount: 102,
        id: 'AET06',
        name: 'Aetheria',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/AET06.webp',
        },
      },
      {
        tradeCount: 98,
        id: 'ZAR02',
        name: 'Zarxis Prime',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/ZAR02.webp',
        },
      },
      {
        tradeCount: 96,
        id: 'DRA03',
        name: 'Draconis',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/DRA03.webp',
        },
      },
      {
        tradeCount: 91,
        id: 'NOV07',
        name: 'Nova Terra',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp',
          second:
            'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp',
          third:
            'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp',
        },
      },
      {
        tradeCount: 90,
        id: 'JOV08',
        name: 'Jovaris',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/JOV08.webp',
        },
      },
      {
        tradeCount: 87,
        id: 'HYP09',
        name: 'Hyperion',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/HYP09.webp',
        },
      },
    ],
    traderLeaderboard: [
      {
        tradeCount: 52,
        id: 'TraderNEB1020',
        name: 'Clifford Jennings',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderNEB1020.webp',
        },
      },
      {
        tradeCount: 47,
        id: 'TraderZAR022',
        name: 'Owen Harding',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderZAR022.webp',
        },
      },
      {
        tradeCount: 47,
        id: 'TraderAET0616',
        name: 'Levi Rocha',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderAET0616.webp',
        },
      },
      {
        tradeCount: 46,
        id: 'TraderJOV088',
        name: 'Amelie Bennett',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderJOV088.webp',
        },
      },
      {
        tradeCount: 45,
        id: 'TraderJOV0818',
        name: 'Angelica Wallace',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderJOV0818.webp',
        },
      },
      {
        tradeCount: 41,
        id: 'TraderNOV077',
        name: 'Natali Craig',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderNOV077.webp',
        },
      },
      {
        tradeCount: 40,
        id: 'TraderNOV0717',
        name: 'Priya Shepard',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderNOV0717.webp',
        },
      },
      {
        tradeCount: 40,
        id: 'TraderCRY0515',
        name: 'Byron Robertson',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderCRY0515.webp',
        },
      },
      {
        tradeCount: 38,
        id: 'TraderCRY055',
        name: 'Candice Wu',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderCRY055.webp',
        },
      },
      {
        tradeCount: 38,
        id: 'TraderDRA0313',
        name: 'Abraham Baker',
        images: {
          base: 'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderDRA0313.webp',
        },
      },
    ],
  });
}
