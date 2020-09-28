import axios from 'axios';

export const DEFAULT_MESSAGE = {
  SUCCESS: 'Ação realizada',
  ERROR_000: 'Verifique sua conexão com a internet',
  ERROR_400: 'Não foi possível interpretar a solicitação. Verifique a sintaxe das informações enviadas',
  ERROR_401: 'Você precisa fazer login',
  ERROR_403: 'Acesso negado. Este perfil de acesso não permite a ação desejada',
  ERROR_404: 'A página ou recurso solicitado não foi encontrado',
  ERROR_422: 'A solicitação contém campos inválidos',
  ERROR_429: 'O limite de tentativas de acesso foi atingido',
  ERROR_500: 'Ocorreu um erro inesperado. Entre em contato com o atendimento caso o problema persista'
}

/**
 * @param {String} message
 * @returns {Promise<never>}
 */
const promiseReject = (message: string) => Promise.reject({ message }) // eslint-disable-line

class Service {
  static $axios: any = null;

  /** Inject handleSuccess and handleError
     * @param {Promise<any>} httpClientRequest
     * @returns {Promise<any>}
     */
  static injectResponseHandlers (httpClientRequest: any) {
    return httpClientRequest
      .then(this.handleSuccess)
      .catch(this.handleError)
  }

  /**
     * @param {Object} res HTTP response
     * @param {String} MESSAGE
     * @returns {Promise<any>}
     */
  static handleSuccess ({ data: res }: any, MESSAGE = DEFAULT_MESSAGE.SUCCESS) {
    let noDataObject = !res.data && res.success ? null : res
    return Promise.resolve({
      data: res.data || noDataObject,
      message: res.message || MESSAGE
    })
  }

  /**
     *  handle Request/Response Errors
     * @param {Object} err HTTP response Error
     * @param {String} MESSAGE
     * @returns {Promise<never>} Promise.reject(error)
     */
  static handleError (err: any, MESSAGE = DEFAULT_MESSAGE.ERROR_000) {
    // log error    
    if (err.response) {
      // Unknow Error / Server Error
      if (!err.response.status) {
        return promiseReject('Verifique sua conexão com internet.')
      } // eslint-disable-line
      // The request was made and the server responded with a status code
      else if (err.response.data) {
        let { data } = err.response

        if (data && data.message) {
          const { message } = data
          return promiseReject(message)
        } else {
          let { status } = err.response
          if (status === 400) { return promiseReject(DEFAULT_MESSAGE.ERROR_400) }
          if (status === 401) { return promiseReject(DEFAULT_MESSAGE.ERROR_401) }
          if (status === 403) { return promiseReject(DEFAULT_MESSAGE.ERROR_403) }
          if (status === 404) { return promiseReject(DEFAULT_MESSAGE.ERROR_404) }
          if (status === 422) { return promiseReject(DEFAULT_MESSAGE.ERROR_422) }
          if (status === 429) { return promiseReject(DEFAULT_MESSAGE.ERROR_429) }
          if (status === 500) { return promiseReject(DEFAULT_MESSAGE.ERROR_500) }
        }
      }
    }

    // The request was made but no response was received
    if (err.request) console.error(err.request)

    return promiseReject(MESSAGE)
  }
}

const $axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })

$axiosInstance.interceptors.response.use(function (response): any {
  return Service.handleSuccess(response)
}, function (error) {
  return Service.handleError(error)
})

Service.$axios = $axiosInstance

export { $axiosInstance }

export default Service