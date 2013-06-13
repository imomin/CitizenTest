window.Router = Backbone.Router.extend({
	routes: {
		"": "home",		
		"slide/:id": "loadQuestion"
	},
	initialize: function(){		
		this.questions = new QuestionCollection();		
		this.questions.fetch({			
			success:function(){				
				var param = Backbone.history.fragment;				
				//set it null to trigger event. Event will not trigger if Backbone.history.fragment is same as current url.
				Backbone.history.fragment = null;
				app.navigate(param, {trigger: true, replace: false});				
			}
		});		
	},
	home: function(){
		this.homeView = new HomeView();
		this.homeView.render();
		$("#content").html(this.homeView.el);
	},
	loadQuestion:function(id){		
		if(this.questions.models.length>0){			
			var data = this.questions.get(id);
			this.slideView = new SlideView({model: data});			
			$("#content").html(this.slideView.render().el);			
			var audio = "Track " + (id < 10 ? "0" + id : id) + ".mp3";
			this.slideView.play(audio);
		}
	}
});