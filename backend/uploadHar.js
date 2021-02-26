export function uploadHar(app, connection) {
    app.post("/upload", function (request, response) {

        //connection.query('INSERT INTO User (username, e_mail, passwd) VALUES (?, ?, ?)', [username, e_mail, password]);

        var data = request.body; 
        var entryList = [ "startedDateTime","serverIPAddress","wait" ];
        var requsetList = ["url","method","hostRequest","pragmaRequest","cache-controlRequest"];
        var responseList = ["status","statusText","cache-controlResponse","pragmaResponse","age","last-modifiedResponse","content-typeResponse","expiresResponse"];
        for (var idx in data) { 
            console.log(data[idx]);
            entryList.forEach(function(element) {
                data[idx][element];
                //console.log('pragmaResponse'.replace('Response', ''))
            })
            requsetList.forEach(function(element) {
                data[idx][element];
                connection.query('INSERT INTO Request (entry_id, url, method) VALUES (?, ?, ?)', [username, e_mail, password])
                //console.log('pragmaResponse'.replace('Response', ''))
            })
            responseList.forEach(function(element) {
                data[idx][element];
                //console.log('pragmaResponse'.replace('Response', ''))
            })
        } 
    });
}
