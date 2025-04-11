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
    // $("#allCheck").change(function () {
    //     if ($(this).is(":checked")) {
    //         $("#myCalendarOptions").find('.subCheck').prop("checked", true);
    //     } else {
    //         $("#myCalendarOptions").find('.subCheck').prop("checked", false);
    //     }
    // });
    $("#allCheck").change(function () {
        const isChecked = $(this).is(":checked");

        // 하위 체크박스 모두 체크/해제
        $("#myCalendarOptions .subCheck").prop("checked", isChecked);

        // 각 이벤트 요소 직접 표시/숨김 처리
        document.querySelectorAll('.event1').forEach(el => {
            el.style.display = isChecked ? 'block' : 'none';
        });
        document.querySelectorAll('.event2').forEach(el => {
            el.style.display = isChecked ? 'block' : 'none';
        });
        document.querySelectorAll('.event3').forEach(el => {
            el.style.display = isChecked ? 'block' : 'none';
        });
    });

});

$(function () {
    $('#searchBtn').on('click', function () {
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


window.onload = function () {
    // 체크박스 관련 요소
    const birthdayBox = document.querySelector('#check1');
    const taskBox = document.querySelector('#check2');
    const scheduleBox = document.querySelector('#check3');

    // 필터링 대상
    const event1 = document.querySelectorAll('.event1');
    const event2 = document.querySelectorAll('.event2');
    const event3 = document.querySelectorAll('.event3');

    // 필터링 함수
    function toggleEvents(checkbox, eventElements) {
        eventElements.forEach(function (el) {
            el.style.display = checkbox.checked ? 'block' : 'none';
        });
    }

    // 체크박스 이벤트 연결
    birthdayBox.addEventListener('change', function () {
        toggleEvents(birthdayBox, document.querySelectorAll('.event1'));
    });
    taskBox.addEventListener('change', function () {
        toggleEvents(taskBox, document.querySelectorAll('.event2'));
    });
    scheduleBox.addEventListener('change', function () {
        toggleEvents(scheduleBox, document.querySelectorAll('.event3'));
    });

    // 초기 세팅
    toggleEvents(birthdayBox, event1);
    toggleEvents(taskBox, event2);
    toggleEvents(scheduleBox, event3);

    //
    const input = document.getElementById('scheduleInput');
    const save = document.getElementById('saveBtn');

    save.addEventListener('click', function () {
        const value = input.value.trim();

        if (value === '') {
            alert('내용을 입력해주세요!');
            return;
        }

        const newEvent = document.createElement('div');
        newEvent.className = 'event2'; // 업무 일정으로 가정
        newEvent.textContent = value;

        // 필터 반영 (체크 안 되어 있으면 추가하자마자 숨김)
        if (!taskBox.checked) {
            newEvent.style.display = 'none';
        }

        // 날짜 "11"에 추가 (예시)
        const allDays = document.querySelectorAll('.day-number');
        let targetDay = null;

        allDays.forEach(function (el) {
            if (el.textContent === '11') {
                targetDay = el.closest('.day');
                targetDay.appendChild(newEvent);
            }
        });

        input.value = '';

        const modalEl = document.getElementById('exampleModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();
    });
};

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

