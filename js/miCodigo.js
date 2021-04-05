// JavaScript Document

var sv = null;
$(document).ready(function() {
	
	//ACCIONES PARA LAS FOTOS
	var anchoIni= $(".ft_sup").width();
	var anchoFin= $(window).width();
	if (anchoIni<anchoFin) {
		$("img").css({"margin-left":"-900px"});
	};
	
	$(".verMas").click(function(){
		$(".sec_a").css("height","auto");
		$(".verMenos").css("display","block");
		$(this).css("display","none");
	})
	$(".verMenos").click(function(){
		$(".sec_a").css("height","650px");
		$(".verMas").css("display","block");
		$(this).css("display","none");
			$("body").animate({
			'scrollTop': $('.sec_a').offset().top-70
		}, 500);
	})
	
	$(".verMas_branding").click(function(){
		$(".sec_c").css("height","auto");
		$(".verMenos_branding").css("display","block");
		$(this).css("display","none");
	})
	$(".verMenos_branding").click(function(){
		$(".sec_c").css("height","650px");
		$(".verMas_branding").css("display","block");
		$(this).css("display","none");
			$("body").animate({
			'scrollTop': $('.sec_c').offset().top-70
		}, 500);
	})
	
	//ACCIONES DE SCROLL
	$(".bt").click(function(){
		$(".bt").removeClass("active");
		$(this).addClass("active");
	});

	$(".logoGio").click(function(){
		$("body").animate({
			'scrollTop': $('body').offset().top
		}, 500);
	});
	
	$("._a").click(function() {
		$("body").animate({
			'scrollTop': $('.sec_a').offset().top-70
		}, 500);
	});
	$("._b").click(function() {
		$("body").animate({
			'scrollTop': $('.sec_b').offset().top-70
		}, 500);
	});
	$("._c").click(function() {
		$("body").animate({
			'scrollTop': $('.sec_c').offset().top-70
		}, 500);
	});
	$("._d").click(function() {
		$("body").animate({
			'scrollTop': $('.sec_d').offset().top-70
		}, 500);
	});
	$("._e").click(function() {
		$("body").animate({
			'scrollTop': $('.sec_e').offset().top-70
		}, 500);
	});
	
	
//ACCIONES PARA BOTONES DE VIDEOS
	
	
	$(".btn_v").click(function(){
		$(".btn_v").removeClass("v_activo");
		$(this).addClass("v_activo");
	});

	$(".v_a").click(function(){
		$(".element video").attr("src","video/video_uno.mp4");
	});
	$(".v_b").click(function(){
		$(".element video").attr("src","video/video_dos.mp4");
	});
	$(".v_c").click(function(){
		$(".element video").attr("src","video/video_tres.mp4");
	});
	$(".v_d").click(function(){
		$(".element video").attr("src","video/video_cuatro.mp4");
	});
	$(".v_e").click(function(){
		$(".element video").attr("src","video/video_cinco.mp4");
	});
    
//ACCIONES  WEB

	$(".w_a").click(function(){
		$(".btn_w").removeClass("w_active");
		$(this).addClass("w_active");
		$(".cont_item").removeClass("animated bounceInLeft");
		$(".cont_item").css("display","none");
		$(".web_a").css("display","block");
		$(".web_a").addClass("animated bounceInLeft");
	});
	$(".w_b").click(function(){
		$(".btn_w").removeClass("w_active");
		$(this).addClass("w_active");
		$(".cont_item").removeClass("animated bounceInLeft");
		$(".cont_item").css("display","none");
		$(".web_b").css("display","block");
		$(".web_b").addClass("animated bounceInLeft");
	});
	$(".w_c").click(function(){
		$(".btn_w").removeClass("w_active");
		$(this).addClass("w_active");
		$(".cont_item").removeClass("animated bounceInLeft");
		$(".cont_item").css("display","none");
		$(".web_c").css("display","block");
		$(".web_c").addClass("animated bounceInLeft");
	});
	$(".w_d").click(function(){
		$(".btn_w").removeClass("w_active");
		$(this).addClass("w_active");
		$(".cont_item").removeClass("animated bounceInLeft");
		$(".cont_item").css("display","none");
		$(".web_d").css("display","block");
		$(".web_d").addClass("animated bounceInLeft");
	});
	$(".w_e").click(function(){
		$(".btn_w").removeClass("w_active");
		$(this).addClass("w_active");
		$(".cont_item").removeClass("animated bounceInLeft");
		$(".cont_item").css("display","none");
		$(".web_e").css("display","block");
		$(".web_e").addClass("animated bounceInLeft");
	});


});