const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn) {
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)) {
            resetActiveBtn(); // gọi lại hàm resetActiveBtn ở dưới: khi click vào button này thì mất gạch ngang button khác và giữ cái hiện tại
            btn.classList.add('active-btn'); // ative khi mỗi lần lick vào button sẽ giữ gạch ngang dưới
            // đoạn này thêm css active-btn
            item.style.display = "block";
            } else {
                    item.style.display = "none";
            }
    });
}

function resetActiveBtn() {
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn')
    })
}

// load product khi click 
window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active-btn')
})