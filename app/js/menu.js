function Login_dropdown()
{
	for (var info = 0; info < 9; info++)
		$('#teamate'+info).css({"z-index" : "1"});

	$('#screen').css({"display": "block", opacity: 0.7, "width":$(document).width(),"height":$(document).height()});
	$('#screen').click(function(){$(this).css("display", "none");$('#screen').css("display", "none");$("#login_box").css("display", "none")});
	$('#login_box').css({"display": "block"});
	$('#screen').css({"z-index" : "11"});
}