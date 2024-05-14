import IApiServiceResponse from './types'
import urlApiHelper from './util/urlApiHelper'

class ApiService {
  static async GET<T>(
    uri: string,
    params?: any,
    isAbsoluteUrl = false
  ): Promise<IApiServiceResponse<T>> {
    const url = urlApiHelper(uri, params, isAbsoluteUrl)

    const options: any = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const response = await fetch(url, options)

    if (response.headers.get('content-type') !== 'application/json') {
      throw new Error('Not JSON response')
    }

    const json = await response.json()

    return { response, json }
  }
}

export default ApiService
