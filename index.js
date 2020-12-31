var ep = require("express");
var ap = ep();
ap.use(ep.static(__dirname + '/frontend'));
ap.get('/', function(req,res){
    res.sendFile(__dirname + '/frontend/HTML/profile.html');
});

var po = process.env.PORT || 3000;
ap.listen(po,function(){
    console.log("Site Running on http://localhost:" + po);
});