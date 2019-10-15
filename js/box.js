
let chest = document.getElementById('chest');
html = '';
var naid = localStorage.getItem("chosed");
// console.log(naid);

var nai = localStorage.getItem("key");
// console.log(nai);
$(".spantxt").html(nai);


//获取input的值
let num1 = sessionStorage.getItem('num1');

let num2 = sessionStorage.getItem('num2');

let num3 = sessionStorage.getItem('num3');

let num4 = sessionStorage.getItem('num4');

let num5 = sessionStorage.getItem('num5');

let num6 = sessionStorage.getItem('num6');

let num7 = sessionStorage.getItem('num7');


let goldBox = '<li class="lista"><img src="./images/金宝箱.jpeg"></li>';
let silverBox = '<li class="listb"><img src="./images/银宝箱.jpeg"></li>';

// 第一题
if (naid == 1) {
    if (num1 == 1) {
        $('.xiangzi').text('金宝箱,');
        $('.box-list').html('').append(goldBox)
        // chest-list.append(goldBox);

    } else {
        $('.xiangzi').text('银宝箱,');
        $('.box-list').html('').append(silverBox)
    }
}

//第二题
if (naid == 2) {
    if (num2 == 1) {
        $('.xiangzi').text('金宝箱,');
        $('.box-list').html('').append(goldBox)
        // chest-list.append(goldBox);

    } else {
        $('.xiangzi').text('银宝箱,');
        $('.box-list').html('').append(silverBox)
    }
}
//第三题
if (naid == 3) {
    if (num3 == 1) {
        $('.xiangzi').text('金宝箱,');
        $('.box-list').html('').append(goldBox)
        // chest-list.append(goldBox);

    } else {
        $('.xiangzi').text('银宝箱,');
        $('.box-list').html('').append(silverBox)
    }
}
//第四题
if (naid == 4) {
    if (num4 == 1) {
        $('.xiangzi').text('金宝箱,');
        $('.box-list').html('').append(goldBox)
        // chest-list.append(goldBox);

    } else {
        $('.xiangzi').text('银宝箱,');
        $('.box-list').html('').append(silverBox);
        
    }
}
//第五题
if (naid == 5) {
    if (num5 == 1) {
        $('.xiangzi').text('金宝箱,');
        $('.box-list').html('').append(goldBox)
        // chest-list.append(goldBox);

    } else {
        $('.xiangzi').text('银宝箱,');
        $('.box-list').html('').append(silverBox)
    }
}

//第六题
if (naid == 6) {
    if (num6 == 1) {
        $('.xiangzi').text('金宝箱,');
        $('.box-list').html('').append(goldBox)
        // chest-list.append(goldBox);

    } else {
        $('.xiangzi').text('银宝箱,');
        $('.box-list').html('').append(silverBox)
    }
}
// 第七题
if (naid == 7) {
    if (num7 == 1) {
        $('.xiangzi').text('金宝箱,');
        $('.box-list').html('').append(goldBox)
        // chest-list.append(goldBox);


    } else {
        let goldBox = '银宝箱'
        $('.xiangzi').text('银宝箱,');
        $('.box-list').html('').append(silverBox)
    }
}



$(function () {
    
    let lista = $('.box-list .lista');
        // console.log(lista);
        
        let listb = $('.box-list .listb');
        // console.log(listb);

$('.chestBtn').click(function () {
        if (naid == 1 && num1==1) {
            // alert('1');
                // 弹出框
        $('.prize-overlay').show();
        // 中奖概率
        
        var arr = ['1183积分','0积分'];
        
        var rand = Math.random();
        if (rand <=0.65) {
            $('#result').html(arr[0]);
        } else if (rand >= 0.65) {
            $('#result').html(arr[1]);
        } 



        } else if(naid ==2 &&num2==1){
        $('.prize-overlay').show();
        // 中奖概率
        var arr = ['925积分','0积分'];
    
        var rand = Math.random();
        if (rand <=0.65) {
            $('#result').html(arr[0]);
        } else if (rand >= 0.65) {
            $('#result').html(arr[1]);
        } 
        }else if(naid == 3 && num3==1){
            $('.prize-overlay').show();
            var arr = ['857积分','0积分'];
            $('#result').html(arr[0]);
            var rand = Math.random();
        if (rand <= 0.65) {
            $('#result').html(arr[0]);
        } else if (rand >= 0.65) {
            $('#result').html(arr[1]);
        } 

        }else if(naid == 4 && num4==1){
            $('.prize-overlay').show();
            var arr = ['807积分','0积分'];
            
            var rand = Math.random();
        if (rand <= 0.65) {
            $('#result').html(arr[0]);
        } else if (rand >=0.65) {
            $('#result').html(arr[1]);
        } 
        }else if(naid == 5 && num5==1){
            $('.prize-overlay').show();
           
            var arr = ['769积分','0积分'];
            
            var rand = Math.random();
                console.log(rand);
                
        if (rand <= 0.65) {
            $('#result').html(arr[0]);
        } else if (rand >= 0.65) {
            $('#result').html(arr[1]);
        }
    } else if(naid == 6 && num6==1){
            $('.prize-overlay').show();
            var arr = ['740积分','0积分'];
            
            var rand = Math.random();
        if (rand <=0.65) {
            $('#result').html(arr[0]);
        } else if (rand >= 0.65) {
            $('#result').html(arr[1]);
        } 
    
        
        }else if(naid == 7 && num7==1){
            $('.prize-overlay').show();
            var arr = ['716积分','0积分'];
            // var rand = Math.random();
            $('#result').html(arr[0]);
        

    }else if(naid == 1 && num1==2 ||naid == 2 && num2==2||naid ==3 && num3==2||naid == 4 && num4==2||naid == 5 && num5==2||naid == 6 && num6==2||naid == 7 && num7==2  ){
            // alert('2');
            $('.prize-overlay').show();
        // 中奖概率
        var arr = ['500积分'];
        var rand = Math.random();
        $('#result').html(arr[0]);
        
        }
    });


})

