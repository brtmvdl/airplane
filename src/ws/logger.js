
class Logger {
  name = ['Logger']

  constructor(name) {
    this.name.join(name)
  }

  info(...values) {
    console.info(this.name.join('.'), ...values)
  }

}

module.exports = {
  Logger,
}
