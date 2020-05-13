import { Component, OnInit } from '@angular/core';

const INGRESS_CHART = [
  {
    name: 'Some name',
    color: '#00fff6',
    minYScaleValue: 1000,
    maxYScaleValue: 7000,
    values: [
      {
        timeStamp: 'Wed May 13 2020 09:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      },
      {
        timeStamp: 'Wed May 13 2020 15:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      },
      {
        timeStamp: 'Wed May 13 2020 15:01:00 GMT+0300 (GMT+03:00)',
        value: 6000
      },
      {
        timeStamp: 'Wed May 13 2020 16:00:00 GMT+0300 (GMT+03:00)',
        value: 3000
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      }
    ]
  }, {
    name: 'Some name',
    color: '#ff0000',
    minYScaleValue: 1000,
    maxYScaleValue: 7000,
    values: [
      {
        timeStamp: 'Wed May 13 2020 09:00:00 GMT+0300 (GMT+03:00)',
        value: 1200
      },
      {
        timeStamp: 'Wed May 13 2020 12:00:00 GMT+0300 (GMT+03:00)',
        value: 1400
      },
      {
        timeStamp: 'Wed May 13 2020 14:01:00 GMT+0300 (GMT+03:00)',
        value: 1500
      },
      {
        timeStamp: 'Wed May 13 2020 17:00:00 GMT+0300 (GMT+03:00)',
        value: 1200
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      }
    ]
  }
];

const PLATFORM_CHART = [
  {
    name: 'Some name',
    color: '#00fff6',
    minYScaleValue: 1000,
    maxYScaleValue: 7000,
    values: [
      {
        timeStamp: 'Wed May 13 2020 09:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      },
      {
        timeStamp: 'Wed May 13 2020 15:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      },
      {
        timeStamp: 'Wed May 13 2020 15:01:00 GMT+0300 (GMT+03:00)',
        value: 6000
      },
      {
        timeStamp: 'Wed May 13 2020 16:00:00 GMT+0300 (GMT+03:00)',
        value: 3000
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      }
    ]
  }, {
    name: 'Some name',
    color: '#ff0000',
    minYScaleValue: 1000,
    maxYScaleValue: 7000,
    values: [
      {
        timeStamp: 'Wed May 13 2020 09:00:00 GMT+0300 (GMT+03:00)',
        value: 1200
      },
      {
        timeStamp: 'Wed May 13 2020 12:00:00 GMT+0300 (GMT+03:00)',
        value: 1400
      },
      {
        timeStamp: 'Wed May 13 2020 14:01:00 GMT+0300 (GMT+03:00)',
        value: 1500
      },
      {
        timeStamp: 'Wed May 13 2020 17:00:00 GMT+0300 (GMT+03:00)',
        value: 1200
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      }
    ]
  }
];

const PLATFORM_OCCUPANCY_CHART = [
  {
    name: 'Some name',
    color: '#00fff6',
    minYScaleValue: 1000,
    maxYScaleValue: 7000,
    values: [
      {
        timeStamp: 'Wed May 13 2020 09:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      },
      {
        timeStamp: 'Wed May 13 2020 15:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      },
      {
        timeStamp: 'Wed May 13 2020 15:01:00 GMT+0300 (GMT+03:00)',
        value: 6000
      },
      {
        timeStamp: 'Wed May 13 2020 16:00:00 GMT+0300 (GMT+03:00)',
        value: 3000
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      }
    ]
  }, {
    name: 'Some name',
    color: '#ff0000',
    minYScaleValue: 1000,
    maxYScaleValue: 7000,
    values: [
      {
        timeStamp: 'Wed May 13 2020 09:00:00 GMT+0300 (GMT+03:00)',
        value: 1200
      },
      {
        timeStamp: 'Wed May 13 2020 12:00:00 GMT+0300 (GMT+03:00)',
        value: 1400
      },
      {
        timeStamp: 'Wed May 13 2020 14:01:00 GMT+0300 (GMT+03:00)',
        value: 1500
      },
      {
        timeStamp: 'Wed May 13 2020 17:00:00 GMT+0300 (GMT+03:00)',
        value: 1200
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      }
    ]
  }
];

const WIRELESS_CHART = [
  {
    name: 'Some name',
    color: '#faca00',
    values: [
      {
        timeStamp: 'Wed May 13 2020 09:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      },
      {
        timeStamp: 'Wed May 13 2020 15:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      },
      {
        timeStamp: 'Wed May 13 2020 15:01:00 GMT+0300 (GMT+03:00)',
        value: 6000
      },
      {
        timeStamp: 'Wed May 13 2020 16:00:00 GMT+0300 (GMT+03:00)',
        value: 3000
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      }
    ]
  },
  {
    name: 'Some name',
    color: '#81c926',
    values: [
      {
        timeStamp: 'Wed May 13 2020 09:00:00 GMT+0300 (GMT+03:00)',
        value: 1200
      },
      {
        timeStamp: 'Wed May 13 2020 12:00:00 GMT+0300 (GMT+03:00)',
        value: 1400
      },
      {
        timeStamp: 'Wed May 13 2020 14:01:00 GMT+0300 (GMT+03:00)',
        value: 1500
      },
      {
        timeStamp: 'Wed May 13 2020 17:00:00 GMT+0300 (GMT+03:00)',
        value: 1200
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      }
    ]
  },
  {
    name: 'Some name',
    color: '#ab7df6',
    values: [
      {
        timeStamp: 'Wed May 13 2020 09:00:00 GMT+0300 (GMT+03:00)',
        value: 1200
      },
      {
        timeStamp: 'Wed May 13 2020 12:00:00 GMT+0300 (GMT+03:00)',
        value: 1400
      },
      {
        timeStamp: 'Wed May 13 2020 14:01:00 GMT+0300 (GMT+03:00)',
        value: 1500
      },
      {
        timeStamp: 'Wed May 13 2020 17:00:00 GMT+0300 (GMT+03:00)',
        value: 1200
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      }
    ]
  },
  {
    name: 'Some name',
    color: '#85a5ff',
    values: [
      {
        timeStamp: 'Wed May 13 2020 09:00:00 GMT+0300 (GMT+03:00)',
        value: 1200
      },
      {
        timeStamp: 'Wed May 13 2020 12:00:00 GMT+0300 (GMT+03:00)',
        value: 1400
      },
      {
        timeStamp: 'Wed May 13 2020 14:01:00 GMT+0300 (GMT+03:00)',
        value: 1500
      },
      {
        timeStamp: 'Wed May 13 2020 17:00:00 GMT+0300 (GMT+03:00)',
        value: 1200
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      }
    ]
  }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  charts = {
    ingress: INGRESS_CHART,
    platform: PLATFORM_CHART,
    platformOccupancy: PLATFORM_OCCUPANCY_CHART,
    wireless: WIRELESS_CHART
  };

  constructor() { }

  ngOnInit(): void {
  }

}
