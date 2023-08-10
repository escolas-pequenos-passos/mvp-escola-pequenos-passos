"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
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
import login from "../../../../assets/login.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  email: z.string().email({ message: "Digite um email valido" }),
  password: z.string().min(6, { message: "Digite pelo menos 6 digitos" }),
});

type FormData = z.infer<typeof schema>;

export default function Login() {
  const supabase = createClientComponentClient();
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function handleLogin({ email, password }: FormData) {
    try {
      const { data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="h-screen grid grid-cols-[1fr_40%]">
      <div className="relative h-full w-full">
        <div className="absolute inset-0 bg-black/40" />
        <Image
          // layout="fill"
          objectFit="cover"
          src={login}
          alt="foto de login"
        />
      </div>

      <div className="bg-light-gray p-16 flex justify-center items-center">
        <div className="w-full">
          <h1 className="text-center text-3xl font-bold text-gray-900">
            Login
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleLogin)}
              className="space-y-5"
            >
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

              <Button className="w-full" type="submit">
                Entrar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
