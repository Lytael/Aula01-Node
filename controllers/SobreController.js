const path = require ('path');
class SobreController{
   static imagens (req,res){
    res.send ('Olá imagens!')
   } 
   
   static sobre (req,res){
    res.sendFile(path.resolve('sobre.html'))
   }

   static PerguntasFrequentes (req,res){
    res.sendFile(path.resolve('perguntasFrequentes.html'))
   }
}



module.exports  = SobreController;
