
exports.pagerender = (req,res,next)=>{
      shares: shares,
            path: '/Watchlist',
            isAuthenticated: req.session.isLoggedIn,
            currentPage: page,
            hasNextPage: ITEMS_PER_PAGE * page < totalItems,
            hasPreviousPage: page > 1,
            nextPage: page + 1,
            previousPage: page - 1,
            lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
};