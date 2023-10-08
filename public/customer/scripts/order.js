

var trash = document.getElementsByClassName('trash');
var trashArray = Array.from(trash);
trashArray.forEach(element => {
    element.addEventListener('click', () => {
        if(confirm("bạn có muốn xoá không") == true ) {
            var order = element.parentElement.parentElement;
            var idDH = order.children[1].innerHTML;


            fetch('/order/cancel', {
                method: 'POST', // Đặt phương thức là POST
                headers: {
                  'Content-Type': 'application/json' // Đặt loại dữ liệu bạn gửi đi (ví dụ: JSON)
                },
                body: JSON.stringify({ 
                    key1: 'value1', 
                    key2: 'value2' 
                }) // Gửi dữ liệu trong trường hợp POST
            })
            .then(response => {
                  // Xử lý phản hồi HTTP
                if (!response.ok) {
                    throw new Error('Lỗi mạng hoặc lỗi HTTP, mã lỗi: ' + response.status);
                }
                return response.json(); // Đọc dữ liệu JSON từ phản hồi
            })
            .then(message => {
                if(message == "huỷ thành công") {
                    order.innerHTML = ""
                    toastSuccess();
                    toastSuccess();
                }
                // Xử lý dữ liệu đã lấy được
                console.log(message);
            })
            .catch(error => {
                  // Xử lý lỗi nếu có
                console.error('Lỗi: ' + error.message);
            });
        }
    })
});

function toasts(
    {
        title = "Cảnh báo",
        message = "Thận trọng với những gì bạn đang thực hiện",
        type = "error"
    }
) {
    var main = document.getElementById("toast");
    const icon = {
        success: '<i class="fa-solid fa-circle-check"></i>',
        error: '<i class="fa-solid fa-triangle-exclamation"></i>',
        info: ' <i class="fa-solid fa-circle-exclamation"></i>'
    }
    
    if(main) {
        const toast = document.createElement("div");
        toast.classList.add("notification", `${type}`);
        var autoClear = setTimeout(function (){
            main.removeChild(toast)
        }, 3500)
        toast.addEventListener("click", function(e){
            if(e.target.closest(".close")) {
                main.removeChild(toast)
                clearTimeout(autoClear)
            }
        })
        toast.innerHTML = `
        <div class="icon">
            ${icon[`${type}`]}
        </div>
        <div class="noti">
            <div class="title">
                <span>${title}</span>
            </div>
            <div class="message">
                <span>${message}</span>
            </div>
        </div>
        <div class="close" >
            <i class="fa-solid fa-xmark"></i>
        </div>
        `
        main.appendChild(toast)
        
        

    }
    
}

function toastSuccess() {
    toasts(
        {
            title: "success",
            message: "Đăng ký thành công",
            type: "success"
        }
    )
}

function toastError() {
    toasts(
        {
            title: "error",
            message: "Lỗi vui lòng thử lại",
            type: "error"
        }
    )
}

function toastInfo() {
    toasts(
        {
            title: "info",
            message: "Máy tính mất kết nối",
            type: "info"
        }
    )
}

