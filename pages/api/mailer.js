import { sendMail } from '../../service/mailService';
import currencyFormater from '@/service/currencyFormater';

export default async function handler(req, res) {
    const { method } = req;

    if (method === 'POST') {
        const { firstName, lastName, email, course, nationality } = req.body;

        const { title, description, priceAr, priceEx, duration } = course;

        const mailBody = `<h1>Gracias por ponerte en contacto con CheData por el curso${title}<h1>
        <h2>La duracion del curso es de ${duration} clases y tiene un costo de ${
            nationality === 'Ar'
                ? `${currencyFormater(nationality, priceAr)} pesos argentinos`
                : `${currencyFormater(
                      nationality,
                      priceEx
                  )} dolares estadounidenses`
        }<h2>`;

        const mailTitle = `Gracias ${firstName} ${lastName} por tu interes en el curso ${title}`;
        await sendMail(mailTitle, email, mailBody);

        res.status(200).send('Success');
    }
}

// const handler = async (req, res) => {
//     try {
//         const { method } = req;
//         switch (method) {
//             case 'POST': {
//                 //Do some thing
//                 await sendMail(
//                     'TEST',
//                     'chedatadev@gmail.com',
//                     'THI IS A TEST FOR MY MEDIUM USERS'
//                 );
//                 res.status(200).send('Success');
//                 break;
//             }
//             case 'GET': {
//                 //Do some thing
//                 res.status(200).send(req.auth_data);
//                 break;
//             }
//             default:
//                 res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
//                 res.status(405).end(`Method ${method} Not Allowed`);
//                 break;
//         }
//     } catch (err) {
//         res.status(400).json({
//             error_code: 'api_one',
//             message: err.message,
//         });
//     }
// };
