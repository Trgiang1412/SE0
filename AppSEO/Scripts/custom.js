/**
 * Hiện loading
 * @param {string} id id của container. Mặc định là của #bodyContainer
 */
function showLoading(id) {
    hideLoading(id)
    const loader = '<div class="loader">' +
        '<div class="loader-inner"> ' +
        '<div class="loader-line-wrap">' +
        '<div class="loader-line"></div>' +
        '</div>' +
        '<div class="loader-line-wrap">' +
        '<div class="loader-line"></div>' +
        '</div>' +
        '<div class="loader-line-wrap">' +
        '<div class="loader-line"></div>' +
        '</div>' +
        '<div class="loader-line-wrap">' +
        '<div class="loader-line"></div>' +
        '</div>' +
        '<div class="loader-line-wrap">' +
        '<div class="loader-line"></div>' +
        '</div></div></div>'
    if (id) {
        $('#' + id).prepend(loader)
    } else {
        $('#bodyContainer').prepend(loader)
    }
}

/**
 *  Ẩn loading
 * @param {string} id id của container. Mặc định là của #bodyContainer
 */
function hideLoading(id) {
    const loader = $('#bodyContainer').find('.loader')
    if (id) {
        loader = $('#' + id).find('.loader')
    }
    loader.remove()
}

/**
 * Thêm/cập nhật cookie
 * @param {any} name
 * @param {any} value
 * @param {any} days
 */
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

/**
 * Lấy thông tin cookie
 * @param {any} name
 */
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

/**
 * Xoá cookie
 * @param {any} name
 */
function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}