$.ajax({
        type: 'get',
        url: 'https://devapi.qweather.com/v7/weather/now',
        data: {
            key: '1cda250494ae46adb880efcb9b99b1b5',
            location: '101280605'
        }
    }).then(function (res) {
        console.log(res.now);
        var wt = res.now;
        $('i').addClass('qi-' + wt.icon);
        $('.weather').append(wt.text + wt.temp + '¡æ');
    }).catch(function (err) {
        if (err.status == 404) {
            location.href = '404.html'
        }
    })