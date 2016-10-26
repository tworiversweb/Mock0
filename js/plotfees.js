function plotFees(CANVAS) {

	CANVAS.clearCanvas();
	CANVAS.removeLayers();

	var G = GG(CANVAS);

	console.log(G);

	$(CANVAS).attr("width", G.W);
	$(CANVAS).attr("height", G.H);

	drawAxes(CANVAS, G)
	drawGrids(CANVAS, G);
	drawTicks(CANVAS, G);
	drawTickLabels(CANVAS, G);

		
	if(G.grval==1) var thistitle = "Empirical Sliding-Scale Fee (" + G.state + ")";
	if(G.grval==2) var thistitle = "Flexible Sliding-Scale Fee ";
	if(G.grval==3) var thistitle = "Empirical (" + G.state + ") " + "and Flexible Sliding-Scale Fees";
	
	drawTitle(CANVAS, G, thistitle);
	drawYTitle(CANVAS, G, "Fees (in units of $" + G.coarse +")");
	drawXTitle(CANVAS, G, "Threshold Ratio");

	if (CANVAS.attr('id') == "canvas4") {
		if( $('input:radio[name=ssopt]:checked').val() == 1 ) graphFees(CANVAS, G, 1);
		if( $('input:radio[name=ssopt]:checked').val() == 2 ) graphFees(CANVAS, G, 2);
	}
	else {
		if( G.grval==1 || G.grval==3 ) graphFees(CANVAS, G, 1);
		if( G.grval==2 || G.grval==3 ) graphFees(CANVAS, G, 2);
	}

	if( $('#showmax1').prop('checked') ) plotMax(CANVAS, G);
	if( $('#showmin1').prop('checked') ) plotMin(CANVAS, G);
	if( $('#showt1').prop('checked') ) plotT(CANVAS, G);
	if( $('#showcustom1').prop('checked') ) plotCustomT(CANVAS, G);	
	if( $('#overlaydist1').prop('checked') == true && CANVAS.attr('id') != "canvas4") plotDist(CANVAS, G);

	CANVAS.drawLayers();
}

function plotMax(CANVAS, G) {
		$(CANVAS).drawLine({
		  layer:true,
		  name:'maxLine',
		  strokeStyle: '#000',
		  strokeWidth: 1,
		  x1: gT ( G.gxmin , 0 , G ).X, y1: gT ( 0 , G.fmax , G ).Y,
		  x2: gT ( G.gxmax , 0 , G ).X, y2: gT ( 0 , G.fmax , G ).Y
		});	
}
function plotMin(CANVAS, G) {
		$(CANVAS).drawLine({
		  layer:true,
		  name:'minLine',
		  strokeStyle: '#000',
		  strokeWidth: 1,
		  x1: gT ( G.gxmin , 0 , G ).X, y1: gT ( 0 , G.fmin , G ).Y,
		  x2: gT ( G.gxmax , 0 , G ).X, y2: gT ( 0 , G.fmin , G ).Y
		});	
}
function plotT(CANVAS, G) {
		if(G.gxmin >= 1 || G.gxmax <= 1) return;
		if(G.grval == 1 || G.grval == 3) {
			
			var ysubtL = feeL(1, G);
			
			if(G.gymax < ysubtL || G.gymin > ysubtL) return;
			
			$(CANVAS).drawLine({
			  layer:true,
			  name:'tLineL',
			  strokeStyle: '#00DD00',
			  strokeWidth: 1,
			  strokeDash: [5],
			  strokeDashOffset: 2,
			  x1: gT ( 1 , 0 , G ).X,       y1: gT ( 0 , G.gymin , G ).Y,
			  x2: gT ( 1 , 0 , G ).X,       y2: gT ( 0 , ysubtL , G ).Y,
			  x3: gT ( G.gxmin , 0 , G ).X, y3: gT ( 0 , ysubtL , G ).Y
			});	
			CANVAS.drawText({
			  name: 'tLabL',
			  layer:true,
			  strokeStyle: '#000',
			  strokeWidth: 1,
			  x: gT ( G.gxmin , 0 , G ).X+5, y: gT ( 0 , ysubtL , G ).Y+10,
			  fontSize: 10,
			  fontFamily: 'Verdana, sans-serif',
			  align: 'left',
			  respectAlign: true,
			  text: '$' + ysubtL
			});
		}
		if(G.grval==2 || G.grval==3) {
			
			var ysubt = feePW(1, G);
			
			if(G.gymax < ysubt || G.gymin > ysubt) return;
			
			$(CANVAS).drawLine({
			  layer:true,
			  name:'tLinePW',
			  strokeStyle: '#000099',
			  strokeWidth: 1,
			  strokeDash: [5],
			  strokeDashOffset: 2,
			  x1: gT ( 1 , 0 , G ).X,       y1: gT ( 0 , G.gymin , G ).Y,
			  x2: gT ( 1 , 0 , G ).X,       y2: gT ( 0 , ysubt , G ).Y,
			  x3: gT ( G.gxmin , 0 , G ).X, y3: gT ( 0 , ysubt , G ).Y
			});	
			CANVAS.drawText({
			  name: 'tLabPW',
			  layer:true,
			  strokeStyle: '#000',
			  strokeWidth: 1,
			  x: gT ( G.gxmin , 0 , G ).X+5, y: gT ( 0 , ysubt , G ).Y-10,
			  fontSize: 10,
			  fontFamily: 'Verdana, sans-serif',
			  align: 'left',
			  respectAlign: true,
			  text: '$' + ysubt
			});
		};
}
function plotCustomT(CANVAS, G) {
			CANVAS.drawText({
			  name: 'customTLabX',
			  layer:true,
			  strokeStyle: '#000',
			  strokeWidth: 2,
			  x: gT ( G.customT , 0 , G ).X, y: gT ( 0 , G.gymin , G ).Y-10,
			  fontSize: 14,
			  fontFamily: 'Verdana, sans-serif',
			  text: G.customT
			});
		if(G.grval==1 || G.grval==3) {
			
			var ysubtL = feeL(G.customT,G);
			
			if(G.gymax < ysubtL || G.gymin > ysubtL) return;
			
			$(CANVAS).drawLine({
			  layer:true,
			  name:'customTLineL',
			  strokeStyle: '#00DD00',
			  strokeWidth: 1,
			  strokeDash: [5],
			  strokeDashOffset: 2,
			  x1: gT ( G.customT , 0 , G ).X,       y1: gT ( 0 , G.gymin , G ).Y,
			  x2: gT ( G.customT , 0 , G ).X,       y2: gT ( 0 , ysubtL , G ).Y,
			  x3: gT ( G.gxmin , 0 , G ).X, y3: gT ( 0 , ysubtL , G ).Y
			});	
			CANVAS.drawText({
			  name: 'customTLabL',
			  layer:true,
			  strokeStyle: '#000',
			  strokeWidth: 1,
			  x: gT ( G.gxmin , 0 , G ).X+5, y: gT ( 0 , ysubtL , G ).Y+10,
			  fontSize: 10,
			  fontFamily: 'Verdana, sans-serif',
			  align: 'left',
			  respectAlign: true,
			  text: currency(ysubtL,G)
			});
			
		}
		if(G.grval==2 || G.grval==3) {
			
			var ysubt = feePW(G.customT, G);
			console.log(G.customT);
			console.log(pw(G.customT, G));
			console.log(feePW(G.customT, G));
			
			if ( G.gymax < ysubt || G.gymin > ysubt ) return;
			
			$(CANVAS).drawLine({
			  layer:true,
			  name:'customTPW',
			  strokeStyle: '#000099',
			  strokeWidth: 1,
			  strokeDash: [5],
			  strokeDashOffset: 2,
			  x1: gT ( G.customT , 0 , G ).X,       y1: gT ( 0 , G.gymin , G ).Y,
			  x2: gT ( G.customT , 0 , G ).X,       y2: gT ( 0 , ysubt , G ).Y,
			  x3: gT ( G.gxmin , 0 , G ).X,         y3: gT ( 0 , ysubt , G ).Y
			});
			CANVAS.drawText({
			  name: 'customTLabPW',
			  layer:true,
			  strokeStyle: '#000',
			  strokeWidth: 1,
			  x: gT ( G.gxmin , 0 , G ).X+5, y: gT ( 0 , ysubt , G ).Y-10,
			  fontSize: 10,
			  fontFamily: 'Verdana, sans-serif',
			  align: 'left',
			  respectAlign: true,
			  text: currency(ysubt)
			});
		};
}
function graphFees(CANVAS, G, WHICH) {

	var newx1, newx2, thisy1, thisy2, newy1, newy2;

	for ( var i = G.gxmin + 0.01; i < G.gxmax; i += 0.01 ) {
		
		newx1 = gT ( i, 0, G ).X;
		newx2 = gT ( i + 0.01, 0, G ).X;
		
		
		if(WHICH==1) {
			thisy1 = feeL(i, G);
			thisy2 = feeL(i + 0.01, G);
		}
		if(WHICH==2) {
			thisy1 = feePW(i, G);
			thisy2 = feePW(i + 0.01, G);
		}
		
		if(thisy1 < G.gymin || thisy1 > G.gymax ) continue;
		
		newy1 = gT ( 0, thisy1, G ).Y;
		newy2 = gT ( 0, thisy2, G ).Y;
		
		CANVAS.drawLine({
			  layer:true,
			  name:'yplot_' + i + '_' + WHICH,
			  groups: ['yplotpoints_' + WHICH],
			  strokeWidth: 3,
			  x1: newx1, y1: newy1,
			  x2: newx2, y2: newy2
		});
	};
	
	CANVAS.setLayerGroup('yplotpoints_1', {
	  strokeStyle: '#00DD00'
	});
	CANVAS.setLayerGroup('yplotpoints_2', {
	  strokeStyle: '#000099'
	});	
}
