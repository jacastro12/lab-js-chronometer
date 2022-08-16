class Chronometer {
  constructor() {
    this.currentTime = 55
    this.centisecond = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      printTimeCallback()
      this.currentTime += 1
      this.centisecond += 1
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60)
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`
    } else {
      return `${value}`
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  getCentiseconds() {
    return this.centisecond % 100
  }

  reset() {
    this.currentTime = 0
    this.centisecond = 0
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const seconds = this.computeTwoDigitNumber(this.getSeconds())
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${minutes}:${seconds}:${centiseconds}`
  }
}
