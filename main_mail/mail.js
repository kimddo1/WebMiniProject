const mailDataList = [
  {
    title: "Kosa_AI_Study(Slack) 초대 메시지",
    recipient: "Slack",
    content: "1개의 읽지 않은 메시지",
    date: "2025.04.07"
  },
  {
    title: "Notion Team으로부터 메세지 도착",
    recipient: "Notion",
    content: "추천 페이지 - KOSA_스터디: Kosa AI반 그룹 스터디:",
    date: "2025.04.07"
  },
  {
    title: "Google Timeline",
    recipient: "Google",
    content: "길동님의 3월 업데이트",
    date: "2025.04.04"
  },
  {
    title: "Tving 이용권 구매에 감사드립니다.",
    recipient: "Tving",
    content: "이용권 구매가 완료되었습니다.",
    date: "2025.04.01"
  },
  {
    title: "Notion Team으로부터 메시지가 도착하였습니다.",
    recipient: "notion",
    content: "추천 페이지 - KOSA_스터디: Kosa AI반 그룹 스터디:",
    date: "2025.04.07"
  },
  {
    title: "3월 Google Maps Timeline",
    recipient: "Google",
    content: "길동님의 3월 업데이트",
    date: "2025.04.04"
  }
];



$(document).ready(function () {

  // star누르면 색 변함
  $(document).on('click', '.bi-star, .bi-star-fill', function () {
      $(this).toggleClass('bi-star bi-star-fill');
  });

});

$(document).ready(function () {
  // bookmark누르면 색 변함
  $(document).on('click', '.bi-bookmark, .bi-bookmark-fill', function () {
    $(this).toggleClass('bi-bookmark bi-bookmark-fill');
});
});




$(document).ready(function() {
  $('#sendButton').click(function() {
    // Get values from the modal form
    var recipient = $('#recipient-name').val();
    var content = $('#message-text').val();

    // Check if the input fields are not empty
    if (recipient && content) {
      // Get the current date in a specific format (e.g., YYYY-MM-DD)
      var currentDate = new Date().toLocaleDateString('ko-KR');  // You can adjust this format

      // Get the index of the last row in the table
      var lastIndex = $('table tbody tr').length > 0 ? parseInt($('table tbody tr:last-child th').text()) : 0;

      // Increment the index for the new row
      var newIndex = lastIndex + 1;

      // Append new data to the table with the incremented index
      var newRow = `
          <tr>
              <th scope="row">${newIndex}</th>
              <td class="mail_check"><input class="form-check-input" type="checkbox"></td>
              <td><a><i class="bi-small bi-bookmark"></i></a></td>
              <td><a><i class="bi-small bi-star"></i></a></td>
              <td><p>${recipient}</p></td>
              <td><p>${content}</p></td>
              <td class="element not-visible">
                  <a><i class="bi-small bi-box-arrow-in-down"></i></a>
                  <a><i class="bi-small bi-envelope-slash-fill"></i></a>
                  <a><i class="bi-small bi-trash"></i></a>
                  <a><i class="bi-small bi-clock-history"></i></a>
              </td>
              <td><td class="event"><p>${currentDate}</p></td>
          </tr>
      `;

      // Append the new row to the table body
      $('table tbody').append(newRow);

      // Manually close the modal and remove the background overlay
      $('#exampleModal').modal('hide');
      
      // Remove the backdrop (the dark overlay) after closing the modal
      $('.modal-backdrop').remove();
      
      // Clear input fields for next data entry
      $('#emailForm')[0].reset();
      
    } else {
      // Show an alert if any field is missing
      alert('Please fill in both fields!');
      // Optionally, highlight empty fields for better UX:
      if (!recipient) {
        $('#recipient-name').css('border', '1px solid red');
      }
      if (!content) {
        $('#message-text').css('border', '1px solid red');
      }
    }
  });
  
  // Clear the red border when user starts typing again
  $('#recipient-name, #message-text').on('input', function() {
    $(this).css('border', '');
  });
});
/* 휴지통 기능 */
$(document).on('click', '.bi-trash', function () {
  var trashIcon = $(this); // 클릭된 쓰레기통 아이콘
    trashIcon.closest('tr').remove(); // 아이콘이 사라지면 해당 행 제거
});

$(document).ready(function() {
  // 테이블 행에 마우스가 들어갔을 때
  $('tr').mouseenter(function() {
    // 휴지통 아이콘을 보여준다.
    $(this).find('.element').removeClass('not-visible').addClass('visible');
  });

  // 테이블 행에서 마우스가 나갔을 때
  $('tr').mouseleave(function() {
    // 휴지통 아이콘을 숨긴다.
    $(this).find('.element').removeClass('visible').addClass('not-visible');
  });
});


/* 체크박스 */
$(document).ready(function() {
  // "all_check" 체크박스를 클릭하면 모든 체크박스를 체크/해제
  $('#all_check').on('click', function() {
    // 모든 체크박스를 클릭 상태에 맞춰 변경
    $('.mail_check').prop('checked', $(this).prop('checked'));
  });

  // 개별 체크박스를 클릭하면 "all_check" 상태도 업데이트
  $('.mail_check').on('click', function() {
    // 모든 체크박스가 체크되었는지 확인
    if ($('.mail_check:checked').length === $('.mail_check').length) {
      $('#all_check').prop('checked', true); // 모두 체크됨
    } else {
      $('#all_check').prop('checked', false); // 일부 또는 모두 해제됨
    }
  });
});


$(document).ready(function() {
  // 이메일 형식 검증 및 체크박스 상태 변경

  

  $('#emailInput').on('input', function() {
    var emailValue = $(this).val();
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일 형식 정규식

    var email = $('#recipient-name').val();
    var isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      alert("유효한 이메일 주소를 입력해주세요.");
      return;
    }

  });

  // 폼 제출 시
  $('#emailForm').on('submit', function(e) {
    e.preventDefault(); // 기본 폼 제출 방지

    var email = $('#emailInput').val();
    var isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    if (isValidEmail) {
        alert('Form submitted with valid email: ' + email);
    } else {
        alert('Please enter a valid email address.');
    }
  });
});

document.getElementById("all_check").addEventListener("click", function() {
  const checkboxes = document.querySelectorAll(".mail_check input");
  checkboxes.forEach(checkbox => checkbox.checked = this.checked);
});


$(document).ready(function() {
  // 1. 별표편지함 버튼 클릭 시 별표가 있는 메일만 보이게 하기
  $('#showStarredBtn').click(function() {
    // 모든 이메일을 숨기기
    $('table tbody tr').hide();
    
    // 별표가 있는 이메일만 보이도록 설정
    $('table tbody tr').each(function() {
      // 현재 행에서 별표 아이콘을 찾음
      if ($(this).find('.bi-star-fill').length > 0) {
        $(this).show();  // 별표가 있으면 해당 행을 보임
      }
    });
  });

  // 2. 받은편지함 버튼 클릭 시 원래 이메일 목록을 모두 다시 보이게 하기
  // 단, trash 클래스를 가진 행은 제외
  $('#showInboxBtn').click(function() {
    // 모든 이메일을 다시 보이게 하기 (trash 클래스를 가진 행은 제외)
    $('table tbody tr').each(function() {
      // trash 클래스가 없는 행만 보이게 설정
      if (!$(this).hasClass('trash')) {
        $(this).show();  // trash 클래스가 없으면 해당 행을 보임
      } else {
        $(this).hide();  // trash 클래스가 있으면 해당 행을 숨김
      }
    });
  });
});

function addMailRow(mail, index) {
  const row = `
    <tr>
      <th scope="row">${index + 1}</th>
      <td class="mail_check"><input class="form-check-input" type="checkbox"></td>
      <td><a><i class="bi bi-bookmark"></i></a></td>
      <td><a><i class="bi bi-star"></i></a></td>
      <td><p>${mail.recipient}</p></td>
      <td><p>${mail.title}</p></td>
      <td class="not-visible"><p>${mail.content}</p></td>
      <td class="element not-visible">
        <a><i class="bi bi-box-arrow-in-down"></i></a>
        <a><i class="bi bi-envelope-slash-fill"></i></a>
        <a><i class="bi bi-trash"></i></a>
        <a><i class="bi bi-clock-history"></i></a>
      </td>
      <td class="event"><p>${mail.date}</p></td>
    </tr>
  `;

  $("table tbody").append(row);
}
$(document).ready(function () {
  // 기존 테이블 내용이 있다면 지우고 시작
  $("table tbody").empty();

  // 메일 리스트 반복해서 테이블에 추가
  mailDataList.forEach((mail, index) => {
    addMailRow(mail, index);
  });

  

});

$(document).ready(function() {
  // 각 테이블 행 클릭 시, 해당 메일의 정보를 모달에 표시
  $('table tbody').on('click', 'tr', function() {
    // 클릭된 행에서 메일 정보 가져오기
    var title = $(this).find('td').eq(4).text();  // 제목
    var recipient = $(this).find('td').eq(3).text();  // 수신자
    var content = $(this).find('td').eq(5).text();  // 내용
    var date = $(this).find('td').eq(7).text();  // 날짜
    
    // 모달에 해당 정보 설정
    $('#detail-title').text(title);
    $('#detail-recipient').text(recipient);
    $('#detail-content').text(content);
    $('#detail-date').text(date);
    
    // 모달 열기
    $('#detailModal').modal('show');
  });
});