$('.bar .value').each((i,e)=>{
	 $(e).css('height',e.innerHTML)
})


for(let i=0;i<$('.sub-menu').length;i++){
    $('.sub-menu')[i].onoff=false;
	$('.sub-menu')[i].onclick=function(){
		
		if(this.onOff){
			$('.sub-menu a')[i].classList.remove('active');
		    $('.sub')[i].style.display='none';
		    this.onOff=true
		}else{
			$('.sub-menu a')[i].classList.add('active');
		    $('.sub')[i].style.display='block';
		    this.onOff=false
		}	
	}
}
