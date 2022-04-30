/**
 * Input: user, chaoHoi
 * 
 * Các bước xử lý
 * - B1: Tạo biến và lấy giá trị từ form
 * - B2: Lập công thức
 *  switch (user){
 *      case "ba":
 *          "Chào Ba";
 *          Break;
 *      case "me":
 *          "Chào Mẹ";
 *          Break;
 *      case "anh":
 *          "Chào Anh";
 *          Break;
 *      case "em":
 *          "Chào Em";
 *          Break;
 *      default:
 *          "Bạn là ai?";
 *          Break;
 * }
 * - B3: Gắn hàm vào sự kiện click
 * Output: chaoHoi
 */ 

function wellcome() {
    var user = document.getElementById("user").value;
    var chaoHoi = document.getElementById("loiChao");
    
    switch (user) {
        case "ba":
            chaoHoi.innerHTML = "Con chào Bố ạ!"
            break;
        case "me":
            chaoHoi.innerHTML = "Con chào Mẹ ạ!"
            break;
        case "anh":
            chaoHoi.innerHTML = "Chào anh trai cụa em :)"
            break;
        case "em":
            chaoHoi.innerHTML = "Chào em gái cụa anh <3"
            break;
        default:
            chaoHoi.innerHTML = "Ai đang dùng tôi rứa?"
            break;
    }
}