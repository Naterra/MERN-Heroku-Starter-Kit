import mongoose from 'mongoose';
import config from '../config/config.json';

export function setUpConnection() {
	mongoose.connect(`mongodb://${config.user}:${config.user}@ds133746.mlab.com:${config.user}/${config.name}`);
}
