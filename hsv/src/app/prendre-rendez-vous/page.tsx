'use client';

import React, { useState } from 'react';

const NouvellePage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    specialite: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/rendezvous', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert('Formulaire envoyé avec succès !');
      } else {
        alert('Erreur lors de l’envoi');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur réseau');
    }
  };

  return (
    <div className="self-stretch p-10 bg-gradient-to-b from-violet-500 via-fuchsia-400 to-fuchsia-200 flex justify-center items-center gap-10 overflow-hidden h-full mt-20">
      <form
        onSubmit={handleSubmit}
        className="self-stretch py-2.5 bg-neutral-100 rounded-[20px] shadow-[0px_0px_10px_2px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-4 overflow-hidden"
      >
        <div className="w-[461px] h-9 text-center text-black text-3xl font-bold font-['Ubuntu']">
          PRENDRE RENDEZ-VOUS !
        </div>

        <div className="w-[488px] px-11 py-2.5 flex flex-col justify-center items-center gap-7 overflow-hidden">
          {/* NOM */}
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="nom" className="text-black text-xl font-medium font-['Work_Sans']">
              NOM
            </label>
            <input
              type="text"
              name="nom"
              id="nom"
              value={formData.nom}
              onChange={handleChange}
              className="h-10 px-3 bg-neutral-200 rounded-[5px] border border-black/30 outline-none"
            />
          </div>

          {/* PRÉNOM */}
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="prenom" className="text-black text-xl font-medium font-['Work_Sans']">
              PRÉNOM
            </label>
            <input
              type="text"
              name="prenom"
              id="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="h-10 px-3 bg-neutral-200 rounded-[5px] border border-black/30 outline-none"
            />
          </div>

          {/* EMAIL */}
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email" className="text-black text-xl font-medium font-['Work_Sans']">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="h-10 px-3 bg-neutral-200 rounded-[5px] border border-black/30 outline-none"
            />
          </div>

          {/* NUMÉRO TÉLÉPHONE */}
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="telephone" className="text-black text-xl font-medium font-['Work_Sans']">
              NUMÉRO TÉLÉPHONE
            </label>
            <input
              type="tel"
              name="telephone"
              id="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="h-10 px-3 bg-neutral-200 rounded-[5px] border border-black/30 outline-none"
            />
          </div>

          {/* SPÉCIALITÉ */}
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="specialite" className="text-black text-xl font-medium font-['Work_Sans']">
              SPÉCIALITÉ
            </label>
            <input
              type="text"
              name="specialite"
              id="specialite"
              value={formData.specialite}
              onChange={handleChange}
              className="h-10 px-3 bg-neutral-200 rounded-[5px] border border-black/30 outline-none"
            />
          </div>

          {/* DATE DISPONIBLE */}
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="date" className="text-black text-xl font-medium font-['Work_Sans']">
              DATE DISPONIBLE
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className="h-10 px-3 bg-neutral-200 rounded-[5px] border border-black/30 outline-none"
            />
          </div>

          {/* BOUTON DE SOUMISSION */}
          <button
            type="submit"
            className="p-2.5 bg-blue-500 rounded-3xl shadow-[0px_0px_4px_2px_rgba(0,0,0,0.25)] text-white text-3xl font-bold font-['Ubuntu'] w-96"
          >
            CONFIRMER
          </button>
        </div>
      </form>
    </div>
  );
};

export default NouvellePage;
