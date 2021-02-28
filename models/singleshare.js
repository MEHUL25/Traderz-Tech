
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shareSchema = new Schema({

      name : {
            type : String
      },
      buyabove : {
            type : Number
      },
      callremark : {
            type : String
      },
      calladdeddate : {
            type : String
      },
      hreflink : {
            type : String
      },
      callactivedate : {
            type : String
      },
      target1 : {
            type : Number
      },
      target1remark : {
            type : String
      },
      target1activedate : {
            type : String
      },
      target2 : {
            type : Number
      },
      target2remark: {
            type : String
      },
      target2activedate : {
            type : String
      },
      stoploss : {
            type : Number
      },
      stoplossremark : {
            type : String
      },
      stoplossdate  : {
            type : String
      }
});


module.exports = mongoose.model("Share",shareSchema);

/*

const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename),'data','share.json');



const getSharesFromFile = (cb) => {
            fs.readFile(p,(err,fileContent)=>{
                  if(err){
                        return cb([]);
                  }
                  return cb(JSON.parse(fileContent));
            });
};

module.exports = class Shares {

      constructor(id,name,buyabove,callremark,calladdeddate,hreflink,callactivedate,target1,target1remark,target1activedate,target2,target2remark,target2activedate,stoploss,stoplossremark,stoplossdate)
      {
            this.id = id;
            this.name=name;
            this.buyabove = buyabove;
            this.callremark = callremark;
            this.calladdeddate = calladdeddate;
            this.hreflink = hreflink;
            this.callactivedate = callactivedate;
            this.target1 = target1;
            this.target1remark = target1remark;
            this.target1activedate = target1activedate;
            this.target2 = target2;
            this.target2remark = target2remark;
            this.target2activedate = target2activedate;
            this.stoploss = stoploss;
            this.stoplossremark = stoplossremark;
            this.stoplossdate  = stoplossdate;
      }

      save()
      {
            getSharesFromFile(share =>{
                  console.log(this.id);
                  if(this.id)
                  {
                        const existingProductIndex = share.findIndex(
                              prod => prod.id === this.id
                            );
                        const updatedProducts = [...share];
                        updatedProducts[existingProductIndex] = this;
                        console.log("Updated");
                        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                              console.log(err);
                        });
                  }
                  else
                  {
                        this.id = Math.random().toString();
                        share.push(this);
                        console.log("new");
                        fs.writeFile(p,JSON.stringify(share),err =>{
                              console.log(err);
                        });
                  }
            });
      }

      static fetchAll(cb)
      {
            getSharesFromFile(cb);
      }

      static findByName(name, cb) 
      {
        getSharesFromFile(share => 
          {
              const i = share.find(p => p.name === name);
              cb(i);
        });
      }

}
*/

/*

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shareSchema = new Schema({

      name : {
            type : String,
            required:true
      },
      buyabove : {
            type : Number,
            required:true
      },
      callremark : {
            type : String,
            required:true
      },
      calladdeddate : {
            type : Date,
            required:false
      },
      hreflink : {
            type : String,
            required:true
      },
      callactivedate : {
            type : Date,
            required:false
      },
      target1 : {
            type : Number,
            required:true
      },
      target1remark : {
            type : String,
            required:true
      },
      target1activedate : {
            type : Date,
            required:false
      },
      target2 : {
            type : Number,
            required:true
      },
      target2remark: {
            type : String,
            required:true
      },
      target2activedate : {
            type : Date,
            required:false
      },
      stoploss : {
            type : Number,
            required:true
      },
      stoplossremark : {
            type : String,
            required:true
      },
      stoplossdate  : {
            type : Date,
            required:false
      }
});


module.exports = mongoose.model("Share",shareSchema);


*/





/*
const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename),'data','share.json');

const getSharesFromFile = (cb) => {
            fs.readFile(p,(err,fileContent)=>{
                  if(err){
                        return cb([]);
                  }
                  return cb(JSON.parse(fileContent));
            });
};

module.exports = class Shares {

      constructor(id,name,buyabove,callremark,calladdeddate,hreflink,callactivedate,target1,target1remark,target1activedate,target2,target2remark,target2activedate,stoploss,stoplossremark,stoplossdate)
      {
            this.id = id;
            this.name=name;
            this.buyabove = buyabove;
            this.callremark = callremark;
            this.calladdeddate = calladdeddate;
            this.hreflink = hreflink;
            this.callactivedate = callactivedate;
            this.target1 = target1;
            this.target1remark = target1remark;
            this.target1activedate = target1activedate;
            this.target2 = target2;
            this.target2remark = target2remark;
            this.target2activedate = target2activedate;
            this.stoploss = stoploss;
            this.stoplossremark = stoplossremark;
            this.stoplossdate  = stoplossdate;
      }

      save()
      {
            getSharesFromFile(share =>{
                  console.log(this.id);
                  if(this.id)
                  {
                        const existingProductIndex = share.findIndex(
                              prod => prod.id === this.id
                            );
                        const updatedProducts = [...share];
                        updatedProducts[existingProductIndex] = this;
                        console.log("Updated");
                        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                              console.log(err);
                        });
                  }
                  else
                  {
                        this.id = Math.random().toString();
                        share.push(this);
                        console.log("new");
                        fs.writeFile(p,JSON.stringify(share),err =>{
                              console.log(err);
                        });
                  }
            });
      }

      static fetchAll(cb)
      {
            getSharesFromFile(cb);
      }

      static findByName(name, cb) 
      {
        getSharesFromFile(share => 
          {
              const i = share.find(p => p.name === name);
              cb(i);
        });
      }

}


*/