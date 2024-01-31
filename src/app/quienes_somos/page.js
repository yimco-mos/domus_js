import React from "react";

import { Infundador } from "@/components/home/fundador/Infundador";

import { Misionvision } from "@/components/home/misionvision/Misionvision";

export default function fundador() {
  return (
    <div className="fundador_sec">
      <section className="mision_vision">
        <Misionvision />
      </section>{" "}
      <Infundador />
    </div>
  );
}
