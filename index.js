imagens = document.getElementsByClassName("imgcontainer");
links = document.getElementsByTagName("a");

for(i=0;i<imagens.length;i++)
{
    let link = links[i].href
    imagens[i].onclick = function(){window.open(link)};
}