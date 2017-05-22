window.onload = function () {
	topSearch();
	secondkill();
	bannerSroll();
};
/*滚动条背景的变化*/
	var topSearch = function() {
		var headerbox = document.getElementsByClassName('jd_header_box')[0];
		var banner = document.getElementById('carousel');
		var bannerHeight = banner.offsetHeight;
		window.onscroll = function () {
			var top = document.body.scrollTop;
			if(top>bannerHeight) {
				headerbox.style.background = 'rgba(201,21,35,0.85)';
			} else {
				var op = top/headerbox*0.85;
				headerbox.style.background = 'rgba(201,21,35,'+op+')';
			}
		};
	};
	/*倒计时*/
	var secondkill = function () {
		var parent = document.getElementsByClassName('f_left');
		var spans = document.getElementsByClassName('num');
		var times = 4*60*60;
		setInterval(function(){
			times--;
			var h = Math.floor(times/3600);
			var m = Math.floor(times/60%60);
			var s = times%60;
			spans[0].innerHTML = h>10? Math.floor(h/10):0;
			spans[1].innerHTML = h%10;
			spans[2].innerHTML = m>10? Math.floor(m/10):0;
			spans[3].innerHTML = m%10;
			spans[4].innerHTML = s>10? Math.floor(s/10):0;
			spans[5].innerHTML = s%10;
			
		}, 1000)
	}

/*轮播图*/
var bannerSroll = function () {
	// 获取对象
	var carousel = document.getElementById('carousel');
	var ulList = carousel.getElementsByTagName('ul')[0];
	var ulPoint = carousel.getElementsByTagName('ul')[1];
	var points = ulPoint.getElementsByTagName('li');
	var timer;
	var index = 1;
	var carouselWidth = carousel.offsetWidth;
	console.log(carouselWidth);
	// 设置过渡
	var addTransition = function () {
		ulList.style.transition = 'all 1s ease 0s';
		ulList.style.webkitTransition = 'all 1s ease 0s';
	}

	// 移除过渡
	var removeTransition = function () {
		ulList.style.transition = 'none';
		ulList.style.webkitTransition = 'none';
	}

	// 添加滚动
	var addTransform = function (t) {
		ulList.style.transform = 'translateX('+t+'px)';
		ulList.style.webkitTransform = 'translateX('+t+'px)';
	}
	clearInterval(timer);

	timer = setInterval(function(){
		
		index++;
		addTransition();
		addTransform(-carouselWidth*index);
		for(var i = 0;i<points.length;i++) {
			points[i].className = '';
		}
		if(index==9) {
			points[0].className = 'now';
		}
		else {
			points[index-1].className = 'now';
		}
		
	}, 2000);

	ulList.addEventListener('transitionEnd', function(){
		console.log('过渡完了');
		if(index>=9) {
			index = 1;
		} else if(index<=0){
			index = 8;
		}
		console.log(index);
		removeTransition();
		addTransform(-carouselWidth*index);
	});
	ulList.addEventListener('webkitTransitionEnd', function(){
		console.log('过渡完了');
		if(index>=9) {
			index = 1;
		} else if(index<=0){
			index = 8;
		}
		console.log(index);
		removeTransition();
		addTransform(-carouselWidth*index);

	});

	// 触摸事件开始
	var startX,endX,moveX;
	ulList.addEventListener('touchstart',function(e){
		startX = e.touches[0].clientX;
		// console.log(startX);
		clearInterval(timer);
	},false)

	// 触摸滚动事件
	ulList.addEventListener('touchmove',function(e){
		clearInterval(timer);
		e.preventDefault();  // 阻止触摸事件的默认行为，即阻止滚屏
		endX = e.touches[0].clientX;
		moveX= endX-startX;
		// console.log(endX);
	})
	console.log(1/4*carouselWidth);
	console.log(carouselWidth);

	//  触摸结束事件
	ulList.addEventListener('touchend',function(e){
		console.log(moveX);
		// 判断移动的距离是否大于三分之一

		if(Math.abs(moveX)>1/4*carouselWidth) {
			if(moveX>0) {
				index--;
			} else {
				index++;
			}
			addTransition();
			addTransform(-index*carouselWidth);
		}

		for(var i = 0;i<points.length;i++) {
			points[i].className = '';
		}
		if(index==9) {
			points[0].className = 'now';
		}
		else {
			points[index-1].className = 'now';
		}
		clearInterval(timer);
		timer = setInterval(function(){
		index++;
		addTransition();
		addTransform(-carouselWidth*index);
		for(var i = 0;i<points.length;i++) {
			points[i].className = '';
		}
		if(index==9) {
			points[0].className = 'now';
		}
		else {
			points[index-1].className = 'now';
			console.log(index);
		}
	}, 2000);


	})

	// 点击
	ulList.addEventListener('click',function(){
		console.log('ww');
	})
}
