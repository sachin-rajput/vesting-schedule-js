import { Logger } from '@nestjs/common';
import { Command, CommandRunner, Option } from 'nest-commander';
import * as moment from 'moment';

interface UploadFileCommandOptions {
  fileName?: string;
  date?: string;
}

interface ValidatePassedParams {
  message: string;
  result: boolean;
}

@Command({ name: 'uploadfile', description: 'Upload data via a file' })
export class UploadFileCommand implements CommandRunner {
  constructor(private readonly logService: Logger) {}

  async run(
    passedParam: string[],
    options?: UploadFileCommandOptions,
  ): Promise<void> {
    const validate = this.validateParams(passedParam);
    if (validate.result) {
      this.logService.debug(validate.message);
    } else {
      this.logService.error(validate.message);
    }
  }

  isValidFileExtension(fileName: string): boolean {
    const validFileExtensions = ['.csv'];

    return validFileExtensions.includes(
      fileName.substring(fileName.indexOf('.')),
    );
  }

  validateParams(passedParam: string[]): ValidatePassedParams {
    if (passedParam.length !== 2) {
      return {
        message: 'Invalid command-line arguments provided.',
        result: false,
      };
    }

    const [fileName, queryDate] = passedParam;

    if (fileName.indexOf('.') < 0)
      return {
        message: 'Invalid file provided.',
        result: false,
      };

    if (fileName.indexOf('.') < 0)
      return {
        message: 'Invalid file provided.',
        result: false,
      };

    if (!moment(queryDate, 'YYYY-MM-DD', true).isValid()) {
      return {
        message: 'Invalid date format provided.',
        result: false,
      };
    }

    return {
      message: 'Valid command-line arguments provided.',
      result: true,
    };
  }
}
