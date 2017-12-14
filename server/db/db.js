import mongoose from "mongoose";
import './models/Contact';
import conf from '../config/config.json';

export function setUpConnection() {
    mongoose.connect(`mongodb://naterra:305762@ds133746.mlab.com:33746/phonebook`);
}
