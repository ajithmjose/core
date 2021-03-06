let globalCacheData = [];

function setCacheData(name, value){
  globalCacheData[name] = value;
}

function addCacheData(name, value){
  if(!globalCacheData[name]){
    globalCacheData[name] = {}
  }
  globalCacheData[name] = Object.assign(globalCacheData[name], value);
}

function getCacheData(name){
  return globalCacheData[name];
}

export {setCacheData, getCacheData, addCacheData};
