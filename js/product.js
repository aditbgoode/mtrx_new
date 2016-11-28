function showModal(indx){
	console.log(indx);
	var src = "aset/file/8 zoom/t";
	src = src.concat(indx,".png");
	$("#img-modal-product").attr("src",src);
	$("#bg-modal").removeClass("visibility-hidden");
	$("#img-modal-product").hide().fadeIn(1000);
}

function hideModal(){
	$("#bg-modal").addClass("visibility-hidden");
}