import config from './config';
import { connect } from 'mongoose';

export const databaseConnection = async () : Promise <void> => {
    await connect(<string>config.MONGO_URL)
}
