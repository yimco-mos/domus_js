'use client'
import React, { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import { InputForm } from "./InputForm";
import { formulario_txt } from "@/textos/textos.txt";
export const Formulario = () => {
  const [dataForm, setDataForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    programa: "",
    pais: "",
    detalles: "",
    cedula: null,
  });

  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const fetchPaises = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setPaises(data);
      } catch (error) {
        console.error("Error al obtener la lista de países:", error);
      }
    };

    fetchPaises();
  }, []);

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handlePaisChange = (e) => {
    setDataForm({ ...dataForm, pais: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setDataForm({ ...dataForm, cedula: e.target.files[0] });
    }
  };

  const [state, handleSubmit] = useForm("mjvngpbb");

  return (
    <div className="content_form">



      <div className="info_form ">



        <div className="logo_form ">
          <div className="logo_domus_form"></div>
        </div>

        <div className="texto_form ">
          <p>
            {formulario_txt}
         </p>
        </div>



      </div>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <InputForm
            label="Nombre:"
            type="text"
            name="nombre"
            state={dataForm.nombre}
            onChange={handleChange}
            placeholder="jhon"
          />
          <InputForm
            label="Apellido:"
            type="text"
            name="apellido"
            state={dataForm.apellido}
            onChange={handleChange}
            placeholder="doe"
          />
          <InputForm
            label="Email:"
            type="email"
            name="email"
            state={dataForm.email}
            onChange={handleChange}
            placeholder="email@example.com"
          />
          <InputForm
            label="Línea Voluntariado:"
            type="text"
            name="programa"
            state={dataForm.programa}
            onChange={handleChange}
            placeholder="porgrana al que desea aportar"
          />
          <div className="mt-4">
            <label className="text-neutral-50 block">País:</label>
            <select
              className="text-neutral-50 bg-neutral-700 w-full p-2 rounded"
              id="pais"
              name="pais"
              onChange={handlePaisChange}
            >
              <option className="text-neutral-50" value="">
                Selecciona tu país
              </option>
              {paises.map((pais) => (
                <option
                  className="space-y-8"
                  key={pais.name.common}
                  value={pais.name.common}
                >
                  {pais.name.common}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 mb-6  space-y-1">
            <label className=" text-neutral-50 ">Documento De Identidad:</label>
            <input
              type="file"
              name="cedula"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="mt-4 w-full space-y-2">
            <label className="text-neutral-50"> Detalles Adicionales:</label>
            <textarea
              className="py-4 px-2  text-neutral-950 resize-none w-full h-20 space-y-4 "
              name="detalles"
              value={dataForm.detalles}
              onChange={handleChange}
              placeholder="algo adicional por decir"
            />
          </div>

          <div className="send_email mt-4 mb-4 mx-2.5  rounded-lg border-neutral-50  border-2">
            <button type="submit" disabled={state.submitting}>
              Enviar
            </button>
          </div>

          {state.errors && (
            <div>
              <p className="text-red-900 ">Error al enviar el formulario:</p>
              <ul>
                {Object.values(state.errors).map((error, index) => (
                  <li key={index}>{error.message}</li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
