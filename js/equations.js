function ylogistic(t, G) {
	var R = G.mu+((.98-G.mu)/(1+G.k*Math.pow(t,G.g)));
	R = R/.98;
	return R;
}
function pw(T, G) {
	var t = parseFloat(T);
	var R;
	var U = G.tU;
	var L = G.tL;
	var D = (1-G.D)*G.fmax;
	var q = parseFloat((U*(G.fmax-D-1)+1)/(U-1));
	var u = G.u;
	var v = G.v;
	if(t<L) R = G.fmin;
	if(t>=L && t<1) {
		R = Math.pow(t,u)*(1-t/L)*(L*(G.fmin-D)/(1-L))+G.fmin;
	};
	if(t>=1 && t<U) {
		R = G.fmax - (1-t/U)*(t+q)*Math.pow(t,-v);
	};
	if(t>=U) R = G.fmax;
	return R;
};
function feeL(t, G) {
	return Math.max(G.fmin,coarsen(G.fmax*ylogistic(t,G),G.coarse));
};
function feePW(t, G) {
	return Math.max(G.fmin,coarsen(pw(t, G),G.coarse));
};
function betaLookup(state, earn, p125) {
	var B;

if ( state == "Alaska" & earn == 1 & p125 == 1 ) return B = { mu:.34423476, k:.98203421, g:-2.3002701 };
if ( state == "Alabama" & earn == 1 & p125 == 1 ) return B = { mu:.34189248, k:2.0737624, g:-3.3965867 };
if ( state == "Arkansas" & earn == 1 & p125 == 1 ) return B = { mu:.30814776, k:2.7454929, g:-3.9329672 };
if ( state == "Arizona" & earn == 1 & p125 == 1 ) return B = { mu:.33712906, k:2.5836399, g:-3.7110505 };
if ( state == "California" & earn == 1 & p125 == 1 ) return B = { mu:.41143614, k:3.0453794, g:-3.457073 };
if ( state == "Colorado" & earn == 1 & p125 == 1 ) return B = { mu:.42740989, k:3.2671614, g:-3.7953365 };
if ( state == "Connecticut" & earn == 1 & p125 == 1 ) return B = { mu:.44148761, k:2.8119974, g:-4.0693545 };
if ( state == "DC" & earn == 1 & p125 == 1 ) return B = { mu:.238956, k:1.5665673, g:-2.4895055 };
if ( state == "Delaware" & earn == 1 & p125 == 1 ) return B = { mu:.46520424, k:2.8360872, g:-3.2727475 };
if ( state == "Florida" & earn == 1 & p125 == 1 ) return B = { mu:.40755621, k:2.1529603, g:-3.2002599 };
if ( state == "Georgia" & earn == 1 & p125 == 1 ) return B = { mu:.33897364, k:1.9252082, g:-2.8124254 };
if ( state == "Hawaii" & earn == 1 & p125 == 1 ) return B = { mu:.52709222, k:1.8463885, g:-2.4628115 };
if ( state == "Iowa" & earn == 1 & p125 == 1 ) return B = { mu:.41237247, k:2.1590707, g:-4.125958 };
if ( state == "Idaho" & earn == 1 & p125 == 1 ) return B = { mu:.39478555, k:3.5756993, g:-4.9416795 };
if ( state == "Illinois" & earn == 1 & p125 == 1 ) return B = { mu:.44866529, k:3.8651268, g:-4.4570146 };
if ( state == "Indiana" & earn == 1 & p125 == 1 ) return B = { mu:.35617971, k:1.7179154, g:-3.3962328 };
if ( state == "Kansas" & earn == 1 & p125 == 1 ) return B = { mu:.26693511, k:1.4956442, g:-3.5283506 };
if ( state == "Kentucky" & earn == 1 & p125 == 1 ) return B = { mu:.29799774, k:1.5795898, g:-2.9454257 };
if ( state == "Louisiana" & earn == 1 & p125 == 1 ) return B = { mu:.27012509, k:1.8634592, g:-3.3695228 };
if ( state == "Massachusetts" & earn == 1 & p125 == 1 ) return B = { mu:.39344212, k:2.0747986, g:-3.2794437 };
if ( state == "Maryland" & earn == 1 & p125 == 1 ) return B = { mu:.51795363, k:4.5247049, g:-3.9155889 };
if ( state == "Maine" & earn == 1 & p125 == 1 ) return B = { mu:.31193149, k:1.4793547, g:-3.3780205 };
if ( state == "Michigan" & earn == 1 & p125 == 1 ) return B = { mu:.31685862, k:1.3412874, g:-3.1449282 };
if ( state == "Minnesota" & earn == 1 & p125 == 1 ) return B = { mu:.36873305, k:2.7343206, g:-4.3012242 };
if ( state == "Missouri" & earn == 1 & p125 == 1 ) return B = { mu:.30579266, k:2.2823238, g:-4.2602482 };
if ( state == "Mississippi" & earn == 1 & p125 == 1 ) return B = { mu:.26352504, k:2.3674796, g:-3.5776377 };
if ( state == "Montana" & earn == 1 & p125 == 1 ) return B = { mu:.30266592, k:1.9604558, g:-3.6748796 };
if ( state == "North Carolina" & earn == 1 & p125 == 1 ) return B = { mu:.32069391, k:2.3291612, g:-3.6247554 };
if ( state == "North Dakota" & earn == 1 & p125 == 1 ) return B = { mu:.32497326, k:3.0113153, g:-4.7114358 };
if ( state == "Nebraska" & earn == 1 & p125 == 1 ) return B = { mu:.48229197, k:2.0525692, g:-3.7119133 };
if ( state == "New Hampshire" & earn == 1 & p125 == 1 ) return B = { mu:.55679268, k:3.111006, g:-3.8343577 };
if ( state == "New Jersey" & earn == 1 & p125 == 1 ) return B = { mu:.5477078, k:4.4837079, g:-3.5619404 };
if ( state == "New Mexico" & earn == 1 & p125 == 1 ) return B = { mu:.29658732, k:1.4013796, g:-2.3659749 };
if ( state == "Nevada" & earn == 1 & p125 == 1 ) return B = { mu:.48044577, k:2.5551095, g:-3.5187712 };
if ( state == "New York" & earn == 1 & p125 == 1 ) return B = { mu:.37994963, k:2.4912682, g:-3.1148555 };
if ( state == "Ohio" & earn == 1 & p125 == 1 ) return B = { mu:.34928614, k:1.7061712, g:-3.6229823 };
if ( state == "Oklahoma" & earn == 1 & p125 == 1 ) return B = { mu:.28614324, k:1.5316479, g:-3.3870919 };
if ( state == "Oregon" & earn == 1 & p125 == 1 ) return B = { mu:.41264826, k:3.0380294, g:-4.402802 };
if ( state == "Pennsylvania" & earn == 1 & p125 == 1 ) return B = { mu:.40637818, k:1.9544275, g:-3.3614511 };
if ( state == "Rhode Island" & earn == 1 & p125 == 1 ) return B = { mu:.37961897, k:2.5733778, g:-3.6865706 };
if ( state == "South Carolina" & earn == 1 & p125 == 1 ) return B = { mu:.26968303, k:1.3668519, g:-2.8344953 };
if ( state == "South Dakota" & earn == 1 & p125 == 1 ) return B = { mu:.2812838, k:1.6592118, g:-3.7836874 };
if ( state == "Tennessee" & earn == 1 & p125 == 1 ) return B = { mu:.22411218, k:1.1025314, g:-2.5436594 };
if ( state == "Texas" & earn == 1 & p125 == 1 ) return B = { mu:.33121866, k:2.4649065, g:-3.5636976 };
if ( state == "The United States" & earn == 1 & p125 == 1 ) return B = { mu:.37411705, k:2.2937391, g:-3.4759412 };
if ( state == "Utah" & earn == 1 & p125 == 1 ) return B = { mu:.40974721, k:1.2849796, g:-3.0749817 };
if ( state == "Virginia" & earn == 1 & p125 == 1 ) return B = { mu:.43718213, k:3.6761665, g:-3.964128 };
if ( state == "Vermont" & earn == 1 & p125 == 1 ) return B = { mu:.40867537, k:1.9873794, g:-3.5722704 };
if ( state == "Washington" & earn == 1 & p125 == 1 ) return B = { mu:.44498062, k:2.5556412, g:-4.0748553 };
if ( state == "Wisconsin" & earn == 1 & p125 == 1 ) return B = { mu:.42497176, k:3.4404931, g:-4.3813548 };
if ( state == "West Virginia" & earn == 1 & p125 == 1 ) return B = { mu:.35053512, k:1.4249343, g:-2.6438251 };
if ( state == "Wyoming" & earn == 1 & p125 == 1 ) return B = { mu:.42937538, k:3.5335927, g:-4.8790178 };
if ( state == "Alaska" & earn == 1 & p125 == 0 ) return B = { mu:.47319648, k:.688703, g:-2.4492836 };
if ( state == "Alabama" & earn == 1 & p125 == 0 ) return B = { mu:.37358981, k:.92754698, g:-3.3513341 };
if ( state == "Arkansas" & earn == 1 & p125 == 0 ) return B = { mu:.39530084, k:1.1918695, g:-4.1499953 };
if ( state == "Arizona" & earn == 1 & p125 == 0 ) return B = { mu:.43392578, k:1.6137738, g:-3.9742248 };
if ( state == "California" & earn == 1 & p125 == 0 ) return B = { mu:.50367337, k:1.2889068, g:-3.0512588 };
if ( state == "Colorado" & earn == 1 & p125 == 0 ) return B = { mu:.50737643, k:1.5406419, g:-3.3302071 };
if ( state == "Connecticut" & earn == 1 & p125 == 0 ) return B = { mu:.52744091, k:1.2109435, g:-3.395643 };
if ( state == "DC" & earn == 1 & p125 == 0 ) return B = { mu:.297187, k:.8174262, g:-2.3020966 };
if ( state == "Delaware" & earn == 1 & p125 == 0 ) return B = { mu:.48875934, k:.93914074, g:-2.7149875 };
if ( state == "Florida" & earn == 1 & p125 == 0 ) return B = { mu:.49584126, k:1.0256608, g:-3.1764097 };
if ( state == "Georgia" & earn == 1 & p125 == 0 ) return B = { mu:.40560222, k:1.0517774, g:-2.7131264 };
if ( state == "Hawaii" & earn == 1 & p125 == 0 ) return B = { mu:.52460355, k:.592852, g:-1.8384994 };
if ( state == "Iowa" & earn == 1 & p125 == 0 ) return B = { mu:.47323602, k:.66942859, g:-3.927798 };
if ( state == "Idaho" & earn == 1 & p125 == 0 ) return B = { mu:.50344443, k:1.3435614, g:-4.6619878 };
if ( state == "Illinois" & earn == 1 & p125 == 0 ) return B = { mu:.54794014, k:1.6551445, g:-4.3093476 };
if ( state == "Indiana" & earn == 1 & p125 == 0 ) return B = { mu:.39230636, k:.85964972, g:-3.4035079 };
if ( state == "Kansas" & earn == 1 & p125 == 0 ) return B = { mu:.37975174, k:.81100339, g:-3.5141363 };
if ( state == "Kentucky" & earn == 1 & p125 == 0 ) return B = { mu:.37999746, k:.70695972, g:-2.6281192 };
if ( state == "Louisiana" & earn == 1 & p125 == 0 ) return B = { mu:.35949767, k:1.1919162, g:-3.740675 };
if ( state == "Massachusetts" & earn == 1 & p125 == 0 ) return B = { mu:.436896, k:.88835299, g:-3.1887765 };
if ( state == "Maryland" & earn == 1 & p125 == 0 ) return B = { mu:.59786463, k:1.6508083, g:-3.0778658 };
if ( state == "Maine" & earn == 1 & p125 == 0 ) return B = { mu:.42835346, k:1.0000312, g:-3.879988 };
if ( state == "Michigan" & earn == 1 & p125 == 0 ) return B = { mu:.38045791, k:.63760263, g:-3.0666802 };
if ( state == "Minnesota" & earn == 1 & p125 == 0 ) return B = { mu:.42731816, k:.932881, g:-3.9395947 };
if ( state == "Missouri" & earn == 1 & p125 == 0 ) return B = { mu:.38032535, k:1.1961356, g:-4.7357802 };
if ( state == "Mississippi" & earn == 1 & p125 == 0 ) return B = { mu:.35392302, k:1.1101961, g:-3.1741934 };
if ( state == "Montana" & earn == 1 & p125 == 0 ) return B = { mu:.37828261, k:1.0408605, g:-4.5693364 };
if ( state == "North Carolina" & earn == 1 & p125 == 0 ) return B = { mu:.43080437, k:1.1304619, g:-3.5776889 };
if ( state == "North Dakota" & earn == 1 & p125 == 0 ) return B = { mu:.42441794, k:1.2941689, g:-3.9507103 };
if ( state == "Nebraska" & earn == 1 & p125 == 0 ) return B = { mu:.5726952, k:.75445002, g:-3.0359466 };
if ( state == "New Hampshire" & earn == 1 & p125 == 0 ) return B = { mu:.59019017, k:1.3229191, g:-4.1217608 };
if ( state == "New Jersey" & earn == 1 & p125 == 0 ) return B = { mu:.61538982, k:1.4972841, g:-3.1931028 };
if ( state == "New Mexico" & earn == 1 & p125 == 0 ) return B = { mu:.35898405, k:.65540713, g:-2.0497131 };
if ( state == "Nevada" & earn == 1 & p125 == 0 ) return B = { mu:.58941418, k:1.6717321, g:-3.5777571 };
if ( state == "New York" & earn == 1 & p125 == 0 ) return B = { mu:.46782318, k:1.201575, g:-2.8052964 };
if ( state == "Ohio" & earn == 1 & p125 == 0 ) return B = { mu:.42141107, k:.90358835, g:-3.4983308 };
if ( state == "Oklahoma" & earn == 1 & p125 == 0 ) return B = { mu:.36983207, k:.62659383, g:-3.1943748 };
if ( state == "Oregon" & earn == 1 & p125 == 0 ) return B = { mu:.50481212, k:1.3526222, g:-3.7653334 };
if ( state == "Pennsylvania" & earn == 1 & p125 == 0 ) return B = { mu:.49207479, k:.99637759, g:-3.3898437 };
if ( state == "Rhode Island" & earn == 1 & p125 == 0 ) return B = { mu:.48818192, k:1.4340456, g:-3.6201758 };
if ( state == "South Carolina" & earn == 1 & p125 == 0 ) return B = { mu:.29092389, k:.49230689, g:-2.4840717 };
if ( state == "South Dakota" & earn == 1 & p125 == 0 ) return B = { mu:.35751536, k:.58068812, g:-2.8489673 };
if ( state == "Tennessee" & earn == 1 & p125 == 0 ) return B = { mu:.30242169, k:.60944372, g:-2.4625585 };
if ( state == "Texas" & earn == 1 & p125 == 0 ) return B = { mu:.39876428, k:1.0153449, g:-3.266001 };
if ( state == "The United States" & earn == 1 & p125 == 0 ) return B = { mu:.45428011, k:1.0494759, g:-3.2512801 };
if ( state == "Utah" & earn == 1 & p125 == 0 ) return B = { mu:.47978517, k:.74024045, g:-2.5797184 };
if ( state == "Virginia" & earn == 1 & p125 == 0 ) return B = { mu:.54859352, k:2.0003479, g:-3.8403883 };
if ( state == "Vermont" & earn == 1 & p125 == 0 ) return B = { mu:.51296473, k:.93844521, g:-3.755105 };
if ( state == "Washington" & earn == 1 & p125 == 0 ) return B = { mu:.51808798, k:1.0822989, g:-4.132268 };
if ( state == "Wisconsin" & earn == 1 & p125 == 0 ) return B = { mu:.50554454, k:1.2682836, g:-3.8925378 };
if ( state == "West Virginia" & earn == 1 & p125 == 0 ) return B = { mu:.42497638, k:.71399105, g:-2.6584787 };
if ( state == "Wyoming" & earn == 1 & p125 == 0 ) return B = { mu:.54489422, k:2.1725659, g:-5.5153089 };
if ( state == "Alaska" & earn == 0 & p125 == 1 ) return B = { mu:.36358255, k:2.2156224, g:-3.3974609 };
if ( state == "Alabama" & earn == 0 & p125 == 1 ) return B = { mu:.2866309, k:1.9516376, g:-3.1918364 };
if ( state == "Arkansas" & earn == 0 & p125 == 1 ) return B = { mu:.3124643, k:4.1357889, g:-4.4848061 };
if ( state == "Arizona" & earn == 0 & p125 == 1 ) return B = { mu:.32092866, k:3.2026851, g:-3.7490075 };
if ( state == "California" & earn == 0 & p125 == 1 ) return B = { mu:.38727185, k:3.7981851, g:-3.5302098 };
if ( state == "Colorado" & earn == 0 & p125 == 1 ) return B = { mu:.36531499, k:2.4306569, g:-3.2383504 };
if ( state == "Connecticut" & earn == 0 & p125 == 1 ) return B = { mu:.39516193, k:3.2368665, g:-3.9331231 };
if ( state == "DC" & earn == 0 & p125 == 1 ) return B = { mu:.24078465, k:2.5105352, g:-2.8429179 };
if ( state == "Delaware" & earn == 0 & p125 == 1 ) return B = { mu:.45841792, k:4.4806657, g:-3.7909617 };
if ( state == "Florida" & earn == 0 & p125 == 1 ) return B = { mu:.37024355, k:2.3056686, g:-3.2053053 };
if ( state == "Georgia" & earn == 0 & p125 == 1 ) return B = { mu:.32657537, k:2.7386963, g:-3.2520008 };
if ( state == "Hawaii" & earn == 0 & p125 == 1 ) return B = { mu:.53227407, k:3.5046959, g:-3.1620352 };
if ( state == "Iowa" & earn == 0 & p125 == 1 ) return B = { mu:.39072308, k:3.2119391, g:-4.6789908 };
if ( state == "Idaho" & earn == 0 & p125 == 1 ) return B = { mu:.38488027, k:7.2890501, g:-5.7676015 };
if ( state == "Illinois" & earn == 0 & p125 == 1 ) return B = { mu:.39687547, k:3.6066852, g:-4.0875077 };
if ( state == "Indiana" & earn == 0 & p125 == 1 ) return B = { mu:.28240857, k:2.0297697, g:-3.6143878 };
if ( state == "Kansas" & earn == 0 & p125 == 1 ) return B = { mu:.23444097, k:1.8898169, g:-3.5560441 };
if ( state == "Kentucky" & earn == 0 & p125 == 1 ) return B = { mu:.28960213, k:2.8061373, g:-3.6887941 };
if ( state == "Louisiana" & earn == 0 & p125 == 1 ) return B = { mu:.20767422, k:2.0104125, g:-3.3411179 };
if ( state == "Massachusetts" & earn == 0 & p125 == 1 ) return B = { mu:.38652414, k:4.2841892, g:-4.2097764 };
if ( state == "Maryland" & earn == 0 & p125 == 1 ) return B = { mu:.52048045, k:7.6615734, g:-4.3345819 };
if ( state == "Maine" & earn == 0 & p125 == 1 ) return B = { mu:.3229692, k:3.7781146, g:-4.7184029 };
if ( state == "Michigan" & earn == 0 & p125 == 1 ) return B = { mu:.2993429, k:2.2186747, g:-3.6010313 };
if ( state == "Minnesota" & earn == 0 & p125 == 1 ) return B = { mu:.3751809, k:5.1189408, g:-4.8039241 };
if ( state == "Missouri" & earn == 0 & p125 == 1 ) return B = { mu:.31621915, k:4.0175595, g:-4.6554246 };
if ( state == "Mississippi" & earn == 0 & p125 == 1 ) return B = { mu:.2702556, k:3.964287, g:-3.9692912 };
if ( state == "Montana" & earn == 0 & p125 == 1 ) return B = { mu:.31474906, k:3.1086679, g:-4.0358801 };
if ( state == "North Carolina" & earn == 0 & p125 == 1 ) return B = { mu:.29203102, k:2.9157977, g:-3.7247939 };
if ( state == "North Dakota" & earn == 0 & p125 == 1 ) return B = { mu:.33171451, k:5.9476347, g:-5.8367362 };
if ( state == "Nebraska" & earn == 0 & p125 == 1 ) return B = { mu:.38454965, k:1.8526626, g:-3.6790216 };
if ( state == "New Hampshire" & earn == 0 & p125 == 1 ) return B = { mu:.52657241, k:5.2034802, g:-4.7730684 };
if ( state == "New Jersey" & earn == 0 & p125 == 1 ) return B = { mu:.48314685, k:4.2186403, g:-3.4910862 };
if ( state == "New Mexico" & earn == 0 & p125 == 1 ) return B = { mu:.32158059, k:2.2220378, g:-2.7473416 };
if ( state == "Nevada" & earn == 0 & p125 == 1 ) return B = { mu:.44288498, k:2.8185897, g:-3.5060785 };
if ( state == "New York" & earn == 0 & p125 == 1 ) return B = { mu:.32804999, k:3.0501649, g:-3.3168833 };
if ( state == "Ohio" & earn == 0 & p125 == 1 ) return B = { mu:.3471362, k:3.2145169, g:-4.3568549 };
if ( state == "Oklahoma" & earn == 0 & p125 == 1 ) return B = { mu:.27017221, k:2.2200401, g:-3.9296222 };
if ( state == "Oregon" & earn == 0 & p125 == 1 ) return B = { mu:.35465997, k:3.0563133, g:-3.8464439 };
if ( state == "Pennsylvania" & earn == 0 & p125 == 1 ) return B = { mu:.36914423, k:2.9032309, g:-3.8669767 };
if ( state == "Rhode Island" & earn == 0 & p125 == 1 ) return B = { mu:.34384874, k:4.5551028, g:-4.3588457 };
if ( state == "South Carolina" & earn == 0 & p125 == 1 ) return B = { mu:.31383085, k:2.6009889, g:-3.4365819 };
if ( state == "South Dakota" & earn == 0 & p125 == 1 ) return B = { mu:.24506961, k:2.4954867, g:-4.4717774 };
if ( state == "Tennessee" & earn == 0 & p125 == 1 ) return B = { mu:.27599582, k:2.4956889, g:-3.503005 };
if ( state == "Texas" & earn == 0 & p125 == 1 ) return B = { mu:.30098927, k:2.6956854, g:-3.5033116 };
if ( state == "The United States" & earn == 0 & p125 == 1 ) return B = { mu:.34614408, k:3.0083354, g:-3.6865184 };
if ( state == "Utah" & earn == 0 & p125 == 1 ) return B = { mu:.35518444, k:1.4739696, g:-3.219393 };
if ( state == "Virginia" & earn == 0 & p125 == 1 ) return B = { mu:.41683003, k:4.2818456, g:-3.9273677 };
if ( state == "Vermont" & earn == 0 & p125 == 1 ) return B = { mu:.36745363, k:2.6451199, g:-3.9690475 };
if ( state == "Washington" & earn == 0 & p125 == 1 ) return B = { mu:.41659439, k:4.5952706, g:-4.7330713 };
if ( state == "Wisconsin" & earn == 0 & p125 == 1 ) return B = { mu:.4267512, k:8.416995, g:-5.6776977 };
if ( state == "West Virginia" & earn == 0 & p125 == 1 ) return B = { mu:.28570572, k:2.0822384, g:-3.1436498 };
if ( state == "Wyoming" & earn == 0 & p125 == 1 ) return B = { mu:.40261501, k:3.0375943, g:-4.067028 };
if ( state == "Alaska" & earn == 0 & p125 == 0 ) return B = { mu:.46708167, k:1.0908511, g:-3.2204835 };
if ( state == "Alabama" & earn == 0 & p125 == 0 ) return B = { mu:.30969316, k:.94543165, g:-3.121702 };
if ( state == "Arkansas" & earn == 0 & p125 == 0 ) return B = { mu:.39206082, k:1.8470417, g:-5.3994174 };
if ( state == "Arizona" & earn == 0 & p125 == 0 ) return B = { mu:.40192181, k:1.7646883, g:-3.76968 };
if ( state == "California" & earn == 0 & p125 == 0 ) return B = { mu:.47350645, k:1.704929, g:-3.2983258 };
if ( state == "Colorado" & earn == 0 & p125 == 0 ) return B = { mu:.43506089, k:1.1734586, g:-2.8865263 };
if ( state == "Connecticut" & earn == 0 & p125 == 0 ) return B = { mu:.47126308, k:1.5798528, g:-3.7565713 };
if ( state == "DC" & earn == 0 & p125 == 0 ) return B = { mu:.29722646, k:1.3031201, g:-2.5931168 };
if ( state == "Delaware" & earn == 0 & p125 == 0 ) return B = { mu:.51184905, k:1.7337252, g:-3.3597717 };
if ( state == "Florida" & earn == 0 & p125 == 0 ) return B = { mu:.454956, k:1.1499268, g:-3.2648685 };
if ( state == "Georgia" & earn == 0 & p125 == 0 ) return B = { mu:.39974999, k:1.5884165, g:-3.3070545 };
if ( state == "Hawaii" & earn == 0 & p125 == 0 ) return B = { mu:.57541871, k:1.2726686, g:-2.5579851 };
if ( state == "Iowa" & earn == 0 & p125 == 0 ) return B = { mu:.4742355, k:1.1893792, g:-8.3094006 };
if ( state == "Idaho" & earn == 0 & p125 == 0 ) return B = { mu:.45504916, k:1.7491274, g:-4.4003468 };
if ( state == "Illinois" & earn == 0 & p125 == 0 ) return B = { mu:.48219281, k:1.5369365, g:-3.8930776 };
if ( state == "Indiana" & earn == 0 & p125 == 0 ) return B = { mu:.31950459, k:1.0668643, g:-3.5857065 };
if ( state == "Kansas" & earn == 0 & p125 == 0 ) return B = { mu:.32739317, k:.96436203, g:-3.6120167 };
if ( state == "Kentucky" & earn == 0 & p125 == 0 ) return B = { mu:.37657061, k:1.3108675, g:-3.7570741 };
if ( state == "Louisiana" & earn == 0 & p125 == 0 ) return B = { mu:.28967687, k:1.3974586, g:-3.9900112 };
if ( state == "Massachusetts" & earn == 0 & p125 == 0 ) return B = { mu:.45679063, k:2.1405849, g:-4.2793522 };
if ( state == "Maryland" & earn == 0 & p125 == 0 ) return B = { mu:.58806312, k:2.3981879, g:-3.2743607 };
if ( state == "Maine" & earn == 0 & p125 == 0 ) return B = { mu:.39428198, k:1.6220412, g:-4.4824009 };
if ( state == "Michigan" & earn == 0 & p125 == 0 ) return B = { mu:.34849173, k:1.0196048, g:-3.5523512 };
if ( state == "Minnesota" & earn == 0 & p125 == 0 ) return B = { mu:.42152613, k:1.5164598, g:-4.1492581 };
if ( state == "Missouri" & earn == 0 & p125 == 0 ) return B = { mu:.38503826, k:1.7430027, g:-4.6735444 };
if ( state == "Mississippi" & earn == 0 & p125 == 0 ) return B = { mu:.32451606, k:1.3896374, g:-3.2293532 };
if ( state == "Montana" & earn == 0 & p125 == 0 ) return B = { mu:.36864206, k:1.5751976, g:-4.4750652 };
if ( state == "North Carolina" & earn == 0 & p125 == 0 ) return B = { mu:.37075317, k:1.2699181, g:-3.7204537 };
if ( state == "North Dakota" & earn == 0 & p125 == 0 ) return B = { mu:.40057459, k:1.8431869, g:-4.6139803 };
if ( state == "Nebraska" & earn == 0 & p125 == 0 ) return B = { mu:.43260843, k:.61492604, g:-2.7960107 };
if ( state == "New Hampshire" & earn == 0 & p125 == 0 ) return B = { mu:.56315511, k:2.6230514, g:-6.0462999 };
if ( state == "New Jersey" & earn == 0 & p125 == 0 ) return B = { mu:.55739909, k:1.683444, g:-3.4880493 };
if ( state == "New Mexico" & earn == 0 & p125 == 0 ) return B = { mu:.37916982, k:.99128085, g:-2.4327798 };
if ( state == "Nevada" & earn == 0 & p125 == 0 ) return B = { mu:.53947806, k:1.6452286, g:-3.4926279 };
if ( state == "New York" & earn == 0 & p125 == 0 ) return B = { mu:.41354159, k:1.6048025, g:-3.2229037 };
if ( state == "Ohio" & earn == 0 & p125 == 0 ) return B = { mu:.40842834, k:1.5807673, g:-4.3193302 };
if ( state == "Oklahoma" & earn == 0 & p125 == 0 ) return B = { mu:.37159219, k:.98479098, g:-3.915674 };
if ( state == "Oregon" & earn == 0 & p125 == 0 ) return B = { mu:.42485657, k:1.4266771, g:-3.5313363 };
if ( state == "Pennsylvania" & earn == 0 & p125 == 0 ) return B = { mu:.44268033, k:1.4662971, g:-4.057898 };
if ( state == "Rhode Island" & earn == 0 & p125 == 0 ) return B = { mu:.42463052, k:2.1223896, g:-4.3182869 };
if ( state == "South Carolina" & earn == 0 & p125 == 0 ) return B = { mu:.35742167, k:.92135859, g:-3.0968637 };
if ( state == "South Dakota" & earn == 0 & p125 == 0 ) return B = { mu:.33587265, k:.91811341, g:-3.7007875 };
if ( state == "Tennessee" & earn == 0 & p125 == 0 ) return B = { mu:.34864694, k:1.2486323, g:-3.2781639 };
if ( state == "Texas" & earn == 0 & p125 == 0 ) return B = { mu:.37050143, k:1.1932907, g:-3.3125415 };
if ( state == "The United States" & earn == 0 & p125 == 0 ) return B = { mu:.42048708, k:1.411808, g:-3.584132 };
if ( state == "Utah" & earn == 0 & p125 == 0 ) return B = { mu:.42130774, k:.89940083, g:-3.3216672 };
if ( state == "Virginia" & earn == 0 & p125 == 0 ) return B = { mu:.49639127, k:1.9912634, g:-3.6077213 };
if ( state == "Vermont" & earn == 0 & p125 == 0 ) return B = { mu:.4557116, k:1.2869784, g:-4.1760516 };
if ( state == "Washington" & earn == 0 & p125 == 0 ) return B = { mu:.48568651, k:1.9330692, g:-4.8895493 };
if ( state == "Wisconsin" & earn == 0 & p125 == 0 ) return B = { mu:.53421968, k:4.0347338, g:-5.7184453 };
if ( state == "West Virginia" & earn == 0 & p125 == 0 ) return B = { mu:.35976461, k:.99518871, g:-3.2696915 };
if ( state == "Wyoming" & earn == 0 & p125 == 0 ) return B = { mu:.48792192, k:1.5145288, g:-3.9610214 };
	
}


function betaArray(expa, expb, G) {
	var Y = [];
	var Z = [];
	var Q = [];
	var thisone = null;
	var startingX = 0;
	var endingX = Number($('#xminmax2').limitslider("values"));
	var BBD = new BetaBinomialDistribution(expa, expb, Number($('#distbins2').limitslider("values")));
	var thismax = 0;
	var N = null;

	
	for (var i = 0; i <= G.dstep; i++) {
		thisy = BBD.density(i);
		Y.push(thisy);
	};
 
	for (var i = 0; i < Y.length; i++) {
		N = Math.round(Y[i]*2000);
		for (var j = 0; j <= N; j++) {
			Z.push([Math.random(),i*endingX/G.dstep]);
		};
	};
	Z = Z.sort();
	
	for (var i = 0; i<2000; i++) {
		Q.push(Z[i][1]);
	};
	
	return Q;
};

function setEquations() {

	$('.minout').html(Number($('#fminmax').limitslider("values")[0]) + ";");
	$('.maxout').html(Number($('#fminmax').limitslider("values")[1]) + ";");
	$('.dout').html(Number($('#D').limitslider("values"))/100 + ";");
	$('.tLout').html(Number($('#lowerupper').limitslider("values")[0]) + ";");
	$('.tUout').html(Number($('#lowerupper').limitslider("values")[1]) + ";");
	$('.sLout1').html(Number($('#uv').limitslider("values")[0])); 
	$('.sUout1').html(Number($('#uv').limitslider("values")[1]));
	$('.sLout2').html(Math.pow(Number($('#uv').limitslider("values")[0]),2) + ";"); 
	$('.sUout2').html(Math.pow(Number($('#uv').limitslider("values")[1]),2));
	$('.stateout').html("(" + $('#statemenu').val() + ", ");
	$('.alphaout').html(Number($('.ab').limitslider("values")[0]));
	$('.betaout').html(Number($('.ab').limitslider("values")[1]));
	$('.xmaxout').html(Number($('#xminmax2').limitslider("values")));
	$('.xminout').html(0);
	$('.binout').html(Number($('#distbins2').limitslider("values")));
	
	var B = betaLookup($('#statemenu').val(), $('#distearn1').prop('checked'), $('#p125check1').prop('checked'));

	$('.kout').html(Math.round(B.k*100)/100);
	$('.gout').html(Math.round(B.g*100)/100);
	$('.muout').html(Math.round(B.mu*100)/100);
	
	if($('#distearn1').prop('checked')==true) $('.availableout').html("based on available family income only")
	else $('.availableout').html("based on all family income");
	if($('#p125check1').prop('checked')==true) $('.p125out').html(" and a threshold equal to 125% of the federal poverty level).")
	else $('.p125out').html(" and a threshold equal to the federal poverty level).");
	
};
