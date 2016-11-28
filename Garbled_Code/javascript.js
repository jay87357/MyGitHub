function GetToken() {
    var token = "";
    var seed = "abcdefghijklmnopqrstuvwxyz"
    var num_englsh = 0;
    for (var i = 0; i < 20; i++) {
        var n = Math.floor(Math.random() * 10);
        if (n > 5) {
            token += Math.floor(Math.random() * 10);
        }
        else {
            var rnd = String.fromCharCode((Math.floor(Math.random() * 26) + 97));
            token += rnd;
        }
    }
    document.getElementById("txttoken").value = token;
}
