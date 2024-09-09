document.addEventListener("DOMContentLoaded", function() {
  // وظيفة إغلاق الـpopup
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }

  // وظيفة فتح الـpopup وتحديث محتواه
  function showPopup(imageSrc, titleText) {
    var popup = document.getElementById("popup");
    var popupImage = document.getElementById("popupImage");
    var popupTitle = document.getElementById("popupTitle");
    var popupDescription = document.getElementById("popupDescription");

    // تعيين مصدر الصورة وعنوان النص
    popupImage.src = imageSrc;
    popupTitle.textContent = titleText;

    // تحديث وصف الكتاب
    popupDescription.textContent = `هذا الكتاب عن ${titleText} حيث ستتمكن من معرفة و تعلم طرق التعامل و اصلاح المشاكل و التصرف الصحيح سيرشدك هذا الكتاب و يدلك الى الطريق الصحيح في المجال باحترافية...`;

    // عرض الـpopup
    popup.style.display = "block";
  }

  // ربط زر البحث بفتح نافذة البحث (اختياري)
  document.getElementById("searchButton").addEventListener("click", function() {
    document.getElementById("searchPopup").style.display = "block";
  });

  // ربط زر الإغلاق لنافذة البحث
  document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("searchPopup").style.display = "none";
  });

  // ربط كل حاوية بالنقر وتحديث محتوى الـpopup
  document.querySelectorAll('.book-container').forEach(function(container) {
    container.addEventListener('click', function() {
      // جلب العنوان والصورة من الحاوية
      var bookTitle = container.querySelector('.book-text').innerText;
      var bookImageSrc = container.querySelector('img').src;

      // تحديث الـpopup بالصورة والعنوان المناسبين
      showPopup(bookImageSrc, bookTitle);
    });
  });

  // ربط زر الإغلاق في الـpopup
  document.getElementById("closeButton").addEventListener("click", closePopup);
});
