import Server from './Server'

class API extends Server {

  /**
   * 用途：获取首页banner图片
   */
  async getImgUrls(params = {}){
    try {
      let result = await this.axios('get', '/rest/indexH');
      if(result && result.status === 1){
        return result;
      } else {
        let err = {
          tip: '自定义异常：getImgUrls失败',
          response: result,
          data: params,
          url: ''
        }
        throw err;
      }
    }catch(err){
      throw err;
    }
  }


  /**
   * 用途：获取广播内容数组
   */
  async getBroadCasts(params = {}){
    try {
      try {
        let result = await this.axios('get', '/rest/indexH');
        if(result && result.status === 1){
          return result;
        } else {
          let err = {
            tip: '自定义异常：getBroadCasts失败',
            response: result,
            data: params,
            url: ''
          }
          throw err;
        }
      }catch(err){
        throw err;
      }
    }
  }
}
