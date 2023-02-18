import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  reason="Error Connecting to Database";
  statusCode=500;
    constructor() {
        super('Error Connecting to Database');

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    formattedErrorMessage(){
      return [
        {
          message:this.reason
        }
      ]
    }
}