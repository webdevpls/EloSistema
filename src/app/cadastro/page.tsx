"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Calendar, } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import signIn from "@/firebase/auth/signIn";
import { cn } from "@/lib/utils";
import { FirebaseError } from "firebase/app";
import { CalendarIcon } from "@radix-ui/react-icons"
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { format } from "date-fns"
import { ptBR } from "date-fns/locale";
import Navbar from "@/components/navabr";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { DialogCerteza } from "@/components/dialogCerteza";



function Cadastro() {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const router = useRouter();
  const [date, setDate] = React.useState<Date>()

  const [tituloEleitor, setTituloEleitor] = useState('');

  const handleTituloChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    const formattedValue = value
      .replace(/(\d{4})(\d)/, '$1 $2') // Adds a space after the first 4 digits
      .replace(/(\d{4}) (\d{4})(\d)/, '$1 $2 $3') // Adds a space after the second set of 4 digits
      .slice(0, 14); // Restrict to 14 characters (including spaces)
    setTituloEleitor(formattedValue);
  };


  usePathname();

  return (


    <main className="flex min-h-screen flex-col items-center justify-center px-24 py-0 bg-[#050506]">

     <Navbar/>

      <Card className="w-[530px] bg-[#050506] border border-[#27272A]">
        <CardHeader>
          <CardTitle className="font-bold text-white text-[20px]">
            Cadastro de pessoa
          </CardTitle>
          <CardDescription className="text-[#434343] w-[400px]">
            Olá, @usuário! Siga passo a passo para o cadastro ser efetuado com
            sucesso.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="Nome" className="font-bold text-white">
                  Nome
                </label>
                <input
                  id="nome"
                  placeholder="Nome"
                  // value={name}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-[#050506] border border-[#27272A] rounded-[5px] px-3 py-2 text-sm text-white placeholder-[#434343]"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="password" className="font-bold text-white">
                  Email
                </label>
                <input
                  id="pass"
                  placeholder="Email"
                  type="email"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-[#050506] border border-[#27272A] rounded-[5px] px-3 py-2 text-sm text-white placeholder-[#434343]"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="data" className="font-bold text-white">
                  Data de nascimento
                </label>
                <input
                  id="data"
                  placeholder="Data de nascimento"
                  type="date"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-[#050506] border border-[#27272A] rounded-[5px] px-3 py-2 text-sm text-white placeholder-[#434343]"
                />
                
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email" className="font-bold text-white">
                  Titulo de eleitor
                </label>
                <input
                  id="titulo"
                  placeholder="Titulo de eleitor"
                  value={tituloEleitor}
                  onChange={handleTituloChange}
                  required
                  type="text"
                  className="px-3 py-2 text-sm text-white bg-[#050506] border border-[#27272A] rounded-[5px] placeholder-[#434343]"
                />

              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email" className="font-bold text-white">
                  Bairro
                </label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Selecione o bairro" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="Selecione o bairro">Selecione o bairro</SelectItem>
                    <SelectItem value="Valentina">Valentina</SelectItem>
                    <SelectItem value="Geisel">Geisel</SelectItem>
                    <SelectItem value="Bessa">Bessa</SelectItem>
                    <SelectItem value="Intermares">Intermares</SelectItem>
                    <SelectItem value="Altiplano">Altiplano</SelectItem>
                    <SelectItem value="Alto do Matheus">
                      Alto do Matheus
                    </SelectItem>
                    <SelectItem value="Centro">Centro</SelectItem>
                    <SelectItem value="José Américo">José Américo</SelectItem>
                    <SelectItem value="Cristo">Cristo</SelectItem>
                    <SelectItem value="Miramar">Miramar</SelectItem>
                    <SelectItem value="Rangel">Rangel</SelectItem>
                    <SelectItem value="Gramame">Gramame</SelectItem>
                    <SelectItem value="Paratibe">Paratibe</SelectItem>
                    <SelectItem value="Jaguaribe">Jaguaribe</SelectItem>
                    <SelectItem value="Mangabeira">Mangabeira</SelectItem>
                    <SelectItem value="Cruz das arma">Cruz das armas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* {errorMessage && ( */}
            <div className="mt-4 text-red-500 text-sm">
              {/* {errorMessage} */}
            </div>
            {/* )} */}
            <CardFooter className="flex justify-center mt-5 p-0">
              <DialogCerteza/>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

export default Cadastro;
