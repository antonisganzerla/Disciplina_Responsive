
$(document).ready(function(){
	$("#aumentar-fonte").click(function () {
		var size = $("#dynamicFont p").css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) + 2;

		var sizeImg = $(".imagem-aluno").css('width');
		sizeImg = sizeImg.replace('px', '');
		sizeImg = parseInt(sizeImg) + 3;

		$("#dynamicFont p").animate({'font-size' : size + 'px'});
		$("#dynamicFont td").animate({'font-size' : size + 'px'});
		$("#dynamicFont th").animate({'font-size' : size + 'px'});
		$("#dynamicFont h4").animate({'font-size' : size + 'px'});

		$(".imagem-aluno").animate({'width': sizeImg + 'px'});
		$(".imagem-aluno").animate({'height': sizeImg + 'px'});

		$(".texto-botao").animate({'font-size' : size + 'px'});
		return false;
	});

	$("#diminuir-fonte").click(function () {
		var size = $("#dynamicFont p").css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) - 2;

		var sizeImg = $(".imagem-aluno").css('width');
		sizeImg = sizeImg.replace('px', '');
		sizeImg = parseInt(sizeImg) - 3;

		$("#dynamicFont p").animate({'font-size' : size + 'px'});
		$("#dynamicFont td").animate({'font-size' : size + 'px'});
		$("#dynamicFont th").animate({'font-size' : size + 'px'});
		$("#dynamicFont h4").animate({'font-size' : size + 'px'});
		
		$(".imagem-aluno").animate({'width': sizeImg + 'px'});
		$(".imagem-aluno").animate({'height': sizeImg + 'px'});

		$(".texto-botao").animate({'font-size' : size + 'px'});
		return false;
	});
});