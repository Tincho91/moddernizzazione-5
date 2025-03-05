"use client";

import React, { useState } from "react";
import { Form, Input, Textarea, CheckboxGroup, Checkbox, Button, Card, CardHeader, CardBody } from "@heroui/react";

interface FormData {
  nomeCognome: string;
  email: string;
  messaggio: string;
  selectedOptions: string[];
}

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

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.nomeCognome) newErrors.nomeCognome = "Please enter your name";
    if (!formData.email) {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.messaggio) newErrors.messaggio = "Please enter a message";
    if (formData.selectedOptions.length === 0) newErrors.selectedOptions = "Please select at least one option";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(formData);
    setFormData({ nomeCognome: "", email: "", messaggio: "", selectedOptions: [] });
  };

  return (
    <div className="w-full flex justify-center items-center bg-secondary-light dark:bg-primary-dark p-8 md:p-16 min-h-screen">
      <Card className="w-full max-w-lg mx-auto p-4 bg-primary-light dark:bg-secondary-dark border border-border-light dark:border-border-dark shadow-lg rounded-xl">
        <CardHeader className="text-2xl font-bold text-center text-white">
          Contact Us
        </CardHeader>
        <CardBody>
          <Form className="space-y-2" onSubmit={handleSubmit}>
            <label className="text-white text-lg">Nome e Cognome</label>
            <Input
              isRequired
              errorMessage={errors.nomeCognome}
              name="nomeCognome"
              placeholder="Enter your full name"
              value={formData.nomeCognome}
              onValueChange={(e) => setFormData({ ...formData, nomeCognome: e })}
            />
            <label className="text-white text-lg">Email</label>
            <Input
              isRequired
              errorMessage={errors.email}
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onValueChange={(e) => setFormData({ ...formData, email: e })}
              type="email"
            />
            <label className="text-white text-lg">Messaggio</label>
            <Textarea
              isRequired
              errorMessage={errors.messaggio}
              name="messaggio"
              placeholder="Enter your message"
              value={formData.messaggio}
              onValueChange={(e) => setFormData({ ...formData, messaggio: e })}
              className="w-full"
            />
            <CheckboxGroup
              label={<span className="text-xl text-white font-bold">Choose an option</span>}
              name="options"
              errorMessage={errors.selectedOptions}
              value={formData.selectedOptions}
              onValueChange={(selectedOptions) => setFormData({ ...formData, selectedOptions })}
            >
              <Checkbox value="Start" className="text-white [&>span]:text-white">Start</Checkbox>
              <Checkbox value="upinvestors" className="text-white [&>span]:text-white">Upinvestors</Checkbox>
              <Checkbox value="Professional Advisories" className="text-white [&>span]:text-white">Professional Advisories</Checkbox>
            </CheckboxGroup>
            <Button className="w-full bg-white text-black" type="submit">
              Send
            </Button>
          </Form>
          {submitted && (
            <div className="text-sm text-white mt-4">
              Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}