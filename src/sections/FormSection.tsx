import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/form";
import { Input } from "@/components/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";
import { z } from "zod"

const FormSchema = z.object({
  username: z.string().min(1, 'Nome Obrigatório'),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
  passwordConfirmed: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
  cidade: z.string().min(1, 'Cidade Obrigatória'),
  estado: z.string().min(1, 'Estado Obrigatório'),
  dataNascimento: z.string().min(1, 'Data de Nascimento Obrigatória'),
  genero: z.string().min(1, 'Gênero Obrigatório'),
}).refine(({ password, passwordConfirmed }) => password === passwordConfirmed, {
  message: 'As senhas devem ser iguais',
  path: ['passwordConfirmed']
})

export function FormSection() {

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirmed: '',
      cidade: '',
      estado: '',
      dataNascimento: '',
      genero: ''
    }
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const newData = {
      ...data,
      dataNascimento: data.dataNascimento.split('/').reverse().join('-')
    }

    try {
      setIsLoading(true)
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      })

      const result = await response.json()
      console.log(result)

      if (response.ok) {
        toast.success('Cadastro realizado com sucesso!')
        setIsLoading(false)
        form.reset()
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  console.log(form.formState.errors);



  return (
    <section className="w-full bg-secondary">
      <Container className="w-full  flex items-center justify-center gap-24 px-36 py-11 lg:flex-row">
        <div className="information__texts flex-1 flex flex-col gap-10">
          <h2 className="max-w-[596px] font-semibold text-center lg:text-start text-3xl lg:text-[3.4rem] text-[#d9d9d9] leading-tight">
            Junte-se a nós e <span className="text-[#55d98d]">transforme a sua <br /> vida financeira</span>
          </h2>
          <p className="text-xl text-center lg:text-3xl lg:text-start text-[#d9d9d9] leading-7">
            Cadastre-se gratuitamente e junte-se a nossa comunidade de jogadores
            que já estão transformando suas vidas financeiras. Não perca mais
            tempo e comece sua jornada!
          </p>
        </div>

        <div className="registration__form flex-1 flex flex-col items-center justify-center gap-5 p-2 rounded-2xl">
          <img
            src={'./assets/logos/logo-coicraft.png'}
            alt="Imagem Coin Craft"
            className="mt-2 w-[150px] h-9 lg:w-60 lg:h-14 "
          />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full  flex flex-col px-4 lg:px-12 gap-3">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="NOME DO USUÁRIO"
                        className="p-1 text-center rounded-xl  outline-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="E-MAIL"
                        className="p-1 text-center rounded-xl  outline-none"
                        {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cidade"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="CIDADE"
                        className="p-1 text-center rounded-xl  outline-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="estado"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="ESTADO"
                        className="p-1 text-center rounded-xl  outline-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dataNascimento"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="DATA DE NASCIMENTO"
                        className="p-1 text-center rounded-xl  outline-none"
                        {...field}
                        onChange={(e) => {
                          const value = e.target.value;
                          const maskedValue = value
                            .replace(/\D/g, '')
                            .replace(/(\d{2})(\d)/, '$1/$2')
                            .replace(/(\d{2})(\d)/, '$1/$2')
                            .replace(/(\d{4})(\d)/, '$1');
                          field.onChange(maskedValue);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="genero"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger >
                          <SelectValue placeholder="GÊNERO" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent >
                        <SelectItem value="HOMEM_CIS">HOMEM CIS</SelectItem>
                        <SelectItem value="MULHER_CIS">MULHER CIS</SelectItem>
                        <SelectItem value="HOMEM_TRANS">HOMEM TRANS</SelectItem>
                        <SelectItem value="MULHER_TRANS">MULHER TRANS</SelectItem>
                        <SelectItem value="NAO_BINARIO">NAO BINÁRIO</SelectItem>
                        <SelectItem value="NAO_IDENTIFICADO">NAO IDENTIFICADO</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="SENHA"
                        className="p-1 text-center rounded-xl  outline-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="passwordConfirmed"
                render={({ field }) => (
                  <FormItem>

                    <FormControl>
                      <Input
                        className="p-1 text-center rounded-xl  outline-none"
                        type="password"
                        placeholder="REPETIR SENHA"
                        {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant='secondary'
              >
                {
                  isLoading ? (
                    <svg className="animate-spin h-5 w-5 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0120.709 5.291L22 6.583A10.001 10.001 0 002 12h4v5.291z"></path>
                    </svg>
                  ) : 'COMECE A JOGAR'
                }
              </Button>
            </form>
          </Form>
          <p className="text-sm text-white ">
            Já tem uma conta?{" "}
            <strong>
              <u>
                Faça o <a href="#">LOGIN</a>{" "}
              </u>
            </strong>
          </p>
        </div>
      </Container>
    </section>

  );
}
