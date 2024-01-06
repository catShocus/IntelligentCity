/**
 * @brief 获取当前时间
 */
class GetDate {
    constructor() {
        this.year = ''
        this.month = ''
        this.day = ''
        this.hours = ''
        this.minutes = ''
        this.seconds = ''
    }
    //获取当前时间
    getNowDate() {
        const now = new Date()
        this.year = now.getFullYear()
        // this.month = now.getMonth() + 1
        this.month = (now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
        this.day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
        this.hours = now.getHours()
        this.minutes = now.getMinutes()
        this.seconds = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
        let timeObj = {
            year: this.year,
            month: this.month,
            day: this.day,
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds
        }
        return timeObj
    }
}
export default GetDate