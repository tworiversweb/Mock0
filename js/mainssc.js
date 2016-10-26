$(document).ready(function(){

	$('#fminmax').limitslider({
        values:     [25, 320],
        gap:        0,
		min:		0,
		max:		1000,
		change:		function() {drawPlots(1);},
        step:       5,
        label:       function (value) {return '$' + value;},
        showRanges: true,
        ranges:     [false, true, false]
   });
	$('#g1size').limitslider({
        values:     [50,50],
		min:		25,
		max:		100,
		change:		function() { drawPlots(1); },
        step:       5,
        label:      true,
        showRanges: true,
        ranges:     [true, false, true]
   }); 
	$('#g2size').limitslider({
        values:     [50,50],
		min:		25,
		max:		100,
		change:		function() { drawPlots(2); },
        step:       5,
        label:      true,
        showRanges: true,
        ranges:     [true, false, true]
   });	
   $('#g3size').limitslider({
        values:     [50,50],
		min:		25,
		max:		100,
		change:		function() { drawPlots(3); },
        step:       5,
        label:      true,
        showRanges: true,
        ranges:     [true, false, true]
   });   

	$('#xminmax1').limitslider({
        values:     [0, 4],
        gap:        0,
		min:		0,
		max:		5,
 		change:		function() {drawPlots(1);},
        step:       .05,
        label:      true,
        showRanges: true,
        ranges:     [false, true,false]
   });
   	$('#xminmax2').limitslider({
        values:     [4],
        gap:        0,
		min:		0.25,
		max:		5,
 		change:		function() {drawPlots(2);},
        step:       .05,
        label:      true,
        showRanges: true
   });
    $('#xminmax3').limitslider({
         values:    [0, 2000],
        gap:        0,
		min:		0,
		max:		2000,
 		change:		function() {drawPlots(3);},
        step:       100,
        label:      true,
        showRanges: true,
        ranges:     [false, true,false]
   }); 

	$('#yminmax1').limitslider({
        values:     [0, 350],
        gap:        0,
		min:		0,
		max:		1000,
		change:		function() {drawPlots(1);},
        step:       5,
        label:      true,
        showRanges: true,
        ranges:     [false, true, false]
   });
	$('#yminmax3').limitslider({
        values:     [0, 1000],
        gap:        0,
		min:		0,
		max:		1000,
		change:		function() {drawPlots(3);},
        step:       10,
        label:       function (value) {
						if(value==1000) return '$1m';
                        else return '$' + value + 'k';
                    },
        showRanges: true,
        ranges:     [false, true,false]
   });	
   $('#distbins1').limitslider({
        values:     [10],
		min:		1,
		max:		20,
		change:		function() {drawPlots(1);},
        step:       1,
        label:      true,
        showRanges: true
   });
	$('#distbins2').limitslider({
        values:     [10],
		min:		1,
		max:		20,
		change:		function() {drawPlots(2);},
        step:       1,
        label:      true,
        showRanges: true
   });	   
	$('#xtick1slider').limitslider({
        values:      [5],
		min:		1,
		max:		20,
		change:		function() {drawPlots(1);},
        step:       1,
		showRanges: true,
        label:      true
   });
	$('#xtick2slider').limitslider({
        values:      [5],
		min:		1,
		max:		20,
		change:		function() {drawPlots(2);},
        step:       1,
		showRanges: true,
        label:      true
   });
  	$('#xtick3slider').limitslider({
        values:      [5],
		min:		1,
		max:		20,
		change:		function() {drawPlots(3);},
        step:       1,
		showRanges: true,
        label:      true
   }); 
   $('#ytick1slider').limitslider({
        values:      [5],
		min:		1,
		max:		20,
		change:		function() {drawPlots(1);},
        step:       1,
		showRanges: true,
        label:      true
   });	
   $('#ytick3slider').limitslider({
        values:      [5],
		min:		1,
		max:		20,
		change:		function() {drawPlots(3);},
        step:       1,
		showRanges: true,
        label:      true
   });
   	$('#D').limitslider({
        values:     [40],
		min:		0,
		max:		100,
		change:		function() {drawPlots(1);},
        step:       1,
		label:	    true,
        showRanges: true
   }); 
   	$('#uv').limitslider({
        values:     [0, 0],
		min:		0,
		max:		10,
		change:		function() {drawPlots(1);},
        step:       1,
		title:		function (value) {
                        return 'Currently set to '+value;
                    },
        label:		true,
        showRanges: true
   }); 
  	$('#lowerupper').limitslider({
        values:     [0.4, 2],
        gap:        0,
		min:		0,
		max:		5,
		change:		function() {drawPlots(1);},
        step:       0.05,
        label:      true,
        showRanges: true,
        ranges:     [false, true, false]
   });   
  	$('#myab').limitslider({
       values:     [-0.5, -1],
        left:       -5,
        right:      5,
        min:		-5,
        max:		5,
        step:       0.1,
		change:		function() {drawPlots(2);},
		title:		function (value) {
                        return 'Currently set to '+value;
                    },
        label:		true,
        showRanges: true,
        ranges:     [true, false, true]
   });  	 

	// Create menu for the MSAs
	var spdata, select, i, option;
	statelist = stateList();

	for ( i = 0; i < statelist.length; i += 1 ) {
		$('#stateincmenu').append('<option class = "customoption">' + statelist[i][0] + '</option>');
		$('#statemenu').append('<option class = "customoption">' + statelist[i][0] + '</option>');
	};
	$('#stateincmenu').val( "The United States");
	$('#msaincmenu').append('<option class = "customoption">The United States</option>');
	
	//////////////////////////////////////////////////////////////////////////////////////
	// ATTACH EVENT LISTENERS
	
	// RESIZE WINDOW
	
	$(window).on('resize', function() {
			drawPlots(1);
	 });
	

			
	 // GENERAL input change function
	$('#psscfoptions').change(function() {
		drawPlots(1);
	});	 
	$('#prevclientdata').change(function() {
		drawPlots(2);
	});
	$('#prevresults').change(function() {
		drawPlots(3);
	});
	$('#pprint').change(function() {
		myprint();
	});



	// MENU CLICKING
	$('#cssmenu a').each(function() {
		$(this).click(function () {
			$('.pagehead').hide();
			var id = $(this).attr('id');
			$('#p' + id).show();
		});
	});
	
	$('#explain').click(function() {
		$('#explainme').html(explainhtml());
		$('#pdetail').show();
	});
	$('#more').click(function() {
		$('#pmore').show();
	});
	$('#faqs').click(function() {
		$('#faqsdiv').show();
	});

	$('#sscfoptions').click(function() {

		// If threshold value is zero, do not draw it on graph
		var tr = strip($('#gtotal'));
		if ( tr <= 0 ) $('#showcustom1').prop('checked',false);
		else $('#showcustom1').prop('checked',true);

		// Create the selector
		$('#threshselect option').remove();
		$('#threshselect').append("<option value='1'>100% of the Federal Poverty Guideline</option>");
		$('#threshselect').append("<option value='2'>100% of the Federal Poverty Threshold</option>");
		$('#threshselect').append("<option value='3'>100% of the Supplemental Poverty Threshold</option>");
		if ( strip($('#custthresh')) != 0) 	$('#threshselect').append("<option value='4'>100% of a Custom Poverty Threshold</option>");
		if( $('#custompct').val() != null &&  $('#custompct').val() != 0)	{
			$('#threshselect').append("<option value='5'>" + Math.round(strip($('#custompct'))*100) + "% of the Federal Poverty Guideline</option>");			
			$('#threshselect').append("<option value='6'>" + Math.round(strip($('#custompct'))*100) + "% of the Federal Poverty Threshold</option>");			
			$('#threshselect').append("<option value='7'>" + Math.round(strip($('#custompct'))*100) + "% of the Supplemental Poverty Threshold</option>");			
			if ( strip($('#custthresh')) != 0) $('#threshselect').append("<option value='8'>" + Math.round(strip($('#custompct'))*100) + "% of a Custom Poverty Threshold</option>");			
		}

		// Set the custom value to the supplemental poverty rate
		$('#threshselect').val(3).change();
	});


	$('#threshselect').change(function() {
		if ( $(this).val() == 1) $('#custom1').val($('#opgtr').val());
		if ( $(this).val() == 2) $('#custom1').val($('#opttr').val());
		if ( $(this).val() == 3) $('#custom1').val($('#supttr').val());
		if ( $(this).val() == 4) $('#custom1').val($('#cttr').val());
		if ( $(this).val() == 5) $('#custom1').val($('#aopgtr').val());
		if ( $(this).val() == 6) $('#custom1').val($('#aopttr').val());
		if ( $(this).val() == 7) $('#custom1').val($('#asupttr').val());
		if ( $(this).val() == 8) $('#custom1').val($('#acttr').val());
		if ( $(this).val() == 4 || $(this).val() == 8 ) {
			$('#sourcediv').show();
		}
		else {
			$('#sourcediv').hide();			
		};
	});

	$('#overlaydist1').change(function() {
		showHide('#overlaydist1','.bins1','hide');
	});
	$('#overlaydist2').change(function() {
		showHide('#overlaydist2','.bins2','hide');
	});
	$('#yautoscale1').change(function() {
		showHide('#yautoscale1','.ymm','show');
	});
	$('#yautoscale3').change(function() {
		showHide('#yautoscale3','.yauto3','show');
	});

	
	$('#wages1, #hours1, #wages2, #hours2, #wages3, #hours3, #wages4, #hours4, #wmenu1, #wmenu2, #wmenu3, #wmenu4, #ssim, #ssia, #pensionm, #pensiona, #spousalm, #spousala, #vetm, #veta, #rentm, #renta, #divintm, #divinta, #ssda, #ssdm, #unempm, #unempa, #wcm, #wca, #csm, #csa, #tanfm, #tanfa, #other1m, #other1a, #other2m, #other2a, #other3m, #other3a').change(function() {
		$(this).annualize();
		povCompute();
	});
	
	$('#adults, #elderly, #children').on( "change",function() { povCompute(); });
	
	$('#reducecosts').change(function() {
		$(this).val(currency(strip($('#reducecosts'))));
		povCompute();
	})

	$(':radio').change(function() {
		povCompute();
	});
	$('#custompct').change(function() {
		$(this).val($('#custompct').val() + "%");
		povCompute();
	});
	$('#custthresh').change(function() {
		var C = strip($('#custthresh'));
		var I = $('#custyear').val();
		if (I != 0 && I != null && I != "Year") C = inflate(C, I);
		C = Math.round(C);
		$('#custthresh').val(currency(C));
		if ($(this).val() != null && $(this).val() != 0 ) $('#custdesc').show();
		else $('#custdesc').hide();
		povCompute();
	});
	$('#custyear').change(function() {
		$('#custthresh').val(currency(0));
		povCompute();
	});


	// FAQs

	$('.question').each(function() {
		var thisstring = $(this).attr('id');
		var N =  thisstring.indexOf("_") + 1;
		var num =  thisstring.substr(N);
		$('#q_' + num).click( function() {
			$('.answer').hide();
			$('#ans_' + num).show();
		});
	});
	
	// Select Menus

	$('#coarsenmenu').each(function() {
		$(this).selectmenu({
			change: function() { drawPlots(1); }
		})
	});
	
	$('#stateincmenu').change(function () {
	    $('#msaincmenu').empty();
		if($('#stateincmenu').val() == "The United States") {
			$('#msaincmenu').val("The United States");
			$('#msaincmenu').hide();
		}
		else {
			$('#msaincmenu').show();
		};
	    var thisstate = stateLookUp($('#stateincmenu').val());
	    spdata = spData(thisstate);
	    for (i = 0; i < spdata.length; i += 1) {
	        $('#msaincmenu').append('<option class = "customoption">' + spdata[i][0] + '</option>');
	    }
		$('#statemenu').val($('#stateincmenu').val()).selectmenu('refresh', true);
	});
	
	$('#stateincmenu, #msaincmenu').change(function() { povCompute(); });

	$('input:radio[name=ssopt]').change(function() {
		var RV = $('input:radio[name=ssopt]:checked').val();
		if ( RV == 1 ) {
			$('.lequation').show();
			$('.pwequation').hide();
		}
		if ( RV == 2 ) {
			$('.pwequation').show();
			$('.lequation').hide();
		}

	});

	$('input:radio[name=gtypebutton]').change(function() {
		var GV = $('input:radio[name=gtypebutton]:checked').val();
		if(GV == 1 || GV == 3) {
			$('#incfeesdiv').show();
			$('.lequation').show();
		}
		else {
			$('#incfeesdiv').hide();
			$('.lequation').hide();
		};
		if(GV == 2 || GV == 3) {
			$('#flexiblediv').show();
			$('.pwequation').show();
			$("input[name=ssopt][value=2]").prop('checked', true).change();
		}
		else {
			$('#flexiblediv').hide();
			$('.pwequation').hide();
			$("input[name=ssopt][value=1]").prop('checked', true).change();
		};
	});

	$('#showtablebutton').click(function() { 

		var fL, fPW, iR, pctout, pw, l;
		var pctile = 0;

		$('#feetable tr').remove();

		$('#feetable').append("<tr><th>Threshold Ratio</th><th>Poverty Percentile</th><th>Piecewise (Flexible) Fee</th><th>Logistic (Empirical) Fee</th></tr>");

		var G = GG($('#canvas1'));
		var D = distData(G.state,G.earn);

		pctile = collapse(D,0,G.customT-0.00001);
		pctout = numeral(pctile).format('(0.0 %)');
		iR = numeral(Math.round(G.customT*100)/100).format('0.00');
		pw = feePW(iR, G);
		l = feeL(iR, G);
		if (pw == 1) fPW = '$0.00';
		else fPW = currency(pw);
		fL = currency(l);

		$('#feetable').append("<tr class='boldrow'><td> (Custom: " + iR + ")</td><td>" + pctout + "</td><td>" + fPW + "</td><td>" + fL + "</td></tr>");
		for ( var i = G.gxmin; i <= G.gxmax; i += 0.05 ) {

			pctile = collapse(D,0,i-0.00001);
			iR = numeral(Math.round(i*100)/100).format('0.00');
			pw = feePW(iR, G);
			l = feeL(iR, G);
			// Must handle the weirdness where 0 = $1 for computation purposes
			if (pw == 1) fPW = '$0.00';
			else fPW = currency(pw);
			fL = currency(l);
			pctout = numeral(pctile).format('(0.0 %)');
			if (Math.round(i*100)/100 == 1) {
				$('#feetable').append("<tr class='boldrow'><td> " + iR + "</td><td>" + pctout + "</td><td>" + fPW + "</td><td>" + fL + "</td></tr>");
			}
			else {
				$('#feetable').append("<tr><td>" + iR + "</td><td>" + pctout + "</td><td>" + fPW + "</td><td>" + fL + "</td></tr>");
			};
		};
	});

	$('input:radio[name=gtypebutton]:checked').val(2).change();



});

/////////////// FUNCTIONS

function showHide (check,element,sh) {
	if(sh== "Hide"||sh== "hide") {
		if($(check).prop('checked')==true) {
			$(element).show();
		}
		else {
			$(element).hide();
		}
	};
	if(sh== "Show"||sh== "show") {
		if($(check).prop('checked')==true) {
			$(element).hide();
		}
		else {
			$(element).show();
		}
	}
}
function stateLookUp (TEXT) {
	var sl = stateList();
	for (var i = 0 ; i < sl.length ; i += 1 ) {
		if ( sl[i][0] == TEXT) {
			return sl[i][1];
		};
	};
}

$.fn.myTW = function() {
	$(this).css('width',$(this).textWidth());
}
// Calculate width of text from DOM element or string. By Phil Freo <https://philfreo.com>
$.fn.textWidth = function(text, font) {
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
    $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
    return $.fn.textWidth.fakeEl.width();
};

strip = function(INPUT) {
	var O = numeral().unformat(INPUT.val());
	return O;
};

currency = function(C) {
	var X = numeral().unformat(C);
	if (X == 0) return null;
	else return numeral(X).format('$0,0.00');
};
currencyOnes = function(C) {
	var X = numeral().unformat(C);
	if (X == 0) return null;
	else return numeral(X).format('$ 0,0[.]00');
};
commas = function(C) {
	var X = numeral().unformat(C);
	if (X == 0) return null;
	return numeral(X).format('0,0');
};
genTotals = function() {
	var rsum = 0, esum = 0, isum = 0;
	var sumArray = ["wtotal1", "wtotal2", "wtotal3", "wtotal4", "ssia", "pensiona", "spousala", "veta", "renta", "divinta", "ssda", "unempa", "wca", "csa", "tanfa", "other1a", "other2a", "other3a"];
	jQuery.each( sumArray, function( i, val ) {
		
		lastchar = val.slice(-1);
		if(lastchar == 1 || lastchar == 2 || lastchar == 3 || lastchar == 4) {
			thisname = val;
		}
		else thisname = val.slice(0,-1);
		
		thisradio = $('input:radio[name=' + thisname + 'radio]:checked').val();
		
		// Grand Total
		rsum += strip($( "#" + val ));
		
		// Excluded Total
		if(thisradio==0) {
			esum += strip($( "#" + val ));
		};
		
		// Included Total
		if(thisradio==1) {
			isum += strip($( "#" + val ));
		};
	});
	var remove = strip($('#reducecosts'));

	// Also remove extra costs user enters
	$('#etotal').val(currency(esum - remove));
	$('#itotal').val(currency(isum - remove));
	$('#gtotal').val(currency(rsum - remove));
	
};

$.fn.annualize = function() {
	var INPUT =  $(this).attr('id');
	var thisval = strip(this);
	var lastchar = INPUT.slice(-1);
	var menuval, C, H, W;
	if(lastchar == "1" || lastchar == "2" || lastchar == "3" || lastchar == "4") {
		menuval = $('#wmenu' + lastchar).val();
		
		
		H = strip($('#hours' + lastchar));
		W = strip($('#wages' + lastchar));
		
		if(menuval == 1) {
			$('#hours' + lastchar).show();
			$('#wunit').html("Hours / Week");
			$('#wunit').show();
			C = W * H * 52;
		}
		else if(menuval == 2) {
			$('#hours' + lastchar).show();
			$('#wunit').html("Weeks / Year");
			$('#wunit').show();
			C = W * H;
		}
		else if(menuval == 3) {
			$('#hours' + lastchar).show();
			$('#wunit').html("Months / Year");
			$('#wunit').show();
			C = W * H;
		}
		else {
			$('#hours' + lastchar).hide();
			$('#wunit').hide();
			C = W;
		};

		
		$('#hours' + lastchar).val(commas(H));
		$('#wages' + lastchar).val(currency(W));
		$('#wtotal' + lastchar).val(currency(C));		
	}
	else if(lastchar == "a") {
		C = thisval / 12;
		C = currency(C);
		$('#' + INPUT.slice(0,-1) + "m").val(C);
		this.val(currency(thisval));
	}
	else if(lastchar == "m") {
		C = thisval * 12;
		C = currency(C);
		$('#' + INPUT.slice(0,-1) + "a").val(C);
		this.val(currency(thisval));
	};

	genTotals();
};

suppPov = function() {
	var m = null, thisES = null;
	var adults = parseFloat($('#adults').val()) + parseFloat($('#elderly').val());
	var children = $('#children').val();
	var thishome = $('input:radio[name=living]:checked').val();
	var thismsa = $('#msaincmenu').val();
	var thisstate = stateLookUp($('#stateincmenu').val());
	spdata = spData(thisstate);
	for (i = 0; i < spdata.length; i += 1) {
		if(thismsa == spdata[i][0]) {
			m = spdata[i][thishome];
		}
	}

	// Inflation adjust. Data are from 2009: Geographic Adjustments of Supplemental Poverty Measure Thresholds: Using the American Community Survey Five-Year Data on Housing Costs

	var mo = m;
	m = inflate( m , 2009  );
	
	// https://www.census.gov/content/dam/Census/library/publications/2014/demo/p60-251.pdf

	var n = m/(Math.pow(3,0.7));
	
	if(adults<=2 && children==0) {
		thisES = n*Math.pow(adults,0.5);
	}
	else if(adults==1 && children==1) {
		thisES = n*Math.pow((1 + 0.8*1),0.7);
	}
	else if(adults==1 && children>1) {
		thisES = n*Math.pow((1 + 0.8*1 + 0.5*(children-1)),0.7);
	}
	else {
		thisES = n*Math.pow((adults + 0.5*children),0.7);
	}


	
	return {spadj:thisES, spunadjinf:m, spunadj:mo};

}

function inflate( N , OrigYear, inflator ) {
	
	// First turn into 2010 dollars
	var n = deflate( N, OrigYear );
	
	// If no new inflator is given, use the 2015 deflator
	if (inflator == null) inflator = 1.0764;
	return n * inflator;
}

function deflate( N , Y, customdeflator ) {

	var deflator = null;

		// Turn into 2010 dollars

		if ( Y == 2000 ) deflator = 1.2663;
		if ( Y == 2001 ) deflator = 1.23126;
		if ( Y == 2002 ) deflator = 1.21210;
		if ( Y == 2003 ) deflator = 1.18509;
		if ( Y == 2004 ) deflator = 1.15435;
		if ( Y == 2005 ) deflator = 1.11652;
		if ( Y == 2006 ) deflator = 1.08163;
		if ( Y == 2007 ) deflator = 1.05167;
		if ( Y == 2008 ) deflator = 1.01279;
		if ( Y == 2009 ) deflator = 1.01640;
		if ( Y == 2010 ) deflator = 1.0000;
		if ( Y == 2011 ) deflator = 0.9694;
		if ( Y == 2012 ) deflator = 0.94975;
		if ( Y == 2013 ) deflator = 0.93604;
		if ( Y == 2014 ) deflator = 0.92109;
		if ( Y == 2015 ) deflator = 0.9200002;
		if ( Y == 2016 ) deflator = 0.907674;

	
	// If data is not in the series, return most recent year
	if ( deflator == null ) {
		deflator == 0.907674;
	}
	
	if (customdeflator == null) return N * deflator;
	else return N * customdeflator;
	
}
function povCompute()	 {
	
	genTotals();
	
	var inc = strip($('#itotal'));
	
	var P = strip($('#custompct'))/100;
	var SPT = Math.round(suppPov().spadj);
	var OPT =  Math.round(fedThreshold());
	var OPG =  Math.round(fedGuideline());
	var C = strip($('#custthresh'));

	var rSPT = Math.round(100*inc / SPT)/100;
	var rOPT = Math.round(100*inc / OPT)/100;
	var rOPG = Math.round(100*inc / OPG)/100;

	if(P == 0) {
		$('#asupttr').hide();
		$('#aopttr').hide();
		$('#aopgtr').hide();
	}
	else {
		var arSPT = Math.round((inc / (SPT * P)))/100;
		var arOPT = Math.round((inc / (OPT * P)))/100;
		var arOPG = Math.round((inc / (OPG * P)))/100;
		$('#asupttr').show().val(arSPT);
		$('#aopttr').show().val(arOPT);
		$('#aopgtr').show().val(arOPG);
	};	
	
	$('#supthresh').val(currencyOnes(SPT));
	$('#optthresh').val(currencyOnes(OPT));
	$('#opguide').val(currencyOnes(OPG));
	
	$('#supttr').val(rSPT);
	$('#opttr').val(rOPT);
	$('#opgtr').val(rOPG);


	// CUSTOM THRESHOLD

	if (C == 0 || C == null) {
		$('#cttr').hide();
	}
	else {
		var rC = Math.round(100*inc / C)/100;
		var arC = Math.round((inc / (C * P)))/100;
		$('#cttr').val(rC);
		$('#acttr').val(arC);
		$('#cttr').show();
	}
	
	if (C != 0 && C != null && P != 0 && P != null ) $('#acttr').show();
		else $('#acttr').hide();
		
}
function fedGuideline() {
	// These are 2015 guidelines https://aspe.hhs.gov/poverty/15poverty.cfm
	var R = null;
	var fsize = parseFloat($('#adults').val()) + parseFloat($('#elderly').val()) + parseFloat($('#children').val());
	if ( $('#stateincmenu').val() == "Alaska" ) R =  14720-5200 + 5200*fsize;
	else if ( $('#stateincmenu').val() == "Hawaii" ) R =  13550-4780 + 4780*fsize;
	else R =  11770-4160 + 4160*fsize;
	return inflate(R , 2015);
}
function fedThreshold() {
	// https://www.census.gov/hhes/www/poverty/data/threshld/index.html
	// Last updated on 7/5/2016 with 2015 thresholds
	var ya = parseFloat($('#adults').val());
	var oa = parseFloat($('#elderly').val());
	var ch = parseFloat($('#children').val());
	var T = null;
	var f = ya + oa + ch;

	if (ch == 0) {
		if (ya == 1 & oa == 0) T = 12331;
		if (ya == 0 & oa == 1) T = 11367;
		if (ya == 1 & oa == 1) T = 15871;
		if (ya == 2 & oa == 0) T = 15871;
		if (ya == 0 & oa == 2) T = 14326;
		if (f == 3) T = 18540;
		if (f == 4) T = 24447;
		if (f == 5) T = 29482;
		if (f == 6) T = 33909;
		if (f == 7) T = 39017;
		if (f == 8) T = 43637;
		if (f >= 9) T = 52493;
	}
	if (ch == 1) {
		if (ya == 1 & oa == 0) T = 16337;
		if (ya == 0 & oa == 1) T = 16275;
		if (f == 3) T = 19078;
		if (f == 4) T = 24847;
		if (f == 5) T = 29911;
		if (f == 6) T = 34044;
		if (f == 7) T = 39260;
		if (f == 8) T = 44023;
		if (f >= 9) T = 52747;
	}
	if (ch == 2) {
		if (f == 3) T = 19096;
		if (f == 4) T = 24036;
		if (f == 5) T = 28995;
		if (f == 6) T = 33342;
		if (f == 7) T = 38421;
		if (f == 8) T = 43230;
		if (f >= 9) T = 52046;
	}
	if (ch == 3) {
		if (f == 4) T = 24120;
		if (f == 5) T = 28286;
		if (f == 6) T = 32670;
		if (f == 7) T = 37835;
		if (f == 8) T = 42536;
		if (f >= 9) T = 51457;
	}
	if (ch == 4) {
		if (f == 5) T = 27853;
		if (f == 6) T = 31670;
		if (f == 7) T = 36745;
		if (f == 8) T = 41551;
		if (f >= 9) T = 50490;
	}
	if (ch == 5) {
		if (f == 6) T = 31078;
		if (f == 7) T = 35473;
		if (f == 8) T = 40300;
		if (f >= 9) T = 49159;
	}
	if (ch == 6) {
		if (f == 7) T = 34077;
		if (f == 8) T = 38999;
		if (f >= 9) T = 47956;
	}
	if (ch == 7) {
		if (f == 8) T = 38668;
		if (f >= 9) T = 47658;
	}
	if (ch >= 9) {
		if (f >= 9) T = 45822;
	}
	return inflate( T, 2015);

}	

function explainhtml() {
	var textout = "";

	textout += "<h1>Explanations</h1>";

	textout += "<p>Sliding-scale fees are always based on assumptions. It is rarely straightforward to articulate and thoroughly justify them. But it is better to acknowledge this fact and to <i>try</i> to do so rather than ignoring them or importing them wholesale from a firm, nonprofit, or government agency that likely has quite diffent goals, capacities, or organizational constraints from yours. A firm that cannot communicate its assumptions risks misleading others about the magnitude of its discounts and the scope of clients aided by them, and can even produce nonsensical or regressive fee structures.</p>";
	
	textout += "<p>The calculators available through this site assume that better sliding-scale fee structures:</p>";
	
	textout += "<ol><li>are based on <i>family income</i> and characteristics, where a 'family' is one or more people who provide essential money and services to each other;</li>";
	
	textout += "<li>incorporate a <b>threshold</b>, which is an <i>objective benchmark</i> of money available to spend on non-essentials (food, health, and housing);</li>";
	
	textout += "<li>employ a family's <b>threshold ratio</b> (rather than the dollar amount of income above or below a threshold);</li>";
	
	textout += "<li>strive to incorporate statistics that reflect realistic local cost-of-living standards;</li>";
	
	textout += "<li>balance the need of the attorney to get paid and the client to not spend money on attorneys that is (a) legally earmarked for other things or (b) legally or morally required to be spent on family essentials; and that:</li>";
	
	textout += "<li>for-profit attorneys are justified in discounting fees to account for the value of their own personal labor, but less justified in charging less than the minimum fee necessary to pay a firm's essential expenses (<i>i.e.</i>, for-profit firms are not charities that can pay for essentials with charitable grants or donations);</li>";
	
	textout += "<li>firm operating expenses <i>above</i> minimum essential expenses and the value of the attorney's own time are paid in proportion to the client's financial ability to pay;</li>";
	
	textout += "<li>it is preferable to treat similarly situated clients similarly (<i>i.e.</i>, models with <i>smooth</i> fee transitions are preferable to models with sharp edges or big jumps); and</li>";
	
	textout += "<li>more than one fee structure can satisfy these assumptions.</li>";
	
	textout += "</ol>";
	
	textout += "<h2>Threshold Ratios</h2>";
	
	textout += "<p>The cornerstone of our approach is the family's <b>threshold ratio</b>. It includes a <b>numerator</b>, which reflects the family's financial status and a <b>denominator</b>, which is a benchmark of financial need that takes into account <i>at least</i> the family's size.</p>";
	
	textout += "<h3>The Numerator</h3>";
	
	textout += "<p>Our threshold ratio calculator invites users to consider a wide array of potential family income sources. Users may change the default <b>include</b> and <b>exclude</b> settings to compute a measure of <b>money available to spend on non-essentials</b> that they deem appropriate.<p>";
	
	textout += "<h3>The Denominator</h3>";
	
	textout += "<p>The denominator (the threshold ratio) can come from many sources:";

	textout += "<ul>";

	textout += "<li>Official federal poverty guidelines (used by administrative agencies to establish eligibility for government programs);</li>";
	
	textout += "<li>Official federal poverty thresholds (used by administrative agencies for statistical purposes);</li>"
	
	textout += "<li><a href='https://www.nap.edu/openbook.php?record_id=4759' Supplemental poverty thresholds</a> An improved, 'supplemental' measure of poverty used by the census bureau and researchers;</li>";
	
	textout += "<li>Other measures the user sees fit, such as the <a src='https://www.selfsufficiencystandard.org/'>self-sufficiency standard</a>.</li>";
	
	textout += "</ul>";
	
	textout += "<p>The official standards are not based on any coherent theory of poverty. Scholars widely revile them. They do not reflect important differences in local costs of living, nor important family attributes. On the other hand, supplemental and other measures are newer and not as popular or battle-tested. Newer measures may not be regularly updated (requiring the user to adjust them for inflation), and may be subject to unclear sources of measurement and sampling error.</p>";
	
	textout += "<p>Most users inclined to use official standards (either the official poverty guidelines or thresholds) likely will want to increase the threshold (make the denominator bigger), by increasing it by a percentage. For example, it is common to see 125%&ndash;200% of the official threshold used to gauge family financial status. An obvious advantage of other measures is that since they target financial need more directly, the need for such adjustments is less clear.</p>";
	
	textout += "<p>Official poverty guidelines and poverty thresholds are available on government websites (census.gov and aspe.hhs.gov/poverty). Supplemental poverty thresholds are not widely published. We use supplemental poverty thresholds: (a) based on published <a href='https://www.census.gov/hhes/povmeas/methodology/supplemental/research/Renwick_GeographicAdjustmentsJuly2011_WEA.pdf'>census.gov 2009 estimates</a> for two-adult, two-child families; (b) adjust for family composition using the <a href='https://www.census.gov/prod/2013pubs/p60-247.pdf'>Interagency Technical Working Group (ITWG) Guidelines</a>; and (c) inflation-adjust to current dollars.</p>";
	
	textout += "<p>The census bureau is correct to emphasize that the supplemental poverty thresholds are newer and primarily used for statistical purposes. However, this should not deter the private sector from employing them if those thresholds, their problems notwithstanding, provide a superior means of assessing a family's economic situation.</p>";
	
	textout += "<h2>Sliding-Scale Fee Structures</h2>";
	
	textout += "<p>With a threshold ratio in place as a measure of the family's economic situation, the user must choose a sliding-scale fee structure to <i>reflect</i> that situation.</p>";
	
	textout += "<p>Users often base this structure on personal intuitions about what counts as <b>poor</b>, <b>indigent</b>, <b>low income</b>, or <b>needy</b>. (The profession is depressingly cavalier about defining these terms, even when embodied in statutes.) Simply stating that one uses a sliding-scale fee 'based on the client's income or assets' says almost nothing. Indeed, it would be quite easy to do exactly that while providing only illusory benefits or even regressive calculations.</p>";
	
	textout += "<p>To clearly create and communicate a sliding-scale fee structure, the attorney must separately identify:</p>";
	
	textout += "<ol>";
	
	textout += "<li>A minimum fee amount (based on minimum payment to pay for firm expenses <i>besides</i> the value of the attorney's time); and</li>";
	
	textout += "<li>A maximum fee, calibrated to the attorney's market power, practice area, and experience.</li>";
	
	textout += "</ol>";
	
	textout += "<h3>Flexible Option</h3>";
	
	textout += "<p>If the fee structure largely is determined by intuitions about need and available income, the user must also choose:</p>";
	
	textout += "<ol>";
	
	textout += "<li>A lower threshold-ratio cutoff, below which the attorney always charges the minimum fee; and</li>";
	
	textout += "<li>An upper threshold-ratio cutoff, above which the attorney always charges the maximum fee.</li>";
	
	textout += "</ol>";
	
	textout += "<p>These numbers are necessary because an attorney would not base Bill Gates' attorney fees on his income. Nor should the attorney be required to offer her minimum fee exclusively to families with zero income (though she can, if she wants to). There are both upper and lower bounds to what attorneys charge, even if the lower bound is zero.</p>";
	
	textout += "<p>These four numbers are the bare minimum for a cogent sliding-scale fee structure. Unfortunately, more is required for a <i>good</i> fee structure. The <b>threshold</b> itself should figure into the model (Assumption 2, above). Once it does, basic geometry (a line is determined by two points) means that two lines, not one, connect the minimum and maximum cutoffs. Therefore, the user should also decide:</p>";
	
	textout += "<ul>";
	
	textout += "<li>How big of a discount to give a family exactly at the threshold ratio.</li>";
	
	textout += "</ul>";
	
	textout += "<p>Furthermore, a user might want a smooth fee scale, in accord with Assumption 8, above. If so, the user can choose:</p>";
	
	textout += "<ul>";
	
	textout += "<li>Upper and lower <b>shape</b> parameters to reflect how quickly the family's availability to pay changes as its threshold ratio increases or decreases.</li>";
	
	textout += "</ul>";
	
	textout += "<h3>Economic Vulnerability Option</h3>";
	
	textout += "<p>To reduce the number of arbitrary decisions above, fees can instead track a family's economic vulnerability. As implemented here, this means using the family's threshold ratio to predict in the future how likely the family is to fall below the threshold (if originally above it) or exceed the threshold (if below).</p>";
	
	textout += "<p>We provide estimates using the federal <a href='https://www.census.gov/cps/'>Current Population Survey (CPS)</a> data, which assesses (a) various sources of family income, (b) the family's <i>official federal poverty threshold</i>, and (c) where the family lives. Every March, the U.S. Census Bureau and the Bureau of Labor Statistics sample thousands of families to survey their income, poverty, unemployment, and much, much more. The CPS also <i>re-samples</i> some of those families up to one year later. The CPS permits calculating a family's threshold ratio Year 1 and whether it's above or below the threshold in Year 2. (The CPS does not re-sample families afte Year 2.)</p>";
	
	textout += "<p>The resulting dataset permits estimating&mdash;for a state or for the nation as a whole&mdash;the probability a family exceeds the poverty rate in Year 2, given its threshold ratio in Year 1. We base the probabilities on 2005&mdash;2014 observations. The probabilities (using family-level sampling weights) are estimated on the state level by regressing datapoints on logistic <i>functions</i>. (This is different from logistic <i>regression</i>.) The user can choose probabilities estimated from a family's total income (all sources of income are used to calculate the threshold), or what we refer to as the family's <b>available</b> income&mdash;the income sources mirror those included by default in the threshold ratio calculator. These models fit the data well. (We hope to publish the details formally in the near future, but please contact us if you'd like more information.)";

	textout += "<p>The fee is essentially constructed by applying the estimated probability curve as a discount to the maximum fee (or setting it to the minimum, if that number would fall below the minimum). The models estimate three parameters:</p>";

	textout += "<ul><li>A minimum ('mu'), which is the estimated probability of exceeding the official federal poverty threshold in Year 2 for families with zero income of any sort;</li>";

	textout += "<li>'k', which is directly related to the discount at the threshold level; and</li>";

	textout += "<li>'g', which is a shape parameter that determines how flat or steep the curve is.</li></ul>";

	textout += "<p>This approach leads to an elegant, <i>smooth</i> curve that mirrors intuitions about what a sliding-scale fee <i>should</i> look like. It also recasts the justification for a sliding-scale fee:  A purpose is to <b>proportionately reduce the risk of sending a family into poverty or hindering a client's ability to get out of poverty.</b> This justification supplements a ubiquitous moralistic rationale for helping the poor with the pragmatic one of <i>proportionately reducing the probability that one's profit-seeking behavior will result in a family being eligible for government aid.</i></p>";
	
	textout += "<p>This approach has drawbacks. It is new and not widely used. To our knowledge, we are the first who have used CPS data in this manner. We are constantly refining the approach.</p>";
	
	return textout;
}