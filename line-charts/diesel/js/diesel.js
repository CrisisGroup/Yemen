$(function () {
  Highcharts.setOptions({
    chart: {
      style: {
        fontFamily: 'Open Sans'
      }
    }
  });
  $('#hcContainer').highcharts({
    chart: {
      type: 'line',
      backgroundColor: '#FFF',
      border: 'none',
      color: '#000',
      plotShadow: true
    },
    credits: {
      enabled: true,
      href: "http://www.crisisgroup.org",
      text: "International Crisis Group"
    },
    title: {
      text: "Diesel Prices in Yemen Based on Faction"
    },
    legend: {
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal'
    },
    colors: ['#00b29e', '#023850', '#0C8D79'],
    yAxis: {
      tickInterval: 1,
      max: 2,
      title: {
        text: 'Price of Diesel Fuel (USD, Adjusted for 20XX)'
      }
    },
    xAxis: {
          categories: [
          'Jan 16',
          'Feb 16',
          'Mar 16',
          'Apr 16',
          'May 16',
          'Jun 16',
          'Jul 16',
          'Aug 16',
          'Sep 16',
          'Oct 16',
          'Nov 16',
          'Dec 16',
          'Jan 17',
          'Feb 17',
          'Mar 17',
          'Apr 17',
          'May 17',
          'Jun 17',
          'Jul 17',
          'Aug 17',
          'Sep 17',
          'Oct 17',
          'Nov 17',
          'Dec 17',
          'Jan 18',
          'Feb 18',
          'Mar 18',
          'Apr 18',
          'May 18',
          'Jun 18',
          'Jul 18',
          'Aug 18',
          'Sep 18',
          'Oct 18',
          'Nov 18',
          'Dec 18',
          'Jan 19',
          'Feb 19',
          'Mar 19',
          'Apr 19',
          'May 19',
          'Jun 19',
          'Jul 19',
          'Aug 19',
          'Sep 19',
          'Oct 19',
          'Nov 19',
          'Dec 19',
          'Jan 20',
          'Feb 20',
          'Mar 20',
          'Apr 20',
          'May 20',
          'Jun 20',
          'Jul 20',
          'Aug 20',
          'Sep 20',
          'Oct 20',
          'Nov 20',
          'Dec 20',
          'Jan 21',
          'Feb 21',
          'Mar 21',
          'Apr 21'],
          title: {
            text: "Some sample text explaining the trend here."
          }
    },
    series: [{
        type: 'line',
        name: 'Huthi',
        data: [1.180177825,1.000910704,0.9790332874,0.8749200193,1.118583994,0.9364378373,0.8297587768,0.7352397328,0.6696267703,0.65982189,0.6534614572,0.6442161004,0.6678967442,0.6983075643,0.6676918035,0.6501820195,0.6374997976,0.6464585638,0.6436121457,0.647580688,0.6553564217,0.678030645,0.9651840321,0.9569060005,0.734723485,0.7433365735,0.7202181433,0.6891987506,0.7463365269,0.7737037932,0.7723855969,0.78430028,0.8822341254,0.8521191986,0.9580945486,0.9237490528,0.7718901431,0.650728851,0.7194504417,1.041092882,0.8205898692,0.7764103396,0.7628439408,0.7455233424,0.8946269163,1.031216267,0.784738983,0.7373495173,0.7382142748,0.7302943909,0.7320970851,0.5836206204,0.5870608279,0.5858736204,0.9507036409,0.8136880308,0.8392665788,0.7307306574,0.6484373641,0.6339895053,0.8673277691,1.054356067,1.07744093,1.099074715]
      }, {
        type: 'line',
        name: 'Non-Huthi',
        data: [0.86309082,0.8358372166,0.8590970565,0.78159794,0.8770851937,0.9228359202,0.8226552223,0.6314063179,0.6190130464,0.6053625021,0.6215510624,0.6529494208,0.6858730143,0.7596518536,0.6428891473,0.550448129,0.5595186406,0.5549369776,0.5555904672,0.5818778906,0.5645887922,0.5674273429,0.6776655641,0.6605418046,0.6921549946,0.6122217432,0.6137578923,0.5450014518,0.6048933791,0.6285123693,0.629728221,0.6137822361,0.6285537102,0.676226827,0.7480255731,0.6656422213,0.5633641949,0.4974229309,0.5612025635,0.7144819573,0.6474290776,0.613172941,0.5967103174,0.5892211172,0.6244180217,0.6743975074,0.6343716076,0.5981799389,0.549377285,0.548301246,0.5478739375,0.3904354658,0.3662427709,0.3662427709,0.4613932662,0.4920829573,0.4962384928,0.540799829,0.4556076279,0.5027457049,0.4809786297,0.5971352244,0.7216434463,0.749417725]
      }
    ],
    plotOptions:
    {
      line: {
        marker: {
          enabled: false,
          symbol: "circle"
        }
      }
    }
  });
});
