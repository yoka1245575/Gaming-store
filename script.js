var menuicon = document.getElementById('menu-item');
var list = document.getElementById('list');
var menustatus;
menustatus = 'closed';

menuicon.onclick = function(){
   if(menustatus == 'closed'){
       menuicon.src = 'images/close.png';
       list.style.display = 'block';
       menustatus = 'opened';
      }else{
        menuicon.src = 'images/menu.png';
        list.style.display = 'none';
        menustatus = 'closed'; 
      }
}
