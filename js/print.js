function myprint() {

    var rsum = 0;
    var thisthresh, mort;

    $('#inctabout tr').remove();
    $('#incsourceout li').remove();

    $('#clientidout').html($('#clientid').val());
    $('#clientnotesout').html($('#clientnotes').val());
    $('#incperiodout').html($('#incperiod').val());
    $('#inctabout').append("<tr><th>Family Income Source</th><th>Annual Total</th></tr>");

    if( strip($('#wtotal1')) != 0 ) {
        rsum += strip($('#wtotal1'));
        if ( $('#wsource1').val() == "" ||  $('#wsource1').val() == null ) tw = "Wages / Salary";
        else tw = $('#wsource1').val();
        $('#inctabout').append("<tr><td>" + tw + "</td><td>" + $('#wtotal1').val() + "</td></tr>");
    };
    if( strip($('#wtotal2')) != 0 ) {
        rsum += strip($('#wtotal2'));
        if ( $('#wsource2').val() == "" ||  $('#wsource2').val() == null ) tw = "Wages / Salary";
        else tw = $('#wsource2').val();
        $('#inctabout').append("<tr><td>" + tw + "</td><td>" + $('#wtotal2').val() + "</td></tr>");
    };
    if( strip($('#wtotal3')) != 0 ) {
        rsum += strip($('#wtotal3'));
        if ( $('#wsource3').val() == "" ||  $('#wsource3').val() == null ) tw = "Wages / Salary";
        else tw = $('#wsource3').val();
        $('#inctabout').append("<tr><td>" + tw + "</td><td>" + $('#wtotal3').val() + "</td></tr>");
    };
    if( strip($('#wtotal4')) != 0 ) {
        if ( $('#wsource4').val() == "" ||  $('#wsource4').val() == null ) tw = "Wages / Salary";
        else tw = $('#wsource4').val();
        rsum += strip($('#wtotal4'));
        $('#inctabout').append("<tr><td>" + tw + "</td><td>" + $('#wtotal4').val() + "</td></tr>");
    };        
    if( strip($('#ssia')) == 0 ) {
        $('#incsourceout').append("<li>Regular and survivor social security income</li>");        
    }
    else {
        rsum += strip($('#ssia'));
    };
    if( strip($('#pensiona')) == 0) {
        $('#incsourceout').append("<li>Pension / Retirement Income</li>");        
    }
    else {
        rsum += strip($('#pensiona'));
        $('#inctabout').append("<tr><td>Pension / Retirement Income</td><td>" + $('#pensiona').val() + "</td></tr>");
    };
    if( strip($('#spousala')) == 0) {
        $('#incsourceout').append("<li>Spousal Support</li>");        
    }
    else {
        rsum += strip($('#spousala'));
        $('#inctabout').append("<tr><td>Spousal Support</td><td>" + $('#spousala').val() + "</td></tr>");
    };
    if( strip($('#veta')) == 0) {
        $('#incsourceout').append("<li>Veteran's Benefits</li>");        
    }
    else {
        rsum += strip($('#veta'));
        $('#inctabout').append("<tr><td>Veteran's Benefits</td><td>" + $('#veta').val() + "</td></tr>");
    };
    if( strip($('#renta')) == 0) {
        $('#incsourceout').append("<li>Rental Income</li>");        
    }
    else {
        rsum += strip($('#renta'));
        $('#inctabout').append("<tr><td>Rental Income</td><td>" + $('#renta').val() + "</td></tr>");
    };    
    if( strip($('#divinta')) == 0) {
        $('#incsourceout').append("<li>Dividends and Interest</li>");        
    }
    else {
        rsum += strip($('#divinta'));
        $('#inctabout').append("<tr><td>Dividends and Interest</td><td>" + $('#divinta').val() + "</td></tr>");
    };     
    if( strip($('#ssda')) == 0) {
        $('#incsourceout').append("<li>Social Security Disability Income</li>");        
    }
    else {
        rsum += strip($('#ssda'));
        $('#inctabout').append("<tr><td>Social Security Disability Income</td><td>" + $('#ssda').val() + "</td></tr>");
    }; 
    if( strip($('#unempa')) == 0) {
        $('#incsourceout').append("<li>Unemployment Insurance</li>");        
    }
    else {
        rsum += strip($('#unempa'));
        $('#inctabout').append("<tr><td>Unemployment Income</td><td>" + $('#unempa').val() + "</td></tr>");
    }; 
    if( strip($('#wca')) == 0) {
        $('#incsourceout').append("<li>Worker's Compensation Benefits</li>");        
    }
    else {
        rsum += strip($('#wca'));
        $('#inctabout').append("<tr><td>Worker's Compensation Benefits / Income</td><td>" + $('#wca').val() + "</td></tr>");
    }; 
    if( strip($('#csa')) == 0) {
        $('#incsourceout').append("<li>Child Support</li>");        
    }
    else {
        rsum += strip($('#csa'));
        $('#inctabout').append("<tr><td>Child Support</td><td>" + $('#csa').val() + "</td></tr>");
    }; 
    if( strip($('#tanfa')) == 0) {
        $('#incsourceout').append("<li>TANF</li>");        
    }
    else {
        rsum += strip($('#tanfa'));
        $('#inctabout').append("<tr><td>TANF</td><td>" + $('#tanfa').val() + "</td></tr>");
    };     
    if( strip($('#other1a')) == 0) {
    }
    else {
        rsum += strip($('#other1a'));
        $('#inctabout').append("<tr><td>"+ $('#other1').val() +"</td><td>" + $('#other1a').val() + "</td></tr>");
    }; 
    if( strip($('#other2a')) == 0) {
    }
    else {
        rsum += strip($('#other2a'));
        $('#inctabout').append("<tr><td>"+ $('#other2').val() +"</td><td>" + $('#other2a').val() + "</td></tr>");
    }; 
    if( strip($('#other3a')) == 0) {
    }
    else {
        rsum += strip($('#other3a'));
        $('#inctabout').append("<tr><td>"+ $('#other3').val() +"</td><td>" + $('#other3a').val() + "</td></tr>");
    }; 

    var excl = strip($('#reducecosts'));
    if ( excl == 0 || excl == null) {
        $('#excludedincout').html("$0.00");
    }
    else $('#excludedincout').html($('#reducecosts').val());

    var fsize = parseFloat($('#adults').val()) + parseFloat($('#elderly').val()) + parseFloat($('#children').val());
	var ya = parseFloat($('#adults').val());
	var oa = parseFloat($('#elderly').val());
	var ch = parseFloat($('#children').val());
	var adults = ya + oa;
	var threshbasis, mythresh, mytrout;
	var thishome = $('input:radio[name=living]:checked').val();
	if ( thishome == 1 ) mort = "the family owns a home with a mortgage";
	if ( thishome == 2 ) mort = "the family owns its home, but has no mortgage";
	if ( thishome == 3 ) mort = "the family rents its home";

    var thisthresh = $('#threshselect').val();
    if ( thisthresh == 1 ) {
        threshbasis = "100% of the Official Federal Poverty Guideline for " + $('#stateincmenu').val() + " (total family size = " + fsize + "). The government calculates this threshold separately only for The United States, Alaska, and Hawaii";
        mytrout = $('#opgtr').val();
        mythresh = $('#opguide').val();
    }
    if ( thisthresh == 2 ) {
        threshbasis = "100% of the Official Federal Poverty Threshold for a family with " + ch + " children, " + ya + " adults under 65, and " + oa + " adults 65 or older. This threshold is only available for The United States as a whole";
        mytrout = $('#opttr').val();
        mythresh = $('#optthresh').val();
    }
    if ( thisthresh == 3 ) {
        threshbasis = "100% of the Supplemental Poverty Threshold for " + $('#msaincmenu').val() + " (" + adults + " adults, " + ch + " children, and " +  mort + ")";
        mytrout = $('#supttr').val();
        mythresh = $('#supthresh').val();
    }
    if ( thisthresh == 4 ) {
        threshbasis = "100% of a threshold based on " + $('#sourcedesc').val();
        mytrout = $('#cttr').val();
        mythresh = $('#custthresh').val();
    }
    if ( thisthresh == 5 ) {
        threshbasis =  Math.round(strip($('#custompct'))*100) + "% of the Official Federal Poverty Guideline for " + $('#stateincmenu').val() + " (total family size = " + fsize + "). The government calculates this threshold separately only for The United States, Alaska, and Hawaii";
        mytrout = $('#aopgtr').val();
        mythresh = $('#opguide').val();
    }    
    if ( thisthresh == 6 ) {
        threshbasis =  Math.round(strip($('#custompct'))*100) + "% of the Official Federal Poverty Threshold for a family with " + ch + " children, " + ya + " adults under 65, and " + oa + " adults 65 or older. This threshold is only available for The United States as a whole";
        mytrout = $('#aopttr').val();
        mythresh = $('#optthresh').val();
    }    
    if ( thisthresh == 7 ) {
        threshbasis =  Math.round(strip($('#custompct'))*100) + "% of the Supplemental Poverty Threshold for " + $('#msaincmenu').val() + " (" + adults + " adults, " + ch + " children, and " +  mort + ")";
        mytrout = $('#asupttr').val();
        mythresh = $('#supthresh').val();
    }
        if ( thisthresh == 8 ) {
        threshbasis =  Math.round(strip($('#custompct'))*100) + "% of a threshold based on " + $('#sourcedesc').val();
        mytrout = $('#acttr').val();
        mythresh = $('#custthresh').val();
    }
    $('#threshexp').html(threshbasis);
    $('#ptout').html(mythresh);
    $('#ptrout').html(mytrout);


    // The poverty comparison

    var D = distData($('#statemenu').val(),1);
    var p1 = collapse( D, 0, parseFloat($('#opttr').val()));
    var p2 = collapse( D, 0, parseFloat($('#opttr').val()) + 0.05);
    var p = (p1 + p2) / 2;

    $('#inccompare1').html(Math.round(p*100) + "%");
    $('#inccompare2').html(Math.round(100*(1-p)) + "%");
    $('#pstateout').html($('#stateincmenu').val());
    $('#ptotavail').html($('#gtotal').val());

    /// THE SLIDING SCALE FEE

	var earn = $('#distearn1').prop('checked');
	var p125 = $('#p125check1').prop('checked');

	if ( earn == 1 ) var pearn = " available family income only";
	else var pearn = " all family income sources";
	if ( p125 == 1 ) var pp125 = "125%";
	else var pp125 = "100%";

	var disc =  Number($('#D').limitslider("values"));
	var tL = Number($('#lowerupper').limitslider("values")[0]);
	var tU = Number($('#lowerupper').limitslider("values")[1]);
	var u = Number($('#uv').limitslider("values")[0]);
	var v = Number($('#uv').limitslider("values")[1]);
	var G = GG($('#canvas1'));

    if ($('input:radio[name=ssopt]:checked').val() == 1) {
        $('#pssdescout').html(" the probability of escaping or remaining above " + pp125 + " of the official federal poverty threshold. That probability was calculated from an analysis of aggregated 2005-2014 Current Population Survey data. That analysis considered " + pearn + ". The calculations assume a maximum fee of $ " + Number($('#fminmax').limitslider("values")[1]) + " and a minimum fee of $ " + Number($('#fminmax').limitslider("values")[0]) + ". The fee is rounded to the nearest $ " + $('#coarsenmenu').val() );
        $('#pfeeout').html("$ " + feeL(mytrout, G));
    }
    else {
        $('#pssdescout').html(" a subjective assessment of how much family income is available for paying the bill. The calculations assume a maximum fee of $ " + Number($('#fminmax').limitslider("values")[1]) + " (which kicks in when clients reach " + tU + " times the threshold), a minimum fee of $ " + Number($('#fminmax').limitslider("values")[0]) + " (which kicks in when clients reach " + tL + " times the threshold), and a discount of " +  disc + "% for clients exactly at the threshold. The shape of the fee structure is determined by a lower parameter,  (" + u + ") and an upper parameter (" + v + "). The fee is rounded to the nearest $ " + $('#coarsenmenu').val() );
        $('#pfeeout').html("$ " + feePW(mytrout,G));
    };

	// Graph
    if( $('#pfeegraph').prop('checked') ) {
        $('#showgraph').show();
        plotFees($('#canvas4'));
      
    }
    else {
        $('#showgraph').hide();
    }

    // Table
    if( $('#pfeetable').prop('checked') ) {
        $('#showtable').show();
        printTable();
      
    }
    else {
        $('#showtable').hide();
    }

	// Source
	if( $('#psourcesch').prop('checked') ) {
		$('#pexplainme').html(explainhtml());
		$('#showsource').show();
	}
	else $('#showsource').hide();
  
  	// Equations
	if( $('#pequations').prop('checked') ) {
		setEquations();
		$('#showequations').show();
	}
	else $('#showequations').hide();

	// Threshold Calculations
	if ( $('#pinctr').prop('checked') ) {
		$('#pinctrout').show();
	}
	else $('#pinctrout').hide();
};

function printTable() {
		var thisfee, iR, PF;
		var lastfee = 0;

		$('#printtable tr').remove();

		$('#printtable').append("<tr><th>Threshold Ratio</th><th>Sliding-Scale Fee</th></tr>");

		var G = GG($('#canvas1'));

		iR = numeral(Math.round(G.customT*100)/100).format('0.00');
	    if ($('input:radio[name=ssopt]:checked').val() == 1) thisfee = feeL(iR, G);
	    else thisfee = feePW(iR, G);

		if (thisfee == 1) thisfee = '$0.00';
		else thisfee = currency(thisfee);

		$('#printtable').append("<tr class='boldrow'><td> (Custom: " + numeral(Math.round(iR*100)/100).format('0.00') + ")</td><td>" + thisfee + "</td></tr>");
		for ( var i = 0; i <= 4; i += 0.05 ) {

			if ($('input:radio[name=ssopt]:checked').val() == 1) thisfee = feeL(i, G);
			else thisfee = feePW(i, G);

			if (thisfee == 1) PF = '$0.00';
			else PF = currency(thisfee);

			if ( thisfee == lastfee ) continue;
			lastfee = thisfee;

			// Must handle the weirdness where 0 = $1 for computation purposes
			if (thisfee == 1) PF = '$0.00';
			else PF = currency(thisfee);

			if (Math.round(i*100)/100 == 1) {
				$('#printtable').append("<tr class='boldrow'><td> " + numeral(Math.round(i*100)/100).format('0.00') + "</td><td>" + PF + "</td></tr>");
			}
			else {
				$('#printtable').append("<tr><td>" + numeral(Math.round(i*100)/100).format('0.00') + "</td><td>" + PF + "</td></tr>");
			};
		};  
	
}