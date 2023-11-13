import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Button,
    TextField,
    TextareaAutosize,
    Select,
    MenuItem,
} from '@mui/material';

export default function StudentForm({ course }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [nationality, setNationality] = useState('');

    async function saveLead(event) {
        event.preventDefault();
        const courses = [];
        console.log(course);
        courses.push(course._id);
        const data = {
            firstName,
            lastName,
            email,
            phone,
            nationality,
            courses,
        };
        await axios.post('/api/lead', data);
        await axios.post('/api/mailer', {
            firstName,
            lastName,
            email,
            course,
            nationality,
        });
    }
    return (
        <form onSubmit={saveLead} className="flex flex-col">
            <label className="">Nombre</label>
            <TextField
                type="text"
                placeholder="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                variant="outlined"
                size="small"
            />
            <label>Apellido</label>
            <TextField
                type="text"
                placeholder="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                variant="outlined"
                size="small"
            />
            <label>Email</label>
            <TextField
                type="email"
                placeholder="email del curso"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                size="small"
            />
            <label>Telefono</label>
            <TextField
                type="tel"
                placeholder="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                variant="outlined"
            />
            <label>Origen</label>
            <Select
                value={nationality}
                label="Origen"
                onChange={(e) => setNationality(e.target.value)}
            >
                <MenuItem value={'Ar'}>Argentina</MenuItem>
                <MenuItem value={'Ur'}>Uruguay</MenuItem>
                <MenuItem value={'Br'}>Brasil</MenuItem>
            </Select>
            <Button variant="contained" size="small" type="submit">
                Guardar
            </Button>
        </form>
    );
}
