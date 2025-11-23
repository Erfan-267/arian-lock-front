const wrapper = document.querySelector(".opt-cont");
const addBtn = document.getElementById("add-opt");

// افزودن آیتم جدید
addBtn.addEventListener("click", () => {
  const firstOpt = wrapper.querySelector(".opt");

  if (!firstOpt) return; // اگر به هر دلیل opt وجود نداشت

  const clone = firstOpt.cloneNode(true);

  // ریست‌کردن مقادیر داخلی
  clone.querySelectorAll("input, textarea").forEach(el => {
    el.value = "";
  });

  wrapper.appendChild(clone);
});

// حذف آیتم
wrapper.addEventListener("click", (e) => {
  const removeBtn = e.target.closest(".remove-opt");

  if (removeBtn) {
    const allOpts = wrapper.querySelectorAll(".opt");

    if (allOpts.length > 1) {
      removeBtn.closest(".opt").remove();
    } else {
      alert("حداقل یک مشخصه باید وجود داشته باشد.");
    }
  }
});
