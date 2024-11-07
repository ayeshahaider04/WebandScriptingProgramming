router.get('/', (req, res) => res.render('pages/home', { pageTitle: 'Home' }));
router.get('/about', (req, res) => res.render('pages/about', { pageTitle: 'About Me' }));
router.get('/projects', (req, res) => res.render('pages/projects', { pageTitle: 'Projects' }));
router.get('/contact', (req, res) => res.render('pages/contact', { pageTitle: 'Contact' }));
