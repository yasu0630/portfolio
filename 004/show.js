myImage = new Array (
	"sample1.png",
	"sample2.png",
	"sample3.png",
	"sample4.png"
);

myNowCnt = -1;
myFlg = 0;

function show() {
	myNowCnt = (myNowCnt < myImage.length-1) ? myNowCnt +1 : 0;
	myFlg = (myFlg == 0) ? 1 : 0;

	if(myFlg == 0){
		document.getElementById("item1").src = myImage[myNowCnt];
		document.getElementById("item1").className = "fadein";
		document.getElementById("item2").className = "fadeout";
	} else {
		document.getElementById("item2").src = myImage[myNowCnt];
		document.getElementById("item1").className = "fadeout";
		document.getElementById("item2").className = "fadein";
	}
	setTimeout("show()", 4000);
}
show();