import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/client'

type FormModel = {
    model_name: string,
    submit_date: Date,
    quantity: number,
    license_level: number,
    comment?: string
}

function formatDateToDDMMYYYY(submit_date: Date): string {
    const date = new Date(submit_date);
    if (isNaN(date.getTime())) {
        throw new Error("Invalid date format");
    }
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}${month}${year}`;
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const formModel: FormModel = req.body;

    const result = await prisma.batch.create({data: {
            machine_number: formModel.model_name.split(' ')[1] + formatDateToDDMMYYYY(formModel.submit_date) + (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000).toString(),
            submit_date: new Date(formModel.submit_date),
            model: Number(formModel.model_name.split(' ')[1]),
            quantity: Number(formModel.quantity),
            license_level: Number(formModel.license_level),
            comment: formModel.comment
        }
    });
    return res.status(201).json(result)
}
