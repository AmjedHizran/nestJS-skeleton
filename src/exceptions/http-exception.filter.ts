import { Catch, ArgumentsHost, HttpException, HttpStatus, ExceptionFilter} from '@nestjs/common';
import { Request, Response } from 'express';
import { Logger } from '../services/logger/logger.service';


@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private logger: Logger) {
  }

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let status = exception.getStatus();

    this.logger.error(exception);
  
    const message = (exception instanceof Error) ? exception.message : exception.message.error;

    
    if (status === HttpStatus.NOT_FOUND) {
      status = HttpStatus.NOT_FOUND;
    }
 
    if (status === HttpStatus.SERVICE_UNAVAILABLE) {
      status = HttpStatus.SERVICE_UNAVAILABLE;
    }
 
    if (status === HttpStatus.NOT_ACCEPTABLE) {
      status = HttpStatus.NOT_ACCEPTABLE;
    }
 
    if (status === HttpStatus.EXPECTATION_FAILED) {
      status = HttpStatus.EXPECTATION_FAILED;
    }
 
    if (status === HttpStatus.BAD_REQUEST) {
      status = HttpStatus.BAD_REQUEST;
    }
    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: message
      });
  }
}