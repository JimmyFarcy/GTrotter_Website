/*
	$(function()
	{
		var pop = function()
		{
			$('#screen').css({"display": "block", opacity: 0.7, "width":$(document).width(),"height":$(document).height()});
			$('#screen').click(function(){$(this).css("display", "none");$('#screen').css("display", "none");$("#people_talk").css("display", "none")});
			$('#people_talk').css({"display": "block"});
//			$('#people_talk').css({"display": "block"}).click(function(){$(this).css("display", "none");$('#screen').css("display", "none")});
			$('#button').css({"z-index" : "20"});
		}
//		$('#button').click(pop);
		$(window).resize(function()
		{
			$('#people_talk').css("display") == 'block'?pop.call($('#button')):"";
		});
	});
*/

	function teamate_talk(id)
	{
		var curr = '#teamate'+id;
		for (var info = 0; info < 9; info++)
			$('#teamate'+info).css({"z-index" : "1"});

		$('#screen').css({"display": "block", opacity: 0.7, "width":$(document).width(),"height":$(document).height()});
		$('#screen').click(function(){$(this).css("display", "none");$('#screen').css("display", "none");$("#people_talk").css("display", "none")});
		$('#people_talk').css({"display": "block"});
		$(curr).css({"z-index" : "11"});
	}

	function teamate_talk_2(id)
	{
		var curr = '#teamate'+id;
		for (var info = 0; info < 9; info++)
			$('#teamate'+info).css({"z-index" : "1"});

		$('#screen').css({"display": "block", opacity: 0.7, "width":$(document).width(),"height":$(document).height()});
		//$('#screen').click(function(){$(this).css("display", "none");$('#screen').css("display", "none");$("#people_talk").css("display", "none")});
		$('#people_talk').css({"display": "block"});
		$(curr).css({"z-index" : "11"});
	}
	
	function teamate_stop_talk()
	{
		$('#screen').css("display", "none");
		$("#people_talk").css("display", "none");
	}