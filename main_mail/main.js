// 검색 실행 함수
function performSearch() {
   const query = document.getElementById("searchInput").value.trim();
   if (query) {
     window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
   }
 }
  // 폼 제출 (Enter 키 포함)
 document.getElementById("searchForm").addEventListener("submit", function (e) {
   e.preventDefault();
   performSearch();
 });
  // I'm Feeling Lucky 버튼
 document.getElementById("luckyBtn").addEventListener("click", function () {
   alert("행운을 빌어요! 🥳");
 });




 // ".sidebar-toggle" 클래스를 가진 요소를 찾아 toggleBtn 변수에 할당합니다.
const toggleBtn = document.querySelector(".sidebar-toggle");
// ".close-btn" 클래스를 가진 요소를 찾아 closeBtn 변수에 할당합니다.
const closeBtn = document.querySelector(".close-btn");
// ".sidebar" 클래스를 가진 요소를 찾아 sidebar 변수에 할당합니다.
const sidebar = document.querySelector(".sidebar");

// 토글 버튼에 클릭 이벤트 리스너를 추가합니다.
toggleBtn.addEventListener("click", function () {
  // 클릭 시, sidebar 요소의 클래스 리스트에 "show-sidebar" 클래스를 토글합니다.
  // 즉, "show-sidebar" 클래스가 있으면 제거하고, 없으면 추가합니다.
  sidebar.classList.toggle("show-sidebar");
});

// 닫기 버튼에 클릭 이벤트 리스너를 추가합니다.
closeBtn.addEventListener("click", function () {
  // 클릭 시, sidebar 요소의 클래스 리스트에서 "show-sidebar" 클래스를 제거합니다.
  sidebar.classList.remove("show-sidebar");
});

/*
 // 드롭다운을 강제로 닫기 위한 코드
 document.getElementById("closeDropdown").addEventListener("click", function() {
  var dropdown = new bootstrap.Dropdown(document.getElementById('dropdownMenuButton'));
  dropdown.hide(); // 강제로 닫기
});

// 드롭다운 외부를 클릭하면 닫기
$(document).click(function (e) {
  if (!$(e.target).closest('.dropdown').length) {
    var dropdown = new bootstrap.Dropdown(document.getElementById('dropdownMenuButton'));
    dropdown.hide(); // 드롭다운 메뉴 강제 닫기
  }
});

*/