export function uploadHar(app, connection) {
    app.post("/upload", function (request, response) {

        var data = request.body; 
        var entryList = [ "startedDateTime","serverIPAddress","wait" ];
        var requsetList = ["url","method","hostRequest","pragmaRequest","cache-controlRequest"];
        var responseList = ["status","statusText","cache-controlResponse","pragmaResponse","age","last-modified","content-typeResponse","expires"];
        for (var idx in data) { 
            if (data[idx].includes(data[idx]) ) {
                console.log(data[idx])

            }
        } 
    });
}
