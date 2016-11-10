$( document ).ready(function() {
	console.log("hello");
	var collection = [];

	var illustration0 = {
		year: 1859,
		artist:"Uknown",
		image:"images/image0.jpg",
		top:120,
		left:180,
		bubbleWidth:210
	};
	var illustration1 = {
		year:1920,
		artist:"Joe Somebody",
		image:"images/image1.jpg",
		top:70,
		left:200,
		bubbleWidth:190

	};
	var illustration2 = {
		year:1860,
		artist:"Mary Somebody",
		image:"images/image2.jpg",
		top:300,
		left:70,
		bubbleWidth:160
	};
	collection.push(illustration0);
	collection.push(illustration1);
	collection.push(illustration2);
	console.log(collection[0]);

	/*Set the initial image and caption to be the first one in the collection array*/
	var currentIllustration = collection[0];
	$(".captionInfo").text(currentIllustration.artist + ',' + currentIllustration.year);
	var currentImage = currentIllustration.image;
	$("#imgCol").css("background-image", "url("+currentImage+")");
	/*on typing update bubble*/
	$('.userTextBox').on('keyup', function(){
    	$('.bubble').html($(this).val());
	});
	/*On clicking update bubble*/
	$("#updateBubble").on("click", function(){
		event.preventDefault();
		console.log("update bubble clicked");
		/*SEE WHICH FONT IS CHOSEN*/
		 if($("#font1").is(':checked')){
		 	$(".bubble").removeClass("font2").removeClass("font3").addClass("font1");
		 	console.log("font1 is checked");
		 }
		 else if($("#font2").is(':checked')){
		 	$(".bubble").removeClass("font3").removeClass("font1").addClass("font2");
		 	console.log("font2 is checked");
		 }
		  else if($("#font3").is(':checked')){
		  	$(".bubble").removeClass("font2").removeClass("font1").addClass("font3");
		 	console.log("font3 is checked");
		 }
		 /*
		 else if($("input[name='font2']").is(':checked')){
		 	console.log("font2 is checked");
		 }
		 else if($("input[name='font3']").is(':checked')){
		 	console.log("font3 is checked");
		 }*/
		/*GET THE USER TEXT AND PUT IT IN BUBBLE*/
		var userText = $(".userTextBox").val();
		$(".bubble").text(userText);
		console.log(userText);
	});
	/*If next button is clicked, point the counter to the next element in the array*/
	var count=0;
	console.log("count is initialized to " + count);
	$("#next").on("click", function(){
        if (count<2){
			count++;
			console.log("currentILlustration is" + count);
			currentIllustration = collection[count];
		}
		else{
			count=0;
			console.log("currentILlustration is" + count);
			currentIllustration = collection[count];

		}
		/*update image and information*/
		console.log("the artist is" + currentIllustration.artist);
		var currentImage = currentIllustration.image;
		console.log("the Image is" + currentImage);
		$("#imgCol").css("background-image", "url("+currentImage+")");
		/*var currentYear = currentIllustration.year;
		var currentArtist = currentArtist.year;*/
		$(".captionInfo").text(currentIllustration.artist + ',' + currentIllustration.year);
		/*update position of talk bubble*/
		var topPosition = currentIllustration.top;
		var leftPosition = currentIllustration.left;
		var bubbleWidth = currentIllustration.bubbleWidth;
		$(".talkBubble").css('top', topPosition + 'px');
		$(".talkBubble").css('left', leftPosition + 'px');
		$(".bubble").css('width', bubbleWidth + 'px');
	});
	

});