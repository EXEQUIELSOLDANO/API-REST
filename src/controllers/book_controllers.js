const bookService=require('../services/books_services');
const {use}=require('passport');

//Traemos todos los libros
async function getAll(req,res){
    const book=await bookService.getAll();
    res.status(200).send(book);
}

//Traer libro por id

async function getById(req,res,next){
    const {id}=req.params;
    try {
        const book=await bookService.getById(id);
        res.status(200).send(book);
    } catch (error) {
        next(error)
    }
}

//Crear un libro

async function createBook(req,res){
    const {ISBN,title,author,year,librery}=req.body;
    const book=await bookService.createdBook(ISBN,title,author,year,librery);
    res.status(200).send(book);
}

//Modificar un libro

async function updateBook(req,res){
    const {id}=req.params;
    const {ISBN,title,author,year,librery}=req.body;
    const book=await bookService.updateBook(id,ISBN,title,author,year,librery);
    res.status(200).send(book) 
}

//Eliminar un libro

async function deleteBook(req,res){
    const {id}=req.params;
    await bookService.deleteBook(id);

    res.status(200).send(`El libro con el id: ${id}, ha sido eliminado correctamente`);

}
module.exports={getAll,getById,createBook,updateBook,deleteBook}