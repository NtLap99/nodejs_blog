class SiteController {
  // [GET] /home
  home(req, res) {
    res.render('home');
  }
  // [GET] /search
  search(req, res) {
    res.render('search');
  }
  // [POST] /search
  postSearch(req, res) {
    console.log(req.body);
    res.send('');
  }
}

module.exports = new SiteController();
