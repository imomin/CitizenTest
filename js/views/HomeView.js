window.HomeView = Backbone.View.extend({

    initialize:function () {        
       //this.template = _.template(directory.utils.templateLoader.get('HomeView'));
       //this.template = templates['Home'];
    },

    events:{
        "click #showMeBtn":"showMeBtnClick"
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    },

    showMeBtnClick:function () {
        app.navigate("",true)
    }
});