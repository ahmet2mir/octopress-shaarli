var shaarli = (function(){
  function escapeHtml(str) {
    return $('<div/>').text(str).html();
  }
  function render(target, links){
    var i = 0, fragment = '', t = $(target)[0];
    for(var i in links) {
      s_link = '<a href="'+links[i].link+'">'+links[i].title+'</a>';
      s_date = '<small><a href="'+links[i].guid+'">'+formattedDate(new Date(links[i].pubDate))+'</a></small>';
      s_description = '<p style="margin:0">'+links[i].description+'</p>';
      s_description = s_description.replace(/<br>\(.*Permalink<\/a>\)/gi, '')
      fragment += '<li>'+s_link+s_description+s_date+'</li>';
    }
    t.innerHTML = fragment;
  }

  function formattedDate(date) {
    var d = new Date(date || Date.now()),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month, day, year].join('/');
}

  return {
    showLinks: function(options){
      $.ajax({
        url: "http://rsstojson.herokuapp.com/?feed="+options.url,
        type: "GET",
        dataType: "jsonp",
        success: function (response) {
          if (options.count) { response.rss.channel.item.splice(options.count); }
          render(options.target, response.rss.channel.item)
        },
        error: function (xhr, status) {
            console.log("error");
        }
      });
    }
  };
})();


