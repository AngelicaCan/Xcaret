$(document).ready(function(){
	$.get( "https://experienciasxcaret.github.io/Developers/api/front.json", function( data ) {
		/*Llenamos informacion sobre los videos */
		//alert(data[0].seccion)
		$("#section-title").append("<li class=\"active\"><a href=\"#\">" + data[0].seccion + "...</a></li>"); 
		/* Insertar el video de youtube cortando la URL y poniendole autoplay */
		$(".embed-responsive-item").attr('src', getVidId(data[0].videoYT)); 
		$("#info-general").append("<h4>" + data[0].tituloH1 + "</h4>");
		$("#info-general").append("" + data[0].descripcion + "");
		/* Realizamos la sentencia para insertar de forma dinamica las imagenes en la galeria */
		$.each(data[0].atractivos,function(index, value){ 
			$("#attractive").append("<div class=\"media\"><a class=\"pull-left\" href=\"" + value.link + "\"><img class=\"media-object img-rounded\" alt=\"" + value.alt + "\" src=\"" + value.img + "\"> </a><div class=\"media-body\"><h5 class=\"media-heading\">" + value.titulo + "</h4>" + value.desc + "</div></div>");
		});
	});
});
        


