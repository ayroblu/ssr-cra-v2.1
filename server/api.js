const db = {
  names: [
    {text: 'James'}
  , {text: 'William'}
  ]
}
class MainApi{
  async getMain(){
    return new Promise(y=>setTimeout(()=>{
      y(db.names[0])
    }, 200))
  }
}
module.exports = {
  MainApi
}
