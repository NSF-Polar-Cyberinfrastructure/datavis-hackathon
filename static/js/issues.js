function getSessions(){
        var sessionsHTML = "<ul class='issues-list'>";
        $.get("https://api.github.com/repos/NSF-Polar-Cyberinfrastructure/datavis-hackathon/issues?", function(data){
        
        var numSess = data.length,
                session;

        for(var i=0; i<numSess; i++){
                session = data[i];
                sessionsHTML += "<li><strong class='title'><a href='" + session.html_url + "'>" + session.title + "  ";
                
                var labels = session.labels.length;
                for(var x=0; x<labels; x++){
                       sessionsHTML += "<span style='background-color:#" + session.labels[x].color + "'>" + session.labels[x].name + "</span>";
                }        
               sessionsHTML += "</a></strong></li>";
        }
        sessionsHTML += "</ul>";
        $('#github-sessions').html(sessionsHTML);
        });
}
