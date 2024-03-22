var box = document.querySelector("#order-box");

const styleElement = document.styleSheets[5];



var rule = ".tinhTrangDonHang .line::after { 0px}";

var box_animation = "";
switch(tinhTrangDon) {
    case 1:
        rule = ".tinhTrangDonHang .line::after { width: calc(100%/5*2);}";
        box_animation = "tt2"
        break;
    case 2: 
        rule = ".tinhTrangDonHang .line::after { width: calc(100%/5*3);}";
        box_animation = "tt3"
        break;
    case 3: 
        rule = ".tinhTrangDonHang .line::after { width: calc(100%/5*4);}";
        box_animation = "tt4"
        break;
    case 4: 
        rule = ".tinhTrangDonHang .line::after { width: calc(100%/5*5);}";  
        box_animation = "tt5"
        break;
    case 5: 
        rule = ".tinhTrangDonHang .line::after { width: 100%; border: 2px solid rgb(213, 55, 34); animation: line-close 1s infinite;}";
        // rule = ".tinhTrangDonHang .line::after { width: 0%";
        box_animation = "tt0"
        break;
    case 6: 
        rule = ".tinhTrangDonHang .line::after { width: calc(100%/5*1);}";  
        box_animation = "tt1"
        break;
}

box.style.animation = `${box_animation} 2s linear infinite`;
// Thêm quy tắc CSS vào bảng điều khiển
styleElement.insertRule(rule, styleElement.cssRules.length);
