import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer'

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddlewares from './app/middlewares/auth';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/appointmentController';
import ScheduleController from './app/controllers/ScheduleController';



const routes = new Router();
const upload = multer(multerConfig);

routes.post('/user', UserController.store);

routes.post('/session', SessionController.store);

routes.use(authMiddlewares);

routes.put('/user', UserController.update);

routes.get('/providers', ProviderController.index);

routes.post('/appointment', AppointmentController.store);

routes.get('/appointment', AppointmentController.index);

routes.get('/schedule', ScheduleController.index);

routes.post('/files', upload.single('file'),  FileController.store);



export default routes;