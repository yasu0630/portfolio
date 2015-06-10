	(function(){

		var list = document.getElementsByTagName("li");
		var tlis = document.getElementsByClassName("popup");



		function popup() {

				var arr = new Array()
				var tarr = new Array()

				for ( i=0; i <= list.length-1; i++) {
					arr[i] = "btn" + (i+1);
					tarr[i] = "text" + (i+1);

					var btn = document.getElementById(arr[i]);
					var pop = document.getElementById(tarr[i]);

					btn.addEventListener('click', function(){
					pop.classList.add("on");
					}, false);
					console.log(arr[i]);
					console.log(tarr[i]);
				}

				pop.addEventListener('click', function(){
				pop.classList.remove("on");
				}, false);


			}
		popup();


	})();
