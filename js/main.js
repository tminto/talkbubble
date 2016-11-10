$( document ).ready(function() {
	console.log("hello");
	var collection = [];

	var illustration0 = {
		year: 1859,
		artist:"Uknown",
		image:"images/image0.jpg",
		top:60,
		left:190,
		bubbleWidth:210
	};
	var illustration1 = {
		year:1910,
		artist:"Thomas Hugh",
		image:"images/image1.jpg",
		top:60,
		left:200,
		bubbleWidth:190

	};
	var illustration2 = {
		year:1860,
		artist:"Mary Somebody",
		image:"images/image2.jpg",
		top:270,
		left:300,
		bubbleWidth:160
	};
	var illustration3 = {
		year:1920,
		artist:"Harry Clark",
		image:"images/whiteface.jpg",
		top:20,
		left:200,
		bubbleWidth:200
	};
	var illustration4 = {
		year:1919,
		artist:"Arthur Rackham",
		image:"images/risinggen.jpg",
		top:30,
		left:210,
		bubbleWidth:200
	};
	collection.push(illustration0);
	collection.push(illustration1);
	collection.push(illustration2);
	collection.push(illustration3);
	collection.push(illustration4);
	console.log(collection[0]);

	/*Set the initial image and caption to be the first one in the collection array*/
	var currentIllustration = collection[0];
	$(".captionInfo").text(currentIllustration.artist + ',' + currentIllustration.year);
	var currentImage = currentIllustration.image;
	$("#imgCol").css("background-image", "url("+currentImage+")");
	/*Set a Variable to contain default font size*/
	var fontSize="40";
	/*While typing update bubble*/
	$('.userTextBox').on('keyup', function(){
    	$('.bubble').html($(this).val());
	});
	/*on selecting radio button change font*/
	$(".fonts").change(function () {

		if ($("#font1").is(':checked')) {
            $(".bubble").removeClass("font2").removeClass("font3").addClass("font1");
		 	console.log("inside the if one");
        }
        else if ($("#font2").is(':checked')) {
        	fontSize="25";
            $(".bubble").removeClass("font1").removeClass("font3").addClass("font2");
		 	console.log("inside the if two");
        }
        else if ($("#font3").is(":checked")) {
        	fontSize="25";
        	$(".bubble").removeClass("font1").removeClass("font2").addClass("font3");
			console.log("inside the if three");
        }
    });
    /*On increasing or decreasing font size*/
    $("#up").on("click", function(event){
    	event.preventDefault();
    	console.log("the font size is " + fontSize);
       fontSize++;
       $(".bubble").css("font-size", fontSize);
    });
    $("#down").on("click", function(event){
    	event.preventDefault();
    	console.log("the font size is " + fontSize);
    	if (fontSize > 13){
       		fontSize--;
       		$(".bubble").css("font-size", fontSize);
   		}
    });
	/*On clicking update bubble*/
	/*$("#updateBubble").on("click", function(){
		event.preventDefault();
		console.log("update bubble clicked");
		/*SEE WHICH FONT IS CHOSEN*/
		 /*if($("#font1").is(':checked')){
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
		/*GET THE USER TEXT AND PUT IT IN BUBBLE*/
		/*var userText = $(".userTextBox").val();
		$(".bubble").text(userText);
		console.log(userText);
	});*/

	/*If next button is clicked, point the counter to the next element in the array*/
	var count=0;
	console.log("count is initialized to " + count);
	$("#next").on("click", function(){
        if (count<5){
			count++;
			console.log("currentILlustration is" + count);
			currentIllustration = collection[count];
		}
		else{
			count=0;
			console.log("currentILlustration is" + count);
			currentIllustration = collection[count];

		}
		updateIllustration();
	});
	$("#previous").on("click", function(){
        if (count>0){
			count--;
			console.log("currentILlustration is" + count);
			currentIllustration = collection[count];
		}
		else{
			count=5;
			console.log("currentILlustration is" + count);
			currentIllustration = collection[count];
		}
		updateIllustration();
	});
	function updateIllustration(){
		/*clear the textbox*/
		$('.userTextBox').val('');
		$('.bubble').empty();
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
	}

});