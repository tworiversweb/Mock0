function GG(CANVAS) {
	var xticks = Number($('#xtick1slider').limitslider("values")[0]-1);
	var yticks = Number($('#ytick1slider').limitslider("values")[0]-1);
	
	var fmin = Number($('#fminmax').limitslider("values")[0]);
	if(fmin==0) fmin=1;
	var fmax = Number($('#fminmax').limitslider("values")[1]);

	var gxmax = Number($('#xminmax1').limitslider("values")[1]);
	var gxmin = Number($('#xminmax1').limitslider("values")[0]);
	var D =  Number($('#D').limitslider("values"))/100;
	var customT = $('#custom1').val();

	var gwidth = Number($('#g1size').limitslider("values")[0])/100;
	var gheight = Number($('#g1size').limitslider("values")[1])/100;
	
	var gxgrid = $('#xgridcheck1').prop('checked');
	var gygrid = $('#ygridcheck1').prop('checked');
	var state = $('#statemenu').val();
	var earn = $('#distearn1').prop('checked');
	var p125 = $('#p125check1').prop('checked');
	
	if($('#yautoscale1').prop('checked')==true) {
		var gymax = Math.round(fmax*1.05/10)*10;
		var gymin = Math.round(.90*.10/fmin)*10;
	}
	else {
		var gymax = Number($('#yminmax1').limitslider("values")[1]);
		var gymin = Number($('#yminmax1').limitslider("values")[0]);
	};
	
	var gpmax = Number($('#gpmax1').val());
	var gpmin = Number($('#gpmin1').val());
	
	var W = CANVAS.parent().width()*gwidth;
	var H = CANVAS.parent().width()*gheight;
	
	var xSlope = (W*gpmax - W*gpmin)/(gxmax - gxmin);
	var xInt = W*gpmin - xSlope*gxmin;

	var ySlope = (H*gpmin - H*gpmax)/(gymax - gymin);
	var yInt = H*gpmax - ySlope*gymin;

	
	var dstep = Number($('#distbins1').limitslider("values"));
	var tL = Number($('#lowerupper').limitslider("values")[0]);
	var tU = Number($('#lowerupper').limitslider("values")[1]);
	var u = Math.pow(Number($('#uv').limitslider("values")[1]),2);
	var v = Math.pow(Number($('#uv').limitslider("values")[0]),2);
	var coarse = $('#coarsenmenu').val();
	var grval = $('input:radio[name=gtypebutton]:checked').val();
	if(grval == null || grval == 0) grval = 2;

	var B = betaLookup(state, earn, p125);
	console.log(B);
	
	var G = {xticks:xticks, yticks:yticks, fmin:fmin, fmax:fmax, gxmax:gxmax, gxmin:gxmin, gymax:gymax, gymin:gymin, gpmax:gpmax, gpmin:gpmin, dstep:dstep, tL:tL, tU:tU, u:u, v:v, coarse:coarse, grval:grval, gygrid:gygrid, gxgrid:gxgrid, state:state, earn:earn, p125:p125, gwidth:gwidth, gheight:gheight, D:D, customT:customT, k:B.k, g:B.g, mu:B.mu, W:W, H:H, xSlope:xSlope, xInt:xInt, ySlope:ySlope, yInt:yInt};
	
	return G;

};

function GG2(CANVAS) {

	var xticks = $('#xtick2slider').limitslider("values")-1;
	var yticks = 12;
	var gxmax = Number($('#xminmax2').limitslider("values"));
	var gxmin = 0;
	var gymin = 0;
	var gymax = 0.30;

	var fmin = Number($('#fminmax').limitslider("values")[0]);
	if(fmin==0) fmin=1;
	var fmax = Number($('#fminmax').limitslider("values")[1]);
	var state = $('#statemenu').val();
	var earn = $('#distearn2').prop('checked');

	var coarse = $('#coarsenmenu').val();

	var gwidth = Number($('#g2size').limitslider("values")[0])/100;
	var gheight = Number($('#g2size').limitslider("values")[1])/100;

	var W = CANVAS.parent().width()*gwidth;
	var H = CANVAS.parent().width()*gheight;
		
	var gpmax = Number($('#gpmax2').val());
	var gpmin = Number($('#gpmin2').val());

	var xSlope = (W*gpmax - W*gpmin)/(gxmax - gxmin);
	var xInt = W*gpmin - xSlope*gxmin;

	var ySlope = (H*gpmin - H*gpmax)/(gymax - gymin);
	var yInt = H*gpmax - ySlope*gymin;
	
	var dstep = Number($('#distbins2').limitslider("values"));
	var alpha =  Number($('#myab').limitslider("values")[0]);
	var beta =  Number($('#myab').limitslider("values")[1]);
	var grval = $('input:radio[name=gtypebutton]:checked').val();
	
	
	var G = {xticks:xticks, yticks:yticks, gxmax:gxmax, gxmin:gxmin, gymax:gymax, gymin:gymin, gpmax:gpmax, gpmin:gpmin, dstep:dstep, fmin:fmin, fmax:fmax, alpha:alpha, beta:beta, coarse:coarse, grval:grval, state:state, earn:earn, gwidth:gwidth, gheight:gheight, W:W, H:H, xSlope:xSlope, xInt:xInt, ySlope:ySlope, yInt:yInt};
	
	return G;
	
};
function GG3(CANVAS) {

	var xticks = Number($('#xtick3slider').limitslider("values")[0]-1);
	var yticks = Number($('#ytick3slider').limitslider("values")[0]-1);
	var gxmax = Number($('#xminmax3').limitslider("values")[1]);
	var gxmin = Number($('#xminmax3').limitslider("values")[0]);
	var fmin = Number($('#fminmax').limitslider("values")[0]);
	if(fmin==0) fmin=1;
	var fmax = Number($('#fminmax').limitslider("values")[1]);
	var coarse = $('#coarsenmenu').val();
	var state = $('#statemenu').val();
	
	if($('#yautoscale3').prop('checked')==true) {
	
		var gymax = Math.round(fmax*gxmax*1.1/10000)*10000;
		var gymin = Math.round(fmin*gxmin*.9/10000)*10000;
	
	}
	else {
		
		var gymax = Number($('#yminmax3').limitslider("values")[1])*1000;
		var gymin = Number($('#yminmax3').limitslider("values")[0])*1000;
	};
	var gxgrid = $('#xgridcheck3').prop('checked');
	var gygrid = $('#ygridcheck3').prop('checked');
	var earn = $('#distearn1').prop('checked');
	var p125 = $('#p125check1').prop('checked');
	var gwidth = Number($('#g3size').limitslider("values")[0])/100;
	var gheight = Number($('#g3size').limitslider("values")[1])/100;

	var gpmax = Number($('#gpmax3').val());
	var gpmin = Number($('#gpmin3').val());
	
	var W = CANVAS.parent().width()*gwidth;
	var H = CANVAS.parent().width()*gheight;;

	var xSlope = (W*gpmax - W*gpmin)/(gxmax - gxmin);
	var xInt = W*gpmin - xSlope*gxmin;

	var ySlope = (H*gpmin - H*gpmax)/(gymax - gymin);
	var yInt = H*gpmax - ySlope*gymin;

	var dstep = Number($('#distbins2').limitslider("values"));


	var alpha =  Number($('#myab').limitslider("values")[0]);
	var beta =  Number($('#myab').limitslider("values")[1]);
	var grval = $('input:radio[name=gtypebutton]:checked').val();
	
	var G = {xticks:xticks, yticks:yticks, gxmax:gxmax, gxmin:gxmin, gymax:gymax, gymin:gymin, gpmax:gpmax, gpmin:gpmin, fmin:fmin, fmax:fmax, alpha:alpha, beta:beta, coarse:coarse, grval:grval, gygrid:gygrid, gxgrid:gxgrid, state:state, earn:earn, p125:p125, gwidth:gwidth, gheight:gheight, dstep:dstep, W:W, H:H, xSlope:xSlope, xInt:xInt, ySlope:ySlope, yInt:yInt};
	return G;
	
};
