/* Función para extraer la URL correcta para colocar el video de youtube en nuestra plantilla */
/* Extraido en https://stackoverflow.com/questions/15272857/load-denied-by-x-frame-options-http-www-youtube-com-v-g5rm5strmxy-does-not-pe por "Mardok"*/
var getVidId = function(url) 
{
    var vidId;
    if(url.indexOf("youtube.com/watch?v=") !== -1)//https://m.youtube.com/watch?v=e3S9KINoH2M
    {
        vidId = url.substr(url.indexOf("youtube.com/watch?v=") + 20);
    }
    else if(url.indexOf("youtube.com/watch/?v=") !== -1)//https://m.youtube.com/watch/?v=e3S9KINoH2M
    {
        vidId = url.substr(url.indexOf("youtube.com/watch/?v=") + 21);
    }
    else if(url.indexOf("youtu.be") !== -1)
    {
        vidId = url.substr(url.indexOf("youtu.be") + 9);
    }
    else if(url.indexOf("www.youtube.com/embed/") !== -1)
    {
        vidId = url.substr(url.indexOf("www.youtube.com/embed/") + 22);
    }
    else if(url.indexOf("?v=") !== -1)// http://m.youtube.com/?v=tbBTNCfe1Bc
    {
        vidId = url.substr(url.indexOf("?v=")+3, 11);
    }
    else
    {
        console.warn("YouTubeUrlNormalize getVidId not a youTube Video: "+url);
        vidId = null;
    }

    if(vidId.indexOf("&") !== -1)
    {
        vidId = vidId.substr(0, vidId.indexOf("&") );
    }
    return "http://www.youtube.com/embed/" + vidId + "?autoplay=1"; /* Agregamos el autoplay como nos lo fue requerido */
}; 
