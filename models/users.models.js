const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    Email: String,
    Lastname : String,
    Firstname: String,
    Age: String,
    Phone:String,
    Adress: String,
    Role:String,
    password :String ,
    applied_offers: [{ type: Schema.Types.ObjectId, ref: 'offres' }],
    candidatures: [{ type: Schema.Types.ObjectId, ref: 'candidature' }]

}, {timestamps: true})


UserSchema.pre('save', async function (next) {
    const user = this;
  
    if (user.isModified('password') || user.isNew) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
    }
  
    return next();
  });
  
  UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
  };
  


module.exports = mongoose.model('users', UserSchema)
