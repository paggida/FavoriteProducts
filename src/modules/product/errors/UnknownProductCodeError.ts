export default class UnknownProductCodeError{
  public message: string;

  public statusCode: number;

  constructor(message: string, statusCode = 404) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
