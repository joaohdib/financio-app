import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient()

const addPayment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { amount, userId, type, date } = req.body;
        if (!amount || !userId || !type || !date) {
            res.status(400).json({ message: "All fields are required: amount, userId, type, and date." });
        }
        const payment = await prisma.payment.create({
            data: {
            amount,
            userId,
            type,
            date: new Date(date),
            },
        });
        res.status(200).json({ message: "Payment created successfully!", payment });
    } catch (err) {
        res.status(400).json({message: "Error", error: err});
    }
}



const getPayment = async (req: Request, res: Response): Promise<void> => {
    try {
        const payments = await prisma.payment.findMany({
            where: {
                userId: req.body.userId,
            }
        })
        res.status(200).json({ message: "Payments obtained succesfully!", payments});
    } catch (err) {
        res.status(400).json({message: "Error", error: err});
    }
}


const paymentController = {
    addPayment,
    getPayment
};

export default paymentController;