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
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Effacer l'erreur pour ce champ s'il est rempli
    if (value.trim() !== '') {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;
    
    // Vérifier que tous les champs sont remplis
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        newErrors[key] = 'Ce champ est obligatoire';
        isValid = false;
      }
    });
    
    // Vérification de format d'email
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
      isValid = false;
    }
    
    // Vérification du numéro de téléphone
    if (formData.telephone && !/^[0-9]{10}$/.test(formData.telephone)) {
      newErrors.telephone = 'Le numéro doit contenir 10 chiffres';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert('Veuillez remplir tous les champs obligatoires correctement');
      return;
    }
    
    try {
      console.log('Envoi des données:', formData); // Pour débugger
      const res = await fetch('http://localhost:3000/api/resa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert('Formulaire envoyé avec succès !');
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          specialite: '',
          date: '',
        });
      } else {
        alert('Erreur lors de l\'envoi: ' + (await res.text()));
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
              NOM <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nom"
              id="nom"
              value={formData.nom}
              onChange={handleChange}
              className={`h-10 px-3 bg-neutral-200 rounded-[5px] border ${errors.nom ? 'border-red-500' : 'border-black/30'} outline-none`}
              required
            />
            {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
          </div>

          {/* PRÉNOM */}
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="prenom" className="text-black text-xl font-medium font-['Work_Sans']">
              PRÉNOM <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="prenom"
              id="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className={`h-10 px-3 bg-neutral-200 rounded-[5px] border ${errors.prenom ? 'border-red-500' : 'border-black/30'} outline-none`}
              required
            />
            {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom}</p>}
          </div>

          {/* EMAIL */}
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email" className="text-black text-xl font-medium font-['Work_Sans']">
              EMAIL <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`h-10 px-3 bg-neutral-200 rounded-[5px] border ${errors.email ? 'border-red-500' : 'border-black/30'} outline-none`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* NUMÉRO TÉLÉPHONE */}
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="telephone" className="text-black text-xl font-medium font-['Work_Sans']">
              NUMÉRO TÉLÉPHONE <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="telephone"
              id="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className={`h-10 px-3 bg-neutral-200 rounded-[5px] border ${errors.telephone ? 'border-red-500' : 'border-black/30'} outline-none`}
              placeholder="0123456789"
              required
            />
            {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
          </div>

          {/* SPÉCIALITÉ */}
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="specialite" className="text-black text-xl font-medium font-['Work_Sans']">
              SPÉCIALITÉ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="specialite"
              id="specialite"
              value={formData.specialite}
              onChange={handleChange}
              className={`h-10 px-3 bg-neutral-200 rounded-[5px] border ${errors.specialite ? 'border-red-500' : 'border-black/30'} outline-none`}
              required
            />
            {errors.specialite && <p className="text-red-500 text-sm mt-1">{errors.specialite}</p>}
          </div>

          {/* DATE DISPONIBLE */}
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="date" className="text-black text-xl font-medium font-['Work_Sans']">
              DATE DISPONIBLE <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className={`h-10 px-3 bg-neutral-200 rounded-[5px] border ${errors.date ? 'border-red-500' : 'border-black/30'} outline-none`}
              required
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
          </div>

          {/* BOUTON DE SOUMISSION */}
          <button
            type="submit"
            className="p-2.5 bg-blue-500 rounded-3xl shadow-[0px_0px_4px_2px_rgba(0,0,0,0.25)] text-white text-3xl font-bold font-['Ubuntu'] w-96 hover:bg-blue-600 transition-colors"
          >
            CONFIRMER
          </button>
        </div>
      </form>
    </div>
  );
};

export default NouvellePage;
