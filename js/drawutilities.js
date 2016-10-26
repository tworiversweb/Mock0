function drawPlots(N) {

    // This is a good place to remove the table, so it can be recalculated    
	$('#feetable tr').remove();

    // Set the equations
    setEquations();

    // Set the customT
    var TS = $('#threshselect').val();
    if ( TS == 1 ) $('#custom1').val($('#opgtr').val());
    if ( TS == 2 ) $('#custom1').val($('#opttr').val());
    if ( TS == 3 ) $('#custom1').val($('#supttr').val());
    if ( TS == 4 ) $('#custom1').val($('#cttr').val());
    if ( TS == 5 ) $('#custom1').val($('#aopgtr').val());
    if ( TS == 6 ) $('#custom1').val($('#aopttr').val());
    if ( TS == 7 ) $('#custom1').val($('#asupttr').val());
    if ( TS == 8 ) $('#custom1').val($('#acttr').val());
    
    if (N == 1) {
        $('#canvas1').show();
        $('#canvas2, #canvas3').hide();
        plotFees($('#canvas1'));
    } 
    else if (N == 2) {
        $('#canvas2').show();
        $('#canvas1, #canvas3').hide();
        plotBeta($('#canvas2'));
    } 
    else if (N == 3) {
        $('#canvas3').show();
        $('#canvas1, #canvas2').hide();
        plotRev($('#canvas3'));
    } 
    else {
        $('#canvas1, #canvas2, #canvas3').hide();
    }
    ;

}
;

function drawAxes(CANVAS, G) {

    // Canvas 2 gets no Y-axis
    if (CANVAS.attr('id') == "canvas2") {
        CANVAS.drawLine({
            layer: true,
            name: 'Axes',
            strokeStyle: '#000',
            strokeWidth: 2,
            x1: G.W * G.gpmin,y1: G.H * G.gpmax,
            x2: G.W * G.gpmax,y2: G.H * G.gpmax
        })
    } 
    else {
        CANVAS.drawLine({
            layer: true,
            name: 'Axes',
            strokeStyle: '#000',
            strokeWidth: 2,
            x1: G.W * G.gpmin,y1: G.H * G.gpmin,
            x2: G.W * G.gpmin,y2: G.H * G.gpmax,
            x3: G.W * G.gpmax,y3: G.H * G.gpmax
        })
    }
    ;
}
;

function drawTickLabels(CANVAS, G) {
    
    var xadj = (G.W * G.gpmax - G.W * G.gpmin) / G.xticks;
    var yadj = (G.H * G.gpmax - G.H * G.gpmin) / G.yticks;
    var ylabval = null;
    var xlabval = null;
    
    for (var q = 0; q < (G.xticks + 1); q++) {
        
        if (CANVAS.attr('id') != "canvas3") {
            xlabval = (G.gxmin + q * (G.gxmax - G.gxmin) / (G.xticks)).toFixed(2)
        } 
        else {
            xlabval = Math.round((G.gxmin + q * (G.gxmax - G.gxmin) / (G.xticks)) / 100) / 10 + "k";
        }
        CANVAS.drawText({
            name: 'xTickLab' + q,
            layer: true,
            groups: ['xtickLabs'],
            strokeStyle: '#000',
            strokeWidth: 1,
            x: G.W * G.gpmin + q * xadj,y: G.H * G.gpmax * 1.03,
            fontSize: 10,
            fontFamily: 'Verdana, sans-serif',
            text: xlabval
        });
    }
    ;

    // Canvas 2 gets no left Y-axis (right axis supplied by plotDist)
    
    if (CANVAS.attr('id') != "canvas2") {
        
        for (var p = 0; p <= G.yticks; p++) {
            
            if (CANVAS.attr('id') != "canvas3") {
                ylabval = (G.gymin + (G.yticks - p) * (G.gymax - G.gymin) / (G.yticks)).toFixed(2);
            } 
            else {
                ylabval = "$" + Math.round((G.gymin + (G.yticks - p) * (G.gymax - G.gymin) / G.yticks) / 1000) + "k";
            }
            CANVAS.drawText({
                name: 'yTickLab' + p,
                layer: true,
                groups: ['yTickLabs'],
                strokeStyle: '#000',
                strokeWidth: 1,
                x: .85 * G.W * G.gpmin,y: G.H * G.gpmin + p * yadj,
                fontSize: 10,
                fontFamily: 'Verdana, sans-serif',
                align: 'right',
                respectAlign: true,
                text: ylabval
            });
        }
        ;
    
    }
}
;

function drawTicks(CANVAS, G) {
    if (CANVAS.attr('id') == "canvas2") {
        
        var xadj = (G.W * G.gpmax - G.W * G.gpmin) / G.xticks;
        
        for (var q = 0; q <= G.xticks; q++) {
            CANVAS.drawLine({
                name: 'xTick' + q,
                layer: true,
                groups: ['xTicks'],
                strokeStyle: '#000',
                strokeWidth: 1,
                x1: G.W * G.gpmin + q * xadj,y1: G.H * G.gpmax * .985,
                x2: G.W * G.gpmin + q * xadj,y2: G.H * G.gpmax * 1.015
            });
        }
        ;
    } 
    else {
        var xadj = (G.W * G.gpmax - G.W * G.gpmin) / G.xticks;
        var yadj = (G.H * G.gpmax - G.H * G.gpmin) / G.yticks;
        
        for (var p = 0; p <= G.yticks; p++) {
            CANVAS.drawLine({
                name: 'yTick' + p,
                layer: true,
                groups: ['yTicks'],
                strokeStyle: '#000',
                strokeWidth: 1,
                x1: .90 * G.W * G.gpmin,y1: G.H * G.gpmin + p * yadj,
                x2: 1.1 * G.W * G.gpmin,y2: G.H * G.gpmin + p * yadj
            });
        }
        ;
        for (var q = 0; q <= G.xticks; q++) {
            CANVAS.drawLine({
                name: 'xTick' + q,
                layer: true,
                groups: ['xTicks'],
                strokeStyle: '#000',
                strokeWidth: 1,
                x1: G.W * G.gpmin + q * xadj,y1: G.H * G.gpmax * .985,
                x2: G.W * G.gpmin + q * xadj,y2: G.H * G.gpmax * 1.015
            });
        }
        ;
    }
}
;

function drawGrids(CANVAS, G) {
    var xadj = (G.W * G.gpmax - G.W * G.gpmin) / G.xticks;
    var yadj = (G.H * G.gpmax - G.H * G.gpmin) / G.yticks;
    if (CANVAS.attr('id') != "canvas2" && G.gygrid == true) {
        for (var p = 0; p < G.yticks; p++) {
            CANVAS.drawLine({
                name: 'yGrid' + p,
                layer: true,
                groups: ['yGrids'],
                strokeStyle: '#E6E6E6',
                strokeWidth: 1,
                x1: G.W * G.gpmin,y1: G.H * G.gpmin + p * yadj,
                x2: G.W * G.gpmax,y2: G.H * G.gpmin + p * yadj
            });
        }
        ;
    };
    if (G.gxgrid == true) {
        for (var q = 0; q < G.xticks; q++) {
            CANVAS.drawLine({
                name: 'xGrid' + q,
                layer: true,
                groups: ['xGrids'],
                strokeStyle: '#E6E6E6',
                strokeWidth: 1,
                x1: G.W * G.gpmin + q * xadj + G.gpmin + xadj,y1: G.H * G.gpmin,
                x2: G.W * G.gpmin + q * xadj + G.gpmin + xadj,y2: G.H * G.gpmax
            });
        }
        ;
    }
    ;
}
;
function drawTitle(CANVAS, G, TEXT) {
    CANVAS.drawText({
        name: 'Title' + G.state,
        layer: true,
        groups: ['Titles'],
        strokeStyle: '#000',
        strokeWidth: 1,
        fillStyle: '#000',
        x: G.W / 2,y: G.gpmin * G.H * .5,
        fontSize: 16,
        fontFamily: 'Verdana, sans-serif',
        align: 'center',
        respectAlign: true,
        text: TEXT
    });
}
function drawYTitle(CANVAS, G, TEXT) {
    CANVAS.drawText({
        name: 'YTitle' + G.state,
        layer: true,
        groups: ['YTitles'],
        strokeStyle: '#000',
        strokeWidth: 1,
        fillStyle: '#000',
        x: G.W * G.gpmin * .2,y: G.H / 2,
        rotate: 270,
        fontSize: 14,
        fontFamily: 'Verdana, sans-serif',
        align: 'center',
        respectAlign: true,
        text: TEXT
    });
}
function drawY2Title(CANVAS, G, TEXT) {
    CANVAS.drawText({
        name: 'Y2Title' + G.state,
        layer: true,
        groups: ['Y2Titles'],
        strokeStyle: '#000',
        strokeWidth: 1,
        fillStyle: '#000',
        x: G.W * G.gpmax * 1.125,y: G.H / 2,
        rotate: 90,
        fontSize: 14,
        fontFamily: 'Verdana, sans-serif',
        align: 'center',
        respectAlign: true,
        text: TEXT
    });
}
function drawXTitle(CANVAS, G, TEXT) {
    CANVAS.drawText({
        name: 'XTitle' + G.state,
        layer: true,
        groups: ['XTitles'],
        strokeStyle: '#000',
        fillStyle: '#000',
        strokeWidth: 1,
        x: G.W / 2,y: G.gpmax * G.H * 1.075,
        fontSize: 14,
        fontFamily: 'Verdana, sans-serif',
        align: 'center',
        respectAlign: true,
        text: TEXT
    });
}

function coarsen(t, CS) {
    var R = Math.round(parseFloat(t) / CS) * CS;
    return R;
}

// Graph Translate
function gT(Cx, Cy, G) {
    var newx = (G.xInt + G.xSlope * Cx);
    var newy = (G.yInt + G.ySlope * Cy);
    var C = {X: newx,Y: newy};
    return C;
}
;

function getCoords(f_mx, f_Mx, fi_my, fi_My, G) {
    var x0, x1, y0, y1 = null;
    
    if (G.gymin <= f_Mx && f_Mx <= G.gymax) {
        x1 = G.gxmax;
        y1 = f_Mx;
    } 
    else if (f_Mx < G.gymin) {
        x1 = null;
        y1 = null;
    } 
    else if (f_Mx > G.gymax) {
        x1 = fi_My;
        y1 = G.gymax;
    }
    ;
    if (G.gymin <= f_mx && f_mx <= G.gymax) {
        x0 = G.gxmin;
        y0 = f_mx;
    } 
    else if (f_mx < G.gymin) {
        x0 = fi_my;
        y0 = G.gymin;
    } 
    else if (f_mx > G.gymin) {
        x0 = null;
        x1 = null;
    }
    ;
    
    if (x0 > G.gxmax || x1 < G.gxmin || y1 < G.gymin || y0 > G.gymax) {
        var COORDS = {x0: null,y0: null,x1: null,y1: null};
    } 
    else
        var COORDS = {x0: x0,y0: y0,x1: x1,y1: y1};
    
    return COORDS;
}
;
