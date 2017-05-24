function init(){
var app = angular.module("app", ["ngAnimate"]);

app.controller("mainCtrl", function($scope) {
	$scope.boxes = [
		{
			name: "Friends",
			image: "images/galeria/gall-1.jpg"
		},
		{
			name: "Free",
			image: "images/galeria/gall-7.jpg"
		},
		{
			name: "Explore",
			image: "images/galeria/gall-6.jpg"
		},
		{
			name: "Vast",
			image: "https://source.unsplash.com/WLUHO9A_xik/900x900"
		},
		{
			name: "Playful",
			image: "https://source.unsplash.com/b2-fBVrfx0o/900x900"
		},
		{
			name: "Grand",
			image: "https://source.unsplash.com/Ixp4YhCKZkI/900x900"
		},
		
	];

	$scope.selected = [];
	$scope.selectBox = function(item, position) {
		$scope.selected = [
			{
				item: item,
				position: position
			}
		];
		$scope.$apply();
	};
	$scope.clearSelection = function() {
		$scope.selected = [];
	};
});

app.directive("box", function() {
	return {
		restrict: "E",
		scope: {},
		bindToController: {
			onSelect: "=",
			item: "="
		},
		controllerAs: "box",
		controller: function() {
			var box = this;

			box.goFullscreen = function(e) {
				box.onSelect(box.item, e.target.getBoundingClientRect());
			};
		},
		link: function(scope, element) {
			element.bind("click", scope.box.goFullscreen);
			element.css({
				"background-image": "url(" + scope.box.item.image + ")"
			});
		}
	};
});

app.directive("bigBox", function($timeout) {
	return {
		restrict: "AE",
		scope: {},
		bindToController: {
			position: "=",
			selected: "=",
			onSelect: "="
		},
		controllerAs: "box",
		controller: function() {
			var box = this;
		},
		link: function(scope, element) {
			var css = {};
			for (var key in scope.box.position) {
				css[key] = scope.box.position[key] + "px";
			}

			element.css(css);

			$timeout(function() {
				element.css({
					top: "50%",
					left: "10%"
				});
				element.addClass("image-out");
			}, 200);

			$timeout(function() {
				element.css({
					width: "80%",
					height: "100%"
				});
			}, 500);

			$timeout(function() {
				element.addClass("show");
			}, 800);
		}
	};
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.change').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
// velocity
$("div.imagen")
 	// .velocity("scroll", { duration: 750, offset: 250 })
  // .velocity({ left: 150 }, 800, "easeOutQuad")
  // .velocity({ left: 0 }, 800, "easeInSine"); 
}

