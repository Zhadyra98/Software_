$(function(){
	$('.fancy').fancybox();
});

$('.pop_gallery').each(function(){
	var $prevImg=$('.pop_gallery_prev span', this);
	var $mainImg=$('.pop_gallery_main img', this);
	$prevImg.click(function(){
		$mainImg.eq($(this).index()).addClass('active').siblings().removeClass('active');
		$(this).addClass('active').siblings().removeClass('active');
	}).eq(0).click();
});

$('.popular').each(function(){
	var $tabBlock=$('.pop_all_tabs_block ul', this);
	var $tabBtn=$('.pop_tab_btns a', this);
	$tabBtn.click(function(){
		$tabBlock.eq($(this).index()).addClass('active').fadeIn().siblings().removeClass('active').hide();
		$(this).addClass('active').siblings().removeClass('active');
		return false;
	}).eq(0).click();

});