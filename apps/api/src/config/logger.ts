import winston from 'winston';
import 'winston-daily-rotate-file';

const { combine, timestamp, printf } = winston.format;

const logFormat = printf(({ level, message, timestamp }) => {
    return `[${timestamp}] ${level}: ${message}`;
});

// configuração do transport para log de arquivos rotacionados.

const dailyRotateFileTransport = new winston.transports.DailyRotateFile({
    filename: 'logs/%DATA%-results.log', // o nome do arquivo inclui a data para rotação
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d', // armazenar logs por até 14 dias.
});

const logger = winston.createLogger({
    level: 'info',
    format: combine(timestamp(), logFormat), // formato de log com timestamp e formato personalizado.
    transports: [
        new winston.transports.Console({ format: winston.format.simple() }), // log no console
        dailyRotateFileTransport, // log em arquivos com rotação diária
    ],
});

export default logger;