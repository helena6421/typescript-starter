// -- Главная страница с роутом /

import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Главная',
    })
});

export default router;