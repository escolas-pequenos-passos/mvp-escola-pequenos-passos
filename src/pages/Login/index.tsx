"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import login from "../../../assets/login.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContextProvider";

const schema = z.object({
  email: z
    .string({ required_error: "E-mail obrigatorio" })
    .email({ message: "Digite um email valido" }),
  password: z
    .string({ required_error: "Senha obrigatoria" })
    .min(6, { message: "Digite pelo menos 6 digitos" }),
});

type FormData = z.infer<typeof schema>;

export default function Login() {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onLogin({ email, password }: FormData) {
    setLoading(true);
    try {
      await signIn({ email, password });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-[1fr_40%] bg-light-gray">
      <div className="relative">
        <div className="absolute inset-0 bg-black/40" />
        <Image
          className="h-screen w-full object-fill"
          src={login}
          alt="foto de login"
        />
      </div>

      <div className="p-24 flex justify-center items-center">
        <div className="w-full space-y-3">
          <h1 className="font-ubuntu text-center text-3xl font-bold text-gray-900">
            Login
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onLogin)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Insira seu e-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Insira sua senha"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="w-full flex items-center gap-3"
                type="submit"
                disabled={loading}
              >
                {loading && <Loader2 className="w-3 h-3 animate-spin" />}
                Entrar
              </Button>
            </form>
          </Form>

          <div className="text-center">
            <span className="text-center text-sm text-gray-600">
              Esqueceu a senha ?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
