// expressモジュールを読み込む
const express = require('express');
const app = express();
const path = require('path');

// expressアプリを生成する
const http = require('http');
const port = process.env.PORT || 2500;
const server = http.createServer(app);
const io = require('socket.io')(server);


app.use('/htdocs',express.static(path.join(__dirname, '/htdocs')));
app.get('/taroinu', (req, res, next) => {
  res.sendFile(path.join(__dirname, './htdocs/index.html'))});

io.sockets.on('connection', (socket) => {
  let id = socket.id;
  socket.on('select0', () => {
    console.log(`select0`);
    let value = Math.floor(Math.random () * 100) + 1;
    console.log(`演出 = %d`, value);
    io.to(id).emit("result0", {value : value});
  });
  socket.on('select1', () => {
    console.log(`select1`);
    let value = Math.floor(Math.random () * 100) + 1;
    if (value <= 20) {
      value = 1;
    } else if (value <= 40) {
      value = 50;
    } else if (value <= 60) {
      value = 100;
    }
    console.log(`演出 = %d`, value);
    io.to(id).emit("result0", {value : value});
  });
  socket.on('start1', () => {
    let rea = 0;
    let kind = 1;
    console.log(`test1`);
    for (i = 1; i <= 10; i++) {
      if (i == 10) {
        rea = 5;
      } else {
        rea = rand1_9s1();
      }
      kind = kinds(rea);
      console.log(`レア度 = %d, 種類 = %d`, rea, kind);
      io.to(id).emit("result1", {rea : rea, kind : kind});
    }
  });
  socket.on('start2', () => {
    let rea = 0;
    let kind = 1;
    console.log(`test2`);
    for (i = 1; i <= 10; i++) {
      if (i == 10) {
        rea = 5;
      } else {
        rea = rand1_9s2();
      }
      kind = kinds(rea);
      console.log(`レア度 = %d, 種類 = %d`, rea, kind);
      io.to(id).emit("result1", {rea : rea, kind : kind});
    }
  });
  socket.on('start3', () => {
    let rea = 0;
    let kind = 1;
    console.log(`test3`);
    for (i = 1; i <= 10; i++) {
      rea = rand1_10s3();
      kind = kinds(rea);
      console.log(`レア度 = %d, 種類 = %d`, rea, kind);
      io.to(id).emit("result1", {rea : rea, kind : kind});
    }
  });
  socket.on('start4', () => {
    let rea = 0;
    let kind = 1;
    console.log(`test4`);
    for (i = 1; i <= 10; i++) {
      if (i == 10) {
        rea = rand10();
      } else {
        rea = rand1_9();
      }
      kind = kinds(rea);
      console.log(`レア度 = %d, 種類 = %d`, rea, kind);
      io.to(id).emit("result1", {rea : rea, kind : kind});
    }
  });
  socket.on('video', (data) => {
    let value = data.value;
      io.emit("video2", {value : value});
  });


  socket.on('disconnect', () => {
  });
});


let rand1_9 = () => {
  let value = Math.floor(Math.random () * 100) + 1;
  let ret = 0;

  if (value <= 3) {
    // ★★★★★
    ret = 5;
  } else if (value > 3 && value <= 10) {
    // ★★★★
    ret = 4;
  } else if (value > 10 && value <= 30) {
    // ★★★
    ret = 3;
  } else if (value > 30 && value <= 60) {
    // ★★
    ret = 2;
  } else if (value > 60 && value <= 100) {
    // ★
    ret = 1;
  }
  return ret;
}

let rand1_9s1 = () => {
  let value = Math.floor(Math.random () * 100) + 1;
  let ret = 0;

  if (value <= 5) {
    // ★★★★★
    ret = 5;
  } else if (value > 5 && value <= 15) {
    // ★★★★
    ret = 4;
  } else if (value > 15 && value <= 35) {
    // ★★★
    ret = 3;
  } else if (value > 35 && value <= 65) {
    // ★★
    ret = 2;
  } else if (value > 65 && value <= 100) {
    // ★
    ret = 1;
  }
  return ret;
}

let rand1_9s2 = () => {
  let value = Math.floor(Math.random () * 100) + 1;
  let ret = 0;

  if (value <= 8) {
    // ★★★★★
    ret = 5;
  } else if (value > 8 && value <= 25) {
    // ★★★★
    ret = 4;
  } else if (value > 25 && value <= 50) {
    // ★★★
    ret = 3;
  } else if (value > 50 && value <= 100) {
    // ★★
    ret = 2;
  }
  return ret;
}

let rand1_10s3 = () => {
  let value = Math.floor(Math.random () * 100) + 1;
  let ret = 0;

  if (value <= 5) {
    // ★★★★★
    ret = 5;
  } else if (value > 5 && value <= 50) {
    // ★★★★
    ret = 4;
  } else if (value > 50 && value <= 100) {
    // ★★★
    ret = 3;
  }
  return ret;
}

let rand10 = () => {
  let value = Math.floor(Math.random () * 100) + 1;
  let ret = 0;

  if (value <= 5) {
    // ★★★★★
    ret = 5;
  } else if (value > 5 && value <= 15) {
    // ★★★★
    ret = 4;
  } else if (value > 15 && value <= 50) {
    // ★★★
    ret = 3;
  } else if (value > 50 && value <= 100) {
    // ★★
    ret = 2;
  }
  return ret;
}

let kinds = (rea) => {
  let value = 1;

  switch (rea) {
    case 1:
      value = Math.floor(Math.random () * 60) + 1;
      break;
    case 2:
      value = Math.floor(Math.random () * 60) + 1;
      break;
    case 3:
      value = Math.floor(Math.random () * 50) + 1;
      break;
    case 4:
      value = Math.floor(Math.random () * 40) + 1;
      break;
    case 5:
      value = Math.floor(Math.random () * 20) + 1;
      break;
  }
  return value;
}

server.listen(port, () => console.log(`Listening on Port 2500`));
