import app from './app.js';
import dotenv from 'dotenv';
import logger from './config/logger.js';



dotenv.config()
const PORT = process.env.PORT || 3000


 async function startServer(){
    try{
		const server = await new Promise((resolve, reject) =>{
		const start = app.listen(PORT, () => { 
		logger.info(`http://localhost:${PORT}`);
		logger.info(`NODE_ENV: ${process.env.NODE_ENV || 'development'}`);
		resolve(start);
		})
        start.on('error', (err) =>{
		reject(err);
	})
	
	})
	return server;
	}catch(err){
		logger.error('Erro ao iniciar o servidor!', err);
		process.exit(1);
	}
}
startServer()
