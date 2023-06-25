const express =require ('express');
const userRoutes=require('../src/routes/user_routes')
const libreryRoutes=require('../src/routes/librery_routes')
const booksRoutes=require('../src/routes/books_routes')
const {libreryDbInstance}=require('../src/db/secualize-config');
const {errorHandlerMiddleware}=require('../src/middlewares/error-handler')
const {initializeAuthentication}=require('../src/auth/auth');


const app = express();
const PORT=3000;

initializeAuthentication();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/libreries',libreryRoutes)
app.use('/books',booksRoutes)
app.use(errorHandlerMiddleware);
//app.use=sequelize.authenticate();

app.listen(PORT,()=>{
    console.log("API corriendo en el puerto "+ PORT)
})

async function conexion(){
    try {
        await libreryDbInstance.authenticate();
        console.log('exito')
    } catch (error) {
        console.log('error')
    }
}
conexion();
