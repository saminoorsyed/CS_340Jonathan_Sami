import express from 'express';
import cors from 'cors';


// import routes
import reactionIconsRouter from './routes/reactionIconsRoutes.mjs';

// server variables
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/reactionIcons/', reactionIconsRouter);






const PORT = 4002;
app.listen(PORT, console.log(`the server is listening on port ${PORT}`))