// JavaScript Document
//call this once after all the document parts have loaded
$(document).ready(function() {
	//call using jQuery ajax
	$.ajax({
		url:"albums.xml",
		cache:false,
		dataType:"xml",
		success: function(xml){
			$('#contents').empty();
			//find each record - albums here is the name of the table
			$(xml).find('albums').each(function() {
            //Create the set of data using the fields in the XML
			var cover = $(this).find("CoverArt").text();
			var links = $(this).find("TheLinks").text(); 
			var title = $(this).find("AlbumTitle").text();
			var date = $(this).find("ReleaseDate").text();
			var notes = $(this).find("Notes").text();
			//Add the information in info to the display
			$('#contents').append(cover);
            });//close the each.function
		}//close the success function
	});//close the ajax function
    
});