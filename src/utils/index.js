import * as fetch from 'axios'

export function formDate(unix) {
    function f(date) {
        return date < 10 ? "0" + date : date
    }

    let date = new Date(unix)

    let year = f(date.getFullYear())
    let month = f(date.getMonth() + 1)
    let day = f(date.getDate())
    let hours = f(date.getHours())
    let min = f(date.getMinutes())
    let seconds = f(date.getSeconds())

    let timeStr = `${year}.${month}.${day} ${hours}:${min}:${seconds}`
    return timeStr
}

const xhr = fetch.create({
    baseURL: '',
    timeout: 15000,
})

export const axios = {
    get(url, data, config) {
        return new Promise((resolve, reject) => {
            xhr.get(url, {params: data}, config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}
