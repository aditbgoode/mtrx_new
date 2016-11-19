(function init(){
	$('.art').hide();
	$('.the_img').hide();
})();

function Zlider(){
	this.interval_slide = null;
	this.counter = 0;
	this.main_class = '.float';
	this.data_class = '.art';
	this.image_class = '.the_img';
	this.main_navigation = '.art_nav_main';
	this.max = $(this.data_class).length;
	console.log(this.max);
}

Zlider.prototype.create_nav = function(){
	function elementFactory(_type, _class, _attr){
		var el = document.createElement(_type);
		$(el).addClass(_class);
		if(_attr != undefined)
			$(el).attr(_attr.key, _attr.value);

		return el;
	}
	var container_nav_el = elementFactory('ul', 'art_nav_main', undefined);
	for(var i = 0; i < this.max; i++){
		var node = elementFactory('a', 'child_nav', undefined);
		$(node).appendTo(container_nav_el);
	}

	$(container_nav_el).appendTo(this.main_class);
}

Zlider.prototype.start = function(){
	var self = this;
	this.create_nav();
	$('a.child_nav').click(function(e){
		self.do_interval();
		var list_of_children = $(this).parent().children();
		console.log(list_of_children);
		this.id = "art999";
		var index = 0;
		for(var i = 0; i < list_of_children.length; i++){
			if(list_of_children[i].id == "art999"){
				this.id = "";
				index = i;
				break;
			}
		}
		self.counter = index;
		self.show_me(index);
		e.preventDefault();
	});

	this.show_me(this.counter);
	this.do_interval();
}

Zlider.prototype.show_me = function(n){
	$(this.data_class).hide();
	$(this.image_class).fadeOut();
	$($(this.data_class)[n]).fadeIn("fast");
	$($(this.image_class)[n]).fadeIn("slow");

	var child = $(this.main_navigation).children();
	
	for(var i = 0; i < child.length; i++)
		$(child[i]).removeClass('active_color');

	$(child[n]).addClass('active_color');
}

Zlider.prototype.do_interval = function(){
	clearInterval(this.interval_slide);
	var self = this;
	this.interval_slide = setInterval(function() {
		self.counter = (self.counter + 1) % self.max;
		self.show_me(self.counter);
	}, 4000);
}

$(document).ready(function(){
	(new Zlider()).start();
	
	$('.list_member').hide();
	$('.title').click(function(){
		if($(this).next().is(":visible")){
			$(this).removeClass('right_apps_expanded').addClass('right_apps_hide');
			$(this).next().slideUp(250);
		}else{
			$(this).removeClass('right_apps_hide').addClass('right_apps_expanded');
			$(this).next().slideDown(300);
		}
	})
	$(".close").click(function(){
		$(".right_apps").addClass("right_apps_main_hide");
	});

	$(".burger").click(function(){
		$(".right_apps").removeClass("right_apps_main_hide");
	});
})