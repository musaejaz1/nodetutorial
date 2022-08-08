var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var dt_obj = require('./myfirstmodule');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var field1 = fields.field1;
            var field2 = fields.field2;

            field1 = Array.from(field1);
            field2 = Array.from(field2);
            if(dt_obj.myDateTime(field1)>0){
                res.write("Field 1 is false");
            }
            else{
                res.write('Field 1 is true');
            }
            res.write('<br>');
            if(dt_obj.myDateTime(field2)>0){
                res.write("Field 2 is false");
            }
            else{
                res.write('Field 2 is true');
            }
            res.end();
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="text" id="field1" name="field1"><br>');
        res.write('<input type="text" id="field2" name="field2"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);