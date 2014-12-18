function call_map()
{
	$(function(){
		$('#world-map').vectorMap({
			map: 'world_mill_en',
			series: {
				regions: [{
					values: gdpData,
					scale: ['#C8EEFF', '#0071A4'],
					normalizeFunction: 'polynomial'
				}]
			},
				onRegionTipShow: function(e, el, code){
				el.html(el.html()+' '+gdpData[code]+' Photos');
			}
		});
	}); 
}