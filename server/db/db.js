import mongoose from 'mongoose';
import config from '../../config/config.json';

export function setUpConnection() {
	mongoose.connect(`mongodb://${config.db.user}:${config.db.password}@ds133746.mlab.com:${config.db.port}/${config.db.name}`);
}
