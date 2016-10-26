///////////////////////////////////////////////////////////
// Plots empirical histogram of threshold ratios

function plotDist(CANVAS, G) {

	$(CANVAS).attr("width", G.W);
	$(CANVAS).attr("height", G.H);

	var yadj = (G.H*G.gpmax - G.H*G.gpmin)/12;

	// Y-Axis

	CANVAS.drawLine({
		  layer:true,
		  name:'RAxis',
		  strokeStyle: '#000',
		  strokeWidth: 2,
		  x1: G.W*G.gpmax, y1: G.H*G.gpmin,
		  x2: G.W*G.gpmax, y2: G.H*G.gpmax
	});

	/* Tickmarks */
	for(var p = 0; p <= 12; p++ ) {
		CANVAS.drawLine({
	  name: 'y2Tick' + p,
	  layer:true,
	  groups: ['y2Ticks'],
	  strokeStyle: '#000',
	  strokeWidth: 1,
	  x1: 0.9875*G.W*G.gpmax, y1: G.H*G.gpmin+p*yadj,
	  x2: 1.0125*G.W*G.gpmax, y2: G.H*G.gpmin+p*yadj
	  });
	};	
	
	// Labels
	for( var p = 0; p <= 12; p++ ) {
		CANVAS.drawText({
		  name: 'y2TickLab' + p,
		  layer:true,
		  groups: ['y2TickLabs'],
		  strokeStyle: '#000',
		  strokeWidth: 1,
		  x: 1.02*G.W*G.gpmax, y: G.H*G.gpmin+p*yadj,
		  fontSize: 10,
		  fontFamily: 'Verdana, sans-serif',
		  align: 'left',
		  respectAlign: true,
		  text: (10*(3-(p/4))) + '%'
		});
	};	
	

	// Calculate the rectangles and graph
	graphDataDist(CANVAS, distData(G.state,G.earn), G);
	drawY2Title(CANVAS, G, "Percent of Population (Rectangles)");
	
}

function graphDataDist(CANVAS, data, G) {

	G.gymax = 0.30;
	G.ySlope = (G.H*G.gpmin - G.H*G.gpmax)/(G.gymax - G.gymin);
	G.yInt = G.H*G.gpmax - G.ySlope*G.gymin;

	
	var step = (G.gxmax-G.gxmin)/G.dstep;
	var C1, H, i, flaglower, flagupper, firstH;

	// The first X bin includes those below X-min
	var thisX1 = gT ( G.gxmin, 0, G ).X;
	var thisX2 = gT ( G.gxmin+step, 0, G ).X;
	var thisY = gT ( 0, 0, G ).Y;	
	var Horig = collapse(data,0,parseFloat(G.gxmin+step-0.00001));
	var xc = gT ( parseFloat(G.gxmin + step/2), 0, G ).X;
	if(Horig > 0.3) {
		firstH = 0.30;
		flaglower = 1;
	}
	else {
		firstH = Horig;
		flaglower = 0;
	};
	H = gT ( 0, firstH, G ).Y;
	
	$(CANVAS).drawLine({
		  strokeStyle: '#B2E0E0',
		  strokeWidth: 1,
		  layer: true,
		  name:'preDistLine',
		  x1: thisX1, y1: thisY,
		  x2: thisX1, y2: H,
		  x3: thisX2, y3: H,
		  x4: thisX2, y4: thisY		  
	});
	if(flaglower === 1) {
		$(CANVAS).drawLine({
			  strokeStyle: '#B2E0E0',
			  strokeWidth: 2,
			  strokeDash: [5],
			  layer: true,
			  name:'dd_pre_break',
			  x1: thisX1, y1: H,
			  x2: thisX2, y2: H*1.25	  
		});
		$(CANVAS).drawText({
		  name: 'preDistLab',
		  layer:true,
		  groups: ['distLabs'],
		  strokeStyle: '#000',
		  strokeWidth: 1,
		  x: xc*1.1, y: H+15,
		  fontSize: 10,
		  fontFamily: 'Verdana, sans-serif',
		  text: Math.round(Horig*1000)/10 + '%'
		});
	};
	
	// The last X bin includes those above X-max
	thisX1 = gT ( G.gxmax-step,0, G ).X;
	thisX2 = gT ( G.gxmax, 0, G ).X;
	thisY = gT ( 0, 0, G ).Y;		

	var Horig = collapse( data, G.gxmax, 11 );
	var xc = gT ( parseFloat(G.gxmax - step/2), 0, G ).X;
	if(Horig > 0.3) {
		firstH = 0.30;
		flagupper = 1;
	}
	else {
		firstH = Horig;
		flagupper = 0;
	};
	H = gT ( 0, firstH, G ).Y;

	$(CANVAS).drawLine({
		  strokeStyle: '#B2E0E0',
		  strokeWidth: 1,
		  layer: true,
		  name:'dd_post',
		  x1: thisX1, y1: thisY,
		  x2: thisX1, y2: H,
		  x3: thisX2, y3: H,
		  x4: thisX2, y4: thisY		  
	});
	if(flagupper===1) {
		$(CANVAS).drawLine({
			  strokeStyle: '#B2E0E0',
			  strokeWidth: 2,
			  strokeDash: [5],
			  layer: true,
			  name:'dd_post_break',
			  x1: thisX1, y1: H*1.25,
			  x2: thisX2, y2: H	  
		});
		$(CANVAS).drawText({
		  name: 'postDistLab',
		  layer:true,
		  groups: ['distLabs'],
		  strokeStyle: '#000',
		  strokeWidth: 1,
		  x: xc*0.925, y: H+15,
		  fontSize: 10,
		  fontFamily: 'Verdana, sans-serif',
		  text: Math.round(Horig*1000)/10 + '%'
		});
	
	};	
	
	
	
	// The real bin values
	var g1 = G.gxmin;
	var g2, xc, H, Horig;

	for ( var i = 1; i <= G.dstep; i++ ) {
		g2 = g1 + step;
		thisX1 = gT ( g1, 0, G ).X;
		thisX2 = gT ( g2, 0, G ).X;
		thisY = gT ( 0, 0, G ).Y;
		Horig = collapse( data, g1, g2 - 0.0001 );
		H = gT ( 0, Horig, G ).Y;
		xc = gT ( g1 + step/2, 0, G ).X;
		
		$(CANVAS).drawLine({
		  index:0,
		  strokeStyle: '#C7C7C7',
		  strokeWidth: 1,
		  layer: true,
		  name:'dd' + i,
		  x1: thisX1, y1: thisY,
		  x2: thisX1, y2: H,
		  x3: thisX2, y3: H,
		  x4: thisX2, y4: thisY		  
		});
		$(CANVAS).drawText({
		  name: 'distLab' + i,
		  layer:true,
		  groups: ['distLabs'],
		  strokeStyle: '#646464',
		  strokeWidth: 1,
		  x: xc, y: H-10,
		  fontSize: 10,
		  fontFamily: 'Verdana, sans-serif',
		  text: Math.round(Horig*1000)/10
		});
	g1 += step;
	} 
}

function collapse( data, L, U ) {
	var sump = 0;
	for ( var i = 0; i < data.length; i++ ) {
		if ( data[i][0] >= U || data[i][1] <= L ) { 
			continue; 
		}
		else {
			sump += parseFloat(data[i][2]);
		}
	};
	return sump;
}



