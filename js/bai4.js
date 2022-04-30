/**
 * Input: canhA, canhB, canhC, kiemtra, huyenA, huyenB, huyenC
 * 
 * Các bước xử lý
 * - B1: Tạo biến và lấy giá trị từ form
 * - B2: Lập công thức
 *  + Nếu 2 cạnh bằng nhau -> tam giác cân
 *  + Nếu 3 cạnh bằng nhau -> tam giác đều
 *  + Nếu 1 cạnh bằng căn bậc 2 tổng bình phương 2 cạnh còn lại -> tam giác vuông 
 *  + Ngược lại -> tam giác thường
 * - B3: Gắn hàm vào sự kiện click
 * Output: result
 */ 

function tamGiac() {
    var canhA = Number(document.getElementById("numa").value);
    var canhB = Number(document.getElementById("numb").value);
    var canhC = Number(document.getElementById("numc").value);
    var huyenA = Math.sqrt(Math.pow(canhB,2) + Math.pow(canhC,2));
    var huyenB = Math.sqrt(Math.pow(canhA,2) + Math.pow(canhC,2));
    var huyenC = Math.sqrt(Math.pow(canhA,2) + Math.pow(canhB,2));
    var kiemTra = document.getElementById("kiemTra");
    
    if (canhA == canhB && canhA != canhC || canhA == canhC && canhA != canhB || canhB == canhC && canhC != canhA) {
        kiemTra.innerHTML = "Đây là tam giác cân"
    } else if (canhA == canhB && canhA == canhC && canhB == canhC) {
        kiemTra.innerHTML = "Đây là tam giác đều"
    } else if (canhA == huyenA || canhB == huyenB || canhC == huyenC) {
        kiemTra.innerHTML = "Đây là tam giác vuông"
    } else {
        kiemTra.innerHTML = "Đây là tam giác thường"
    }
}