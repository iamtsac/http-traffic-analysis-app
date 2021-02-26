import CryptoJS from 'crypto-js'
import path from 'path'

export function login(app,connection,path) {
    app.get('/', function (request, response) {
        response.sendFile(path.join('/home/tsac/Projects/http_crowdsourced_traffic/node_server/html/login.html'));
    });
    app.post('/api', function (req, res) {
        var username = req.body.username;
        var password = CryptoJS.SHA1(req.body.password);
        if (username && password) {
            connection.query("select username,passwd from User where username = ?", [username], (error, response) => {
                if (response) {
                    if( response[0].passwd === CryptoJS.enc.Hex.stringify(password)){
                        res.redirect('/har.html')
                    }
                }
            });
        }

    });
}
