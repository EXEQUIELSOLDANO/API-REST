const {Book}=require('../models/book');

//Busqueda de todos los libros

async function getAll(){
    const booksList=await Book.findAll();
    return booksList;
}

//Busqueda de libros por id

async function getById(id){
    const bookId= await Book.findByPk(id);
    if (bookId==null){
        throw new Error("Libro no encontrado")
    }return bookId
}

//Crear Libro
async function createdBook(ISBN,title,author,year,librery){
    
    const book=new Book();
    book.ISBN=ISBN;
    book.title=title;
    book.author=author;
    book.year=year;
    book.librery=librery;

    const bookCreate=await book.save();
    return bookCreate;
}

//Editar un libro

async function updateBook(id,ISBN,title,author,year,librery){
    const book=await getById(id);

    if(ISBN){
        book.ISBN=ISBN;
    }
    if(title){
        book.title=title; 
    }
    if(author){
        book.author=author;
    }
    if(year){
        book.year=year;
    }
    if(librery){
        book.librery=librery;
    }

    const bookUpdate=await book.save();
    return bookUpdate;
}

//Eliminar Libro

async function deleteBook(id){
    const book=await getById(id);
    await book.destroy();
}

module.exports={getAll,getById,createdBook,updateBook,deleteBook}