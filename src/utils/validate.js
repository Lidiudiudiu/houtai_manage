export function validateUsername(rule, value, callback) {
    if (value.length < 3 || value.length > 10) {
        callback(new Error('用户名必须是3到10位'));
    }
    else {
        callback()
    }
}

export function validatePassword(rule, value, callback) {
    if (value.length < 5 || value.length > 10) {
        callback(new Error('密码必须是5到10位'));
    }
    else {
        callback()
    }
}
