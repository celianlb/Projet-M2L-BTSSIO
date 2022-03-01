const pool = require('../config/database');

module.exports = {

    abonnee: async (req, res, next) => {
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query('Select * FROM abonnee;');
            console.log(result);
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message);
        } finally {
            if (connexion) connexion.end()
        }
    },
    circuit: async (req, res, next) => {
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query('Select * FROM circuit;');
            console.log(result);
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message);
        } finally {
            if (connexion) connexion.end()
        }
    },

}