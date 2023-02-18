import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  statusCode=400;
   message:string;
  constructor(message:string) {
    super(message);
    this.message =message;
    Object.setPrototypeOf(this,BadRequestError.prototype);

  }

  formattedErrorMessage(){
    return [{message:this.message}];
  }

}