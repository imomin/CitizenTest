window.questionsData = [];
templateLoader.load(["HomeView","SlideView"],
function () {
    app = new Router();
    Backbone.history.start();
});