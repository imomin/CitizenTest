// The Template Loader. Used to asynchronously load templates located in separate .html files
window.templateLoader = {

    load: function(views, callback) {

        var deferreds = [];
        $.each(views, function(index, view) {
            //debugger;
            if (window[view]) {
                deferreds.push(
                    $.ajax({
                    url:'http://citizenship.imomin.com/templates/' + view + '.html',
                    success:function (data) {
                         window[view].prototype.template = _.template(data);
                    }
                }));
            } else {
                alert(view + " not found");
            }
        });

        $.when.apply(null, deferreds).done(callback);
    }
};