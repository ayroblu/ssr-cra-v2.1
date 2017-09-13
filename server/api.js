const db = {
  list: [
    {text: 'First'}
  ]
}

module.exports = {
  async getMain(){
    return db.list[0]
  }
}
