function plotBeta(CANVAS) {

	CANVAS.clearCanvas();
	CANVAS.removeLayers();
	
	var G = GG2(CANVAS);
 
	var W = G.W;
	var H = G.H;

	$(CANVAS).attr("width", W);
	$(CANVAS).attr("height", H);
	
	if($('#overlaydist2').prop('checked') == true) {
		plotDist($('#canvas2'), G);

		var thistitle = "Client Threshold Ratios and Poverty Ests. " + "(" + G.state + ")";		
	}
	else thistitle = "Distribution of Client Threshold Ratios";
	
	drawAxes(CANVAS, G)
	drawGrids(CANVAS, G);
	drawTicks(CANVAS, G);
	drawTickLabels(CANVAS, G);
	betaGraph(CANVAS, G);
	drawTitle(CANVAS,G, thistitle);
	drawYTitle(CANVAS, G, "Percent of Clients");
	drawXTitle(CANVAS, G, "Threshold Ratio");
	
	CANVAS.drawLayers();

};

function betaGraph(CANVAS, G) {
	var newx1, newx2, thisy1, thisy2, newy1, newy2, thisy;
	var expa = Math.exp(G.alpha);
	var expb = Math.exp(G.beta);
	var thismax = 0;

/////////////////////////////////////////////////////////////////
// Beta binomial distribution and see if it looks any better
	var BBD = new BetaBinomialDistribution(expa, expb, G.dstep);
	var Z = [];
	var thismax = 0;
	
	for ( var i = 0; i <= G.dstep; i += 1 ) {
		thisy = BBD.density(i);
		if ( thisy > thismax ) thismax = thisy;  
		Z.push(thisy);
	};
	
	if($('#overlaydist2').prop('checked')) G.gymax = 0.30;
	else G.gymax = thismax;
	
	// Plot the line segments
	for ( var i = 0; i <= Z.length; i++ ) {
		new1 = gT ( G.gxmin+i*(G.gxmax-G.gxmin)/G.dstep, G.gymin, G);
		newx1 = new1.X;
		newy1 = new1.Y;
		
		new2 = gT ( G.gxmin+i*(G.gxmax-G.gxmin)/G.dstep, Z[i], G);
		newx2 = new2.X;
		newy2 = new2.Y;

		CANVAS.drawLine({
			  layer:true,
			  name:'Rbbmline' + i,
			  groups: ['Rbnmlines'],
			  strokeStyle: '#00CC00',
			  strokeWidth: 10,
			  x1: newx1, y1: newy1,
			  x2: newx2, y2: newy2
		});	
	};
	// Y-Axis
	var yadj = (G.H*G.gpmax - G.H*G.gpmin)/12;
	CANVAS.drawLine({
		  layer:true,
		  name:'LAxisBB',
		  strokeStyle: '#000',
		  strokeWidth: 2,
		  x1: G.W*G.gpmin, y1: G.H*G.gpmin,
		  x2: G.W*G.gpmin, y2: G.H*G.gpmax
	});
	// Tickmarks
	for (var p=0; p<=12; p++) {
		CANVAS.drawLine({
	  name: 'y2TickBB' + p,
	  layer:true,
	  groups: ['y2TicksBB'],
	  strokeStyle: '#000',
	  strokeWidth: 1,
	  x1: .92*G.W*G.gpmin, y1: G.H*G.gpmin+p*yadj,
	  x2: 1.08*G.W*G.gpmin, y2: G.H*G.gpmin+p*yadj
	  });
	};	
	// Labels
	var thislab = null;
	for (var p=0; p<=12; p++) {
		thislab = G.gymax - G.gymax*p/12;
		thislab = Math.round(thislab*1000)/10;
		CANVAS.drawText({
		  name: 'y2TickLab' + p,
		  layer:true,
		  groups: ['y2TickLabs'],
		  strokeStyle: '#000',
		  strokeWidth: 1,
		  x: 0.9*G.W*G.gpmin, y: G.H*G.gpmin+p*yadj,
		  fontSize: 10,
		  fontFamily: 'Verdana, sans-serif',
		  align: 'right',
		  respectAlign: true,
		  text: thislab + '%'
		});
	};		

}
Array.prototype.sum = function () {
    var total = 0;
    var i = this.length; 

    while (i--) {
        total += this[i];
    }

    return total;
}
