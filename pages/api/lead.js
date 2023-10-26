import { mongooseConnect } from '@/lib/mongoose';
import { Student } from '@/models/Student';

export default async function handler(req, res) {
    await mongooseConnect();
    const { method } = req;

    if (method === 'POST') {
        const { firstName, lastName, email, phone, nationality, courses } =
            req.body;
        const leadDoc = await Student.create({
            firstName,
            lastName,
            email,
            phone,
            nationality,
            courses,
        });
        res.json(leadDoc);
    }
}
