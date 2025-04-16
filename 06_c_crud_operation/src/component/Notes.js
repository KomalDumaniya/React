import React, { useEffect, useState } from "react";
import axios from "axios";

const api = "http://localhost:3001/notes";

function Notes() {
    const [notes, setNotes] = useState([]);
    const [formData, setFormData] = useState({ title: "", content: "" });
    const [editId, setEditId] = useState(null);

    const fetchNotes = async () => {
        const res = await axios.get(api);
        setNotes(res.data);
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editId) {
            await axios.put(`${api}/${editId}`, formData);
        } else {
            await axios.post(api, formData);
        }
        setFormData({ title: "", content: "" });
        setEditId(null);
        fetchNotes();
    };

    const handleDelete = async (id) => {
        await axios.delete(`${api}/${id}`);
        fetchNotes();
    };

    const handleEdit = (note) => {
        setFormData({ title: note.title, content: note.content });
        setEditId(note.id);
    };

    return (
        <div className="max-w-xl mx-auto bg-gray-200 p-6 rounded-xl shadow-md m-4">
            <h2 className="text-2xl font-bold mb-4">Note Taking App</h2>
            <form onSubmit={handleSubmit}>
                <input className="border border-indigo-400 p-2 w-full rounded mb-4" type="text" placeholder="Title" value={formData.title} required
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                <br />
                <textarea className="border border-indigo-400 p-2 w-full rounded mb-4" placeholder="Content" value={formData.content} required
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })} />
                <br />
                <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">{editId ? "Update" : "Add"} Note</button>
            </form>

            <ul className="list-none p-0">
                {notes.map((note) => (
                    <li key={note.id} className= "m-4 p-2 border-2 border-indigo-400">
                        <h4>Title :- {note.title}</h4>
                        <p>Description :- {note.content}</p>
                        <button className="bg-blue-500 text-white px-4 m-4 py-2 rounded" onClick={() => handleEdit(note)}>Edit</button>
                        <button className="bg-blue-500 text-white px-4 m-4 py-2 rounded" onClick={() => handleDelete(note.id)} >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Notes;
