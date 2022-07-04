const router = require('express').Router();
import apiRoutes from './api';
import homeRoutes from './home-routes';

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

export default router;