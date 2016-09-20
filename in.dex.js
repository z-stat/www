var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server)
var port = process.env.PORT || 80;
var fs = require('fs');
var Client = require('node-rest-client').Client;
server.listen(port);
var client = new Client();
 var obj = [0];
// direct way 
client.get("http://stats.zello.com/channels-suggest/ru", function (data, response) {
    // parsed response body as js object 
        obj[0].chanel_name = {};
        obj[0].device_online = {};
        obj[0].user_online = {};
        obj[0].admin = {};
        obj[0].moder = {};
        obj[0].online = {};
        obj[0].channel_description = {};
        obj[0].picture = {};
        obj[0].voice = {};
    
    //for (var key in data) {
      for (i = 0; i < data.length; ++i){
        console.log( "[" + i + "]:"+ data[i].channel +"  ("+ data[i].devices_online +")"+ data[i].owner_name  + 
          data[i].users_online  + data[i].channel_description   + data[i].profile.picture);
        //obj[i] = data[i];
        io.on('connection', function(socket){
  
  
          socket.on('chat message', function(data){
            io.emit('chat message', data[i].channel);
          });
        });

      


        fs.writeFileSync('logt.txt', data[i].profile.voice)
      }
    //}; 
    // raw response 
});






 // });

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.get('/jExpand.js', function(req, res){
  res.sendfile(__dirname + '/jExpand.js');
});

app.get('/arrows.png', function(req, res){
  res.sendfile(__dirname + '/arrows.png');
});

app.get('/header_bkg.png', function(req, res){
  res.sendfile(__dirname + '/header_bkg.png');
});

app.get('/row_bkg.png', function(req, res){
  res.sendfile(__dirname + '/row_bkg.png');
});


socket.on('chat message', function(data, socket) {
  var roomList = webRTC.rtc.rooms[data.room] || [];

  for (var i = 0; i < roomList.length; i++) {
    var socketId = roomList[i];

    if (socketId !== socket.id) {
      var soc = webRTC.rtc.getSocket(socketId);

      if (soc) {
        soc.send(JSON.stringify({
          "eventName": "receive_chat_msg",
          "data": {
            "messages": data.messages,
            "color": data.color
          }
        }), function(error) {
          if (error) {
            console.log(error);
          }
        });
      }
    }
  }
});

















var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server)
var port = process.env.PORT || 80;
var fs = require('fs');
var Client = require('node-rest-client').Client;
server.listen(port);
var client = new Client();
 var obj = [0];
// direct way 
client.get("http://stats.zello.com/channels-suggest/ru", function (d, response) {
       var data[0] = {profile":{picture":"http:\/\/my.zello.com\/c\/bjflp\/profile.jpeg?1472535275"}};
    // parsed response body as js object 

    
    //for (var key in data) {
      for (i = 0; i < data.length; ++i){
        var obj = [data.length];
        obj[i].chanel_name = ( [value] );
        obj[i].device_online = {};
        obj[i].user_online = {};
        obj[i].admin = {};
        obj[i].moder = {};
        obj[i].online = {};
        obj[i].channel_description = {};
        obj[i].picture = {};
        obj[i].voice = {};
        console.log( "[" + i + "]:"+ data[i].channel +"  ("+ data[i].devices_online +")"+ data[i].owner_name  + 
          data[i].users_online  + data[i].channel_description   + data[i].profile.picture);
        //obj[i] = data[i];
        obj[i].chanel_name = data[i].channel;
        obj[i].device_online = data[i].devices_online;
        obj[i].user_online = data[i].users_online;
        obj[i].admin = data[i].owner_name ;
        obj[i].moder = data[i].moderators ;
        obj[i].online = data[i].users_online;
        obj[i].channel_description = data[i].channel_description;
        obj[i].picture = data[i].profile.picture;
        obj[i].voice = data[i].profile.voice;
 


        fs.writeFileSync('logt.txt', data[i].profile.voice)
      }
    //}; 
    // raw response 
});






 // });

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.get('/jExpand.js', function(req, res){
  res.sendfile(__dirname + '/jExpand.js');
});

app.get('/arrows.png', function(req, res){
  res.sendfile(__dirname + '/arrows.png');
});

app.get('/header_bkg.png', function(req, res){
  res.sendfile(__dirname + '/header_bkg.png');
});

app.get('/row_bkg.png', function(req, res){
  res.sendfile(__dirname + '/row_bkg.png');
});

io.on('connection', function(socket){
  
  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    io.emit('chat message', obj[i].picture);
  });
});




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          







    obj = data;
    var dat =[];
    dat[0] = {"profile":{"picture":"picture"}}
    var o =[]
    //for (var key in data) {
      for (i = 0; i < data.length; ++i){
       // console.log( "[" + i + "]:"+ data[i].channel +"  ("+ data[i].devices_online +")"+ data[i].owner_name  + data[i].users_online  + data[i].channel_description   + data[i].profile.picture);
        dat[i].profile = _.pick(data[i].profile, 'picture');
        o[0] =_(dat[0]).value();
        fs.writeFileSync('logt.txt', dat[0].profile.picture)
        console.log(_(dat[i]).value())
        
      }


