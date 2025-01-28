import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradesListComponent } from '../../ui/trades-list/trades-list.component';
import { ITradesResponse, ITraderList } from '../../models/trades-list.model';
import { PageEvent } from '@angular/material/paginator';

const TRADES_DATA: ITradesResponse = {
  "data": [
    {
      "_id": "64b7f3e1c45e88a73d10975",
      "tradeId": "TRD0975",
      "planetId": "NOV07",
      "traderId": "TraderZAR022",
      "type": "SELL",
      "status": "COMPLETED",
      "tradeDate": "2025-01-26T13:08:40Z",
      "zetaJoules": 4771,
      "pricePerUnit": 5.65,
      "totalPrice": 26956.15,
      "createdAt": "2025-01-26T13:08:40Z",
      "updatedAt": "2025-01-28T03:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderZAR022",
        "username": "Owen Harding",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderZAR022.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10823",
      "tradeId": "TRD0823",
      "planetId": "NOV07",
      "traderId": "TraderJOV0818",
      "type": "BUY",
      "status": "REJECTED",
      "tradeDate": "2025-01-25T13:08:40Z",
      "zetaJoules": 280,
      "pricePerUnit": 8.29,
      "totalPrice": 2321.2,
      "createdAt": "2025-01-25T13:08:40Z",
      "updatedAt": "2025-01-27T00:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderJOV0818",
        "username": "Angelica Wallace",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderJOV0818.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10828",
      "tradeId": "TRD0828",
      "planetId": "NOV07",
      "traderId": "TraderDRA0323",
      "type": "BUY",
      "status": "PENDING",
      "tradeDate": "2025-01-25T13:08:40Z",
      "zetaJoules": 2491,
      "pricePerUnit": 9.21,
      "totalPrice": 22942.11,
      "createdAt": "2025-01-25T13:08:40Z",
      "updatedAt": "2025-01-27T07:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderDRA0323",
        "username": "Nicolas Trevino",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderDRA0323.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10548",
      "tradeId": "TRD0548",
      "planetId": "NOV07",
      "traderId": "TraderNEB1010",
      "type": "SELL",
      "status": "COMPLETED",
      "tradeDate": "2025-01-22T13:08:40Z",
      "zetaJoules": 2851,
      "pricePerUnit": 1.46,
      "totalPrice": 4162.46,
      "createdAt": "2025-01-22T13:08:40Z",
      "updatedAt": "2025-01-24T11:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderNEB1010",
        "username": "Danyal Lester",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderNEB1010.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10584",
      "tradeId": "TRD0584",
      "planetId": "NOV07",
      "traderId": "TraderCRY0515",
      "type": "BUY",
      "status": "COMPLETED",
      "tradeDate": "2025-01-21T13:08:40Z",
      "zetaJoules": 1964,
      "pricePerUnit": 2.03,
      "totalPrice": 3986.92,
      "createdAt": "2025-01-21T13:08:40Z",
      "updatedAt": "2025-01-22T12:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderCRY0515",
        "username": "Byron Robertson",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderCRY0515.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10896",
      "tradeId": "TRD0896",
      "planetId": "NOV07",
      "traderId": "TraderJOV0818",
      "type": "SELL",
      "status": "PENDING",
      "tradeDate": "2025-01-20T13:08:40Z",
      "zetaJoules": 4455,
      "pricePerUnit": 2.65,
      "totalPrice": 11805.75,
      "createdAt": "2025-01-20T13:08:40Z",
      "updatedAt": "2025-01-22T03:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderJOV0818",
        "username": "Angelica Wallace",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderJOV0818.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10418",
      "tradeId": "TRD0418",
      "planetId": "NOV07",
      "traderId": "TraderECL0424",
      "type": "BUY",
      "status": "COMPLETED",
      "tradeDate": "2025-01-19T13:08:40Z",
      "zetaJoules": 4698,
      "pricePerUnit": 4.74,
      "totalPrice": 22268.52,
      "createdAt": "2025-01-19T13:08:40Z",
      "updatedAt": "2025-01-21T00:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderECL0424",
        "username": "Genevieve Mclean",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderECL0424.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10283",
      "tradeId": "TRD0283",
      "planetId": "NOV07",
      "traderId": "TraderECL044",
      "type": "SELL",
      "status": "COMPLETED",
      "tradeDate": "2025-01-17T13:08:40Z",
      "zetaJoules": 1010,
      "pricePerUnit": 2.08,
      "totalPrice": 2100.8,
      "createdAt": "2025-01-17T13:08:40Z",
      "updatedAt": "2025-01-18T13:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderECL044",
        "username": "Freya Browning",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderECL044.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10737",
      "tradeId": "TRD0737",
      "planetId": "NOV07",
      "traderId": "TraderECL044",
      "type": "SELL",
      "status": "PENDING",
      "tradeDate": "2025-01-17T13:08:40Z",
      "zetaJoules": 4233,
      "pricePerUnit": 2.25,
      "totalPrice": 9524.25,
      "createdAt": "2025-01-17T13:08:40Z",
      "updatedAt": "2025-01-18T07:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderECL044",
        "username": "Freya Browning",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderECL044.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10206",
      "tradeId": "TRD0206",
      "planetId": "NOV07",
      "traderId": "TraderHYP099",
      "type": "SELL",
      "status": "COMPLETED",
      "tradeDate": "2025-01-16T13:08:40Z",
      "zetaJoules": 4320,
      "pricePerUnit": 8.52,
      "totalPrice": 36806.4,
      "createdAt": "2025-01-16T13:08:40Z",
      "updatedAt": "2025-01-18T09:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderHYP099",
        "username": "Madeleine Pitts",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderHYP099.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10975",
      "tradeId": "TRD0975",
      "planetId": "NOV07",
      "traderId": "TraderZAR022",
      "type": "SELL",
      "status": "COMPLETED",
      "tradeDate": "2025-01-26T13:08:40Z",
      "zetaJoules": 4771,
      "pricePerUnit": 5.65,
      "totalPrice": 26956.15,
      "createdAt": "2025-01-26T13:08:40Z",
      "updatedAt": "2025-01-28T03:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderZAR022",
        "username": "Owen Harding",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderZAR022.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10823",
      "tradeId": "TRD0823",
      "planetId": "NOV07",
      "traderId": "TraderJOV0818",
      "type": "BUY",
      "status": "REJECTED",
      "tradeDate": "2025-01-25T13:08:40Z",
      "zetaJoules": 280,
      "pricePerUnit": 8.29,
      "totalPrice": 2321.2,
      "createdAt": "2025-01-25T13:08:40Z",
      "updatedAt": "2025-01-27T00:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderJOV0818",
        "username": "Angelica Wallace",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderJOV0818.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10828",
      "tradeId": "TRD0828",
      "planetId": "NOV07",
      "traderId": "TraderDRA0323",
      "type": "BUY",
      "status": "PENDING",
      "tradeDate": "2025-01-25T13:08:40Z",
      "zetaJoules": 2491,
      "pricePerUnit": 9.21,
      "totalPrice": 22942.11,
      "createdAt": "2025-01-25T13:08:40Z",
      "updatedAt": "2025-01-27T07:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderDRA0323",
        "username": "Nicolas Trevino",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderDRA0323.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10548",
      "tradeId": "TRD0548",
      "planetId": "NOV07",
      "traderId": "TraderNEB1010",
      "type": "SELL",
      "status": "COMPLETED",
      "tradeDate": "2025-01-22T13:08:40Z",
      "zetaJoules": 2851,
      "pricePerUnit": 1.46,
      "totalPrice": 4162.46,
      "createdAt": "2025-01-22T13:08:40Z",
      "updatedAt": "2025-01-24T11:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderNEB1010",
        "username": "Danyal Lester",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderNEB1010.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10584",
      "tradeId": "TRD0584",
      "planetId": "NOV07",
      "traderId": "TraderCRY0515",
      "type": "BUY",
      "status": "COMPLETED",
      "tradeDate": "2025-01-21T13:08:40Z",
      "zetaJoules": 1964,
      "pricePerUnit": 2.03,
      "totalPrice": 3986.92,
      "createdAt": "2025-01-21T13:08:40Z",
      "updatedAt": "2025-01-22T12:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderCRY0515",
        "username": "Byron Robertson",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderCRY0515.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10896",
      "tradeId": "TRD0896",
      "planetId": "NOV07",
      "traderId": "TraderJOV0818",
      "type": "SELL",
      "status": "PENDING",
      "tradeDate": "2025-01-20T13:08:40Z",
      "zetaJoules": 4455,
      "pricePerUnit": 2.65,
      "totalPrice": 11805.75,
      "createdAt": "2025-01-20T13:08:40Z",
      "updatedAt": "2025-01-22T03:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderJOV0818",
        "username": "Angelica Wallace",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderJOV0818.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10418",
      "tradeId": "TRD0418",
      "planetId": "NOV07",
      "traderId": "TraderECL0424",
      "type": "BUY",
      "status": "COMPLETED",
      "tradeDate": "2025-01-19T13:08:40Z",
      "zetaJoules": 4698,
      "pricePerUnit": 4.74,
      "totalPrice": 22268.52,
      "createdAt": "2025-01-19T13:08:40Z",
      "updatedAt": "2025-01-21T00:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderECL0424",
        "username": "Genevieve Mclean",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderECL0424.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10283",
      "tradeId": "TRD0283",
      "planetId": "NOV07",
      "traderId": "TraderECL044",
      "type": "SELL",
      "status": "COMPLETED",
      "tradeDate": "2025-01-17T13:08:40Z",
      "zetaJoules": 1010,
      "pricePerUnit": 2.08,
      "totalPrice": 2100.8,
      "createdAt": "2025-01-17T13:08:40Z",
      "updatedAt": "2025-01-18T13:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderECL044",
        "username": "Freya Browning",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderECL044.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10737",
      "tradeId": "TRD0737",
      "planetId": "NOV07",
      "traderId": "TraderECL044",
      "type": "SELL",
      "status": "PENDING",
      "tradeDate": "2025-01-17T13:08:40Z",
      "zetaJoules": 4233,
      "pricePerUnit": 2.25,
      "totalPrice": 9524.25,
      "createdAt": "2025-01-17T13:08:40Z",
      "updatedAt": "2025-01-18T07:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderECL044",
        "username": "Freya Browning",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderECL044.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10206",
      "tradeId": "TRD0206",
      "planetId": "NOV07",
      "traderId": "TraderHYP099",
      "type": "SELL",
      "status": "COMPLETED",
      "tradeDate": "2025-01-16T13:08:40Z",
      "zetaJoules": 4320,
      "pricePerUnit": 8.52,
      "totalPrice": 36806.4,
      "createdAt": "2025-01-16T13:08:40Z",
      "updatedAt": "2025-01-18T09:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderHYP099",
        "username": "Madeleine Pitts",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderHYP099.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10975",
      "tradeId": "TRD0975",
      "planetId": "NOV07",
      "traderId": "TraderZAR022",
      "type": "SELL",
      "status": "COMPLETED",
      "tradeDate": "2025-01-26T13:08:40Z",
      "zetaJoules": 4771,
      "pricePerUnit": 5.65,
      "totalPrice": 26956.15,
      "createdAt": "2025-01-26T13:08:40Z",
      "updatedAt": "2025-01-28T03:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderZAR022",
        "username": "Owen Harding",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderZAR022.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10823",
      "tradeId": "TRD0823",
      "planetId": "NOV07",
      "traderId": "TraderJOV0818",
      "type": "BUY",
      "status": "REJECTED",
      "tradeDate": "2025-01-25T13:08:40Z",
      "zetaJoules": 280,
      "pricePerUnit": 8.29,
      "totalPrice": 2321.2,
      "createdAt": "2025-01-25T13:08:40Z",
      "updatedAt": "2025-01-27T00:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderJOV0818",
        "username": "Angelica Wallace",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderJOV0818.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10828",
      "tradeId": "TRD0828",
      "planetId": "NOV07",
      "traderId": "TraderDRA0323",
      "type": "BUY",
      "status": "PENDING",
      "tradeDate": "2025-01-25T13:08:40Z",
      "zetaJoules": 2491,
      "pricePerUnit": 9.21,
      "totalPrice": 22942.11,
      "createdAt": "2025-01-25T13:08:40Z",
      "updatedAt": "2025-01-27T07:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderDRA0323",
        "username": "Nicolas Trevino",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderDRA0323.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10548",
      "tradeId": "TRD0548",
      "planetId": "NOV07",
      "traderId": "TraderNEB1010",
      "type": "SELL",
      "status": "COMPLETED",
      "tradeDate": "2025-01-22T13:08:40Z",
      "zetaJoules": 2851,
      "pricePerUnit": 1.46,
      "totalPrice": 4162.46,
      "createdAt": "2025-01-22T13:08:40Z",
      "updatedAt": "2025-01-24T11:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderNEB1010",
        "username": "Danyal Lester",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderNEB1010.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10584",
      "tradeId": "TRD0584",
      "planetId": "NOV07",
      "traderId": "TraderCRY0515",
      "type": "BUY",
      "status": "COMPLETED",
      "tradeDate": "2025-01-21T13:08:40Z",
      "zetaJoules": 1964,
      "pricePerUnit": 2.03,
      "totalPrice": 3986.92,
      "createdAt": "2025-01-21T13:08:40Z",
      "updatedAt": "2025-01-22T12:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderCRY0515",
        "username": "Byron Robertson",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderCRY0515.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10896",
      "tradeId": "TRD0896",
      "planetId": "NOV07",
      "traderId": "TraderJOV0818",
      "type": "SELL",
      "status": "PENDING",
      "tradeDate": "2025-01-20T13:08:40Z",
      "zetaJoules": 4455,
      "pricePerUnit": 2.65,
      "totalPrice": 11805.75,
      "createdAt": "2025-01-20T13:08:40Z",
      "updatedAt": "2025-01-22T03:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderJOV0818",
        "username": "Angelica Wallace",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderJOV0818.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10418",
      "tradeId": "TRD0418",
      "planetId": "NOV07",
      "traderId": "TraderECL0424",
      "type": "BUY",
      "status": "COMPLETED",
      "tradeDate": "2025-01-19T13:08:40Z",
      "zetaJoules": 4698,
      "pricePerUnit": 4.74,
      "totalPrice": 22268.52,
      "createdAt": "2025-01-19T13:08:40Z",
      "updatedAt": "2025-01-21T00:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderECL0424",
        "username": "Genevieve Mclean",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderECL0424.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10283",
      "tradeId": "TRD0283",
      "planetId": "NOV07",
      "traderId": "TraderECL044",
      "type": "SELL",
      "status": "COMPLETED",
      "tradeDate": "2025-01-17T13:08:40Z",
      "zetaJoules": 1010,
      "pricePerUnit": 2.08,
      "totalPrice": 2100.8,
      "createdAt": "2025-01-17T13:08:40Z",
      "updatedAt": "2025-01-18T13:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderECL044",
        "username": "Freya Browning",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderECL044.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10737",
      "tradeId": "TRD0737",
      "planetId": "NOV07",
      "traderId": "TraderECL044",
      "type": "SELL",
      "status": "PENDING",
      "tradeDate": "2025-01-17T13:08:40Z",
      "zetaJoules": 4233,
      "pricePerUnit": 2.25,
      "totalPrice": 9524.25,
      "createdAt": "2025-01-17T13:08:40Z",
      "updatedAt": "2025-01-18T07:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderECL044",
        "username": "Freya Browning",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderECL044.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10206",
      "tradeId": "TRD0206",
      "planetId": "NOV07",
      "traderId": "TraderHYP099",
      "type": "SELL",
      "status": "COMPLETED",
      "tradeDate": "2025-01-16T13:08:40Z",
      "zetaJoules": 4320,
      "pricePerUnit": 8.52,
      "totalPrice": 36806.4,
      "createdAt": "2025-01-16T13:08:40Z",
      "updatedAt": "2025-01-18T09:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderHYP099",
        "username": "Madeleine Pitts",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderHYP099.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10975",
      "tradeId": "TRD0975",
      "planetId": "NOV07",
      "traderId": "TraderZAR022",
      "type": "SELL",
      "status": "COMPLETED",
      "tradeDate": "2025-01-26T13:08:40Z",
      "zetaJoules": 4771,
      "pricePerUnit": 5.65,
      "totalPrice": 26956.15,
      "createdAt": "2025-01-26T13:08:40Z",
      "updatedAt": "2025-01-28T03:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderZAR022",
        "username": "Owen Harding",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderZAR022.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10823",
      "tradeId": "TRD0823",
      "planetId": "NOV07",
      "traderId": "TraderJOV0818",
      "type": "BUY",
      "status": "REJECTED",
      "tradeDate": "2025-01-25T13:08:40Z",
      "zetaJoules": 280,
      "pricePerUnit": 8.29,
      "totalPrice": 2321.2,
      "createdAt": "2025-01-25T13:08:40Z",
      "updatedAt": "2025-01-27T00:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderJOV0818",
        "username": "Angelica Wallace",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderJOV0818.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10828",
      "tradeId": "TRD0828",
      "planetId": "NOV07",
      "traderId": "TraderDRA0323",
      "type": "BUY",
      "status": "PENDING",
      "tradeDate": "2025-01-25T13:08:40Z",
      "zetaJoules": 2491,
      "pricePerUnit": 9.21,
      "totalPrice": 22942.11,
      "createdAt": "2025-01-25T13:08:40Z",
      "updatedAt": "2025-01-27T07:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderDRA0323",
        "username": "Nicolas Trevino",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderDRA0323.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10548",
      "tradeId": "TRD0548",
      "planetId": "NOV07",
      "traderId": "TraderNEB1010",
      "type": "SELL",
      "status": "COMPLETED",
      "tradeDate": "2025-01-22T13:08:40Z",
      "zetaJoules": 2851,
      "pricePerUnit": 1.46,
      "totalPrice": 4162.46,
      "createdAt": "2025-01-22T13:08:40Z",
      "updatedAt": "2025-01-24T11:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderNEB1010",
        "username": "Danyal Lester",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderNEB1010.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10584",
      "tradeId": "TRD0584",
      "planetId": "NOV07",
      "traderId": "TraderCRY0515",
      "type": "BUY",
      "status": "COMPLETED",
      "tradeDate": "2025-01-21T13:08:40Z",
      "zetaJoules": 1964,
      "pricePerUnit": 2.03,
      "totalPrice": 3986.92,
      "createdAt": "2025-01-21T13:08:40Z",
      "updatedAt": "2025-01-22T12:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderCRY0515",
        "username": "Byron Robertson",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderCRY0515.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10896",
      "tradeId": "TRD0896",
      "planetId": "NOV07",
      "traderId": "TraderJOV0818",
      "type": "SELL",
      "status": "PENDING",
      "tradeDate": "2025-01-20T13:08:40Z",
      "zetaJoules": 4455,
      "pricePerUnit": 2.65,
      "totalPrice": 11805.75,
      "createdAt": "2025-01-20T13:08:40Z",
      "updatedAt": "2025-01-22T03:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderJOV0818",
        "username": "Angelica Wallace",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderJOV0818.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10418",
      "tradeId": "TRD0418",
      "planetId": "NOV07",
      "traderId": "TraderECL0424",
      "type": "BUY",
      "status": "COMPLETED",
      "tradeDate": "2025-01-19T13:08:40Z",
      "zetaJoules": 4698,
      "pricePerUnit": 4.74,
      "totalPrice": 22268.52,
      "createdAt": "2025-01-19T13:08:40Z",
      "updatedAt": "2025-01-21T00:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderECL0424",
        "username": "Genevieve Mclean",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderECL0424.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10283",
      "tradeId": "TRD0283",
      "planetId": "NOV07",
      "traderId": "TraderECL044",
      "type": "SELL",
      "status": "COMPLETED",
      "tradeDate": "2025-01-17T13:08:40Z",
      "zetaJoules": 1010,
      "pricePerUnit": 2.08,
      "totalPrice": 2100.8,
      "createdAt": "2025-01-17T13:08:40Z",
      "updatedAt": "2025-01-18T13:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderECL044",
        "username": "Freya Browning",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderECL044.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10737",
      "tradeId": "TRD0737",
      "planetId": "NOV07",
      "traderId": "TraderECL044",
      "type": "SELL",
      "status": "PENDING",
      "tradeDate": "2025-01-17T13:08:40Z",
      "zetaJoules": 4233,
      "pricePerUnit": 2.25,
      "totalPrice": 9524.25,
      "createdAt": "2025-01-17T13:08:40Z",
      "updatedAt": "2025-01-18T07:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderECL044",
        "username": "Freya Browning",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderECL044.webp"
        }
      }
    },
    {
      "_id": "64b7f3e1c45e88a73d10206",
      "tradeId": "TRD0206",
      "planetId": "NOV07",
      "traderId": "TraderHYP099",
      "type": "SELL",
      "status": "COMPLETED",
      "tradeDate": "2025-01-16T13:08:40Z",
      "zetaJoules": 4320,
      "pricePerUnit": 8.52,
      "totalPrice": 36806.4,
      "createdAt": "2025-01-16T13:08:40Z",
      "updatedAt": "2025-01-18T09:08:40Z",
      "planet": {
        "planetId": "NOV07",
        "name": "Nova Terra",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp",
          "second": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp",
          "third": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp"
        },
        "color": "#5e90f1"
      },
      "trader": {
        "userId": "TraderHYP099",
        "username": "Madeleine Pitts",
        "images": {
          "base": "https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/TraderHYP099.webp"
        }
      }
    },

  ],
  "meta": {
    "total": 91,
    "page": 1,
    "limit": 10
  }
}

@Component({
  selector: 'trades-list',
  standalone: true,
  imports: [ TradesListComponent, CommonModule] ,
  templateUrl: './trades-list.page.html',
  styleUrls: ['./trades-list.page.scss'],
})
export class TradesListPageComponent {
  private allTrades = signal<ITraderList[]>(TRADES_DATA.data);
  currentPage = signal(1);
  pageSize = signal(10);

  paginatedData = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.pageSize();
    const endIndex = startIndex + this.pageSize();
    return {
      data: this.allTrades().slice(startIndex, endIndex),
      meta: {
        total: TRADES_DATA.meta.total,
        page: this.currentPage(),
        limit: this.pageSize()
      }
    };
  });

  totalPages = computed(() => Math.ceil(TRADES_DATA.meta.total / this.pageSize()));

  handlePageChange(event: PageEvent) {
    this.currentPage.set(event.pageIndex + 1);
    this.pageSize.set(event.pageSize);
  }
}