export const errorHandler = (err, res) => {
    console.error(err);

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Error interno del servidor';

    res.status(statusCode).json({ message });
};
