<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="css/styles.css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<meta charset="UTF-8">
<meta name="viewport"
  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>typingame</title>
<script>
window.addEventListener('load', () => {
    var no;
    const date = new Date(); //インスタンスを生成
const month = date.getMonth()+1; //「月」を取得
const day = date.getDate(); //「日」を取得

    console.log(elapsedTime)
    const table = document.querySelector('#tb > tbody')
    const name = document.querySelector('#nameInput')
    const comment = document.querySelector('#commentInput')
    const submit = document.querySelector('#submit')

    const refresh = () => {
        const existTRs = table.querySelectorAll('tbody > tr')
        existTRs.forEach(e => e.remove())
        axios.get("./getData.php").then(e => {
            e.data.split("\n").forEach((raw, i) => {
                const line = raw.split(',')
                if(line.length > 1) {
                    const tr = document.createElement('tr')
                    const no = document.createElement('td')
                    no.setAttribute('scope', 'row')
                    no.innerText = `${i+1}`
                    const name = document.createElement('td')
                    name.innerText = line[0]
                    const points = document.createElement('td')
                    points.innerText = line[1];
                    const comment = document.createElement('td')
                    comment.innerText = line[2]
                    const month = document.createElement('td')
                    month.innerText = line[3]
                    const kigou = document.createElement('td')
                    kigou.innerText = line[4]
                    const day = document.createElement('td')
                    day.innerText = line[5]
                    tr.appendChild(no)
                    tr.appendChild(name)
                    tr.appendChild(points)
                    tr.appendChild(comment)
                    tr.appendChild(month)
                    tr.appendChild(kigou)
                    tr.appendChild(day)
                    table.append(tr)
                      }
            })
            console.log(line.rength())
        })
    }

    refresh()
   
    submit.addEventListener('click', () => {
        console.log(table.length)
        axios.get('submit.php', {
           
            params: {
                name: name.value,
                points: elapsedTime,lang,
                comment: comment.value,
                month: month,
                kigou: "/",
                day: day
            }
        }).then(e => {
            refresh()
        })
    
    })

    $(function(){
          $('.js-modal-open').on('click',function(){
              $('.js-modal').fadeIn();
              return false;
          });
          $('.js-modal-close').on('click',function(){
              $('.js-modal').fadeOut();
              return false;
          });
      });
        
      $(function(){
        $('.js-modal-open').on('click',function(){
            $('.js-modal').fadeIn();
            return false;
        });
        $('.js-modal-close2').on('click',function(){
            $('.js-modal').fadeOut();
            return false;
        });
    });

            function OnButtonClickmodal(){
              setTimeout(function () {
                $('.modal').animate({ scrollTop: 0 }); return false;
              }, 0);
               
            }
})
</script>
</head>

<body id="screen">　
   
    <div class="container">
        <div class="box">
            <div id="innerHTMLtxt3"></div>
            <div id="innerHTMLtxt4"></div>
            <p id="text4"></p>
           
            <div id="mute">
                <div id="mute2">
                <input type="button" id="mutebutton" value="サウンドオフ" onclick="OnButtonClick3();" /><br />
            </div>
                <div id="tanngomesseji">＊デフォはBGMあり<br>音量にご注意ください。</div>
            </div>
    
            <div id="list12"> 　 初めに選択してください。</div>
            <div id="list1">
                <div id="tanngobotann3">
                    <input type="button" id="nihonngobotann" value="元気がでる日本語集" onclick="OnButtonClick();" /><br />
                    <div id="tanngomesseji">＊入力の判定は外務省ヘボン式<br>　を採用しています。</div>
                </div>
                <div id="tanngobotann2">
                    <input type="button" id="eitanngobotann" value="ポジティブになれる英単語集" onclick="OnButtonClick2();" /><br />
                    <div id="tanngomesseji">＊英単語は読み上げます。<br>　音量にご注意ください。</div>
                </div>
            </div>
        
            <p id="target"></p>
            <p id="result"></p>
            <p id="result2"></p>
            <a href="" id="tweet" class="btn" target="_blank">
                <div id="innerHTMLtxt"></div>
            </a>
            <div id = "hidenn">
                <a class="js-modal-open" href="" onclick="OnButtonClickmodal();">ランキングに登録する！</a>
            </div>
<!--===========================バーチャルキーボードJQERY=================================-->
            <div class="container">
                <div id="innerHTMLtxt5"></div>
                <div id="innerHTMLtxt6"></div>
                <div id="text-button">
                    <p id="text"></p>
                </div>
                <div class="night_mode">
                    <div class="toggle_circle"></div>
                </div>
                <div class="change_light_color">
                    <div class="colors">
                        <input class="colors_input" type="color">
                    </div>
                </div>
                <div class="keyboard_wrapp">
                    <div class="keyboard_lights"></div>
                    <div class="keyboard_keys">
                        <div class="row">
                            <div class="keys">`</div>
                            <div class="keys">1</div>
                            <div class="keys">2</div>
                            <div class="keys">3</div>
                            <div class="keys">4</div>
                            <div class="keys">5</div>
                            <div class="keys">6</div>
                            <div class="keys">7</div>
                            <div class="keys">8</div>
                            <div class="keys">9</div>
                            <div class="keys">0</div>
                            <div class="keys">-</div>
                            <div class="keys">=</div>
                            <div class="keys backspace_key">Backspace</div>
                        </div>
                        <div class="row">
                            <div class="keys tab_key">Tab</div>
                            <div class="keys">Q</div>
                            <div class="keys">W</div>
                            <div class="keys">E</div>
                            <div class="keys">R</div>
                            <div class="keys">T</div>
                            <div class="keys">Y</div>
                            <div class="keys">U</div>
                            <div class="keys">I</div>
                            <div class="keys">O</div>
                            <div class="keys">P</div>
                            <div class="keys">{</div>
                            <div class="keys">}</div>
                            <div class="keys slash_key">\</div>
                        </div>
                        <div class="row">
                            <div class="keys caps_lock_key">Caps Lock</div>
                            <div class="keys">A</div>
                            <div class="keys">S</div>
                            <div class="keys">D</div>
                            <div class="keys">F</div>
                            <div class="keys">G</div>
                            <div class="keys">H</div>
                            <div class="keys">J</div>
                            <div class="keys">K</div>
                            <div class="keys">L</div>
                            <div class="keys">;</div>
                            <div class="keys">"</div>
                            <div class="keys enter_key">Enter</div>
                        </div>
                        <div class="row">
                            <div class="keys shift_key shift_left">Shift</div>
                            <div class="keys">Z</div>
                            <div class="keys">X</div>
                            <div class="keys">C</div>
                            <div class="keys">V</div>
                            <div class="keys">B</div>
                            <div class="keys">N</div>
                            <div class="keys">M</div>
                            <div class="keys"><</div>
                                    <div class="keys">></div>
                                    <div class="keys">/</div>
                                    <div class="keys">?</div>
                                    <div class="keys shift_key shift_right">Shift</div>
                            </div>
                            <div class="row">
                                <div class="keys ctrl_key ctrl_left">Ctrl</div>
                                <div class="keys win_key">Win</div>
                                <div class="keys alt_key alt_left">Alt</div>
                                <div class="keys space_key"></div>
                                <div class="keys alt_key alt_right">Alt</div>
                                <div class="keys">Fn</div>
                                <div class="keys ctrl_key ctrl_right">Ctrl</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--*************************************************************************************-->
        <script src="js/main.js"></script>
        <audio id="misunyuuryokuonnsei" preload="auto">
            <!--ミスタイプ時サウンド-->
            <source src="audio/button71.mp3" type="audio/mp3">
        </audio>
        <audio id="nyuuryokuonnsei" preload="auto">
            <!--正解時サウンド-->
            <source src="audio/button58.mp3" type="audio/mp3">
        </audio>
        <audio id="kuriajionnsei" preload="auto">
            <!--クリア時音声-->
            <source src="audio/one18.mp3" type="audio/mp3">
        </audio>
        <audio id="positive" preload="auto">
            <source src="audio/positive.mp3" type="audio/mp3">
        </audio>
        <audio id="perfect" preload="auto">
            <source src="audio/perfect.mp3" type="audio/mp3">
        </audio>
        <audio id="nice" preload="auto">
            <source src="audio/nice.mp3" type="audio/mp3">
        </audio>
        <audio id="joyful" preload="auto">
            <source src="audio/joyful.mp3" type="audio/mp3">
        </audio>
        <audio id="happy" preload="auto">
            <source src="audio/happy.mp3" type="audio/mp3">
        </audio>
        <audio id="great" preload="auto">
            <source src="audio/great.mp3" type="audio/mp3">
        </audio>
        <audio id="fantastic" preload="auto">
            <source src="audio/fantastic.mp3" type="audio/mp3">
        </audio>
        <audio id="courage" preload="auto">
            <source src="audio/courage.mp3" type="audio/mp3">
        </audio>
        <audio id="delightful" preload="auto">
            <source src="audio/delightful.mp3" type="audio/mp3">
        </audio>
        <audio id="confidence" preload="auto">
            <source src="audio/confidence.mp3" type="audio/mp3">
        </audio>
        <audio id="cool" preload="auto">
            <source src="audio/cool.mp3" type="audio/mp3">
        </audio>
        <audio id="best" preload="auto">
            <source src="audio/best.mp3" type="audio/mp3">
        </audio>
        <audio id="brilliant" preload="auto">
            <source src="audio/brilliant.mp3" type="audio/mp3">
        </audio>
        <audio id="awesome" preload="auto">
            <source src="audio/awesome.mp3" type="audio/mp3">
        </audio>
        <audio id="amazing" preload="auto">
            <source src="audio/amazing.mp3" type="audio/mp3">
        </audio>
        <audio id="alright" preload="auto">
            <source src="audio/alright.mp3" type="audio/mp3">
        </audio>
        <audio id="cute" preload="auto">
            <source src="audio/cute.mp3" type="audio/mp3">
        </audio>
        <audio id="excellent" preload="auto">
            <source src="audio/excellent.mp3" type="audio/mp3">
        </audio>
        <audio id="bgm" preload="auto">
            <source src="audio/Dotabata_Panic-2(Slow).mp3" type="audio/mp3">
        </audio>
        <audio id="bgm2" preload="auto">
            <source src="audio/MyAudio_1.mp3" type="audio/mp3">
        </audio>
        <audio id="seikai" preload="auto">
            <source src="audio/button70.mp3" type="audio/mp3">
        </audio>
        <audio id="set" preload="auto">
            <source src="audio/set.mp3" type="audio/mp3">
        </audio>
    
        <canvas class="background"></canvas>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js"></script>


        
        <div class="modal js-modal">
                       
            <div class="modal__content">
             
                <section class="page-section3" id="about2">
                   
                    <div class="container">
                         
                     
                            <div class="container2">
                                <form class="border p-3 rounded-2">
                                    <div class="mb-3">
                                        <label for="nameInput" class="form-label">ニックネーム</label>
                                        <input type="text" class="form-control" id="nameInput" aria-describedby="emailHelp">
                                    </div>
                                
                                    <div class="mb-3">
                                    <label for="commentInput" class="form-label">コメント(３０文字程度でお願いします。)</label>
                                        <input type="text" class="form-control" id="commentInput" aria-describedby="emailHelp">
                                    </div>
                                    <button type="button" id="submit" class="btn btn-primary">送信</button>
                                </form>
                            </div>
                            <div class="container">
                                <div class="border p-3 rounded-2 form-control">
                                    <table id="tb" class="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">ニックネーム:  </th>
                                            <th scope="col">スコア/言語:  </th>
                                            <th scope="col">コメント:  </th>
                                            <th scope="col"></th>
                                            <th scope="col">日付</th>
                                            <th scope="col"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        
                    <br>
                    </div>
             
                    <input class="js-modal-close" type="button" id="closebutton4" value="CLOSE" ><br />
                </section>

                
                </div>
                <!--modal__inner-->
                </div>
                   
                          
</body>
</html>