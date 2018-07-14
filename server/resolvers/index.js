const _ = require("lodash");
//const TweetModel = require("../models/tweet");
const UsersModel = require("../models/users");
//const StatModel = require("../models/stat");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resolvers = {
  Query: {
    getContacts: (parent, args, context, info) => {
      //return contactsList;
      return UsersModel.find({}, null, {sort: {_id: -1}}, function(err, data) {  
        //console.log(data);
        return data;
      });
    },
    getContact: (parent, args, context, info) => {
      //return UsersModel.findById(mongoose.Types.ObjectId(args.id));
    },
    totalContacts: (parent, args, context, info) => {
        return UsersModel.countDocuments({},null, function(err, result){
            return result;
        });
    }
  },
  Contact: {
    fullName: (parent, args, context, info) => {
      return `${parent.firstName} ${parent.lastName}`
    }
  },
  Mutation: {
    createUser: (parent, args, context, info) => {
      let user = new UsersModel({
        firstName: args.firstName,
        lastName: args.lastName,
        avatarUrl: args.avatarUrl
      });
      return user.save();
    }
  }
  
}

module.exports = resolvers;