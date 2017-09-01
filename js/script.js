(function () {
'use strict';

var mode = null;
var startTime = null;
const strbtn = document.getElementById('cupBtn_str');
const stpbtn = document.getElementById('cupBtn_stp');
const timeResult = document.getElementById('timeresult');

    strbtn.onclick = function start(){
         startTime = new Date().getTime();
         document.getElementById("cup").innerText =　"5秒経ったらストップを押してね！";
    }    

    stpbtn.onclick = function stop(){
        var currentTime = new Date().getTime();
        var seconds = (currentTime - startTime) / 1000;
        document.getElementById("cup").innerText =　seconds+"秒";
        if(4.5 <= seconds && seconds <= 5.5){
            timeResult.innerHTML = "素晴らしい！勝率アップ！！";
            mode = 0;
            return mode;
        }else{
            timeResult.innerHTML = "残念。。勝率ダウン！！";
            mode = 1;
            return mode;
        }
    }

const gubtn = document.getElementById('guBtn');
const chokibtn = document.getElementById('chokiBtn');
const pabtn = document.getElementById('paBtn');
const myhand = document.getElementById("myhand");
const myimg = document.getElementById("myimg");
const enemyhand = document.getElementById("enemyhand");
const enemyimg = document.getElementById("enemyimg");
const resultArea = document.getElementById("result");

    // グーを選んだとき
        gubtn.onclick = function() {
        if(mode == 0){       
        var gurand = Math.floor(Math.random() * 10 );
            var myjanken = 1;
            myhand.innerHTML="あなたの手はグーです";
            myimg.innerHTML= '<img src="img/gu.png">';
        // 相手のじゃんけん
                
                if(myjanken == 1 && gurand <= 2 ){
                    enemyhand.innerHTML="相手の手はグーです";
                    enemyimg.innerHTML= '<img src="img/gu.png">';
                    resultArea.innerHTML="あいこです！";
                }　else if(myjanken == 1 && gurand <= 6){
                    enemyhand.innerHTML="相手の手はチョキです";
                    enemyimg.innerHTML= '<img src="img/choki.png">';            
                    resultArea.innerHTML="あなたの勝ちです！";
                } else if(myjanken == 1 && gurand <= 9){
                    enemyhand.innerHTML="相手の手はパーです";          
                    enemyimg.innerHTML= '<img src="img/pa.png">';            
                    resultArea.innerHTML="あなたの負けです！";
                }
            }else if(mode == 1){    
                    var gurand = Math.floor(Math.random() * 10 );
                    var myjanken = 1;
                    myhand.innerHTML="あなたの手はグーです";
                    myimg.innerHTML= '<img src="img/gu.png">';
                
                // 相手のじゃんけん
                        if(gurand <= 2){
                            enemyhand.innerHTML="相手の手はグーです";
                            enemyimg.innerHTML= '<img src="img/gu.png">';            
                        }　else if(gurand <= 4){
                            enemyhand.innerHTML="相手の手はチョキです";
                            enemyimg.innerHTML= '<img src="img/choki.png">';            
                        } else if(gurand <= 9){
                            enemyhand.innerHTML="相手の手はパーです";          
                            enemyimg.innerHTML= '<img src="img/pa.png">';            
                        }
        
                // 結果の表示エリア
                    if(myjanken == 1 && gurand <= 2 ){
                        resultArea.innerHTML="あいこです！";
                    } else if(myjanken == 1 && gurand <= 4 ){
                        resultArea.innerHTML="あなたの勝ちです！";
                    }　else if(myjanken == 1 && gurand <= 9 ){
                        resultArea.innerHTML="あなたの負けです！";
                    }
            }
        }
    // チョキを選んだとき
        chokibtn.onclick = function(){  
            if(mode == 0){      
            var chokirand = Math.floor(Math.random() * 10 );
            var myjanken = 2;
            myhand.innerHTML="あなたの手はチョキです";
            myimg.innerHTML= '<img src="img/choki.png">';
          
            // 相手のじゃんけん
            if(myjanken == 2 && chokirand <= 2){
                enemyhand.innerHTML="相手の手はグーです";
                enemyimg.innerHTML= '<img src="img/gu.png">';
                resultArea.innerHTML="あなたの負けです！";
            }　else if(myjanken == 2 && chokirand <= 4){
                enemyhand.innerHTML="相手の手はチョキです";
                enemyimg.innerHTML= '<img src="img/choki.png">';
                resultArea.innerHTML="あいこです！";
            } else if(myjanken == 2 && chokirand <= 9){
                enemyhand.innerHTML="相手の手はパーです";          
                enemyimg.innerHTML= '<img src="img/pa.png">'; 
                resultArea.innerHTML="あなたの勝ちです！";
            }
            } else if(mode == 1){
                var chokirand = Math.floor(Math.random() * 10 );
                var myjanken = 2;
                myhand.innerHTML="あなたの手はチョキです";
                myimg.innerHTML= '<img src="img/choki.png">';
              
                // 相手のじゃんけん
                if(chokirand <= 5){
                    enemyhand.innerHTML="相手の手はグーです";
                    enemyimg.innerHTML= '<img src="img/gu.png">';            
                }　else if(chokirand <= 7){
                    enemyhand.innerHTML="相手の手はチョキです";
                    enemyimg.innerHTML= '<img src="img/choki.png">';            
                } else if(chokirand <= 9){
                    enemyhand.innerHTML="相手の手はパーです";          
                    enemyimg.innerHTML= '<img src="img/pa.png">';            
                }
                // 結果の表示エリア
                         if(myjanken == 2 && chokirand <= 5 ){
                            resultArea.innerHTML="あなたの負けです！";
                        }else if(myjanken == 2 && chokirand <= 7 ){
                            resultArea.innerHTML="あいこです！";
                        }else if(myjanken == 2 && chokirand <= 9 ){
                            resultArea.innerHTML="あなたの勝ちです！";
                        }
                }
                }
           
    // パーを選んだとき
        pabtn.onclick = function() {
            if (mode == 0){               
            var parand = Math.floor(Math.random() * 10 );
            var myjanken = 3;
            myhand.innerHTML="あなたの手はパーです";
            myimg.innerHTML= '<img src="img/pa.png">';
          
            // 相手のじゃんけん
            if(myjanken == 3 && parand <= 5){
                enemyhand.innerHTML="相手の手はグーです";
                enemyimg.innerHTML= '<img src="img/gu.png">';            
                resultArea.innerHTML="あなたの勝ちです！";
            }　else if(myjanken == 3 && parand <= 7 ){
                enemyhand.innerHTML="相手の手はチョキです";
                enemyimg.innerHTML= '<img src="img/choki.png">';
                resultArea.innerHTML="あなたの負けです！";
            } else if(myjanken == 3 && parand <= 9){
                enemyhand.innerHTML="相手の手はパーです";          
                enemyimg.innerHTML= '<img src="img/pa.png">';            
                resultArea.innerHTML="あいこです！";
            }
            }else if(mode == 1){
            var parand = Math.floor(Math.random() * 10 );
            var myjanken = 3;
            myhand.innerHTML="あなたの手はパーです";
            myimg.innerHTML= '<img src="img/pa.png">';
          
            // 相手のじゃんけん
            if(parand <= 2){
                enemyhand.innerHTML="相手の手はグーです";
                enemyimg.innerHTML= '<img src="img/gu.png">';            
            }　else if(parand <= 7){
                enemyhand.innerHTML="相手の手はチョキです";
                enemyimg.innerHTML= '<img src="img/choki.png">';            
            } else if(parand <= 9){
                enemyhand.innerHTML="相手の手はパーです";          
                enemyimg.innerHTML= '<img src="img/pa.png">';            
            }
            // 結果の表示エリア
                     if(myjanken == 3 && parand <= 2 ){
                        resultArea.innerHTML="あなたの勝ちです！";
                    }else if(myjanken == 3 && parand <= 7 ){
                        resultArea.innerHTML="あなたの負けです！";
                    }else if(myjanken == 3 && parand <= 9 ){
                        resultArea.innerHTML="あいこです！";
                    }
    }
        }
    // ハードモードじゃんけん
            //  } else if(mode == 1){    
            //     var gurand = Math.floor(Math.random() * 10 );
            //     var myjanken = 1;
            //     myhand.innerHTML="あなたの手はグーです";
            //     myimg.innerHTML= '<img src="img/gu.png">';
            
            // // 相手のじゃんけん
            //         if(gurand <= 2){
            //             enemyhand.innerHTML="相手の手はグーです";
            //             enemyimg.innerHTML= '<img src="img/gu.png">';            
            //         }　else if(gurand <= 4){
            //             enemyhand.innerHTML="相手の手はチョキです";
            //             enemyimg.innerHTML= '<img src="img/choki.png">';            
            //         } else if(gurand <= 9){
            //             enemyhand.innerHTML="相手の手はパーです";          
            //             enemyimg.innerHTML= '<img src="img/pa.png">';            
            //         }
    
            // // 結果の表示エリア
            //     if(myjanken == 1 && gurand <= 2 ){
            //         resultArea.innerHTML="あいこです！";
            //     } else if(myjanken == 1 && gurand <= 4 ){
            //         resultArea.innerHTML="あなたの勝ちです！";
            //     }　else if(myjanken == 1 && gurand <= 9 ){
            //         resultArea.innerHTML="あなたの負けです！";
            //     }
            
        // チョキを選んだとき
        //     chokibtn.onclick = function() {
        //         var chokirand = Math.floor(Math.random() * 10 );
        //         var myjanken = 2;
        //         myhand.innerHTML="あなたの手はチョキです";
        //         myimg.innerHTML= '<img src="img/choki.png">';
              
        //         // 相手のじゃんけん
        //         if(chokirand <= 5){
        //             enemyhand.innerHTML="相手の手はグーです";
        //             enemyimg.innerHTML= '<img src="img/gu.png">';            
        //         }　else if(chokirand <= 7){
        //             enemyhand.innerHTML="相手の手はチョキです";
        //             enemyimg.innerHTML= '<img src="img/choki.png">';            
        //         } else if(chokirand <= 9){
        //             enemyhand.innerHTML="相手の手はパーです";          
        //             enemyimg.innerHTML= '<img src="img/pa.png">';            
        //         }
        //         // 結果の表示エリア
        //                  if(myjanken == 2 && chokirand <= 5 ){
        //                     resultArea.innerHTML="あなたの負けです！";
        //                 }else if(myjanken == 2 && chokirand <= 7 ){
        //                     resultArea.innerHTML="あいこです！";
        //                 }else if(myjanken == 2 && chokirand <= 9 ){
        //                     resultArea.innerHTML="あなたの勝ちです！";
        //                 }
        //     }
        // // // パーを選んだとき
        //     pabtn.onclick = function() {
        //         var parand = Math.floor(Math.random() * 10 );
        //         var myjanken = 3;
        //         myhand.innerHTML="あなたの手はパーです";
        //         myimg.innerHTML= '<img src="img/pa.png">';
              
        //         // 相手のじゃんけん
        //         if(parand <= 2){
        //             enemyhand.innerHTML="相手の手はグーです";
        //             enemyimg.innerHTML= '<img src="img/gu.png">';            
        //         }　else if(parand <= 7){
        //             enemyhand.innerHTML="相手の手はチョキです";
        //             enemyimg.innerHTML= '<img src="img/choki.png">';            
        //         } else if(parand <= 9){
        //             enemyhand.innerHTML="相手の手はパーです";          
        //             enemyimg.innerHTML= '<img src="img/pa.png">';            
        //         }
        //         // 結果の表示エリア
        //                  if(myjanken == 3 && parand <= 2 ){
        //                     resultArea.innerHTML="あなたの勝ちです！";
        //                 }else if(myjanken == 3 && parand <= 7 ){
        //                     resultArea.innerHTML="あなたの負けです！";
        //                 }else if(myjanken == 3 && parand <= 9 ){
        //                     resultArea.innerHTML="あいこです！";
        //                 }
        
})();
