import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsListComponent } from '../../ui/planets-list/planets-list.component';
import { LeaderboardListComponent } from '../../ui/leaderboard-list/leaderboard-list.component';
import { IPlanetInfo} from '../../models/planets-list.model';
import { ILeaderboard } from '../../models/leaderboard-list.model';

@Component({
  selector: 'dashboard-page',
  imports: [CommonModule, PlanetsListComponent, LeaderboardListComponent],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPageComponent {
  planetsList = signal<IPlanetInfo[]>([
    {
      buyOrders: 45,
      sellOrders: 41,
      totalVolume: 224447,
      avgPrice: 473.73511627906976,
      planetId: 'NOV07',
      name: 'Nova Terra',
      description:
        'A recently colonized planet with booming energy needs for infrastructure.',
      language: 'GALCOM',
      currency: 'NOVA_COIN',
      tradeVolume: 9500000,
      riskFactors: ['INFRA_UNSTABLE', 'ECONOMIC_UNCERTAINTY'],
      averageDailyConsumption: 410000,
      creditRating: 'A',
      createdAt: new Date('2025-01-04T10:30:00Z'),
      updatedAt: new Date('2025-01-10T14:45:00Z'),
    },
    {
      buyOrders: 37,
      sellOrders: 35,
      totalVolume: 181506,
      avgPrice: 534.1569444444444,
      planetId: 'JOV08',
      name: 'Jovaris',
      description: 'A gas giant with a booming energy export industry.',
      language: 'JOV',
      currency: 'GAS_COIN',
      tradeVolume: 15000000,
      riskFactors: ['SUPPLY_DISRUPTION', 'ORBIT_UNSTABLE'],
      averageDailyConsumption: 200000,
      creditRating: 'AAA',
      createdAt: new Date('2025-01-06T14:00:00Z'),
      updatedAt: new Date('2025-01-12T08:15:00Z'),
    },
    {
      buyOrders: 37,
      sellOrders: 45,
      totalVolume: 185561,
      avgPrice: 514.4940243902439,
      planetId: 'ULT01',
      name: 'Ulthar',
      description:
        'A desert planet with high energy demands due to terraforming projects.',
      language: 'ULTH',
      currency: 'ULT_SHELLS',
      tradeVolume: 7500000,
      riskFactors: ['SOLAR_FLARE', 'RESOURCE_SCARCITY'],
      averageDailyConsumption: 300000,
      creditRating: 'AAA',
      createdAt: new Date('2025-01-10T08:30:00Z'),
      updatedAt: new Date('2025-01-12T10:00:00Z'),
    },
    {
      buyOrders: 43,
      sellOrders: 37,
      totalVolume: 194571,
      avgPrice: 501.39425,
      planetId: 'HYP09',
      name: 'Hyperion',
      description:
        'A planet with advanced AI-driven energy systems and complex infrastructure.',
      language: 'HYP',
      currency: 'NANO_CR',
      tradeVolume: 11000000,
      riskFactors: ['AI_MALFUNCTION', 'CYBER_RISK'],
      averageDailyConsumption: 370000,
      creditRating: 'AA',
      createdAt: new Date('2025-01-07T16:00:00Z'),
      updatedAt: new Date('2025-01-12T14:00:00Z'),
    },
    {
      buyOrders: 45,
      sellOrders: 43,
      totalVolume: 213837,
      avgPrice: 485.91499999999996,
      planetId: 'CRY05',
      name: 'Cryonix',
      description:
        'An icy world with high energy demands for heating and survival systems.',
      language: 'CRYO',
      currency: 'FROST_CR',
      tradeVolume: 8200000,
      riskFactors: ['HARSH_WINTER', 'GLACIAL_SHIFT'],
      averageDailyConsumption: 320000,
      creditRating: 'AA',
      createdAt: new Date('2025-01-05T12:00:00Z'),
      updatedAt: new Date('2025-01-11T08:00:00Z'),
    },
    {
      buyOrders: 39,
      sellOrders: 52,
      totalVolume: 230885,
      avgPrice: 566.1773626373626,
      planetId: 'ZAR02',
      name: 'Zarxis Prime',
      description:
        'An aquatic planet where most energy is used for underwater civilizations.',
      language: 'ZARX',
      currency: 'AQU_TOK',
      tradeVolume: 12500000,
      riskFactors: ['TIDAL_FLUCTUATION', 'SEISMIC_ACTIVITY'],
      averageDailyConsumption: 450000,
      creditRating: 'A',
      createdAt: new Date('2025-01-09T15:00:00Z'),
      updatedAt: new Date('2025-01-11T09:45:00Z'),
    },
    {
      buyOrders: 40,
      sellOrders: 40,
      totalVolume: 212659,
      avgPrice: 517.6915,
      planetId: 'DRA03',
      name: 'Draconis',
      description:
        'A volcanic world exporting rare minerals and using energy for mining operations.',
      language: 'DRAC',
      currency: 'OBS_SHA',
      tradeVolume: 13000000,
      riskFactors: ['VOLCANIC_ERUPTION', 'MINING_ACCIDENT'],
      averageDailyConsumption: 380000,
      creditRating: 'A',
      createdAt: new Date('2025-01-01T11:00:00Z'),
      updatedAt: new Date('2025-01-07T13:00:00Z'),
    },
    {
      buyOrders: 45,
      sellOrders: 45,
      totalVolume: 238115,
      avgPrice: 473.85377777777774,
      planetId: 'ECL04',
      name: 'Ecliptica',
      description:
        'A planet with advanced solar farms that exports massive energy surpluses.',
      language: 'SOL',
      currency: 'PHOTON',
      tradeVolume: 18000000,
      riskFactors: ['SOLAR_STORM', 'PIRACY'],
      averageDailyConsumption: 150000,
      creditRating: 'AAA',
      createdAt: new Date('2025-01-03T14:00:00Z'),
      updatedAt: new Date('2025-01-09T18:00:00Z'),
    },
    {
      buyOrders: 47,
      sellOrders: 35,
      totalVolume: 176921,
      avgPrice: 462.3790243902439,
      planetId: 'AET06',
      name: 'Aetheria',
      description:
        'A floating city-planet relying heavily on imported energy for air stabilization.',
      language: 'AETH',
      currency: 'SKY_TOK',
      tradeVolume: 7200000,
      riskFactors: ['ATMOS_INSTABILITY', 'SUPPLY_DELAY'],
      averageDailyConsumption: 280000,
      creditRating: 'BBB',
      createdAt: new Date('2025-01-02T09:00:00Z'),
      updatedAt: new Date('2025-01-08T15:30:00Z'),
    },
    {
      buyOrders: 53,
      sellOrders: 47,
      totalVolume: 240705,
      avgPrice: 492.9798,
      planetId: 'NEB10',
      name: 'Nebulon',
      description:
        'A distant planet heavily reliant on intergalactic energy imports.',
      language: 'NEB',
      currency: 'ENER_CRYST',
      tradeVolume: 9700000,
      riskFactors: ['IMPORT_DELAY', 'PIRACY_THREAT'],
      averageDailyConsumption: 410000,
      creditRating: 'A',
      createdAt: new Date('2025-01-08T18:00:00Z'),
      updatedAt: new Date('2025-01-12T17:30:00Z'),
    },
  ]);

  leaderboardList = signal<ILeaderboard>({
    "planetLeaderboard": [
      {
        "tradeCount": 115,
        "id": "NEB10",
        "name": "Nebulon"
      },
      {
        "tradeCount": 105,
        "id": "ZAR02",
        "name": "Zarxis Prime"
      },
      {
        "tradeCount": 104,
        "id": "NOV07",
        "name": "Nova Terra"
      },
      {
        "tradeCount": 104,
        "id": "CRY05",
        "name": "Cryonix"
      },
      {
        "tradeCount": 103,
        "id": "HYP09",
        "name": "Hyperion"
      },
      {
        "tradeCount": 102,
        "id": "ECL04",
        "name": "Ecliptica"
      },
      {
        "tradeCount": 95,
        "id": "DRA03",
        "name": "Draconis"
      },
      {
        "tradeCount": 95,
        "id": "ULT01",
        "name": "Ulthar"
      },
      {
        "tradeCount": 92,
        "id": "AET06",
        "name": "Aetheria"
      },
      {
        "tradeCount": 85,
        "id": "JOV08",
        "name": "Jovaris"
      }
    ],
    "traderLeaderboard": [
      {
        "tradeCount": 80,
        "id": "TraderECL043",
        "name": "TraderECL043"
      },
      {
        "tradeCount": 43,
        "id": "TraderCRY052",
        "name": "TraderCRY052"
      },
      {
        "tradeCount": 42,
        "id": "TraderECL042",
        "name": "TraderECL042"
      },
      {
        "tradeCount": 40,
        "id": "TraderCRY051",
        "name": "TraderCRY051"
      },
      {
        "tradeCount": 38,
        "id": "TraderDRA032",
        "name": "TraderDRA032"
      },
      {
        "tradeCount": 38,
        "id": "TraderULT012",
        "name": "TraderULT012"
      },
      {
        "tradeCount": 38,
        "id": "TraderDRA033",
        "name": "TraderDRA033"
      },
      {
        "tradeCount": 38,
        "id": "TraderZAR022",
        "name": "TraderZAR022"
      },
      {
        "tradeCount": 37,
        "id": "TraderCRY053",
        "name": "TraderCRY053"
      },
      {
        "tradeCount": 36,
        "id": "TraderJOV081",
        "name": "TraderJOV081"
      }
    ]
  });
}
