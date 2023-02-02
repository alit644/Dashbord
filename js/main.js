
  
var options = {
    chart: {
      type: 'area'
    },
    series: [{
      name: 'sales',
      data: [30,40,60,55,85,91,125]
    }],
    xaxis: {
      categories: [2001,2003,2004,2005,2007, 2008,2009]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();


  options = {
    chart: {
      type: 'bar'
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    series: [{
      data: [{
        x: 'Jan',
        y: 10
      }, {
        x: 'Mar',
        y: 18
      }, {
        x: 'Apr',
        y: 13
      },
      {
        x: 'Jun',
        y: 9
      },
      {
        x: 'Aug',
        y: 5
      },
      {
        x: 'Oct',
        y: 13
      },
      {
        x: 'Dec',
        y: 21
      }]
    }]
  }

  var chart = new ApexCharts(document.querySelector("#rangeBar"), options);
  
  chart.render();
