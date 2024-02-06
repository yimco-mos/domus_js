import React from 'react';

export const Eventos = () => {
    const eventos = [
        {
            id: 1,
            titulo: "Conferencia de Desarrollo Web",
            fecha: "2024-02-10",
            lugar: "Online",
            descripcion: "Únete a nosotros para una conferencia sobre los últimos avances en desarrollo web.",
        },
        {
            id: 2,
            titulo: "Taller de Diseño UX/UI",
            fecha: "2024-03-15",
            lugar: "Centro de Convenciones",
            descripcion: "Aprende sobre diseño de experiencia de usuario en nuestro taller interactivo.",
        },
    ];

    return (
        <div className="home-page-events bg-gray-100 py-8">
            <div className="container mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold mb-4">Eventos Recientes</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {eventos.map(evento => (
                        <div key={evento.id} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">{evento.titulo}</h3>
                            <p className="text-gray-600 mb-2">Fecha: {evento.fecha}</p>
                            <p className="text-gray-600 mb-2">Lugar: {evento.lugar}</p>
                            <p className="text-gray-800">{evento.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

