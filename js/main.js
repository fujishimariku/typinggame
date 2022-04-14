'use strict';                                                                                 //厳密なエラーチェックを設定    
var elapsedTime;
let flag = false;                                                                             //ミュートボタンの判定に使用
let word;                                                                                     
let words;
var lang = "";
var isPlaying = false; 
/***********************************************サウンド*****************************************************/
function sound(data_name) {
  if(flag === true){
  document.getElementById(data_name).pause();
  }else{
  document.getElementById(data_name).play();
  }
}
/*==========================================================================================================*/
function makeWords(lang){
  if(lang=="/jp"){                                                                             //日本語の配列
  return [                                                                       
    ['wakuwaku','ワクワク'],
    ['enerugisshu',"エネルギッシュ"],
    ['sozodekirukotoha,sozodekiru',"想像できることは、創造できる"],
    ['shinkiitten',"心機一転"],
    ['jinseihakokorogatsukuru',"人生は心が作る"],
    ['kotobagajinseiokaeru',"言葉が人生を変える"],
    ['jibunjikudeikiyo',"自分軸で生きよう"],
    ['jiyujizai',"自由自在"],
    ['taiganjoju',"大願成就"],
    ['omaenomichiosusume,hitonihakattenakotoiwaseteoke',"お前の道を進め、人には勝手なことを言わせておけ"],
    ['ippofumidaserunara,moippomofumidaseru',"一歩踏み出せるなら、もう一歩も踏み出せる"],
    ['waraukadonihafukukitaru',"笑う門には福来る"],
    ['yoihanahaatokara',"よい花はあとから"],
    ['seikonohantaihashippaidehanaku,yaranaikotoda',"成功の反対は失敗ではなく、やらないことだ"],
  ];
  }
  else if (lang=="/en"){                                                                       //英語の配列
  return [
    ['alright',"「大丈夫」"],
    ['amazing',"「驚くべき・素晴らしい」"],
    ['awesome',"「すごい！」"],
    ['brilliant',"「光り輝く・鮮明な」"],
    ['best',"「最も良い・最善の」"],
    ['cool',"「かっこいい・すごい」"],
    ['confidence',"「自身・信用・大胆さ」"],
    ['courage',"「勇気・度胸」"],
    ['cute',"「かわいい」"],
    ['delightful',"「楽しい・愉快な」"],
    ['excellent',"「優秀な・優れて」"],
    ['fantastic',"「最高だ・素晴らしい・素敵な」"],
    ['great',"「すごい！とても」"],
    ['happy',"「幸せ」"],
    ['joyful',"「喜ばしい・嬉しい」"],
    ['nice',"「ナイス！いい」"],
    ['perfect',"「完璧な・理想的な」"],
    ['positive',"「前向きな・ポジティブ」"],
  ];
  }
  }
/***************************HTMLの初めに日本語単語集ボタンを押したときの処理*********************************/
function OnButtonClick() {
  lang = "/jp"                                                                                 //言語保持変数に日本語をセット
  var list_element = document.getElementById("list1");                                        //テキストを消去
  list_element.remove();

  var list_element = document.getElementById("list12");                                       //日本語、英単語集ボタンを消去
  list_element.remove();
  
  typinggame();                                                                               //日本語版のゲームプログラムを呼び出す
  var list_element = document.getElementById("mute");                                         //ミュートボタンを消去 
  list_element.remove();
}
/*==========================================================================================================*/

/***************************HTMLの初めに英単語集ボタンを押したときの処理***********************************/
function OnButtonClick2() {
  lang = "/en"                                                                                 //言語保持変数に英語をセット
  var list_element = document.getElementById("list1");                                        //テキストを消去
  list_element.remove();
  var list_element = document.getElementById("list12");                                       //日本語、英単語集ボタンを消去
  list_element.remove();
 
  typinggame();                                                                               //アルファベットのゲームプログラムを呼び出す
  var list_element = document.getElementById("mute");                                         //ミュートボタンを消去
  list_element.remove();
}
/*==========================================================================================================*/

/********************************サウンドオフボタンを押したときの処理****************************************/
function OnButtonClick3() {
 flag = true;                                                                                 //フラグを切り替え（ミュート）
 var list_element = document.getElementById("mute");                                          //ミュートボタンを消去
 list_element.remove();
}
/*==========================================================================================================*/

/*********************************************ゲームプログラム*************************************************/
function typinggame() {
  if(lang == "/en") {
    sound("bgm2"); 
    innerHTMLtxt3.innerHTML = "ポジティブになれる英単語集";
  }else{
    sound("bgm"); 
    innerHTMLtxt3.innerHTML = "元気の出る日本語集";
  }
  if(lang == "/en"){
    target.textContent = "Press any key to start game"; 
  }else{
    target.textContent = "キー入力でスタート！"; 
  }                           
                                             
  innerHTMLtxt4.innerHTML = "ㅤ";                                                             //ミスタイプ時のみ表示したいので初期表示は空白文字
  let miss = 0;                                                                               //ミスタイプ回数保存変数を宣言
  {
/****************************************新しい単語をセットする処理******************************************/
    function setWord() {
      if( words.length >= 1){
        sound("set");                                                                         //単語をセット時の音を呼び出す
      }

      word = words.splice(Math.floor(Math.random() * words.length), 1)[0];                    //単語の配列の中からランダムに単語を取得　spliceを使用して単語を配列から消去
      innerHTMLtxt6.innerHTML = word[0];                                                      //単語表示領域を単語で書き換え
      target.textContent = word[1];                                                           //日本語を表示                                                 
      loc = 0;                                                                                //何文字目かを判定する変数を０で初期化
/*==========================================================================================================*/  

/**************************************残り何単語残っているかを表示******************************************/
      var nokori = words.length + 1;                                                          //残りの単語数保存変数を単語の配列の要素数＋１で初期化
      innerHTMLtxt3.innerHTML = "残り" + nokori + "語です！";                                 //残りの単語表示領域を書き換え
      if (words.length == 1) {                                                                //単語の配列の要素数が残り１場合
        innerHTMLtxt3.innerHTML = "次で最後！";                                               //残りの単語表示領域を書き換え
      }else if (words.length == 0) {
        innerHTMLtxt3.innerHTML = "";
      }
    }
/*==========================================================================================================*/

/****************************************単語の配列を読み込む************************************************/
   words = makeWords(lang);
/*==========================================================================================================*/      
    let loc = 0;                                                                              //何文字目かを判定する変数を宣言
    let startTime;                                                                            //時間を保持する変数
    const target = document.getElementById('target');                                         //日本語を表示させるために要素を取得
/******************************************キー入力をした時の処理********************************************/
    document.addEventListener('keydown', e => {
      if (isPlaying === false) {                                                              //ゲーム中でない時の処理
        startTime = Date.now();                                                               //キー入力時の時刻を記録                                   
          target.textContent = "3";                                                           //以下のsetTimeoutで１秒ずつカウント
          setTimeout(function () {
            target.textContent = "2";
            setTimeout(function () {
              target.textContent = "1";
              setTimeout(function () {
                setWord()                                                                     //単語をセットする処理を呼び出す
              }, 1000);
            }, 1000);
          }, 1000);
      }
      isPlaying = true;  
      if (e.key !== word[0][loc]) {                                                           //入力したキーが異なる場合
        sound("misunyuuryokuonnsei");
        innerHTMLtxt4.innerHTML = "ミスタイプ！！";                                           //HTMLを書き換え
        miss++;                                                                               //ミス回数を＋
                                                                                
        var obj = document.getElementById("screen");                                          //画面の色を変更したいのでidを取得
        if (isPlaying === true) {                                                             //プレイ中なら画面の色を変更
          obj.style.backgroundColor = "rgb(235, 54, 120)";
        }
        return;
      }
      if (e.key == word[0][loc]) {                                                            //入力が正しい場合(ring()とring2()を分けるために条件式を記述)
        innerHTMLtxt4.innerHTML = "ㅤ";                                                       //「ミスタイプ」表示領域を空白文字で置き換え
        sound("nyuuryokuonnsei");                                                                             //キー入力音を呼び出す
        var obj = document.getElementById("screen");                                          //入力が正しいときは画面の色を元に戻す
        obj.style.backgroundColor = "rgb(255, 243, 231)";
      }
      loc++;                                                                                  //次に判定する文字を更新

      innerHTMLtxt6.innerHTML = ''.repeat(loc) + word[0].substring(loc);                      //正解した文字を消去＋残りを表示

      if (loc === word[0].length) {                                                           //正解した文字数が単語の文字数と同じだった場合
        sound("seikai")
        innerHTMLtxt6.innerHTML = "ㅤ";                                                       //正解した文字を消去＋残りを表示する領域を空白文字に
        if (words.length === 0) {                                                      　     //単語の配列の要素数が０になった場合、ゲームクリア時
          setTimeout(function () {           
            document.getElementById("hidenn").style.visibility ="visible";                      //ランキング表示                                                 
          }, 1000);

          setTimeout(function () {                                                            //見栄えをよくするため＋英単語版の時、最後の単語を読み上げる時間を確保
            document.getElementById("bgm").pause();
            document.getElementById("bgm2").pause();
            sound("kuriajionnsei")                                                                          //クリア時のサウンドを呼び出す
            innerHTMLtxt6.innerHTML = "Thank you so much for playing!";                       //以下４行で書き換え
            innerHTMLtxt3.innerHTML = "";
            innerHTMLtxt4.innerHTML = "";
            target.textContent = ""
            obj.style.backgroundColor = "rgb(255, 255, 255)";                                 //画面の色を変更
            elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);                 //クリア時間を表示　小数点以下を２桁、秒表示に
            const result = document.getElementById('result');                                 //結果画面を表示させるために要素を取得
            result.textContent = `クリアまでに要した時間は${elapsedTime}秒です。`;            //スコアを表示　
            result2.textContent = ("ミスタイプ : " + miss + "回")                             //ミス入力回数を表示
  
/********************************************ツイート機能****************************************************/
            var tweet = document.getElementById('tweet');
            var tweetUrl;
            innerHTMLtxt.innerHTML = "結果をツイートする";
            if(lang == '/en') {
              tweetUrl =
              'https://twitter.com/intent/tweet?text=' +
              encodeURIComponent(
                `あなたのスコアは${elapsedTime}secondsでした！/英単語集`
              ) +
              '&hashtags=http://fuji-portfolio.babymilk.jp/typing%20game/';
            }else{
              tweetUrl =
              'https://twitter.com/intent/tweet?text=' +
              encodeURIComponent(
                `あなたのスコアは${elapsedTime}secondsでした！/日本語単語集`
              ) +
              '&hashtags=http://fuji-portfolio.babymilk.jp/typing%20game/';
            }
            tweet.href = tweetUrl;
/*==========================================================================================================*/


            text.innerHTML = "もう一度遊ぶ";                                                  //テキストを表示してクリックしたときにページを更新
            document.getElementById("text-button").onclick = function () {
              location.reload();
            };
            return;
          }, 1000);
        }
        if(lang == "/en"){
          sound(word[0])
        }
        
        setTimeout(function () {                                                              //単語の配列の要素数が０になるまで新しい単語をセット、ディレイを設定
          setWord();
        }, 850);
      }
    });
  }
}
/*==========================================================================================================*/

/***********************************************JQERY********************************************************/
let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector('.caps_lock_key');
let toggle_circle = document.querySelector('.toggle_circle');
let night_mode = document.querySelector('.night_mode');
let body = document.querySelector('body');
let text_input = document.querySelector('.text');
let change_color = document.querySelector('.change_light_color');
let colors_input = document.querySelector('.colors_input');
let keyboard_lights = document.querySelector('.keyboard_lights');
let keyboard_wrapp = document.querySelector('.keyboard_wrapp');

for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute('keyname', keys[i].innerText);
  keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function (e) {
  for (let i = 0; i < keys.length; i++) {
    if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.add('active')
    }
    if (e.code == 'Space') {
      spaceKey.classList.add('active')
    }
    if (e.code == 'ShiftLeft') {
      shift_right.classList.remove('active')
    }
    if (e.code == 'ShiftRight') {
      shift_left.classList.remove('active')
    }
    if (e.code == 'CapsLock') {
      caps_lock_key.classList.toggle('active');
    }
  }
})

window.addEventListener('keyup', function (e) {
  for (let i = 0; i < keys.length; i++) {
    if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.remove('active')
      keys[i].classList.add('remove')
    }
    if (e.code == 'Space') {
      spaceKey.classList.remove('active');
      spaceKey.classList.add('remove');
    }
    if (e.code == 'ShiftLeft') {
      shift_right.classList.remove('active')
      shift_right.classList.remove('remove')
    }
    if (e.code == 'ShiftRight') {
      shift_left.classList.remove('active')
      shift_left.classList.remove('remove')
    }
    setTimeout(() => {
      keys[i].classList.remove('remove')
    }, 200)
  }
})


night_mode.addEventListener('click', function () {
  toggle_circle.classList.toggle('active');
  night_mode.classList.toggle('active');
  keyboard_wrapp.classList.toggle('active');
  text_input.classList.toggle('active');
  change_color.classList.toggle('active');
  for (let i = 0; i < keys.length; i++) {
    keys[i].classList.toggle('keys_night')
  }
})

colors_input.addEventListener('input', function () {
  for (let i = 0; i < keys.length; i++) {
    keys[i].style.color = colors_input.value
  }
  keyboard_lights.style.background = colors_input.value;
})

window.onload = function () {
  document.getElementById("hidenn").style.visibility ="hidden";
  flag = false;  
  Particles.init({
    selector: '.background',
    sizeVariations: 30,
    color: [
      '#Fbd', '#FFbd', '#CDbd', '#ADbd', 'rgba(0,187,221,.5)', 'rgba(0,187,221,.2)',
    ]
  });
};
/***********************************************JQERY********************************************************/


            