window.SlideView = Backbone.View.extend({

	initialize:function () {
		this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
	},
	events:{
		"click #showPrev":"prev",
		"click #showNext":"next",
		"click #repeat":"repeat",
		"click #autoSlide":"auto",
		"click #mute":"mute"		
	},
	render:function () {        
         $(this.el).html(this.template(this.model.toJSON()));       
        return this;
    },

    prev:function () {
        var prevId = parseInt(this.model.id) - 1;
		var fileName = "Track " + prevId + ".mp3";
		app.navigate('#slide/'+prevId,{trigger:true,replace:false});
    },
    next:function(e){		
		var nextId = parseInt(this.model.id) + 1;
		var fileName = "Track " + nextId + ".mp3";
		app.navigate('#slide/'+nextId,{trigger:true,replace:false});			
    },
    repeat:function(){

    },
    auto:function(){

    },
    mute:function(){

    },
    play:function(audio){    	
    	$(document).ready(function(){
			$("#jquery_jplayer_1").jPlayer({
				ready: function (event) {
					$(this).jPlayer("setMedia", {
						mp3:"http://localhost/citizentest/audio-en/" + audio
					}).jPlayer("play");
				},				
				ended: function() { // The $.jPlayer.event.ended event
					//$(this).jPlayer("play"); // Repeat the media
				},
				swfPath: "../js/libs/jPlayer",
				supplied: "mp3",
				wmode: "window",
				volume:"1"
			});
		});
    }
});