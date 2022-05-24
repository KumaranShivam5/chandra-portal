var source = new Vue({
	el: '#source-js-area',

	data: {
	},

	methods: {

        run_plot() {
            Plotly.d3.csv('csv/agn-hgc-104.csv', function (err, rows) {
            var fr=[]
            var fl= []
            var mod=[]
            for(i=0;i<rows.length;i++) {
                fr.push(parseFloat(rows[i]['Frequency']));
                fl.push(parseFloat(rows[i]['Flux Density']));
            }
      
              //Define Data
            console.log(fr, fl)
            var tracef ={
                x:fr,
                y:fl,
                mode:"lines",
                name:"f",
                line: {color: '#ff0000', width: 2, shape: 'spline'}
      
            } ;
            var data = [tracef];
          
           //Define Layout
            var layout = {
                margin: {
                    l: 80,
                    r: 60,
                    b: 50,
                    t: 50,
                    pad: 4
                },
                grid:{rows:1, columns:1,width:5,pattern: 'independent',roworder: ' top to bottom', ygap:0.2},
                xaxis: { showgrid: false, showline:true, type:'log',
                     mirror: true, title: "Frequency"},
                yaxis: {title: "Flux Density", showgrid: false , type:'log',
                showline:true, mirror: true}, 
                font:{family:"Open Sans", color:"#222222"},
                plot_bgcolor:"white",
                title: "Spectral Energy Distribution",
                paper_bgcolor:"white"
            };
          
          // Display using Plotly
          Plotly.newPlot("myPlot", data, layout);
          });
      
        }
	},

	created() {

	},

	mounted() {
        this.run_plot();
		
	},

	updated() {
        
	},

});