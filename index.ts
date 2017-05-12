import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
import * as mongoose from 'mongoose';

(mongoose as any).Promise = Promise;
mongoose.connect('mongodb://localhost:11010/typegoosetest');

class User extends Typegoose {
  @prop()
  name?: string;
}

const UserModel = new User().getModelForClass(User);

(async () => {
  const u = new UserModel({ name: 'asd' });
  await u.save();
  const user = await UserModel.findOne();
  console.log('found user', user);
})();

