import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../models/user.js';
import dotenv from 'dotenv';

dotenv.config();
const secretKey = process.env.SECRET_KEY;

const generateJWT = (user) => {
    const { _id, name, email, roles, avatar } = user;
  
    // Extract the URL of the first image in the avatar array
    const avatarUrl = avatar.length > 0 ? avatar[0].url : '';
  
    return jwt.sign({ _id, name, email, roles, avatar: avatarUrl }, secretKey, { expiresIn: '1h' });
  };

const verifyAndDecodeJWT = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    console.error('Erreur lors de la vérification du JWT :', error);
    return null;
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Recherche de l'utilisateur dans la base de données
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Identifiant ou mot de passe incorrect' });
    }

    // Vérification du mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Identifiant ou mot de passe incorrect' });
    }

    // Génération du JWT après une connexion réussie
    const token = generateJWT(user);
    /* const decode = verifyAndDecodeJWT(token); */

    return res.json({ token });
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    return res.status(500).json({ message: 'Une erreur s\'est produite lors de la connexion' });
  }
};