"use client";

import React, { useState } from "react";
import { Form, Input, Textarea, CheckboxGroup, Checkbox, Button } from "@heroui/react";

// Definir el tipo de datos del formulario
interface FormData {
  nomeCognome: string;
  email: string;
  messaggio: string;
  selectedOptions: string[];
}

// Definir el tipo de errores con una firma de índice compatible con HeroUI
interface FormErrors {
  [key: string]: string | undefined;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nomeCognome: "",
    email: "",
    messaggio: "",
    selectedOptions: [],
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<FormData | null>(null);

  // Función para validar los datos del formulario
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Validación de Nome e Cognome
    if (!formData.nomeCognome) {
      newErrors.nomeCognome = "Please enter your name";
    }

    // Validación de Email
    if (!formData.email) {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validación de Messaggio
    if (!formData.messaggio) {
      newErrors.messaggio = "Please enter a message";
    }

    // Validación del Checkbox group
    if (formData.selectedOptions.length === 0) {
      newErrors.selectedOptions = "Please select at least one option";
    }

    return newErrors;
  };

  // Función para manejar el submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Realizar la validación del formulario
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Limpiar los errores
    setErrors({});
    
    // Aquí puedes integrar Nodemailer o cualquier librería para enviar el correo
    // Como ejemplo, si usas una API o un backend con Nodemailer, enviarías formData aquí

    // Si el formulario se envía correctamente, mostramos los datos
    setSubmitted(formData);

    // Limpiar el formulario después de enviar (opcional)
    setFormData({
      nomeCognome: "",
      email: "",
      messaggio: "",
      selectedOptions: [],
    });
  };

  return (
    <Form
      className="w-full max-w-md min-h-[85vh] space-y-4"
      onSubmit={handleSubmit}
      // @ts-ignore
      validationErrors={errors}  // Pasa los errores validados (ahora compatibles con HeroUI)
    >
      <div className="flex flex-col gap-4">
        {/* Nome e Cognome */}
        <Input
          isRequired
          errorMessage={errors.nomeCognome}
          label="Nome e Cognome"
          labelPlacement="outside"
          name="nomeCognome"
          placeholder="Enter your full name"
          value={formData.nomeCognome}
          onValueChange={(e) => setFormData({ ...formData, nomeCognome: e })}
        />

        {/* Email */}
        <Input
          isRequired
          errorMessage={errors.email}
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onValueChange={(e) => setFormData({ ...formData, email: e })}
          type="email"
        />

        {/* Messaggio */}
        <Textarea
          isRequired
          errorMessage={errors.messaggio}
          label="Messaggio"
          labelPlacement="outside"
          name="messaggio"
          placeholder="Enter your message"
          value={formData.messaggio}
          onValueChange={(e) => setFormData({ ...formData, messaggio: e })}
        />

        {/* Checkbox Group */}
        <CheckboxGroup
          label="Choose an option"
          name="options"
          errorMessage={errors.selectedOptions}
          value={formData.selectedOptions}
          onValueChange={(selectedOptions: string[]) =>
            setFormData({ ...formData, selectedOptions })
          }
        >
          <Checkbox value="Start">Start</Checkbox>
          <Checkbox value="upinvestors">Upinvestors</Checkbox>
          <Checkbox value="Professional Advisories">Professional Advisories</Checkbox>
        </CheckboxGroup>

        {/* Mostrar errores del checkbox */}
        {errors.selectedOptions && (
          <span className="text-danger text-small">{errors.selectedOptions}</span>
        )}

        {/* Botón de envío */}
        <div className="flex gap-4">
          <Button className="w-full" color="primary" type="submit">
            Send
          </Button>
        </div>
      </div>

      {submitted && (
        <div className="text-small text-default-500 mt-4">
          Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </Form>
  );
}