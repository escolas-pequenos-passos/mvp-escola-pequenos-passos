"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";

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

export default function Login() {
  const form = useForm();

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
              onSubmit={form.handleSubmit(console.log)}
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
                      <Input placeholder="Insira seu e-mail" {...field} />
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
