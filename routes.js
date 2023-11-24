const router = require ('express').Router();//Router é o nome dp método no express
const HomeController = require ('./controllers/HomeController');
const SobreController = require('./controllers/SobreController');


router.get('/', HomeController.index)


router.get('/ws/69090050/json', (req,res)=>{
    res.json({
        cep:'69090-050',
        logradouro:'Guapirama',
        complemento:'lado par',
        bairro:'Cidade Nova',
        localidade:'Manaus',
        uf:'AM',
        ibge:'13022603',
        gia:'',
        ddd:'92',
        siafi:'0255'
    })
})

router.get('/imagens', SobreController.imagens)

router.get('/sobre', SobreController.sobre)

router.get('/perguntasFrequentes', SobreController.PerguntasFrequentes)


module.exports = router;