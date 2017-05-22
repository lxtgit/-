window.onload = function() {
	delBoxAnimate();
	checkBox();	
}

// 删除框的弹出动画
var delBoxAnimate = function () {
	var delBtn = document.getElementsByClassName('product_del');
	var delBox = document.getElementsByClassName('jd_info_box')[0];
	var infoBox = document.getElementsByClassName('jd_info')[0];
	for( var i =0;i<delBtn.length;i++) {
		delBtn[i].onclick = function () {
			delBox.className = 'jd_info_box anidelBox';
			infoBox.style.display = 'block';

			// 删除按钮动画
			var delTop = this.children;
			delTop[0].style.transition = 'all .5s ease 0s';
			delTop[0].style.webkitTransition = 'all .5s ease 0s';
			delTop[0].style.transform = 'translateY(2px) rotate(-25deg)';
			delTop[0].style.webkitTransform = 'translateY(2px) rotate(-25deg)';
			delTop[0].style.transformOrigin = 'left bottom';
			delTop[0].style.webkitTransformOrigin = 'left bottom';

		}
	}
}
// 选中复选框
var checkBox =function () {
	var checkedBox = document.getElementsByClassName('checkbox');
	var checkedAll = document.getElementsByClassName('account_checkbox')[0];
	console.log(checkedBox.length);
	for(var i = 0;i<checkedBox.length;i++) {
		checkedBox[i].onclick = function () {
			var haschecked = this.getAttribute('checked');
			console.log('haschecked');
			if(haschecked) {
				this.removeAttribute('checked');
				checkedAll.removeAttribute('checked');
			} else {
				this.setAttribute('checked', 'checked');
			}
		}
	}
	checkedAll.onclick = function () {
			var haschecked = this.getAttribute('checked');
			for(var i = 0;i<checkedBox.length;i++) {
				if(haschecked) {

					checkedBox[i].removeAttribute('checked');
				} else {
					checkedBox[i].setAttribute('checked', 'checked');
				}
			}
			
		}
}
