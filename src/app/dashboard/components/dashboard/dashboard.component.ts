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
        value: 0
      },
      {
        timeStamp: 'Wed May 13 2020 15:00:00 GMT+0300 (GMT+03:00)',
        value: 20
      },
      {
        timeStamp: 'Wed May 13 2020 15:01:00 GMT+0300 (GMT+03:00)',
        value: 30
      },
      {
        timeStamp: 'Wed May 13 2020 16:00:00 GMT+0300 (GMT+03:00)',
        value: 60
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 30
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
        value: 19
      },
      {
        timeStamp: 'Wed May 13 2020 12:00:00 GMT+0300 (GMT+03:00)',
        value: 16
      },
      {
        timeStamp: 'Wed May 13 2020 14:01:00 GMT+0300 (GMT+03:00)',
        value: 14
      },
      {
        timeStamp: 'Wed May 13 2020 17:00:00 GMT+0300 (GMT+03:00)',
        value: 13
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 11
      }
    ]
  }
];

const PLATFORM_OCCUPANCY_CHART = [
  {
    name: 'Some name',
    color: '#00fff6',
    minYScaleValue: 0,
    maxYScaleValue: 80,
    values: [
      {
        timeStamp: 'Wed May 13 2020 09:00:00 GMT+0300 (GMT+03:00)',
        value: 0
      },
      {
        timeStamp: 'Wed May 13 2020 15:00:00 GMT+0300 (GMT+03:00)',
        value: 10
      },
      {
        timeStamp: 'Wed May 13 2020 15:01:00 GMT+0300 (GMT+03:00)',
        value: 20
      },
      {
        timeStamp: 'Wed May 13 2020 16:00:00 GMT+0300 (GMT+03:00)',
        value: 60
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 20
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
        value: 3
      },
      {
        timeStamp: 'Wed May 13 2020 12:00:00 GMT+0300 (GMT+03:00)',
        value: 4
      },
      {
        timeStamp: 'Wed May 13 2020 14:01:00 GMT+0300 (GMT+03:00)',
        value: 10
      },
      {
        timeStamp: 'Wed May 13 2020 17:00:00 GMT+0300 (GMT+03:00)',
        value: 5
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 2
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
        value: 100
      },
      {
        timeStamp: 'Wed May 13 2020 15:00:00 GMT+0300 (GMT+03:00)',
        value: 300
      },
      {
        timeStamp: 'Wed May 13 2020 15:01:00 GMT+0300 (GMT+03:00)',
        value: 400
      },
      {
        timeStamp: 'Wed May 13 2020 16:00:00 GMT+0300 (GMT+03:00)',
        value: 300
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
        value: 300
      },
      {
        timeStamp: 'Wed May 13 2020 12:00:00 GMT+0300 (GMT+03:00)',
        value: 400
      },
      {
        timeStamp: 'Wed May 13 2020 14:01:00 GMT+0300 (GMT+03:00)',
        value: 250
      },
      {
        timeStamp: 'Wed May 13 2020 17:00:00 GMT+0300 (GMT+03:00)',
        value: 100
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 300
      }
    ]
  },
  {
    name: 'Some name',
    color: '#ab7df6',
    values: [
      {
        timeStamp: 'Wed May 13 2020 09:00:00 GMT+0300 (GMT+03:00)',
        value: 100
      },
      {
        timeStamp: 'Wed May 13 2020 12:00:00 GMT+0300 (GMT+03:00)',
        value: 120
      },
      {
        timeStamp: 'Wed May 13 2020 14:01:00 GMT+0300 (GMT+03:00)',
        value: 130
      },
      {
        timeStamp: 'Wed May 13 2020 17:00:00 GMT+0300 (GMT+03:00)',
        value: 100
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 60
      }
    ]
  },
  {
    name: 'Some name',
    color: '#85a5ff',
    values: [
      {
        timeStamp: 'Wed May 13 2020 09:00:00 GMT+0300 (GMT+03:00)',
        value: 500
      },
      {
        timeStamp: 'Wed May 13 2020 12:00:00 GMT+0300 (GMT+03:00)',
        value: 300
      },
      {
        timeStamp: 'Wed May 13 2020 14:01:00 GMT+0300 (GMT+03:00)',
        value: 400
      },
      {
        timeStamp: 'Wed May 13 2020 17:00:00 GMT+0300 (GMT+03:00)',
        value: 350
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 120
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
    ingress: {
      minYScaleValue: 0,
      maxYScaleValue: 7000,
      data: INGRESS_CHART
    },
    platform: {
      minYScaleValue: 0,
      maxYScaleValue: 70,
      data: PLATFORM_CHART
    },
    platformOccupancy: {
      minYScaleValue: 0,
      maxYScaleValue: 70,
      data: PLATFORM_OCCUPANCY_CHART
    },
    wireless: {
      minYScaleValue: 0,
      maxYScaleValue: 1000,
      data: WIRELESS_CHART
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
