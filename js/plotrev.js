
function plotRev(CANVAS) {
	CANVAS.clearCanvas();
	CANVAS.removeLayers();
	var G = GG3(CANVAS);
	$(CANVAS).attr("width", G.W);
	$(CANVAS).attr("height", G.H);

	drawAxes(CANVAS, G)
	drawGrids(CANVAS, G);
	drawTicks(CANVAS, G);
	drawTickLabels(CANVAS, G);
	revenueSim(CANVAS,G);
	drawTitle(CANVAS, G, "Simulated Revenue for Sliding Scale Fees")
	drawYTitle(CANVAS, G, "Total Revenue ($1,000s)");
	drawXTitle(CANVAS, G, "Client Hours Billed");
	CANVAS.drawLayers();
};

function revenueSim(CANVAS, G) {

	var Z = [];
	GOrig = GG(CANVAS);
	//// DRAW T-VALUES FROM BETA DISTRIBUTION
	var expa = Math.exp(G.alpha);
	var expb = Math.exp(G.beta);

	var BX = betaArray(expa, expb, G);

	//// LOGISTIC


	if (G.grval==1 || G.grval==3) {

		var f2000L = 0;
		for ( var i = 0; i < 2000; i++ ) {
			f2000L += feeL(BX[i],GOrig);
		};

		var fi_my = G.gymin*2000/f2000L;
		var fi_My = G.gymax*2000/f2000L;
		var f_mx = G.gxmin*f2000L/2000;
		var f_Mx = G.gxmax*f2000L/2000;
		
		var C = getCoords(f_mx, f_Mx, fi_my, fi_My, G);

		new1 = gT ( C.x0, C.y0, G);
		newx1 = new1.X;
		newy1 = new1.Y;
		
		new2 = gT ( C.x1, C.y1, G);
		newx2 = new2.X;
		newy2 = new2.Y;
		
		CANVAS.drawLine({
			  layer:true,
			  name:'betaLineLogistic',
			  strokeStyle: '#00DD00',
			  strokeWidth: 2,
			  x1: newx1, y1: newy1,
			  x2: newx2, y2: newy2
		});


		CANVAS.drawText({
		  name: 'revEstValL',
		  layer:true,
		  strokeStyle: '#00DD00',
		  strokeWidth: 1,
		  x: newx2*1.05, y: newy2,
		  fontSize:10,
		  fontFamily: 'Verdana, sans-serif',
		  align:'left', 
		  text: '$' + Math.round(f_Mx/1000) + 'k \n(at ' + G.gxmax + ' hrs)'
		  });
	};		

	//// PIECEWISE
	if (G.grval==2 || G.grval==3) {

		var f2000PW = 0;
		for (var i = 0; i < 2000; i++) {
			f2000PW += feePW(BX[i],GOrig);
		};

		var fi_my = G.gymin*2000/f2000PW;
		var fi_My = G.gymax*2000/f2000PW;
		var f_mx = G.gxmin*f2000PW/2000;
		var f_Mx = G.gxmax*f2000PW/2000;
		
		var C = getCoords(f_mx, f_Mx, fi_my, fi_My, G);
		
		new1 = gT ( C.x0, C.y0, G);
		newx1 = new1.X;
		newy1 = new1.Y;
		
		new2 = gT ( C.x1, C.y1, G);
		newx2 = new2.X;
		newy2 = new2.Y;
			
		CANVAS.drawLine({
			  layer:true,
			  name:'betaLinePW',
			  strokeStyle: '#000099',
			  strokeWidth: 2,
			  x1: newx1, y1: newy1,
			  x2: newx2, y2: newy2
		});


		CANVAS.drawText({
		  name: 'revEstValPW',
		  layer:true,
		  strokeStyle: '#000099',
		  strokeWidth: 1,
		  x: newx2*1.05, y: newy2,
		  fontSize:10,
		  align:'left',
		  fontFamily: 'Verdana, sans-serif',
		  text: '$' + Math.round(f_Mx/1000) + 'k \n(at ' + G.gxmax + ' hrs)'
		  });
	};	
	
	//// DRAW MAXIMUM AND MINIMUM FEES

		var fi_my = G.gymin/GOrig.fmax;
		var fi_My = G.gymax/GOrig.fmax;
		var f_mx = G.gxmin*GOrig.fmax;
		var f_Mx = G.gxmax*GOrig.fmax;
		
		var C = getCoords(f_mx, f_Mx, fi_my, fi_My, G);

		new1 = gT ( C.x0, C.y0, G);
		newx1 = new1.X;
		newy1 = new1.Y;
		
		new2 = gT ( C.x1, C.y1, G);
		newx2 = new2.X;
		newy2 = new2.Y;

		CANVAS.drawLine({
			  layer:true,
			  name:'maxRev',
			  strokeStyle: '#FF5050',
			  strokeWidth: 2,
			  x1: newx1, y1: newy1,
			  x2: newx2, y2: newy2
			});
			CANVAS.drawText({
			  name: 'maxVal',
			  layer:true,
			  strokeStyle: '#FF5050',
			  strokeWidth: 1,
			  x: newx2*1.05, y: newy2,
			  fontSize:10,
			  align:'left',
			  fontFamily: 'Verdana, sans-serif',
			  text: '$' + Math.round(f_Mx/1000) + 'k \n(at ' + G.gxmax + ' hrs)'
			  });

			// Because the equations change a minimum fee of 0 to 1, we need fresh xmin
			var thismin = Number($('#fminmax').limitslider("values")[0]);
			var fi_my = G.gymin/thismin;
			var fi_My = G.gymax/thismin;
			var f_mx = G.gxmin*thismin;
			var f_Mx = G.gxmax*thismin;
			
			var C = getCoords(f_mx, f_Mx, fi_my, fi_My, G);

			new1 = gT ( C.x0, C.y0, G);
			newx1 = new1.X;
			newy1 = new1.Y;
			
			new2 = gT ( C.x1, C.y1, G);
			newx2 = new2.X;
			newy2 = new2.Y;			  
			  
			CANVAS.drawLine({
			  layer:true,
			  name:'revMin',
			  strokeStyle: '#FF5050',
			  strokeWidth: 2,
			  x1: newx1, y1: newy1,
			  x2: newx2, y2: newy2
			});
			
			CANVAS.drawText({
			  name: 'minVal',
			  layer:true,
			  strokeStyle: '#FF5050',
			  strokeWidth: 1,
			  x: newx2*1.05, y: newy2,
			  fontSize:10,
			  align:'left',
			  fontFamily: 'Verdana, sans-serif',
			  text: '$' + Math.round(f_Mx/1000) + 'k \n(at ' + G.gxmax + ' hrs)'
			});

};
