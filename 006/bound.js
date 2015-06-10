	(function(){

		var one = document.getElementById('first');
		var oneBound = document.getElementById('oneBound');
		var two = document.getElementById('second');
		var twoBound = document.getElementById('twoBound');
		var three = document.getElementById('third');
		var threeBound = document.getElementById('threeBound');
		var four = document.getElementById('forth');
		var fourBound = document.getElementById('fourBound');
		var five = document.getElementById('fifth');
		var fiveBound = document.getElementById('fiveBound');
		var six = document.getElementById('sixth');
		var sixBound = document.getElementById('sixBound');


		window.onload = function(){
			one.onmouseover = function(){
				oneBound.classList.add('on');
			}
			one.onmouseout = function(){
				oneBound.classList.remove('on');
			}
			two.onmouseover = function(){
				twoBound.classList.add('on');
			}
			two.onmouseout = function(){
				twoBound.classList.remove('on');
			}
			three.onmouseover = function(){
				threeBound.classList.add('on');
			}
			three.onmouseout = function(){
				threeBound.classList.remove('on');
			}
			four.onmouseover = function(){
				fourBound.classList.add('on');
			}
			four.onmouseout = function(){
				fourBound.classList.remove('on');
			}
			five.onmouseover = function(){
				fiveBound.classList.add('on');
			}
			five.onmouseout = function(){
				fiveBound.classList.remove('on');
			}
			six.onmouseover = function(){
				sixBound.classList.add('on');
			}
			six.onmouseout = function(){
				sixBound.classList.remove('on');
			}
		}

	})();

