const mongoose = require('mongoose');

const movieSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        genero: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Movies', movieSchema);