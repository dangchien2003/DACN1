var trash = document.getElementsByClassName("trash");
var trashArray = Array.from(trash);
trashArray.forEach((element) => {
  element.addEventListener("click", () => {
    if (confirm("bạn có muốn xoá không") == true) {
      var order = element.parentElement.parentElement;
      var idDH = order.children[1].innerHTML;

      fetch("/order/cancel", {
        method: "POST", // Đặt phương thức là POST
        headers: {
          "Content-Type": "application/json", // Đặt loại dữ liệu bạn gửi đi (ví dụ: JSON)
        },
        body: JSON.stringify({
          idDH,
        }), // Gửi dữ liệu trong trường hợp POST
      })
        .then((response) => {
          // Xử lý phản hồi HTTP
          if (!response.ok) {
            throw new Error(
              "Lỗi mạng hoặc lỗi HTTP, mã lỗi: " + response.status
            );
          }
          return response.json(); // Đọc dữ liệu JSON từ phản hồi
        })
        .then((message) => {
          if (message.status == 1) {
            order.querySelector(".status").style.cssText =
              "background-color: rgb(250, 114, 102)";
            order.querySelector("#trangThai").innerHTML = "Đã huỷ đơn";
            order.querySelector("#action").innerHTML = "";
            toastSuccess(message.message);
          } else {
            toastError(message.message);
          }
          // Xử lý dữ liệu đã lấy được
          console.log(message);
        })
        .catch((error) => {
          // Xử lý lỗi nếu có
          console.error("Lỗi: " + error.message);
          toastError(error.message);
        });
    }
  });
});

// đánh giá

var comment = document.getElementsByClassName("comment");
var cmt = document.getElementById("cmt");
var btn_submit = document.getElementById("submit");
var form = document.getElementById("send-comment");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

var background = document.getElementById("background");
comment = Array.from(comment);
comment.forEach((element) => {
  element.addEventListener("click", () => {
    var order = element.parentElement.parentElement;
    var idDH = order.children[1].innerHTML;
    fetch("/order/comment", {
      method: "POST", // Đặt phương thức là POST
      headers: {
        "Content-Type": "application/json", // Đặt loại dữ liệu bạn gửi đi (ví dụ: JSON)
      },
      body: JSON.stringify({
        idDH,
      }), // Gửi dữ liệu trong trường hợp POST
    })
      .then((response) => {
        // Xử lý phản hồi HTTP
        if (!response.ok) {
          throw new Error("Lỗi mạng hoặc lỗi HTTP, mã lỗi: " + response.status);
        }
        return response.text(); // Đọc dữ liệu JSON từ phản hồi
      })
      .then((html) => {
        if (html) {
          document.getElementById("send-comment").innerHTML =
            `<div class="close">
                        <i class="fa-sharp fa-solid fa-x" id="close"></i>
                    </div>` +
            html +
            `<div class="btn-send-cmt" id="submit">
                        <button>Gửi</button>
                    </div>`;
            action();
            sendform();
        } else {
          toastError("Không thể đánh giá");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.log(error);
        toastError(error.message);
      });
  });
});

function action() {
  background.style.display = "block";
  cmt.style.display = "flex";
  // đóng đánh giá
  var btn_close = document.getElementById("close");
  btn_close.addEventListener("click", () => {
    background.style.display = "none";
    cmt.style.display = "none";
  });

  var products = document.querySelectorAll(".cmt-sp");
  products = Array.from(products);
  // xửa lý css
  products.forEach((product)=> {
    var star = product.querySelectorAll(".fa-star");
    star = Array.from(star);
    var click = false;
    star.forEach((element, index) => {
        element.addEventListener("mouseover", () => {
        if (!click) {
            for (var i = 0; i <= index; i++) {
            star[i].classList.add("checked");
            }
        }
        });

        element.addEventListener("click", () => {
        click = true;
        for (var i = 0; i <= index; i++) {
            star[i].classList.add("checked");
        }
        setTimeout(() => {
            click = false;
        }, 500);
        });

        element.addEventListener("mouseout", () => {
        if (!click) {
            for (var i = 0; i <= star.length; i++) {
                star[i].classList.remove("checked");

            }
        }
        });
    });
  })
  
}


function sendform() {
    var data = getdata();
    // fetch("/order/comment", {
    //     method: "POST", // Đặt phương thức là POST
    //     headers: {
    //       "Content-Type": "application/json", // Đặt loại dữ liệu bạn gửi đi (ví dụ: JSON)
    //     },
    //     body: JSON.stringify({
    //       idDH,
    //     }), // Gửi dữ liệu trong trường hợp POST
    //   })
    //     .then((response) => {
    //       // Xử lý phản hồi HTTP
    //       if (!response.ok) {
    //         throw new Error("Lỗi mạng hoặc lỗi HTTP, mã lỗi: " + response.status);
    //       }
    //       return response.text(); // Đọc dữ liệu JSON từ phản hồi
    //     })
    //     .then((html) => {
    //       if (html) {
    //         document.getElementById("send-comment").innerHTML =
    //           `<div class="close">
    //                       <i class="fa-sharp fa-solid fa-x" id="close"></i>
    //                   </div>` +
    //           html +
    //           `<div class="btn-send-cmt" id="submit">
    //                       <button>Gửi</button>
    //                   </div>`;
    //           action();
    //           sendform();
    //       } else {
    //         toastError("Không thể đánh giá");
    //       }
    //     })
    //     .catch((error) => {
    //       // Xử lý lỗi nếu có
    //       console.log(error);
    //       toastError(error.message);
    //     });
}

function getdata () {
    var btn_send = document.getElementById("submit");
    var data = [];
    btn_send.addEventListener("click", () => {
        var sanPham = document.getElementsByClassName("cmt-sp");
        sanPham = Array.from(sanPham);
        sanPham.forEach((element, index) => {
            var danhGia = {};
            danhGia.idDH = element.querySelector("#idDH").value;
            danhGia.idSP = element.querySelector("#idSP").value;
            soSao = element.querySelectorAll(".fa-star");
            soSao = Array.from(soSao);
            num_star = 0;
            for (var i = 0; i < 5; i++) {
                if(soSao[i].classList.contains("checked")) {
                    ++num_star;
                }else break;
            }
            console.log(num_star);
            danhGia.soSao = num_star;
            danhGia.danhGia = element.querySelector("#danhgia").value;
            if(danhGia.soSao || danhGia.danhGia) data.push(danhGia)
                
        })
    })
    return data;
}