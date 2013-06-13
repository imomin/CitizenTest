window.QuestionCollection = Backbone.Collection.extend({
    model: Question,
    url: 'QA.xml',
    parse: function(data) {        
        var obj = [];
                var categories = $(data).find("category");                
                categories.each(function(i, category) {
                    category = $(category);
                    var categoryName = category.attr('name');
                    var subCategories = category.find("subcategory");
                        subCategories.each(function(i, subcategory) {
                            subcategory = $(subcategory);
                            var subcategoryName = subcategory.attr('name');
                            var questions = subcategory.find("question");
                                questions.each(function(i, question) {
                                    question = $(question);
                                    var questionName = question.attr('text');
                                    var questionId = question.attr('id');
                                    var answers = question.find("answer");
                                    var answerArray = [];
                                    answers.each(function(i,answer){
                                        answer = $(answer);
                                        answerArray.push(answer.text());                                                                            
                                    });         
                                    //debugger;
                                    window.questionsData.push({"id":questionId,"category":categoryName,"subcategory":subcategoryName,"question":questionName,"answers":answerArray});                                  
                                });
                         });
                    });            
        return window.questionsData;
    },

    fetch: function(options) {
        options || (options = {});
        options.dataType="xml";
        Backbone.Collection.prototype.fetch.call(this, options);
    },

    getById:function(id){
        debugger;
        return window.questionsData.get(id);
    },

    initialize: function(){        
    }
});