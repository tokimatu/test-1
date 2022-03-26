let socket = io.connect();
let start_flag = 0;
let init_flag = 1;
let now_pos = 0;

let count = 0;
let rea = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let kind = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let effect = 0;

let video;
let video_sel;
let video_s;
let video0;
let video1;
let video2;
let video3;
let video4;
let video5;
let video6;
let video7;
let video8;
let video9;
let video10;
let video_sel_set = 0;
let video1_set = 0;
let video2_set = 0;
let video3_set = 0;
let video4_set = 0;
let video5_set = 0;
let video6_set = 0;
let video7_set = 0;
let video8_set = 0;
let video9_set = 0;
let video10_set = 0;

let start10_button;
let start10s_button;
let start_button;
let cut_button;
let video_stop = 0;

let times = 0;
let time1 = 0;

let hosi1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let hosi2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let hosi3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let hosi4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let hosi5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let audioElm;
let modalArea;
let card_detail1;
let modalBg;

// 送信
window.onload=() => {
    video = document.getElementById('video');
    video_sel = document.getElementById('video_sel');
    video_s = document.getElementById('video_s');
    video0 = document.getElementById('video0');
    video1 = document.getElementById('video1');
    video2 = document.getElementById('video2');
    video3 = document.getElementById('video3');
    video4 = document.getElementById('video4');
    video5 = document.getElementById('video5');
    video6 = document.getElementById('video6');
    video7 = document.getElementById('video7');
    video8 = document.getElementById('video8');
    video9 = document.getElementById('video9');
    video10 = document.getElementById('video10');
    start10_button = document.getElementById("button");
    start10s_button = document.getElementById("button3");
    start_button = document.getElementById("button1");
    cut_button = document.getElementById("button2");
    times = document.getElementById("time1");
    modalArea = document.getElementById('modalArea');
    card_detail1 = document.getElementById('card_detail1');
    modalBg = document.getElementById('modalBg');

    if (init_flag == 1) {
        getCookie();
        start_print();
        init_flag = 0;
        audioElm = new Audio('htdocs/song1.mp3');
        audioElm.volume = 0.4;
        audioElm.currentTime = 0;
        audioElm.loop = true;
    }
    audioElm.addEventListener('loadedmetadata', function() {
        audioElm.play();
    });
    start10_button.onclick=() => {
        if (start_flag == 0) {
            video10.style.display = "none";
            video_sel.style.display = "none";
            start10_button.style.display = "none";
            start10s_button.style.display = "none";
            times.style.display = "none";
            video.pause();
            video_sel.pause();
            for (i = 1; i <= 10; i++) {
                let card = 'url(htdocs/card/card0_0.png)';
                document.getElementById("card" + i).style.backgroundImage = card;
                document.getElementById("card" + i).className = 'card';
                document.getElementById("new" + i).style.display = "none";
            }
            start_flag = 1;
            socket.emit("select0", {});
        }
    }
    start10s_button.onclick=() => {
        if (start_flag == 0 && time1 <= 0) {
            time1 = 600;
            timer();
            video10.style.display = "none";
            video_sel.style.display = "none";
            start10_button.style.display = "none";
            start10s_button.style.display = "none";
            times.style.display = "none";
            video.pause();
            video_sel.pause();
            for (i = 1; i <= 10; i++) {
                let card = 'url(htdocs/card/card0_0.png)';
                document.getElementById("card" + i).style.backgroundImage = card;
                document.getElementById("card" + i).className = 'card';
                document.getElementById("new" + i).style.display = "none";
            }
            start_flag = 1;
            socket.emit("select1", {});
        }
    }
    video_s.addEventListener('loadedmetadata', function() {
        video_s.style.display = "block";
        video_s.currentTime = 0;
        video_s.play();
        audioElm.pause();
        audioElm.src = 'htdocs/song2.mp3';
        audioElm.currentTime = 0;
        audioElm.play();
        start_button.style.display = "block";
        cut_button.style.display = "block";
    });
    video_s.addEventListener('ended', function() {
        if (effect == 1) {
            socket.emit("start1", {});
        } else if (effect == 50) {
            socket.emit("start2", {});
        } else if (effect == 100) {
            socket.emit("start3", {});
        } else {
            socket.emit("start4", {});
        }
    });
    start_button.onclick=() => {
        if (video_stop == 0) {
            video_stop = 1;
            start_button.style.backgroundImage = 'url(htdocs/start.png)';
            switch (now_pos) {
                case 0:
                    video0.pause();
                break;
                case 1:
                    video1.pause();
                break;
                case 2:
                    video2.pause();
                break;
                case 3:
                    video3.pause();
                break;
                case 4:
                    video4.pause();
                break;
                case 5:
                    video5.pause();
                break;
                case 6:
                    video6.pause();
                break;
                case 7:
                    video7.pause();
                break;
                case 8:
                    video8.pause();
                break;
                case 9:
                    video9.pause();
                break;
                case 10:
                    video10.pause();
                break;
            }
        } else {
            video_stop = 0;
            start_button.style.backgroundImage = 'url(htdocs/stop.png)';
            switch (now_pos) {
                case 0:
                    video0.play();
                break;
                case 1:
                    video1.play();
                break;
                case 2:
                    video2.play();
                break;
                case 3:
                    video3.play();
                break;
                case 4:
                    video4.play();
                break;
                case 5:
                    video5.play();
                break;
                case 6:
                    video6.play();
                break;
                case 7:
                    video7.play();
                break;
                case 8:
                    video8.play();
                break;
                case 9:
                    video9.play();
                break;
                case 10:
                    video10.play();
                break;
            }
        }
    }
    modalBg.addEventListener('click',function() {
        modalArea.classList.toggle('is-show');
    },false);

    cut_button.onclick=() => {
        console.log(`@@@@@ skip test`);
        if (now_pos != 0 && now_pos <= 10) {
            video_stop = 0;
            start_button.style.backgroundImage = 'url(htdocs/stop.png)';
            switch (now_pos) {
                case 0:
                    video1.style.display = "block";
                    video_s.style.display = "none";
                    video0.pause();
                    video1.play();
                    now_pos = 1;
                break;
                case 1:
                    let card1 = 'url(htdocs/card/card' + rea[0] + "_" + kind[0] +'.png)';
                    document.getElementById("card1").style.backgroundImage = card1;
                    video2.style.display = "block";
                    video1.style.display = "none";
                    video1.pause();
                    video2.play();
                    now_pos = 2;
                break;
                case 2:
                    let card2 = 'url(htdocs/card/card' + rea[1] + "_" + kind[1] +'.png)';
                    document.getElementById("card2").style.backgroundImage = card2;
                    video3.style.display = "block";
                    video2.style.display = "none";
                    video2.pause();
                    video3.play();
                    now_pos = 3;
                break;
                case 3:
                    let card3 = 'url(htdocs/card/card' + rea[2] + "_" + kind[2] +'.png)';
                    document.getElementById("card3").style.backgroundImage = card3;
                    video4.style.display = "block";
                    video3.style.display = "none";
                    video3.pause();
                    video4.play();
                    now_pos = 4;
                break;
                case 4:
                    let card4 = 'url(htdocs/card/card' + rea[3] + "_" + kind[3] +'.png)';
                    document.getElementById("card4").style.backgroundImage = card4;
                    video5.style.display = "block";
                    video4.style.display = "none";
                    video4.pause();
                    video5.play();
                    now_pos = 5;
                break;
                case 5:
                    let card5 = 'url(htdocs/card/card' + rea[4] + "_" + kind[4] +'.png)';
                    document.getElementById("card5").style.backgroundImage = card5;
                    video6.style.display = "block";
                    video5.style.display = "none";
                    video5.pause();
                    video6.play();
                    now_pos = 6;
                break;
                case 6:
                    let card6 = 'url(htdocs/card/card' + rea[5] + "_" + kind[5] +'.png)';
                    document.getElementById("card6").style.backgroundImage = card6;
                    video7.style.display = "block";
                    video6.style.display = "none";
                    video6.pause();
                    video7.play();
                    now_pos = 7;
                break;
                case 7:
                    let card7 = 'url(htdocs/card/card' + rea[6] + "_" + kind[6] +'.png)';
                    document.getElementById("card7").style.backgroundImage = card7;
                    video8.style.display = "block";
                    video7.style.display = "none";
                    video7.pause();
                    video8.play();
                    now_pos = 8;
                break;
                case 8:
                    let card8 = 'url(htdocs/card/card' + rea[7] + "_" + kind[7] +'.png)';
                    document.getElementById("card8").style.backgroundImage = card8;
                    video9.style.display = "block";
                    video8.style.display = "none";
                    video8.pause();
                    video9.play();
                    now_pos = 9;
                break;
                case 9:
                    let card9 = 'url(htdocs/card/card' + rea[8] + "_" + kind[8] +'.png)';
                    document.getElementById("card9").style.backgroundImage = card9;
                    video10.style.display = "block";
                    video9.style.display = "none";
                    video9.pause();
                    video10.play();
                    now_pos = 10;
                break;
                case 10:
                    let card10 = 'url(htdocs/card/card' + rea[9] + "_" + kind[9] +'.png)';
                    document.getElementById("card10").style.backgroundImage = card10;
                    for (i = 0; i < 10; i++) {
                        mycard_check(rea[i], kind[i]);
                    }
                    if (time1 > 0) {
                        start10s_button.className = "btn-square-so-pop0";
                        times.style.display = "block";
                    }
                    video_sel.style.display = "block";
                    video_sel.play();
                    video_sel.loop = true;
                    video10.style.display = "none";
                    video10.pause();
                    start_flag = 0;
                    now_pos = 0;
                    count = 0;
                    start10_button.style.display = "block";
                    start10s_button.style.display = "block";
                    start_button.style.display = "none";
                    cut_button.style.display = "none";
                    audioElm.pause(); 
                    audioElm.src = 'htdocs/song1.mp3';
                    audioElm.currentTime = 0;
                    audioElm.play();
                    video_sel_set = 0;
                    video1_set = 0;
                    video2_set = 0;
                    video3_set = 0;
                    video4_set = 0;
                    video5_set = 0;
                    video6_set = 0;
                    video7_set = 0;
                    video8_set = 0;
                    video9_set = 0;
                    video10_set = 0;
                    setCookie2();
                break;
            }
        }
    }

    video_sel.addEventListener('loadedmetadata', function() {
        video_sel_set = 1;
        video_start();
    });
    video1.addEventListener('loadedmetadata', function() {
        video1_set = 1;
        video_start();
    });
    video2.addEventListener('loadedmetadata', function() {
        video2_set = 1;
        video_start();
    });
    video3.addEventListener('loadedmetadata', function() {
        video3_set = 1;
        video_start();
    });
    video4.addEventListener('loadedmetadata', function() {
        video4_set = 1;
        video_start();
    });
    video5.addEventListener('loadedmetadata', function() {
        video5_set = 1;
        video_start();
    });
    video6.addEventListener('loadedmetadata', function() {
        video6_set = 1;
        video_start();
    });
    video7.addEventListener('loadedmetadata', function() {
        video7_set = 1;
        video_start();
    });
    video8.addEventListener('loadedmetadata', function() {
        video8_set = 1;
        video_start();
    });
    video9.addEventListener('loadedmetadata', function() {
        video9_set = 1;
        video_start();
    });
    video10.addEventListener('loadedmetadata', function() {
        video10_set = 1;
        video_start();
    });


    video1.addEventListener('ended', function() {
        let card = 'url(htdocs/card/card' + rea[0] + "_" + kind[0] +'.png)';
        document.getElementById("card1").style.backgroundImage = card;
        video2.style.display = "block";
        video1.style.display = "none";
        video2.play();
        now_pos = 2;
    });
    video2.addEventListener('ended', function() {
        let card = 'url(htdocs/card/card' + rea[1] + "_" + kind[1] +'.png)';
        document.getElementById("card2").style.backgroundImage = card;
        video3.style.display = "block";
        video2.style.display = "none";
        video3.play();
        now_pos = 3;
    });
    video3.addEventListener('ended', function() {
        let card = 'url(htdocs/card/card' + rea[2] + "_" + kind[2] +'.png)';
        document.getElementById("card3").style.backgroundImage = card;
        video4.style.display = "block";
        video3.style.display = "none";
        video4.play();
        now_pos = 4;
    });
    video4.addEventListener('ended', function() {
        let card = 'url(htdocs/card/card' + rea[3] + "_" + kind[3] +'.png)';
        document.getElementById("card4").style.backgroundImage = card;
        video5.style.display = "block";
        video4.style.display = "none";
        video5.play();
        now_pos = 5;
    });
    video5.addEventListener('ended', function() {
        let card = 'url(htdocs/card/card' + rea[4] + "_" + kind[4] +'.png)';
        document.getElementById("card5").style.backgroundImage = card;
        video6.style.display = "block";
        video5.style.display = "none";
        video6.play();
        now_pos = 6;
    });
    video6.addEventListener('ended', function() {
        let card = 'url(htdocs/card/card' + rea[5] + "_" + kind[5] +'.png)';
        document.getElementById("card6").style.backgroundImage = card;
        video7.style.display = "block";
        video6.style.display = "none";
        video7.play();
        now_pos = 7;
    });
    video7.addEventListener('ended', function() {
        let card = 'url(htdocs/card/card' + rea[6] + "_" + kind[6] +'.png)';
        document.getElementById("card7").style.backgroundImage = card;
        video8.style.display = "block";
        video7.style.display = "none";
        video8.play();
        now_pos = 8;
    });
    video8.addEventListener('ended', function() {
        let card = 'url(htdocs/card/card' + rea[7] + "_" + kind[7] +'.png)';
        document.getElementById("card8").style.backgroundImage = card;
        video9.style.display = "block";
        video8.style.display = "none";
        video9.play();
        now_pos = 9;
    });
    video9.addEventListener('ended', function() {
        let card = 'url(htdocs/card/card' + rea[8] + "_" + kind[8] +'.png)';
        document.getElementById("card9").style.backgroundImage = card;
        video10.style.display = "block";
        video9.style.display = "none";
        video10.play();
        now_pos = 10;
    });
    video10.addEventListener('ended', function() {
        let card = 'url(htdocs/card/card' + rea[9] + "_" + kind[9] +'.png)';
        document.getElementById("card10").style.backgroundImage = card;
        for (i = 0; i < 10; i++) {
            mycard_check(rea[i], kind[i]);
        }
        if (time1 > 0) {
            start10s_button.className = "btn-square-so-pop0";
            times.style.display = "block";
        }
        video_sel.style.display = "block";
        video_sel.play();
        video_sel.loop = true;
        video10.style.display = "none";
        video10.pause();
        start_flag = 0;
        now_pos = 0;
        count = 0;
        start10_button.style.display = "block";
        start10s_button.style.display = "block";
        start_button.style.display = "none";
        cut_button.style.display = "none";
        audioElm.pause(); 
        audioElm.src = 'htdocs/song1.mp3';
        audioElm.currentTime = 0;
        audioElm.play();
        video_sel_set = 0;
        video1_set = 0;
        video2_set = 0;
        video3_set = 0;
        video4_set = 0;
        video5_set = 0;
        video6_set = 0;
        video7_set = 0;
        video8_set = 0;
        video9_set = 0;
        video10_set = 0;
        setCookie2();
    });
}

socket.on("result0", (data) => {
    effect = data.value;
    if (effect == 1) {
        video_s.src = 'htdocs/test1.mp4';
    } else if (effect == 50) {
        video_s.src = 'htdocs/test2.mp4';
    } else if (effect == 100) {
        video_s.src = 'htdocs/test3.mp4';
    } else {
        video_s.src = 'htdocs/test0.mp4';
    }
});

socket.on("result1", (data) => {
    kind[count] = data.kind;
    rea[count] = data.rea;
    count++;
    let card = 'url(htdocs/card/card' + rea[count - 1] + '.png)';
    document.getElementById("card" + count).style.backgroundImage = card;
    if (rea[count - 1] == 5) {
        document.getElementById("card" + count).className = 'card_rea5';
    }
    document.getElementById("card" + count).classList.add('fadeUp');
    new_card_check(count, rea[count - 1],  kind[count - 1]);
    if (count == 10) {
        video_sel.src = 'htdocs/select.mp4';
        video1.src = 'htdocs/mov/test' + rea[0] + "_" + kind[0] + '.mp4';
        video2.src = 'htdocs/mov/test' + rea[1] + "_" + kind[1] + '.mp4';
        video3.src = 'htdocs/mov/test' + rea[2] + "_" + kind[2] + '.mp4';
        video4.src = 'htdocs/mov/test' + rea[3] + "_" + kind[3] + '.mp4';
        video5.src = 'htdocs/mov/test' + rea[4] + "_" + kind[4] + '.mp4';
        video6.src = 'htdocs/mov/test' + rea[5] + "_" + kind[5] + '.mp4';
        video7.src = 'htdocs/mov/test' + rea[6] + "_" + kind[6] + '.mp4';
        video8.src = 'htdocs/mov/test' + rea[7] + "_" + kind[7] + '.mp4';
        video9.src = 'htdocs/mov/test' + rea[8] + "_" + kind[8] + '.mp4';
        video10.src = 'htdocs/mov/test' + rea[9] + "_" + kind[9] + '.mp4';
    }
});

enterkey = (code) => {
    //エンターキー押下なら
    if (13 === code) {
        document.getElementById(text).click();
    }
    return;
}

let video_start = () => {
    if (video_sel_set == 1 && video1_set == 1 && video2_set == 1 && video3_set == 1 && 
        video4_set == 1 && video5_set == 1 && video6_set == 1 && video7_set == 1 && 
        video8_set == 1 && video9_set == 1 && video10_set == 1) {
        video1.style.display = "block";
        video.style.display = "none";
        video1.play();
        now_pos = 1;
    }
}

let start_print = () => {

    start10s_button.style.top = "370px";
    start10s_button.style.left = "700px";
    start10_button.style.top = "370px";
    start10_button.style.left = "1020px";
    start_button.style.top = "555px";
    start_button.style.left = "20px";
    cut_button.style.top = "445px";
    cut_button.style.left =  "20px";
    let top = parseInt(start10s_button.style.top);
    let left = parseInt(start10s_button.style.left);
    times.style.top = top + 100 + "px";
    times.style.left = left + 150 + "px";

    for (i = 1; i <= 10; i++) {
        left = (i - 1) * 125 + 120;
 //       let card1 = 'url(htdocs/card0_0.png)';
        document.getElementById("new" + i).style.top = "720px";
        document.getElementById("new" + i).style.left = left + 20 + "px";
        document.getElementById("card" + i).style.top = "735px";
        document.getElementById("card" + i).style.left = left + "px";
//        document.getElementById("card" + i).style.display = "block";
//        document.getElementById("card" + i).style.backgroundImage = card1;
    }

    // ★
    let kcount = 1;
    for (j = 1; j <= 4; j++) {
        for (i = 1; i <= 15; i++) {
            if (kcount <= 60) {
                mytop1 = (j - 1) * 125 + 950;
                myleft1 = (i - 1) * 85 + 110;
                document.getElementById("mycard1_" + kcount).style.top = mytop1 + "px";
                document.getElementById("mycard1_" + kcount).style.left = myleft1 + "px";
                kcount++
            }
        }
    }
    // ★★
    kcount = 1;
    for (j = 1; j <= 4; j++) {
        for (i = 1; i <= 15; i++) {
            if (kcount <= 60) {
                mytop2 = (j - 1) * 125 + 1450;
                myleft2 = (i - 1) * 85 + 110;
                document.getElementById("mycard2_" + kcount).style.top = mytop2 + "px";
                document.getElementById("mycard2_" + kcount).style.left = myleft2 + "px";
                kcount++
            }
        }
    }
    // ★★★
    kcount = 1;
    for (j = 1; j <= 4; j++) {
        for (i = 1; i <= 15; i++) {
            if (kcount <= 50) {
                mytop3 = (j - 1) * 125 + 1950;
                myleft3 = (i - 1) * 85 + 110;
                document.getElementById("mycard3_" + kcount).style.top = mytop3 + "px";
                document.getElementById("mycard3_" + kcount).style.left = myleft3 + "px";
                kcount++
            }
        }
    }
    // ★★★★
    kcount = 1;
    for (j = 1; j <= 4; j++) {
        if (j == 1) {
            for (i = 6; i <= 15; i++) {
                if (kcount <= 40) {
                    mytop4 = (j - 1) * 125 + 2325;
                    myleft4 = (i - 1) * 85 + 110;
                    document.getElementById("mycard4_" + kcount).style.top = mytop4 + "px";
                    document.getElementById("mycard4_" + kcount).style.left = myleft4 + "px";
                    kcount++
                }
            }
        } else {
            for (i = 1; i <= 15; i++) {
                if (kcount <= 40) {
                    mytop4 = (j - 1) * 125 + 2325;
                    myleft4 = (i - 1) * 85 + 110;
                    document.getElementById("mycard4_" + kcount).style.top = mytop4 + "px";
                    document.getElementById("mycard4_" + kcount).style.left = myleft4 + "px";
                    kcount++
                }
            }    
        }
    }
    // ★★★★★
    kcount = 1;
    for (j = 1; j <= 4; j++) {
        for (i = 1; i <= 15; i++) {
            if (kcount <= 20) {
                mytop5 = (j - 1) * 125 + 2700;
                myleft5 = (i - 1) * 85 + 110;
                document.getElementById("mycard5_" + kcount).style.top = mytop5 + "px";
                document.getElementById("mycard5_" + kcount).style.left = myleft5 + "px";
                kcount++
            }
        }
    }
}

let creat_card = () => {
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= 100; j++) {
            left = (i - 1) * 130 + 20;
            let element = document.createElement('mycard' + i + "_" + j);
            element.style.top = "880px";
            element.style.left = left + "px";
            element.style.display = "block";
            element.style.backgroundImage = 'url(htdocs/card/card0_0.png)';
            console.log(`@@@@@ test`);
        }
    }
}

let new_card_check = (t, trea, tkind) => {
    let hit = 0
    switch (trea) {
    case 1:
        if (hosi1[tkind] == 0) {
            hit = 1;
        }
    break;
    case 2:
        if (hosi2[tkind] == 0) {
            hit = 1;
        }
    break;
    case 3:
        if (hosi3[tkind] == 0) {
            hit = 1;
        }
        break;
    case 4:
        if (hosi4[tkind] == 0) {
            hit = 1;
         }
    break;
    case 5:
        if (hosi5[tkind] == 0) {
            hit = 1;
        }
        break;
    }
    if (hit == 1) {
        document.getElementById("new" + t).style.display = "block";
    }
}

let own_card_check = (trea, tkind) => {
    switch (trea) {
    case 1:
        if (hosi1[tkind] == 1) {
            return 1;
        }
    break;
    case 2:
        if (hosi2[tkind] == 1) {
            return 1;
        }
    break;
    case 3:
        if (hosi3[tkind] == 1) {
            return 1;
        }
        break;
    case 4:
        if (hosi4[tkind] == 1) {
            return 1;
         }
    break;
    case 5:
        if (hosi5[tkind] == 1) {
            return 1;
        }
        break;
    }
    return 0;
}

let mycard_check = (trea, tkind) => {
    console.log(`@@@@@ test %d, %d`,  trea, tkind);
    let tcard = 'url(htdocs/card/card' + trea + "_" + tkind +'.png)';
    let tmycard = "mycard" + trea + "_" + tkind;
    document.getElementById(tmycard).style.backgroundImage = tcard;
    switch (trea) {
        case 1:
            hosi1[tkind] = 1;
        break;
        case 2:
            hosi2[tkind] = 1;
        break;
        case 3:
            hosi3[tkind] = 1;
        break;
        case 4:
            hosi4[tkind] = 1;
        break;
        case 5:
            hosi5[tkind] = 1;
            document.getElementById(tmycard).className = 'card5_omote';
        break;
      }
}

let timer = () => {
    timer1 = setInterval(() => {
      timeDown1();
      if (time1 <= 0) {
        clearInterval(timer1);
      }
    }, 1000);
    timeDown1 = () => {
      time1--;
      console.log(time1);
      write_time();
    }
  }


  let write_time= () => {
        if (time1 <= 0) {
            //start10s_button.style.backgroundImage = 'url(htdocs/start20.png)';
            start10s_button.className = "btn-square-so-pop2";
            times.style.display = "none";
        } else {
            if (start_flag == 0) {
                //start10s_button.style.backgroundImage = 'url(htdocs/lock.png)';
                start10s_button.className = "btn-square-so-pop0";
                times.style.display = "block";
            }
        }
        let time2 = ('000' + time1).slice(-3);
        times.innerText= time2;    
  }

function foo(obj) {
    let tid1 = obj.id.split('d');
    let tid2 = tid1[1].split('_');
    let ret = 0;
    let tid30 = parseInt(tid2[0]);
    let tid31 = parseInt(tid2[1]);

    ret = own_card_check(tid30, tid31);
    if (ret == 1) {
        card_detail1.style.backgroundImage = 'url(htdocs/card/card' + tid1[1] + '.png)';
        if (tid30 == 5) {
            card_detail1.className = 'card_detail1_5';
        } else {
            card_detail1.className = 'card_detail1';
        }
        modalArea.classList.toggle('is-show');    
    }
 }


let setCookie2=() => {
    setCookie('hosi1', hosi1);
    setCookie('hosi2', hosi2);
    setCookie('hosi3', hosi3);
    setCookie('hosi4', hosi4);
    setCookie('hosi5', hosi5);
}

const setCookie = (name, json)=>{
    let cookie = '';
    let expire = '';
    let period = '';
    //Cookieの保存名と値を指定
    cookies = name + '=' + JSON.stringify(json) + ';';
    //Cookieを保存するパスを指定
    cookies += 'path=/ ;';
    //Cookieを保存する期間を指定
    period = 30; //保存日数
    expire = new Date();
    expire.setTime(expire.getTime() + 1000 * 3600 * 24 * period);
    expire.toUTCString();
    cookies += 'expires=' + expire + ';';
    //Cookieを保存する
    document.cookie = cookies;
};

const getCookie = ()=>{
    let cookies = '';
    let cookieArray = new Array();
    let result = new Array();

    //Cookieを取得する
    cookies = document.cookie;

    //Cookieを配列に分割してJSONに変換する
    if (cookies) {
        cookieArray = cookies.split(';');
        
        cookieArray.forEach(data => {
            data = data.split('=');
            //data[0]: Cookieの名前（例では「user」）
            //data[1]: Cookieの値（例では「json」）

            if (data[0] === "hosh1") {
                hosi1 = JSON.parse(data[1]);
            } else if (data[0] === "hosh2") {
                hosi2 = JSON.parse(data[1]);
            } else if (data[0] === "hosh3") {
                hosi3 = JSON.parse(data[1]);
            } else if (data[0] === "hosh4") {
                hosi4 = JSON.parse(data[1]);
            } else if (data[0] === "hosh5") {
                hosi5 = JSON.parse(data[1]);
            }
        });
    }
    return 0;
}


