$(function () {
    //내 캘린더 버튼튼
    $('#myToggleBtn').on('click', function (e) {
        e.preventDefault();
        $('#myCalendarOptions').slideToggle();

        const icon = $(this).find('i');
        icon.toggleClass('fa-chevron-down fa-chevron-up');
    });
    //다른 캘린더 버튼
    $('#otherToggleBtn').on('click', function (e) {
        e.preventDefault();
        $('#otherCalendarOptions').slideToggle();
        //return false; //아이콘 안바뀜뀜

        const icon = $(this).find('i');
        icon.toggleClass('fa-chevron-down fa-chevron-up');
    })

    //모두체크박스스(내 킬린더에만 추가해줌)
    $("#allCheck").change(function () {
        if ($(this).is(":checked")) {
            $("#myCalendarOptions").find('.subCheck').prop("checked", true);
        } else {
            $("#myCalendarOptions").find('.subCheck').prop("checked", false);
        }
    });
});

$(function(){
    $('#searchBtn').on('click', function(){
        alert('사용자를 찾을 수 없습니다.');
    });
})

$(function () {
    $("#datepicker").datepicker({
        dateFormat: 'yy-mm-dd'
        , showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        , showMonthAfterYear: true // 월- 년 순서가아닌 년도 - 월 순서
        , changeYear: true //option값 년 선택 가능
        , changeMonth: true //option값  월 선택 가능                          
        , yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
        , monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 텍스트
        , monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 Tooltip
        , dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] //달력의 요일 텍스트
        , dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] //달력의 요일 Tooltip
        , minDate: "-5Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        , maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)  
    });
    //초기값을 오늘 날짜
    $('#datepicker').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)            
});


//전체, 생일, 업무, 일정체크박스

window.onload = function () {
    const allCheckBox = document.querySelector('#allCheck');
    const birthdayBox = document.querySelector('#check1');
    const taskBox = document.querySelector('#check2');
    const scheduleBox = document.querySelector('#check3');
    const event1 = document.querySelectorAll('.event1');
    const event2 = document.querySelectorAll('.event2');
    const event3 = document.querySelectorAll('.event3');

    //전체
    allCheckBox.addEventListener('change', function(){
        event1.forEach(function (el) {
            if (el.style.display == this.checked) { 
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
            event1.forEach(function (el) {
                el.style.display = birthdayBox.checked ? 'block' : 'none';
            })
        });
        event2.forEach(function (el) {
            if (el.style.display == this.checked) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
            event2.forEach(function (el) {
                el.style.display = taskBox.checked ? 'block' : 'none';
            })
        });
        event3.forEach(function (el) {
            if (el.style.display == this.checked) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
            event3.forEach(function (el) {
                el.style.display = scheduleBox.checked ? 'block' : 'none';
            })
        });

    })
    //생일
    birthdayBox.addEventListener('change', function () {
        event1.forEach(function (el) {
            if (el.style.display == this.checked) { //this : birthdayBox
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
            //초기세팅..안하면 계속 적용안됨됨
            event1.forEach(function (el) {
                el.style.display = birthdayBox.checked ? 'block' : 'none';
            })
        });
    })
    //업무
    taskBox.addEventListener('change', function () {
        event2.forEach(function (el) {
            if (el.style.display == this.checked) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
            event2.forEach(function (el) {
                el.style.display = taskBox.checked ? 'block' : 'none';
            })
        });
    })
    //일정
    scheduleBox.addEventListener('change', function () {
        event3.forEach(function (el) {
            if (el.style.display == this.checked) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
            event3.forEach(function (el) {
                el.style.display = scheduleBox.checked ? 'block' : 'none';
            })
        });
    })
}


// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}

