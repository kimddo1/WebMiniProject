const params = new URLSearchParams(window.location.search);
const query = params.get("query");

if (query && query.toLowerCase() !== "kosa") {
  window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
    query
  )}`;
} else {
  // 조건에 맞는 경우에만 body 표시
  document.body.style.display = "block";
}

$(function () {
  $("#searchInput").on("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const query = $(this).val().trim();
      if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
          query
        )}`;
      }
    }
  });
  // 입력할 때마다 X 아이콘 표시 여부 갱신
  $("#searchInput").on("input", function () {
    const hasText = $(this).val().trim().length > 0;

    if (hasText) {
      $("#clearSearch").show();
    } else {
      $("#clearSearch").hide();
    }
  });

  // X 아이콘 누르면 검색창 초기화 + 아이콘 숨기기
  $("#clearSearch").on("click", function () {
    $("#searchInput").val("").focus();
    $(this).hide();
  });

  $(".tabs-inner a, .dropdown-menu a").on("click", function (e) {
    e.preventDefault();

    const tabText = $(this).text().trim();

    const tabLinks = {
      이미지: "https://www.google.com/search?tbm=isch&q=kosa",
      뉴스: "https://www.google.com/search?tbm=nws&q=kosa",
      동영상: "https://www.google.com/search?tbm=vid&q=kosa",
      쇼핑: "https://www.google.com/search?tbm=shop&q=kosa",
      도서: "https://www.google.com/search?tbm=bks&q=kosa",
      금융: "https://www.google.com/search?tbm=fin&q=kosa",
    };

    const url = tabLinks[tabText];

    if (url) {
      window.open(url, "_self");
    }
  });

  $(".title").each(function () {
    const url = $(this).data("url");
    if (url) {
      $(this)
        .css("cursor", "pointer")
        .on("click", function (e) {
          e.preventDefault();
          window.open(url, "_self");
        });
    }
  });

  $(".news-title").each(function () {
    const url = $(this).data("url");
    if (url) {
      $(this)
        .css("cursor", "pointer")
        .on("click", function (e) {
          e.preventDefault();
          window.open(url, "_self");
        });
    }
  });

  let imageRowsShown = false;

  $("#showMoreImages").on("click", function () {
    if (!imageRowsShown) {
      $("#imageRow2").slideDown(600);

      setTimeout(function () {
        $("#imageRow3").slideDown(600);
      }, 400);

      $(this).html(`이미지 전체 보기 <i class="bi bi-chevron-right"></i>`);

      imageRowsShown = true;
    } else {
      window.open("https://www.google.com/search?q=kosa&udm=2", "_self");
    }
  });

  $(".clickable-image").on("click", function () {
    window.open(
      "https://www.google.com/maps/place/%ED%95%9C%EA%B5%AD%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EC%82%B0%EC%97%85%ED%98%91%ED%9A%8C/data=!4m2!3m1!1s0x0:0x2c0d3792005a02cf?sa=X&ved=1t:2428&ictx=111",
      "_self"
    );
  });
  if ($("#searchInput").val().trim()) {
    $("#clearSearch").show();
  }
});
