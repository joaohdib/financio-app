import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';
const prisma = new PrismaClient()

const saltRounds = 10;

async function hashPassword(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
}

async function jwtToken() {
    const token = jwt.sign({}, JWT_SECRET, { expiresIn: 1, algorithm: "HS256" });
    return token;
}

const signUp = async (req: Request, res: Response): Promise<void> => {
    console.log(req.body);
    if (!req.body.email || !req.body.password || !req.body.username) {
        res.status(400).json({ error: "Password, email, and username are required" });
    }
    const cryptedPass = await hashPassword(req.body.password);

    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            email: req.body.email,
            password: cryptedPass,
        },
    });

    res.status(200).json({ message: "User criado com sucesso!", user: user });
}

const login = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.body.email || !req.body.password) {
            res.status(400).json({ error: "Email and password are required" });
        }
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email,
            },
        })
        if (user) {
            if (user?.password && await bcrypt.compare(req.body.password, user.password)) {
                const token = await jwtToken();
                res.status(200).json({ message: "User successfully logged in!", token: token });
            }
            else {
                res.status(400).json({ error: "Incorrect password" })
            }
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "An unexpected error occurred", details: err });
    }
}


const userController = {
    signUp,
    login
};

export default userController;