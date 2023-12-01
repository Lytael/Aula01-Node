const {livros} = require("../models")

class LivroController{
    static async index(req, res){
      const meusLivros = await livros.findAll()
      res.json(meusLivros)  
    }

    static async show(req, res){
        const livro = await livros.findByPk(req.params.id)//procuto meu livro
        res.json(livro)  
    }

    static async update(req, res){
        const livro = await livros.findByPk(req.params.id)//procuto meu livro
        await livro.update({
            nome: req.body.nome,
            autor:req.body.autor,
            ano: req.body.ano  
        })
        res.json(livro)  
    }

    static async delete(req, res){
        const livro = await livros.findByPk(req.params.id)//procuto meu livro
        livro.destroy()
            res.json({
                sucesss:true
        })
                
    }

}
// class LivroController{   /métodos fixos já estão no banco
//     static index (req,res){
//         res.json([
//             {
//             nome: "O Senhor do Anéis",
//             autor: "J R Tolkien",livros
//             ano: 1999,
//             id: 1  
//             },
//             {
//             nome: "Harry Potter",
//             autor: "J K Rowling",
//             ano: 2000,
//             id: 2
//             }
//         ])
//     }
// static show (req, res){
//     const id = req.params.id
//     res.json({
//         nome: "O Senhor do Anéis",
//         autor: "J R Tolkien",
//         ano: 1999,
//         id: id
//     })
// }
// static store (req, res){
//        res.json({
//            nome: req.body.nome,
//            autor:req.body.autor,
//            ano: req.body.ano,
//            id:3
//        })
//    }
//     static update(req, res){
//         res.json({
//             nome: req.body.nome,
//             autor:req.body.autor,
//             ano: req.body.ano,
//             id:req.params.id
//         })  
//     }
//     static delete(req, res){
//         res.json({
//             suecess:true
//         })  
//     }   
    
//     static async store(req, res){
//         const livro = await livros.create({
//             nome: req.body.nome,
//             autor:req.body.autor,
//             ano: req.body.ano,
//         })

//         res.json(livro)
//     }
// }

module.exports  = LivroController