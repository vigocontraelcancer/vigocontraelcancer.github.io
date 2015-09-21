var doughnutData = [
        {
          value: 16834.91,
          color: "#2ecc71",
          highlight: "#eee",
          label: "Ingresos"
        },
        {
          value: 7692.25,
          color: "#e74c3c",
          highlight: "#eee",
          label: "Gastos"
        },
        {
          value: 9142.66,
          color: "#3498db",
          highlight: "#eee",
          label: "Donado"
        }

      ];

      window.onload = function(){
        var ctx = document.getElementById("chart-area").getContext("2d");
        window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {


          responsive : true,
          maintainAspectRatio: true,
          animationSteps: 5,
          animationEasing: "easeOutQuart",
          animateScale: true,
          segmentShowStroke : false,
          segmentStrokeColor : "#fff",
          segmentStrokeWidth : 2,
          percentageInnerCutout : 60,
          animationSteps : 100,
          animateRotate : true,
          animateScale : true,

          showTooltips: true,
          tooltipFillColor: "rgba(0,0,0,0.8)",
          tooltipFontFamily: "'HelveticaNeueLTStd-UltLt', 'Helvetica', 'Arial', sans-serif",
          tooltipFontSize: 18,
          tooltipTitleFontColor: "#fff",

          tooltipYPadding: 12,
          tooltipXPadding: 12,
          tooltipCaretSize: 8,
          tooltipCornerRadius: 0,
          tooltipXOffset: 10,

          tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>€",



          legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
        });
      };

      $('a').click(function(){
        myDoughnut.segments[1].value = 10;
        myDoughnut.segments[2].value = 50;
        /*myDoughnut.segments[3].value = 50;*/

        myDoughnutChart.update();
      });