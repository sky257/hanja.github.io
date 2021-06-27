
var card = document.querySelector(".card");
var playing = false;
var isFront = true;
var live_arr = [];

card.addEventListener('click', function () {
  rotateCard(false);
});

function rotateCard(isInit) {
  if (playing) {
    // console.log('playing');
    return;
  }

  playing = true;
  anime({
    targets: card,
    scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
    rotateY: { value: '+=180', delay: 200 },
    easing: 'easeInOutSine',
    duration: 200,
    complete: function (anim) {
      playing = false;
      isFront = !isFront;
      if (!isFront) {
        changeFront(isInit);
      } else {
        changeBack(isInit);
      }
    }
  });
}

init();


//e= e || window.event); you may need this statement to make sure IE doesn't keep the orginal event in motion

$(document).keypress(function (e) {
  if (e.which == 32) {
    e.preventDefault();
    // var code;
    // if (e.keyCode) {
    //  code = e.keyCode;
    // } else if (e.which) {
    //  code = e.which;
    //  }
    // if (code == 32) {
    //  if (e.stopPropagation) {
    //  e.stopPropagation();
    //  e.preventDefault();
    //  }
    //  return false;
    // }
  }
});

// function keypressCheck(e) {
//     var e = window.event||e; // Handle browser compatibility
//     var keyID = e.keyCode;
//     //space pressed
//     if (keyID == 32) {
//         e.preventDefault(); // Prevent the default action
//         anotherFunction();
//     }
// }



document.addEventListener('keyup', function (e) {
  // console.log(e);
  if (e.key == " ") { //스페이스
    e.preventDefault(); // Prevent the default action
    rotateCard(false);
    // console.log('space');
  }

  //엔터
  // if (e.key == "Enter") {
  //   e.preventDefault();
  //   // console.log('enter ' + current_selected_hanja_list_no);

  //   hanja_list_toggle(current_selected_hanja_list_no);
  //   haja_checkbox_toggle_with_code(current_selected_hanja_list_no);
  //   make_live_arr_shuffle();
  // }


});

document.addEventListener('keydown', function (e) {
  //왼쪽 화살표
  if (e.key == "ArrowLeft") {
    e.preventDefault();
    current_selected_hanja_list_no = current_selected_hanja_list_no - 1;
    if (current_selected_hanja_list_no < 0) {
      current_selected_hanja_list_no = arr.length - 1;
    }
    hanja_list_select(current_selected_hanja_list_no);
  }

  //오른쪽 화살표
  if (e.key == "ArrowRight") {
    e.preventDefault();
    current_selected_hanja_list_no = current_selected_hanja_list_no + 1;
    if (current_selected_hanja_list_no == arr.length) {
      current_selected_hanja_list_no = 0;
    }
    hanja_list_select(current_selected_hanja_list_no);
  }
});

//엔터와 ctrl 엔터
$(document).keydown(function (e) {
  if (e.ctrlKey && e.key == "Enter") {

    const checkAllCheckbox = document.querySelector('#checkAllCheckbox');
    checkAllCheckbox.checked = !checkAllCheckbox.checked;
    checkAllClicked();

  } else if (e.key == "Enter") {
    e.preventDefault();
    hanja_list_toggle(current_selected_hanja_list_no);
    haja_checkbox_toggle_with_code(current_selected_hanja_list_no);
    make_live_arr_shuffle();
  }
})



var rand_no;

//question kind default read - 0, writing - 1
var question_kind;

var current_selected_hanja_list_no = 0;


//첫시작
function init() {
  rand_no = 0;
  question_kind = 0;
  arr = arr_hanja7_01;
  $('#hanja7_01').addClass('menu-selected');
  cardInit();

}


function hanja_select_init() {
  //여기서 각 한자의 true, flase 를 정한다.(arr[i][2])

  var select_box_html = "";
  arr.forEach(function (item, index) {
    item[2] = true;
    select_box_html += `<div class='hanja_list_container' id='hanja_list_container_${index}'><input type='checkbox' value='${index}' id='select_${index}' checked onclick='hanja_list_toggle(${index});this.blur()'><label for='select_${index}'>${item[0]}</label></div>`
  });
  $('#hanja_select_box').html(select_box_html);

  hanja_list_select(0);
}

function hanja_list_select(no) {

  //먼저 기존 select box 다 없애고
  for (let i = 0; i < arr.length; i++) {
    document.querySelector('#hanja_list_container_' + i).classList.remove('selected_hanja_container');
  }

  let div = document.querySelector('#hanja_list_container_' + no);
  div.classList.add('selected_hanja_container');
  // div.scrollIntoView();

  current_selected_hanja_list_no = no;
}



//살아있는 한자숫자
function hanja_list_alive_count() {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][2]) count++;
  }

  return count;
}

function hanja_list_toggle(index) {
  arr[index][2] = !arr[index][2];
  make_live_arr_shuffle();
}

function haja_checkbox_toggle_with_code(index) {
  let current_checkbox = document.querySelector('#select_' + index);
  current_checkbox.checked = !current_checkbox.checked;
}

function cardInit() {
  // console.log('cardInit()');
  // console.log(arr);



  hanja_select_init();
  make_live_arr_shuffle();
  if (!isFront) {
    rotateCard(true);
  }
  changeFront(true);
  changeBack(true);
  document.querySelector('#checkAllCheckbox').checked = true;
}


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function make_live_arr_shuffle() {
  live_arr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][2]) {
      live_arr.push(i);
    }
  }

  shuffle(live_arr);
  // console.log(`make_live_arr_shuffle() : ${live_arr}`);
}

function select_rand_no() {

  // rand_no = Math.floor(Math.random() * arr.length);

  // while (arr[rand_no][2] == false) {
  //   rand_no = Math.floor(Math.random() * arr.length);
  // }
  // return rand_no;
  // console.log('select rand no');
  let shift_no = live_arr.shift();
  // console.log('select rand no');
  // console.log('shift_no = ' + shift_no);
  // console.log(live_arr);

  if (live_arr.length === 0) {
    make_live_arr_shuffle();
  }
  return shift_no;
}



//앞면 바꾸기
function changeFront(isInit) {
  console.log('chnage front');
  // console.log('change front');
  if (!hanja_list_alive_count()) return;//모두 unselected 상태이면 현재 선택 상태 그대로 유지... 이 코드가 없으면 무한루프

  rand_no = select_rand_no();

  $('.front').text(arr[rand_no][question_kind]);
  if (!isInit) {
    playSound("pipe");
    console.log('pipe sound');
  }
}

//뒷면 바꾸기
function changeBack(isInit) {
  console.log('chnage back');
  $('.back').html(arr[rand_no][0] + "<br>" + arr[rand_no][1]);
  if (!isInit) {
    playSound("ding");
    console.log('ding sound');
  }
}


// function next(){
// 	if($('.card').hasClass('expanded')){
// 		$('.card').removeClass('expanded');
// 		playSound("ding");

// 		setTimeout(function(){
// 			changeHanja();
// 		   }, 500);
// 	}else{
// 		$('.card').addClass('expanded');
// 		playSound("pipe");
// 	}
// }

function playSound(title) {
  var audio = document.getElementById(title);
  audio.play();
}


//menuclick
$('.menu-container div').click(function () {
  var id = $(this).attr('id');
  $('.menu-container div').removeClass('menu-selected');
  $(this).addClass('menu-selected');
  // console.log(id);
  arr = window['arr_' + id];
  cardInit();
});


function checkAllClicked() {
  let is_checked = document.querySelector('#checkAllCheckbox').checked;

  for (let i = 0; i < arr.length; i++) {
    arr[i][2] = is_checked;
    document.querySelector('#select_' + i).checked = is_checked;
  }

  make_live_arr_shuffle();

}

//
// arr.forEach(function(a){
//     a[2] = !a[2];
// });
