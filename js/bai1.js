/**
 * Input: a, b, c, showSort
 * 
 * Các bước xử lý
 * - B1: Tạo biến và lấy giá trị từ form
 * - B2: Lập công thức
 *  + Nếu a > b && b > c : c->b->a
 *  + Nếu a > b && a < c: b->a->c
 *  + Nếu a < b && a > c: c->a->b
 *  + Nếu a < c && c < b: a->c->b
 *  + Nếu a > c && c > b: b->c->a
 *  + Ngược lại: a->b->c
 * - B3: Gắn hàm vào sự kiện click
 * Output: thứ tự a b c
 */ 

function sort() {
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);
    var showSort = document.getElementById("tangDan");

    if (a > b && b > c) {
        showSort.innerHTML = "Thứ tự tăng dần: " + c + " " + b + " " + a
    } else if (a > b && a < c) {
        showSort.innerHTML = "Thứ tự tăng dần: " + b + " " + a + " " + c
    } else if (a < b && a > c) {
        showSort.innerHTML = "Thứ tự tăng dần: " + c + " " + a + " " + b
    } else if (a < c && c < b) {
        showSort.innerHTML = "Thứ tự tăng dần: " + a + " " + c + " " + b
    } else if (a > c && c > b) {
        showSort.innerHTML = "Thứ tự tăng dần: " + b + " " + c + " " + a
    } else {
        showSort.innerHTML = "Thứ tự tăng dần: " + a + " " + b + " " + c
    }
}