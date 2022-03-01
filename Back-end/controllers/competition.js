const pool = require('../config/database');

module.exports = {

    competition: async (req, res, next) => {
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query('Select * FROM competition;');
            console.log(result);
            return res.status(200).json({ success: result })
        } catch (error) {
            return res.status(400).json({ error: error.message });
        } finally {
            if (connexion) connexion.end()
        }
    },
    add_competition: async (req, res, next) => {
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query(' CALL add_competition(1, 1, "2022-03-31", "15:17:24", 0, 7, "qwerty");');
            console.log(result);
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message);
        } finally {
            if (connexion) connexion.end()
        }
    },

    del_competition: async (req, res, next) => {
        let connexion;
        try {
            const id = parseInt(req.params.id)
            connexion = await pool.getConnection();
            const result = await connexion.query(' CALL del_competition('+id+');');
            console.log(result);
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message);
        } finally {
            if (connexion) connexion.end()
        }
    },
    




}