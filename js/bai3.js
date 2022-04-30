/**
 * Input: num1, num2, num3, soChan, soLe
 * 
 * Các bước xử lý
 * - B1: Tạo biến và lấy giá trị từ form
 * - B2: Lập công thức
 *  + Nếu num1, num2, num3 chia hết cho 2 -> tăng soChan lên lần lượt
 *  + Ngược lại -> tăng số lẻ lên lần lượt
 * - B3: Gắn hàm vào sự kiện click
 * Output: soChan, soLe
 */ 

function chanLe() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var soChan = 0;
    var soLe = 0;

    if (num1 % 2 == 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }
    if (num2 % 2 == 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }
    if (num3 % 2 == 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }

    document.getElementById("hienThi").innerHTML = "Có " + soChan + " số chẵn, " + soLe + " số lẻ"
}