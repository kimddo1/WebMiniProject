
$(document).ready(function () {
    // 쓰레기통 아이콘 클릭 시 해당 td 제거
    $(document).on('click', '.bi-trash', function () {
      $(this).closest('tr').remove();
    });
    // star누르면 색 변함
    $(document).on('click', '.bi-star, .bi-star-fill', function () {
        $(this).toggleClass('bi-star bi-star-fill');
    });
    // bookmark누르면 색 변함
    $(document).on('click', '.bi-bookmark .bi-bookmark-fill', function () {
        $(this).toggleClass('.bi-bookmark .bi-bookmark-fill');
    });
    
    $('#showStarredBtn').click(function () {
        // 기존 별표된 메일들을 담을 새 테이블 초기화
        let $newTable = $('<table id="mails" class="weekdays w3-table w3-bordered"><thead><tr><th><input class="w3-check" type="checkbox" checked="false"></th><th></th><th id="refresh"><input class="w3-check" type="checkbox" checked="false"></th><th id="mail_num_text"></th><th></th><th><a class="w3-bar-item w3-button w3-hover-black" href="#"><i class="bi bi-chevron-left"></i></a> <a class="w3-bar-item w3-button w3-hover-black" href="#"><i class="bi bi-chevron-right"></i></a></th></tr></thead><tdody></table>');
  
        // 모든 bi-star-fill 아이콘을 가진 tr을 찾기
        $('.bi-star-fill').each(function () {
          const $row = $(this).closest('tr');
          const sender = $row.find('#title').text();
          const content = $row.find('#content').text();
          const date = $row.find('#mail_date').text();
  


          // 새로운 행 생성
          const $newRow = $('<tr class="row"></tr>');
          $newRow.append(`<td class="one mail_check"><input class="w3-check" type="checkbox" checked=false></td>`);
          $newRow.append(`<td class="one"><a><i class="bi-small bi-bookmark"></i></a></td>`);
          $newRow.append(`<td class="one"><a><i class="bi-small bi-star"></i></a></td>`);
          $newRow.append(`<td class="one"><p id="title">${sender}</p></td>`);
          $newRow.append(`<td class="one"><p id="content">${content}</p></td>`);
          $newRow.append(`<td class="one element not-visible"><a><i class="bi-small bi-box-arrow-in-down"></i></a>  <a><i class="bi-small bi-envelope-slash-fill"></i></a>  <a><i class="bi-small bi-trash"></i></a>  <a><i class="bi-small bi-clock-history"></i></a></td>`);
          $newRow.append(`<td class="one"><td class="event"><p id="mail_date">${date}</p></td>`);
          $newTable.find('tbody').append($newRow);
        });
  
        // 결과 출력 위치에 테이블 삽입 (예: <div id="starredMails"></div>)
        

        $('.table-container').removeClass("display-all").addClass("display-none")
        
        $('#starredMails').html($newTable);
      });

  });

  
  /** 수정 필요 **/
$(document).ready(function() {
    // 마우스가 행에 들어갔을 때
    $('.row').mouseenter(function() {
      $(this).find('.element').removeClass("not-visible").addClass("visibility");
    });
  
    // 마우스가 행을 벗어났을 때
    $('.row').mouseleave(function() {
      $(this).find('.element').removeClass("visible").addClass("not-visibility");
    });
  });
  

  