import asyncHandler from 'express-async-handler';
import { pool } from '../dbConnector.mjs';


const fetchIcons = asyncHandler(async (req, res) => {
    const [reactionIcons] = await pool.query('SELECT reaction_icon_id, reaction_type FROM Reaction_Icons;');
    res.send(reactionIcons);
})

const fetchIconsColumns = asyncHandler(async (req, res) => {
    const [reactionIconsColumns] = await pool.query(`SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N'Reaction_Icons';`);
    res.send(reactionIconsColumns);
})

const deleteIconsRow = asyncHandler(async (req, res) => {
    const id = req.params.id;
    try {
        const result = await pool.query('DELETE FROM Reaction_Icons WHERE reaction_icon_id = ?;', [id]);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
})
export { fetchIcons, fetchIconsColumns, deleteIconsRow };