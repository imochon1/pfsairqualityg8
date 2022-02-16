const { NODE_ENV, ATLAS_USER, ATLAS_PASSWORD } = process.env;

const databases = {
  dev: {
    mongo_uri: `mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@cluster0.xjjjt.mongodb.net/pfsairqualityg8-dev?retryWrites=true&w=majority`,
  },
  stage: {
    mongo_uri: `mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@cluster0.xjjjt.mongodb.net/pfsairqualityg8-staging?retryWrites=true&w=majority`,
  },
  prod: {
    mongo_uri: `mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@cluster0.xjjjt.mongodb.net/pfsairqualityg8?retryWrites=true&w=majority`,
  },
};

//NODE_ENV = stage
module.exports = databases[NODE_ENV]; // ES LO MISMO databases.stage
