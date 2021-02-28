const Share = require("../models/singleshare");
const ITEMS_PER_PAGE = 3;


exports.getAllshares = (req, res, next) => {

      const page = +req.query.page || 1;
      let totalItems;

      Share.find()
            .countDocuments()
            .then(numProducts => {
                  totalItems = numProducts;
                  return Share.find()
                        .sort({ _id: -1 })
                        .skip((page - 1) * ITEMS_PER_PAGE)
                        .limit(ITEMS_PER_PAGE);
            })
            .then(shares => {
                  res.render('watchlist', {
                        shares: shares,
                        path: '/Watchlist',
                        isAuthenticated: req.session.isLoggedIn,
                        currentPage: page,
                        hasNextPage: ITEMS_PER_PAGE * page < totalItems,
                        hasPreviousPage: page > 1,
                        nextPage: page + 1,
                        previousPage: page - 1,
                        lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
                  });
            })
            .catch(err => {
                  console.log(err);
            });
};


exports.searchAllshares = (req, res, next) => {

      const search = req.body.search;
      const choice = req.body.choice;
      const page = +req.query.page || 1;
      let totalItems;
      let singleEntry=false;
      if (search !== "") {
            singleEntry=true;
            Share.find({ name: search })
                  .countDocuments()
                  .then(numProducts => {
                        totalItems = numProducts;
                        return Share.find({ name: search })
                              .sort({ name: 1 })
                              .skip((page - 1) * ITEMS_PER_PAGE)
                              .limit(ITEMS_PER_PAGE);
                  })
                  .then(shares => {
                        res.render('watchlist', {
                              shares: shares,
                              path: '/Watchlist',
                              isAuthenticated: req.session.isLoggedIn,
                              singleEntry:singleEntry,
                              currentPage: page,
                              hasNextPage: ITEMS_PER_PAGE * page < totalItems,
                              hasPreviousPage: page > 1,
                              nextPage: page + 1,
                              previousPage: page - 1,
                              lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
                        });
                  })
                  .catch(err => {
                        console.log(err);
                  });
      }
      else if (choice === "name") {
            var query = {};
            query["name"] = 1;
            Share.find()
                  .sort(query)
                  .countDocuments()
                  .then(numProducts => {
                        totalItems = numProducts;
                        return Share.find()
                              .skip((page - 1) * ITEMS_PER_PAGE)
                              .limit(ITEMS_PER_PAGE);
                  })
                  .then(shares => {
                        res.render('watchlist', {
                              shares: shares,
                              path: '/Watchlist',
                              isAuthenticated: req.session.isLoggedIn,
                              singleEntry:singleEntry,
                              currentPage: page,
                              hasNextPage: ITEMS_PER_PAGE * page < totalItems,
                              hasPreviousPage: page > 1,
                              nextPage: page + 1,
                              previousPage: page - 1,
                              lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
                        });
                  })
                  .catch(err => {
                        console.log(err);
                  });
      }
      else if (choice === "callremark" || choice === "target1remark" || choice === "target2remark" || choice === "stoplossremark") {
            var query = {};
            query[choice] = "Active";
            Share.find(query)
                  .countDocuments()
                  .then(numProducts => {
                        totalItems = numProducts;
                        return Share.find(query)
                              .sort({ _id: -1 })
                              .skip((page - 1) * ITEMS_PER_PAGE)
                              .limit(ITEMS_PER_PAGE);
                  })
                  .then(shares => {
                        res.render('watchlist', {
                              shares: shares,
                              path: '/Watchlist',
                              isAuthenticated: req.session.isLoggedIn,
                              singleEntry:singleEntry,
                              currentPage: page,
                              hasNextPage: ITEMS_PER_PAGE * page < totalItems,
                              hasPreviousPage: page > 1,
                              nextPage: page + 1,
                              previousPage: page - 1,
                              lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
                        });
                  })
                  .catch(err => {
                        console.log(err);
                  });

      }
      else {
            Share.find()
                  .countDocuments()
                  .then(numProducts => {
                        totalItems = numProducts;
                        return Share.find()
                              .sort({ _id: -1 })
                              .skip((page - 1) * ITEMS_PER_PAGE)
                              .limit(ITEMS_PER_PAGE);
                  })
                  .then(shares => {
                        res.render('watchlist', {
                              shares: shares,
                              path: '/Watchlist',
                              isAuthenticated: req.session.isLoggedIn,
                              singleEntry:singleEntry,
                              currentPage: page,
                              hasNextPage: ITEMS_PER_PAGE * page < totalItems,
                              hasPreviousPage: page > 1,
                              nextPage: page + 1,
                              previousPage: page - 1,
                              lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
                        });
                  })
                  .catch(err => {
                        console.log(err);
                  });

      }


};